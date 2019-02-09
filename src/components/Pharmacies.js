import React, { Component } from 'react'
import { Segment, Table, Grid, Card, Label, Message, Form, Button, Icon} from 'semantic-ui-react'

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
      </div>
    )
  }

  submit = () => {
    console.log(this.state);
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
