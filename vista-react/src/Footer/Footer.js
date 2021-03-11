import "./SCSS/Footer.css";
import "animate.css";
//iconos de redes sociales
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const FooterComponent = () => {
    let arrayAnimations = ['animate__shakeX','animate__bounce','animate__rubberBand','animate__pulse','animate__tada','animate__jello','animate__flash','animate__shakeY','animate__heartBeat'];

    const AplicateAnimation = (numberLink) => {
        console.log(numberLink);
        let indexAnimation = Math.floor(Math.random() * 8);
        let icons = document.getElementsByClassName('icon');
        icons[numberLink].classList.add(arrayAnimations[indexAnimation]);
        icons[numberLink].addEventListener("animationend", () =>{
            icons[numberLink].classList.remove(arrayAnimations[indexAnimation]);
        }, false);
    }
     
    const OpenLink = (link) => {
        window.open(link);
    }


    return (  
        <footer>
            <div>
                <p>Copyright© 2021 Ramón García de la Serrana López</p>
            </div>

            <div id="containerIcons">
                
                <ul>
                    <InstagramIcon className="icon animate__animated" onMouseOver={() => AplicateAnimation(0)} onClick={()=> OpenLink("https://www.instagram.com/")}/>
                    <TwitterIcon className="icon animate__animated" onMouseOver={() => AplicateAnimation(1)} onClick={()=> OpenLink("https://twitter.com/")}/>
                    <FacebookIcon className="icon animate__animated" onMouseOver={() => AplicateAnimation(2)} onClick={()=> OpenLink("https://www.facebook.com/")}/>
                    <YouTubeIcon className="icon animate__animated" onMouseOver={() => AplicateAnimation(3)} onClick={()=> OpenLink("https://www.youtube.com/")}/>
                     
                </ul>
            </div>
            
        </footer>
    );
}
 
export default FooterComponent;