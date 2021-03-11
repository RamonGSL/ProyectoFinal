import "./SCSS/Footer.css";

//iconos de redes sociales
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
//animate__animated animate__shakeX
const FooterComponent = () => {
    return (  
        <footer>
            <div>
                <p>Copyright© 2021 Ramón García de la Serrana López</p>
            </div>

            <div id="containerIcons">
                
                <a href="https://www.instagram.com/" r rel="noopener noreferrer">
                    <InstagramIcon className="icon" />
                </a>

                <a href="https://twitter.com/" r rel="noopener noreferrer">
                    <TwitterIcon className="icon"/>
                </a>

                <a href="https://www.facebook.com/" r rel="noopener noreferrer">
                    <FacebookIcon className="icon"/>
                </a>

                 <a href="https://www.youtube.com/" r rel="noopener noreferrer">
                     <YouTubeIcon className="icon"/>
                </a>

            </div>
            
        </footer>
    );
}
 
export default FooterComponent;