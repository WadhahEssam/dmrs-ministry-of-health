import React, { Component } from 'react'
import { Segment, Grid, Card, Label} from 'semantic-ui-react'

export default class CreateNetwork extends Component {
  render() {
    return (
      <div>
        <h1 style={{marginBottom: 16, marginTop: 20}} className="menu-title">Network Details</h1>  

        <Segment padded>
          {/* row 1 */}
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card fluid>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title">Contract Address</p>
                  </Card.Header>
                  <Card.Content >
                    <p dir="ltr" style={{overflow: 'hidden'}}>0x0F1A4e8401AFd1cb0524663d191774091EdccA26</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid color='red'>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title" style={{display: 'inline', paddingRight: 10}}>Your Account Address</p>      
                    <Label basic color='red' pointing='left'>
                      Not Allowed
                    </Label>
                  </Card.Header>
                  <Card.Content>
                    <p dir="ltr" style={{overflow: 'hidden'}}>0x0F1A4e8401AFd1cb0524663d191774091EdccA26</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title">Ministry Of Health Address</p>
                  </Card.Header>
                  <Card.Content>
                    <p dir="ltr" style={{overflow: 'hidden'}}>0x0F1A4e8401AFd1cb0524663d191774091EdccA26</p>  
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
                    12
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title">Number of hospitals</p>
                  </Card.Header>
                  <Card.Content>
                    223
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid>
                  <Card.Header style={{padding: 10}}>
                    <p className="details-title">Number of medical records</p>
                  </Card.Header>
                  <Card.Content>
                    15
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
