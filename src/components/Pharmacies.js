import React, { Component } from 'react'
import { Segment, Table, Label, Message, Form, Button, Icon} from 'semantic-ui-react'
import web3 from '../web3';
import { toast } from 'react-toastify';
import { cloneDeep } from 'lodash';

export default class Pharmacies extends Component {
  state = {
    pharmacyName: "",
    pharmacyAddress: "",
  }

  render() { 
    const { pharmacies, isAllowed } = this.props;

    let tableBody;
    if (pharmacies != null) {
      tableBody = pharmacies.map((pharmacy, index) => {
        let formattedDate = this.formatDate(pharmacy.date);
        return (
        <Table.Row key={index}>
          <Table.Cell>
            <Label ribbon>{index+1}</Label>
          </Table.Cell>
          <Table.Cell>{pharmacy.name}</Table.Cell>
          <Table.Cell>{pharmacy.networkAddress}</Table.Cell>
          <Table.Cell>{formattedDate}</Table.Cell>
        </Table.Row> 
        );
      });
    }

    const notAllowedToAddSegment = (
      <Segment>
        <Message negative>
          <Message.Header>You are not allowed to add</Message.Header>
          <p>You should log in using the ministry of health account</p>
        </Message>
      </Segment>
    );
    
    const addPharmacySegment = (
      <Segment padded>
          <Form onSubmit={(e)=>{e.preventDefault()}}>
            <Message color="olive">
              <p>Once a pharmacy is added it will be able to retrieve patient's medical prescriptions.</p>
            </Message>
            <Form.Group widths={2}>
              <Form.Field>
                <label>Pharmacy Name</label>
                <input 
                  value={this.state.pharmacyName} 
                  onChange={(e)=>{this.setState({pharmacyName: e.target.value})}}
                  placeholder='eg. Taibah Pharmacy' 
                />
              </Form.Field>
              <Form.Field>
                <label>Hospital Blockchain Address</label>
                <input 
                  value={this.state.pharmacyAddress} 
                  onChange={(e)=>{this.setState({pharmacyAddress: e.target.value})}}
                  placeholder='eg. 0x42D2Ac47334A1Ce555945495925c8723FC71C84C'
                />
              </Form.Field>
            </Form.Group>
            <Form.Field>
              <Button 
                primary 
                icon 
                labelPosition='left'
                onClick={this.submit}
              >
                Add Pharmacy
                <Icon name='add' />
              </Button>
            </Form.Field>
          </Form>
      </Segment>
    );

    return (
      <div>
        <h1 className="menu-title">Authenticated Pharmacies</h1>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Pharmacy Name</Table.HeaderCell>
              <Table.HeaderCell>Pharmacy Address</Table.HeaderCell>
              <Table.HeaderCell>Date of Submission</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableBody}
          </Table.Body>
        </Table>

        <div style={{padding: 10}}/>
        <h1 className="menu-title">Add New Pharmacy</h1>
        {(isAllowed) ? addPharmacySegment : notAllowedToAddSegment}
        <div style={{padding: 10}}/>

      </div>
    )
  }

  submit = async () => {
    const { contract } = this.props;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.addPharmacy(this.state.pharmacyAddress, this.state.pharmacyName)
      .send({ from: accounts[0] })
      .then(() => {
        console.log('success');
        this.pushNotification('success', 'Pharmacy is added successfuly');
        let pharmacies = cloneDeep(this.props.pharmacies);
        pharmacies.push({name: this.state.pharmacyName, networkAddress: this.state.pharmacyAddress, date: Math.floor(Date.now() / 1000)});
        this.setState({pharmacyName: "", pharmacyAddress: ""});
        this.props.setState({pharmacies});
      })
      .catch((e)=>{
        console.log('error');
        this.pushNotification('error', e.message)
      })
  }

  pushNotification = (type, message) => {
    if (type === 'success') {
      toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else if (type === 'error') {
      toast.error(`Error : ${message}`, {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  }

  formatDate = (_date) => {
    let date = new Date(_date*1000);
    let hours = date.getHours();
    let minutes = ("0"+date.getMinutes()).substr(-2);
    let seconds = ("0"+date.getSeconds()).substr(-2);
    let day = date.getDate();
    let month = date.getUTCMonth();
    let year = date.getUTCFullYear();
    return hours+':'+minutes+':'+seconds+"  "+day+"/"+month+"/"+year;
  }
}
