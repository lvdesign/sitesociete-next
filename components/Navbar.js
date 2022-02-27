import Link from 'next/link'
import { useEffect, useState } from "react"
import Image from 'next/image';
import Container from "./Container";
import { FaShoppingCart } from "react-icons/fa";


//
const Navbar = ({ children }) => {
  const [total, setTotal] = useState(0);
    useEffect(()=> {
    if (window.Sinpcart){
      setTotal(Snipcart.store.getState().cart.total);
    }
    /* nav action ? */
    /* const M = require('materialize-css/dist/js/materialize.min.js')
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');
      var instances = M.Sidenav.init(elems, options);
       
      console.log('elems', elems)
      console.log('instances', instances)
      console.log('M',M)
      $(document).ready(function(){
        $('.sidenav').sidenav();
      }); 
    });  
     */ 
    const M = require('materialize-css/dist/js/materialize.min.js')

    //document.addEventListener('touchstart', handler, {passive: true});

    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.sidenav');      
       M.Sidenav.getInstance(elems);
    })
    //M.toast({html: 'toto'}) 
    
    $(document).ready(function(){
      $('.sidenav').sidenav();
      $('.carousel').carousel();
    }); 

  },[]);

    return (

        <Container>
<div className="navbar-fixed">
        <nav className="green">
            <div className="nav-wrapper green darken-1 z-depth-5">
              <Link href="/">
              <a  className="brand-logo">
                <Image 
                src="/images/picto/pictoF.svg" 
                alt="brand Site Societe" 
                width={30} 
                height={30} 
                />
                Site Société
              </a>

              </Link>
             
              
              <a href="#" data-target="mobile-demo" className="sidenav-trigger">
                <i className="material-icons">menu</i></a>
              
              <ul className="right hide-on-med-and-down">
                    <li><Link href="/"><a>Home</a></Link></li>
                    <li><Link href="/#produits"><a>Nos produits</a></Link></li>  
                    <li><Link href="/#contact"><a>Contact</a></Link></li>  
                    <li><Link href="/#actu"><a>Actualité</a></Link></li>  
                    <li><Link href="/about"><a>About</a></Link></li>  
                    <li><Link href="/product"><a>Boutique</a></Link></li>
                    <li> 
                    <a className="snipcart-checkout snipcart-summary" href="#" style={{ textDecoration: "none" }}>
                    <FaShoppingCart />
                    <strong className="sr-only">Cart</strong>
                    <span className="snipcart-total-price"> {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format( total )}
                    </span>
                    </a>
                    </li>
              </ul>
            </div>
          </nav>
          </div>
          
          <ul className="sidenav" id="mobile-demo">
          <li><div className="user-view">
            <div className="background">
              <Image 
              src="/images/fondFooter.svg" 
              alt=""
              width={300} 
              height={200} 
              />
            </div>
            <a href="#user">
              <Image 
              alt="" 
              className="circle" 
              src="/images/picto/pictoF.svg"
              width={30} 
              height={30} 
              /></a>
            <a href="#name"><span className="white-text name">Site Société</span></a>
            <a href="#email"><span className="white-text email">contact@masociete.fr</span></a>
          </div>
          </li>
              <li><Link href="/"><a>Home</a></Link></li>
              <li><Link href="/#produits"><a >Nos produits</a></Link></li>  
              <li><Link href="/#contact"><a >Contact</a></Link></li>  
              <li><Link href="/#actu"><a >Actualité</a></Link></li>  
              <li><Link href="/about"><a>About</a></Link></li>  
              <li><Link href="/product"><a>Boutique</a></Link></li>
              <li> 
                    <a className="snipcart-checkout snipcart-summary" href="#" style={{ textDecoration: "none" }}>
                    <FaShoppingCart />
                    <strong className="sr-only">Cart</strong>
                    <span className="snipcart-total-price color-price-card">  {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format( total )}
                    </span>
                    </a>
                    </li>
          </ul>
        </Container> 
     );
}
 
export default Navbar;