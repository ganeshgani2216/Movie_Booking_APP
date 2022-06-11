import React, { Component } from 'react';
import './Header.css';
import SiteLogo from './../../assets/logo.svg';

import Button from '@material-ui/core/Button';

class Header extends Component {

    render() {
      return (
        <div className="header">
          <img className="siteLogo" src={SiteLogo} alt="Site Logo" />
          {this.props.children};
          <Button style={{position:"absolute" , right:32, top:8}} variant="contained" color="default">Login</Button>
        </div>
      );
    }
}

export default Header;