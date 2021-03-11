import "./SCSS/Footer.css";
import "animate.css";
//iconos de redes sociales
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const FooterComponent = () => {
    let arrayAnimations = ['animate__shakeX','animate__bounce','animate__rubberBand','animate__pulse','animate__tada','animate__jello'];

    const AplicateAnimation = (numberLink) => {
        console.log(numberLink);
        let indexAnimation = Math.floor(Math.random() * 6);
        let icons = document.getElementsByClassName('icon');
        icons[numberLink].classList.add(arrayAnimations[indexAnimation]);
    }
     

    return (  
        <footer>
            <div>
                <p>Copyright© 2021 Ramón García de la Serrana López</p>
            </div>

            <div id="containerIcons">
                
                <a href="https://www.instagram.com/" r rel="noopener noreferrer">
                    <InstagramIcon className="icon animate__animated" onMouseOver={() => AplicateAnimation(0)} />
                </a>

                <a href="https://twitter.com/" r rel="noopener noreferrer">
                    <TwitterIcon className="icon animate__animated" onMouseOver={() => AplicateAnimation(1)} />
                </a>

                <a href="https://www.facebook.com/" r rel="noopener noreferrer">
                    <FacebookIcon className="icon animate__animated" onMouseOver={() => AplicateAnimation(2)} />
                </a>

                 <a href="https://www.youtube.com/" r rel="noopener noreferrer">
                     <YouTubeIcon className="icon animate__animated" onMouseOver={() => AplicateAnimation(3)} />
                </a>

            </div>
            
        </footer>
    );
}
 
export default FooterComponent;