import React, { Component } from "react";
import { Icon, Header, Menu } from "semantic-ui-react";
import "./navBar.css";

class NavBar extends Component {
  render() {
    return (
      <div className="box">
        <Menu secondary>
          <Menu.Item>
            <Icon disabled name="lab" />
          </Menu.Item>
          <Menu.Item>
            <Header as="h3">Stackline</Header>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavBar;
