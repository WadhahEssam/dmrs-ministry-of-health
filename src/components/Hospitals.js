import React, { Component } from 'react'
import { Segment, Table, Grid, Card, Label} from 'semantic-ui-react'

import logo from '../img/logo.png';


export default class Hospitals extends Component {
  render() { 
    const { hospitals } = this.props;
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
              <Table.Row>
                <Table.Cell>John Lilki</Table.Cell>
                <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                <Table.Cell>September 14, 2013</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jamie Harington</Table.Cell>
                <Table.Cell>jamieharingonton@yahoo.com</Table.Cell>
                <Table.Cell>January 11, 2014</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>Jill Lewis</Table.Cell>
                <Table.Cell>jilsewris22@yahoo.com</Table.Cell>
                <Table.Cell>May 11, 2014</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Segment>

      </div>
    )
  }
}
