import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../../withRoot';

//
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import About from '../About/about.js';
import Button from '@material-ui/core/Button';
import Topics from '../Topics/topics.js'

//
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


const MyLink = props => <Link to="/" {...props} />
const MyLink1 = props => <Link to="/about" {...props} />
const MyLink2 = props => <Link to="/topics" {...props} />


class Home extends React.Component {
  state = {
    auth: true,
    anchorEl: null,
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);



   return (
  <div className={classes.root}>
       <FormGroup>
         <FormControlLabel
           control={
             <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
           }
           label={auth ? 'Logout' : 'Login'}
         />
       </FormGroup>
       <AppBar position="static">
         <Toolbar>
           <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
             <MenuIcon />
           </IconButton>

           <Typography variant="title" color="inherit" className={classes.flex}>
             Home
           </Typography>
           {auth && (
             <div>
             <Button component={MyLink}>
               Home
             </Button>

             <Button component={MyLink1}>
              About
            </Button>
            <Button component={MyLink2}>
             Topics
           </Button>

               <IconButton
                 aria-owns={open ? 'menu-appbar' : null}
                 aria-haspopup="true"
                 onClick={this.handleMenu}
                 color="inherit"
               >
                 <AccountCircle />
               </IconButton>
               <Menu
                 id="menu-appbar"
                 anchorEl={anchorEl}
                 anchorOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 transformOrigin={{
                   vertical: 'top',
                   horizontal: 'right',
                 }}
                 open={open}
                 onClose={this.handleClose}
               >
                 <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                 <MenuItem onClick={this.handleClose}>My account</MenuItem>
               </Menu>
             </div>
           )}
         </Toolbar>
       </AppBar>
     </div>
   );
 }
}


Home.propTypes = {
 classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Home));
