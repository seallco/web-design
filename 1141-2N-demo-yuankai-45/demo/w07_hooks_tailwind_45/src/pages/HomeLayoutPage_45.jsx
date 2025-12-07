import {Outlet} from 'react-router-dom'
import Navbar_45 from '../components/Navbar_45';
import Wrapper from '../assets/wrappers/blog2_45'

const HomeLayoutPage_45 = () => {
    return (
        <Wrapper>
        <Navbar_45/>
    <Outlet/>
    </Wrapper>
    );
};

export default HomeLayoutPage_45
