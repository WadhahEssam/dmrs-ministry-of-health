import React, { Component } from 'react'
import { Segment, Table, Grid, Card, Label} from 'semantic-ui-react'

export default class Pharmacies extends Component {
  render() { 
    const { pharmacies, isAllowed } = this.props;

    let tableBody;
    if (pharmacies != null) {
      tableBody = pharmacies.map((pharmacy, index) => {
        let formattedDate = this.formatDate(pharmacy.date);
        return (
        <Table.Row key={index}>
          <Table.Cell>{index+1}</Table.Cell>
          <Table.Cell>{pharmacy.name}</Table.Cell>
          <Table.Cell>{pharmacy.networkAddress}</Table.Cell>
          <Table.Cell>{formattedDate}</Table.Cell>
        </Table.Row> 
        );
      });
    }
    
    return (
      <div>
        <h1 className="menu-title">Pharmacies</h1>
        <Segment padded>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Pharmacy Name</Table.HeaderCell>
                <Table.HeaderCell>Pharmacy Address</Table.HeaderCell>
                <Table.HeaderCell>Date</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {tableBody}
            </Table.Body>
          </Table>
        </Segment>
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
