import { Container } from 'react-bootstrap';
import Footer from '../User/components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

const MainLayout = ({ children }) => {
    return (
        <Container fluid className='mx-0 px-0'>
            <NavBar />
            {children}
            <Footer />
        </Container>
    );
};

export default MainLayout;