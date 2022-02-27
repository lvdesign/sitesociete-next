import Link from 'next/link';
import Image from 'next/image';
//import styles from '../styles/Footer.module.css'
const Footer = () => {
     return ( 
     <footer className="footer page-footer fondFooter gray" id="footer-btn"> 
                     
                     <div className="container">


<div className="row">

  <div className="col l6 s12">
     <Image
     src="/images/picto/pictoF.svg" 
     width="50" height="50" 
     alt="site societe" />

    <h5 className="white-text"> Site Société </h5>
    <p className="grey-text text-lighten-4">  </p>
    <p>Bonjour, vous êtes sur la démonstration du "site Société" de LVdesign.
      Ce site est la base d'une solution E-Commerce avec <a href="https://snipcart.com/" alt="Snipcart : Professionally crafted shopping cart platform
For big & small businesses alike ">Snipcart</a> pour présenter votre commerce ou boutique en ligne.
      Snipcart propose une solution simple, pratique et complete pour un coût très interessant.
      Très simplement, vous pourrez présenter à vos clients vos produits,
      vos services, votre situation
      et aussi les dernières nouveautés grâce à un lien vers
      instagram, facebook et twitter. </p>
    <p><a href="http://lvdesign.com.fr" alt="LVdesign un site à votre service" className="">
        Je suis à votre disposition pour toutes adaptations. Merci et à bientôt...
      </a></p>
  </div>

  <div className="col l4 offset-l2 s12">

    <h5 className="white-text">Contact</h5>
    <ul>
      <li><i className="material-icons">location_city</i> 10 place du trocadéro, 75008 Paris</li>
      <li><i className="material-icons">email</i> contact@masociete.fr</li>
      <li><i className="material-icons">phone</i>+33 06 23 56 89 12</li>
    </ul>
    <h5 className="white-text">About</h5>
    <ul>
      <li><a className="grey-text text-lighten-3" href="#!">Ma société</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">FAQ</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Recrutement</a></li>
    </ul>
    <h5 className="white-text">Terms</h5>
    <ul>
      <li><a className="grey-text text-lighten-3" href="#!">Votre compte</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">Service clients</a></li>
      <li><a className="grey-text text-lighten-3" href="#!">RGPD</a></li>
    </ul>
  </div>
</div>
</div>
<div className="footer-copyright">
<div className="container">
  © 2018 Copyright Site Société | All rights reserved | LVdesign.com.fr
</div>
</div>
         </footer>
      
        
     );
}
 
export default Footer;