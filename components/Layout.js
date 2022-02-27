import Footer from "./Footer";
import Nav from "./Navbar"

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <Nav />            
            { children }
            <Footer />
        </div>
    );
}
 
export default Layout;

