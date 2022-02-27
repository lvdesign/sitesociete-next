import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';



// Page 404
const NotFound = () => {

    const router = useRouter();

    useEffect( () => {

       console.log('use effect run')
       function goBack(){
        setTimeout( () => {
            router.push('/')
           }, 3000)
       }
       goBack()
    }, [])

    return ( 
        <div className="not-found">
            <h1>Ooooops …</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to <Link href="/"><a>Home | site Societe</a></Link></p>
        </div>
     );
}
 
export default NotFound;