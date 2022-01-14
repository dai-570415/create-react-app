import { Header } from '../Header/Header';
import { Footer } from  '../Footer/Footer';

const Layout = ({ children }) => {
    return (
        <div className="container">
            <Header />
                { children }
            <Footer />
        </div>
    );
}

export default Layout;