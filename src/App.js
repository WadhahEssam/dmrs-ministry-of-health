import React, { Component } from 'react';
import { Menu, Input, Container } from 'semantic-ui-react'
import web3 from './web3';
import { ToastContainer } from 'react-toastify';
import CreateNetwork from './components/CreateNetwork';
import Hospitals from './components/Hospitals';
import Pharmacies from './components/Pharmacies';
import contract from './medicalRecordsSystemContract';
import { contractAddress } from './medicalRecordsSystemContract';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import logo from './img/logo.png';

class App extends Component {
  state = { 
    activeItem: 'Network Details',
    isAllowed: null,
    networkDetails: {
      ministryOfHealthAddress: null,
      medicalRecordsContractAddress: null,
      currentAddress: null,
      pharmaciesCount: 0,
      hospitalsCount: 0,
      medicalRecordsCount: 0,
    },
    hospitals: null,
    pharmacies: null,
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderContent = () => {
    switch (this.state.activeItem) {
      case 'Network Details':
        return <CreateNetwork networkDetails={this.state.networkDetails} isAllowed={this.state.isAllowed}/>;
      case 'Hospitals': 
        return (
          <Hospitals 
            hospitals={this.state.hospitals} 
            isAllowed={this.state.isAllowed} 
            contract={contract}
            setState={(data) => {this.setState(data)}}
          />
        );
      case 'Pharmacies':
        return (
          <Pharmacies 
            pharmacies={this.state.pharmacies} 
            isAllowed={this.state.isAllowed} 
            contract={contract}
            setState={(data) => {this.setState(data)}}
          />
        );
    }
  }

  async componentDidMount() {
    await this.fetchData();
    await this.fetchHospitals();
    await this.fetchPharmacies();
  }

  fetchData = async () => {
    const ministryOfHealthAddress = await contract.methods.ministryOfHealth().call();
    const medicalRecordsContractAddress = contractAddress;
    const currentAddress = await web3.eth.getAccounts();
    const hospitalsCount = await contract.methods.getHospitalsCount().call();
    const pharmaciesCount = await contract.methods.getPharmaciesCount().call();
    const medicalRecordsCount = await contract.methods.medicalRecordsCount().call();
    const isAllowed = (currentAddress[0] === ministryOfHealthAddress);
    // console.log(await contract.options.address);
    // console.log(await web3.eth.getTransaction('0xa40e02a95685b709116cf45b0ecc7e40fe0567ef5579157fda4b46dc328ed4c1'));
    this.setState({ 
      isAllowed,
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

  fetchHospitals = async () => {
    let hospitals = [];
    const hospitalsCount = this.state.networkDetails.hospitalsCount;
    for (let i = 0; i < hospitalsCount; i++) {
      hospitals.push(await contract.methods.hospitals(i).call());
    }
    this.setState({hospitals});
  }

  fetchPharmacies = async () => {
    let pharmacies = [];
    const pharmaciesCount = this.state.networkDetails.pharmaciesCount;
    for (let i = 0; i < pharmaciesCount; i++) {
      pharmacies.push(await contract.methods.pharmacies(i).call());
    }
    this.setState({pharmacies});
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
              name="Pharmacies"
              active={activeItem === 'Pharmacies'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              className="menu-item"
              name="Hospitals"
              active={activeItem === 'Hospitals'}
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
          <ToastContainer/>
      </div>
    );
  }
}

export default App;
