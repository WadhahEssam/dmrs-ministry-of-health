import React, { Component } from 'react';
import './App.css';
import logo from './img/logo.png';
import { Container } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'


class App extends Component {
  state = { activeItem: 'انشاء الشبكة' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
          <Menu attached="top" stackable pointing >
            <Menu.Item>
              <Input className='icon' icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item
              name="المستشفيات"
              active={activeItem === 'المستشفيات'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="الصيدليات"
              active={activeItem === 'الصيدليات'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              name="انشاء الشبكة"
              active={activeItem === 'انشاء الشبكة'}
              onClick={this.handleItemClick}
              position="left"
            />

            <Menu.Item position="right">
               <p className="header-name">وزارة الصحة السعودية</p>
            </Menu.Item>
            <Menu.Item >
              <img src={logo} className="logo" alt="logo" />
            </Menu.Item>
          </Menu>

          <Container style={{paddingTop: 20}}>
            <Container>
              <Segment>
                Medicl Records
              </Segment>
            </Container>

            <Container>
              <Segment>
                Medicl Records
              </Segment>
            </Container>

            <Container>
              <Segment>
                Medicl Records
              </Segment>
            </Container>
          </Container>

      </div>
    );
  }
}

export default App;