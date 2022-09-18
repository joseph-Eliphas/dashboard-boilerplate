import Appbar from "./utilities/appbar";
import Footer from "./utilities/footer";
import SideNav from "./utilities/sidenav";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import CustomCard from "./components/card";
import Profile from "./pages/profile";
import Settings from "./pages/settings";

const Layout = () => {
    return (
        <div className="main w-100 text-light h-100 d-flex">

            <SideNav />

            <div className="main-space w-100 d-flex flex-column vertical-scroll">

                <Appbar />

                <CustomCard>
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/settings" element={<Settings />} />
                    </Routes>
                </CustomCard>

                <Footer />

            </div>

        </div>
    );
}

export default Layout;