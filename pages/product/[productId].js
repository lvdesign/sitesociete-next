/**
 *  detail product
 * http://localhost:3000/product/1
 * ou product.title as slug
 * 
 */
 import Head from 'next/head'
 import Link from 'next/link';
 import { FaShoppingCart } from 'react-icons/fa'; 
 import products from '../../products.json';


 //
 export default function ProductDetail({ product }) {
   return (  

      <>
      <Head>
         <title>{ product.title } - Détail Produit</title>
      </Head>
       
      <main className="main">
        <div className="produit-detail">

              <img 
                src={product.image} 
                alt={`Preview of ${product.title}`} 
                height="500"
                width="500"  
                className="produit-detail-img"            
                />              
                
              
                <h3>{product.title}</h3>
                <p>{ product.description }</p>
                <p>${ product.price }</p> 
               {/* className="snipcart-add-item" */}
               <button 
                 data-item-id={product.id}
                 data-item-image={product.image}
                 data-item-name={product.title}
                 data-item-url={`/products/${product.id}`}
                 data-item-price={product.price}
               >
                 Add to Cart
               </button>
            
             <Link href={'/product/'}> Plus de produits </Link>

        </div>
     
      
            
                
       
       
         

        

        
      </main> 
      </>   
   )
 }
 
 export async function getStaticProps({ params }) {
   const { productId } = params;
   const product = products.find(({ id }) => id === productId);
   return {
     props: {
       product
     }
   }
 }
 
 export async function getStaticPaths() {
   return {
     paths: products.map(({ id }) => {
       return {
         params: {
           productId: id
         }
       }
     }),
     fallback: false
   };
 }