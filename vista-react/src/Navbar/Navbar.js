//imports de react-bootstrap
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//import material-ui
import Button from "@material-ui/core/Button";
//import css
import "./SCSS/Navbar.css";
//imports de iconos
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import Brightness4RoundedIcon from "@material-ui/icons/Brightness4Rounded";
import ApartmentRoundedIcon from "@material-ui/icons/ApartmentRounded";
import VpnKeyRoundedIcon from "@material-ui/icons/VpnKeyRounded";
import AccountBoxRoundedIcon from "@material-ui/icons/AccountBoxRounded";
import Dropdown from "react-bootstrap/Dropdown";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import 'bootstrap/dist/css/bootstrap.min.css';
import "animate.css";
//
//import {Link} from 'react-router-dom';


const NavbarComponent = () => {
    let golden = '#BEB06B';
    let white = '#F9FAF6';
  
    const click = (variable) =>{

      if(variable !== '--colorMode')
      {
        document.documentElement.style.setProperty('--colorHome',white);
        document.documentElement.style.setProperty('--colorHotels',white);
        document.documentElement.style.setProperty('--colorZoneUser',white);
        document.documentElement.style.setProperty('--colorRegister',white);
        document.documentElement.style.setProperty('--colorLogin',white);

        document.documentElement.style.setProperty(variable ,golden);

        if(variable === "--colorLogin" || variable === "--colorRegister"){
          document.documentElement.style.setProperty('--colorZoneUser',golden);
        }

      }else{
       let colorMode = getComputedStyle(document.documentElement).getPropertyValue(variable);
       if(colorMode === white){
        document.documentElement.style.setProperty(variable,golden);
       }else{
        document.documentElement.style.setProperty(variable,white);
       }
      }
      
       
    
    
  }


  return (
    <Navbar collapseOnSelect className="Navbar" sticky="top" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">

        <Nav className="mr-auto Nav" as="ul">
          <Nav.Link  className="NavLink1 classWhite" to="/" onClick={() => click('--colorHome')} as="li" >
            <HomeRoundedIcon id="iconHome"></HomeRoundedIcon> Home
          </Nav.Link>
          <Nav.Link className="NavLink2 classWhite" to="/hotels"  onClick={() =>click('--colorHotels')} as="li">
            <ApartmentRoundedIcon></ApartmentRoundedIcon> Hotels
          </Nav.Link>
        </Nav>

        <Nav className="mr-auto Nav1 animate__animated animate__pulse" >
          <Nav.Item>Holy Rest</Nav.Item>
        </Nav>

        <Nav className="Nav2">
          <Button className="NavButton classWhite" onClick={() =>click('--colorMode')}>
            <Brightness4RoundedIcon></Brightness4RoundedIcon> DARK MODE
          </Button>

          <Dropdown className="Dropdown">
            <Dropdown.Toggle className="Dropdown_Toogle">
              <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
              Zone User
             
            </Dropdown.Toggle>

            <Dropdown.Menu className="Dropdown_Menu">
              <div>
                <Dropdown.Item className="NavDropdownA classWhite" href="#Register"  onClick={() => click('--colorRegister')}>
                  <VpnKeyRoundedIcon></VpnKeyRoundedIcon> Register
                </Dropdown.Item>
                <Dropdown.Item className="NavDropdownB classWhite" href="#Login"  onClick={() => click('--colorLogin')}>
                  <AccountBoxRoundedIcon></AccountBoxRoundedIcon> Login
                </Dropdown.Item>
              </div>
            </Dropdown.Menu>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
