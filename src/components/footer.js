import React from 'react'
import {Typography,Link,AppBar,Container,Toolbar,} from '@material-ui/core'

function Footer() {
    return (
      <Typography variant="body2" style={{color:'white'}} align="center">
        {'Copyright © '}
        <Link color="inherit">
          TeleCard Limited
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  export default Footer;
  