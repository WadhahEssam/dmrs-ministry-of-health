import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.png';
import { Container } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'
import CreateNetwork from './components/CreateNetwork';
import Hospitals from './components/Hospitals';
import Pharmacies from './components/Pharmacies';
import web3 from './web3';
import contract from './medicalRecordsSystemContract';
import { contractAddress } from './medicalRecordsSystemContract';

class App extends Component {
  state = { 
    activeItem: 'Network Details',
    networkDetails: {
      ministryOfHealthAddress: null,
      medicalRecordsContractAddress: null,
      currentAddress: null,
      pharmaciesCount: 0,
      hospitalsCount: 0,
      medicalRecordsCount: 0,
    }
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContent = () => {
    switch (this.state.activeItem) {
      case 'Network Details':
        return <CreateNetwork networkDetails={this.state.networkDetails} />;
      case 'Hospitals': 
        return <Hospitals />;
      case 'Pharmacies':
        return <Pharmacies />;
    }
  }

  async componentDidMount() {
    const ministryOfHealthAddress = await contract.methods.ministryOfHealth().call();
    const medicalRecordsContractAddress = contractAddress;
    const currentAddress = await web3.eth.getAccounts();
    const hospitalsCount = await contract.methods.getHospitalsCount().call();
    const pharmaciesCount = await contract.methods.getPharmaciesCount().call();
    const medicalRecordsCount = await contract.methods.medicalRecordsCount().call();
    this.setState({ 
      networkDetails: {
        ministryOfHealthAddress, 
        medicalRecordsContractAddress, 
        currentAddress: currentAddress[0], 
        hospitalsCount, 
        pharmaciesCount, 
        medicalRecordsCount
      }
    });
  }

  render() {
    const { activeItem } = this.state
    console.log(this.state);
    return (
      <div>
          <Menu attached="top" stackable pointing >
            <Menu.Item>
              <Input className='icon' icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              className="menu-item"
              name="Hospitals"
              active={activeItem === 'Hospitals'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="menu-item"
              name="Pharmacies"
              active={activeItem === 'Pharmacies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="menu-item"
              name="Network Details"
              active={activeItem === 'Network Details'}
              onClick={this.handleItemClick}
              position="left"
            />

            <Menu.Item position="right">
               <p className="header-name">Ministry Of Health</p>
            </Menu.Item>
            <Menu.Item >
              <img src={logo} className="logo" alt="logo" />
            </Menu.Item>
          </Menu>

          <Container style={{paddingTop: 20}}>
            <Container>
              {this.renderContent()}
            </Container>
          </Container>
      </div>
    );
  }
}

export default App;
