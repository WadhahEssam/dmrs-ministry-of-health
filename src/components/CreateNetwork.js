import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar, Grid, Card, Label} from 'semantic-ui-react'

export default class CreateNetwork extends Component {
  render() {
    return (
      <div>
        <Segment padded dir="rtl">
          <h1 style={{marginBottom: 16}} className="menu-title">تفاصيل الشبكة</h1>  
          {/* row 1 */}
          <Grid columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Card.Header padded style={{padding: 10}}>
                    عنوان العقد الذكي في الشبكة
                  </Card.Header>
                  <Card.Content padded>
                    <p dir="ltr" style={{overflow: 'hidden'}}>0x0F1A4e8401AFd1cb0524663d191774091EdccA26</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card fluid color='red'>
                  <Card.Header padded style={{padding: 10}}>
                    <p style={{display: 'inline', paddingLeft: 10}}>عنوانك في الشبكة</p>      
                    <Label basic color='red' pointing='right'>
                      غير مصرح
                    </Label>
                  </Card.Header>
                  <Card.Content padded>
                    <p dir="ltr" style={{overflow: 'hidden'}}>0x0F1A4e8401AFd1cb0524663d191774091EdccA26</p>
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Card.Header padded style={{padding: 10}}>
                    <p>عنوان وزارة الصحة في الشبكة</p>
                  </Card.Header>
                  <Card.Content padded>
                    <p dir="ltr" style={{overflow: 'hidden'}}>0x0F1A4e8401AFd1cb0524663d191774091EdccA26</p>  
                  </Card.Content>
                </Card>
              </Grid.Column>
            </Grid.Row> 
            {/* row 2 */}
            <Grid.Row>
              <Grid.Column>
                <Card>
                  <Card.Header padded style={{padding: 10}}>
                    عدد الصيدليات المصرحة
                  </Card.Header>
                  <Card.Content padded>
                    12
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Card.Header padded style={{padding: 10}}>
                    عدد ملفات المرضى الاجمالي
                  </Card.Header>
                  <Card.Content padded>
                    223
                  </Card.Content>
                </Card>
              </Grid.Column>
              <Grid.Column>
                <Card>
                  <Card.Header padded style={{padding: 10}}>
                    عدد المستشفيات المصرحة
                  </Card.Header>
                  <Card.Content padded>
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
