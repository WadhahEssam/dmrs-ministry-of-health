import React, { Component } from 'react'
import { Segment, Table, Label, Message, Form, Button, Icon} from 'semantic-ui-react'
import web3 from '../web3';
import { toast } from 'react-toastify';
import { cloneDeep } from 'lodash';

export default class Hospitals extends Component {
  state = {
    hospitalName: "",
    hospitalAddress: "",
  }

  render() { 
    const { hospitals, isAllowed } = this.props;

    let tableBody;
    if (hospitals != null) {
      tableBody = hospitals.map((hospital, index) => {
        let formattedDate = this.formatDate(hospital.date);
        return (
        <Table.Row key={index}>
          <Table.Cell>
            <Label ribbon>{index+1}</Label>
          </Table.Cell>
          <Table.Cell>{hospital.name}</Table.Cell>
          <Table.Cell>{hospital.networkAddress}</Table.Cell>
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
    
    const addHospitalSegment = (
      <Segment padded>
          <Form onSubmit={(e)=>{e.preventDefault()}}>
            <Message color="olive">
              <p>Once a hospital is added it will be able to retrieve medical records and add new data to them.</p>
            </Message>
            <Form.Group widths={2}>
              <Form.Field>
                <label>Hospital Name</label>
                <input 
                  value={this.state.hospitalName} 
                  onChange={(e)=>{this.setState({hospitalName: e.target.value})}}
                  placeholder='eg. King Khaled Hospital' 
                />
              </Form.Field>
              <Form.Field>
                <label>Hospital Blockchain Address</label>
                <input 
                  value={this.state.hospitalAddress} 
                  onChange={(e)=>{this.setState({hospitalAddress: e.target.value})}}
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
                Add Hospital
                <Icon name='add' />
              </Button>
            </Form.Field>
          </Form>
      </Segment>
    );

    return (
      <div>
        <h1 className="menu-title">Authenticated Hospitals</h1>
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>ID</Table.HeaderCell>
              <Table.HeaderCell>Hospital Name</Table.HeaderCell>
              <Table.HeaderCell>Hospital Address</Table.HeaderCell>
              <Table.HeaderCell>Date of Submission</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {tableBody}
          </Table.Body>
        </Table>

        <div style={{padding: 10}}/>
        <h1 className="menu-title">Add New Hospital</h1>
        {(isAllowed) ? addHospitalSegment : notAllowedToAddSegment}
        <div style={{padding: 10}}/>

      </div>
    )
  }

  submit = async () => {
    const { contract } = this.props;
    const accounts = await web3.eth.getAccounts();
    await contract.methods.addHospital(this.state.hospitalAddress, this.state.hospitalName)
      .send({ from: accounts[0] })
      .then(() => {
        this.pushNotification('success', 'Hospital added successfuly');
        let hospitals = cloneDeep(this.props.hospitals);
        hospitals.push({name: this.state.hospitalName, networkAddress: this.state.hospitalAddress, date: Math.floor(Date.now() / 1000)});
        this.setState({hospitalName: "", hospitalAddress: ""});
        this.props.setState({hospitals});
      })
      .catch((e)=>{
        console.log('error');
        this.pushNotification('error', 'Something went wrong')
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
