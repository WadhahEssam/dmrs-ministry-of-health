import React, { Component } from 'react'
import { Segment, Table, Grid, Card, Label} from 'semantic-ui-react'

import logo from '../img/logo.png';


export default class Hospitals extends Component {
  renderTable = () => {
    const { hospitals } = this.props;

    for (let i = 0; i < hospitals.length; i++) {
      return (
        <Table.Row>
          <Table.Cell>{i+1}</Table.Cell>
          <Table.Cell>{hospitals[i].name}</Table.Cell>
          <Table.Cell>{hospitals[i].networkAddress}</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
        </Table.Row> 
      );
    }

    hospitals
  }

  render() { 
    const { hospitals } = this.props;

    let tableBody;
    if (hospitals != null) {
      tableBody = hospitals.map((hospital, index) => {
        return (
        <Table.Row key={index}>
          <Table.Cell>{index+1}</Table.Cell>
          <Table.Cell>{hospital.name}</Table.Cell>
          <Table.Cell>{hospital.networkAddress}</Table.Cell>
          <Table.Cell>September 14, 2013</Table.Cell>
        </Table.Row> 
        );
      });
    }


    return (
      <div>
        <h1 className="menu-title">Hospitals</h1>
        <Segment padded>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>ID</Table.HeaderCell>
                <Table.HeaderCell>Hospital Name</Table.HeaderCell>
                <Table.HeaderCell>Hospital Address</Table.HeaderCell>
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
}
