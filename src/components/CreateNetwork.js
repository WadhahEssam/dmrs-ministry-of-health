import React, { Component } from 'react'
import { Segment, Grid, Card, Label} from 'semantic-ui-react'

import logo from '../img/logo.png';

export default class CreateNetwork extends Component {
  render() {
    const { networkDetails, isAllowed } = this.props;
    return (
      <div>
        <img src={logo} className="logo-bottom" alt="logo" />
        <h1 className="menu-title">Network Details</h1>

        <Segment padded style={{paddingLeft: 50}}>
          {/* row 1 */}
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card fluid>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title">Contract Address</p>
                  </Card.Header>
                  <Card.Content>
                    <p dir="ltr" className="addressText">{networkDetails.medicalRecordsContractAddress}</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid color={ isAllowed ? 'green' : 'red' } >
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title" style={{display: 'inline', paddingRight: 10}}>Your Account Address</p>      
                    <Label basic color={ isAllowed ? 'green' : 'red' } pointing='left'>
                      { isAllowed ? 'Allowed' : 'Not Allowed' }
                    </Label>
                  </Card.Header>
                  <Card.Content>
                    <p className="addressText">{networkDetails.currentAddress}</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title">Ministry Of Health Address</p>
                  </Card.Header>
                  <Card.Content>
                    <p className="addressText">{networkDetails.ministryOfHealthAddress}</p>  
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row> 
            {/* row 2 */}
            <Grid.Row>
              <Grid.Column>
                <Card fluid>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title">Number of pharmacies</p>
                  </Card.Header>
                  <Card.Content>
                    {networkDetails.pharmaciesCount}
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title">Number of hospitals</p>
                  </Card.Header>
                  <Card.Content>
                    {networkDetails.hospitalsCount}
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title">Number of medical records</p>
                  </Card.Header>
                  <Card.Content>
                    {networkDetails.medicalRecordsCount}
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    )
  }
}
