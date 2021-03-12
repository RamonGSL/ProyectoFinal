

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

const NavbarComponent = () => {
//var para comprobar en que modo esta
let darkMode = false;

//variables de las fuentes y backgrounds
let fontWhite ="black";
let fontDark ="#F9FAF6";
let backgroundWhite ="#A19C9C";
let backgroundDark ="#47464A";



//constante para cambiar el color del link respecto al router
const clickLink = (numberLink) => {
  let icons = document.getElementsByClassName("icon");
  for(let i = 0; i<=3; i++){
    if(icons[i].classList.contains("selectLink")){
      icons[i].classList.remove("selectLink");
    }
  }
  if(numberLink === 2 || numberLink === 3){
    document.getElementById("ZoneUser").classList.add("selectLink");
   
  }else{
    document.getElementById("ZoneUser").classList.remove("selectLink");
  }
  icons[numberLink].classList.add("selectLink")
}

//constante para el darkMode
const changeColorMode = () =>{
  
  if(darkMode === false){
    darkMode = true;
  }else{
    darkMode = false;
  }
  if(darkMode === false){
    //Aquí cambiamos las variables globales del color de fondo y fuente para toda la web
    document.documentElement.style.setProperty('--fontColor',fontWhite);
    document.documentElement.style.setProperty('--backgroundColor',backgroundWhite);
    document.getElementById("colorMode").style.color = "black";

    //Aquí cambiamos los bordes del dropdown
    document.documentElement.style.setProperty('--borderUserZones',fontWhite);
    
    

  }else{
    //Repetimos para el modo oscuro
    document.documentElement.style.setProperty('--fontColor',fontDark);
    document.documentElement.style.setProperty('--backgroundColor',backgroundDark);
    document.getElementById("colorMode").style.color = "#BEB06B";
    
    document.documentElement.style.setProperty('--borderUserZones','var(--colorGolden)');

    
  }
}


  return ( 
    <div id="containerNavbar" className="colorMode">
    <Navbar collapseOnSelect className="Navbar" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />

    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="mr-auto">
        <Nav.Link to="/" onClick={() => clickLink(0)}>
          <div className="fontColor icon">
          <HomeRoundedIcon></HomeRoundedIcon> Home
          </div>
        </Nav.Link>
        <Nav.Link to="/hotels" onClick={() => clickLink(1)}>
          <div  className="fontColor icon">
          <ApartmentRoundedIcon></ApartmentRoundedIcon> Hotels
          </div>
        </Nav.Link>
      </Nav>

      <Nav className="mr-auto" >
        <Nav.Item>
          <div id="title" className="fontColor">
            Holy Rest
            </div>
          </Nav.Item>
      </Nav>

      <Nav>
        <Button id="colorMode" className="NavButton" onClick={() =>changeColorMode()}>
          <Brightness4RoundedIcon></Brightness4RoundedIcon> DARK MODE
        </Button>

        <Dropdown>
          <Dropdown.Toggle id="ZoneUser" className="Dropdown_Toogle colorMode fontColor">
            <AccountCircleRoundedIcon></AccountCircleRoundedIcon>
            Zone User
           
          </Dropdown.Toggle>
          
          <Dropdown.Menu classID="drop" className="Dropdown_Menu colorMode UserZoneBorder">
              <div>
              <Dropdown.Item className="fontColor colorMode icon" to="/" onClick={() => clickLink(2)}>
                <VpnKeyRoundedIcon></VpnKeyRoundedIcon> Register
              </Dropdown.Item>
              <Dropdown.Item className="fontColor colorMode icon" to="/" onClick={() => clickLink(3)}>
                <AccountBoxRoundedIcon></AccountBoxRoundedIcon> Login
              </Dropdown.Item>
              </div>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
   );
}
 
export default NavbarComponent;