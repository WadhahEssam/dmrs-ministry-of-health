import React, { Component } from 'react'
import { Segment, Table, Grid, Card, Label, Message, Form, Button, Icon} from 'semantic-ui-react'
import { ToastContainer, toast } from 'react-toastify';

export default class Hospitals extends Component {
  state = {
    hosptialName: "",
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
                  onChange={(e)=>{this.setState({hosptialName: e.target.value})}}
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

      </div>
    )
  }

  submit = () => {
    console.log(this.state);
    toast.success(`${this.state.hospitalAddress}`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
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
