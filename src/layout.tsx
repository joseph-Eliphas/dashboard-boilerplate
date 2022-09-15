import Appbar from "./utilities/appbar";
import Footer from "./utilities/footer";
import SideNav from "./utilities/sidenav";

const Layout = () => {
    return (
        <div className="main w-100 text-light h-100 d-flex">

            <SideNav/>

            <div className="main-space w-100 d-flex flex-column vertical-scroll">

                <Appbar/>

                <div className="work-space text-light">work space</div>

                <Footer/>

            </div>

        </div>
    );
}

export default Layout;