import React, { Component } from 'react'
import { Segment, Table, Grid, Card, Label, Message} from 'semantic-ui-react'

export default class Hospitals extends Component {

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
      <Segment>
        <p>welcome you can go ahead and add</p>
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

      </div>
    )
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
