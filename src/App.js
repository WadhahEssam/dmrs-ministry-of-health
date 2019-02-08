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
  state = { activeItem: 'Network Details' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContent = () => {
    switch (this.state.activeItem) {
      case 'Network Details':
        return <CreateNetwork />;
      case 'Hospitals': 
        return <Hospitals />;
      case 'Pharmacies':
        return <Pharmacies />;
    }
  }

  async componentDidMount() {
    const managerAddress = await contract.methods.ministryOfHealth().call();
    const ministryOfHealthContractAddress = contractAddress;
    const currentAddress = await web3.eth.getAccounts()[0];
    const hospitalsCount = await contract.methods.getHospitalsCount().call();
    const pharmaciesCount = await contract.methods.getPharmaciesCount().call();
    console.log(pharmaciesCount);
  }

  render() {
    const { activeItem } = this.state

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
