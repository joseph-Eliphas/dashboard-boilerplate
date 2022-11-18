import Appbar from "./utilities/appbar";
import Footer from "./utilities/footer";
import SideNav from "./utilities/sidenav";
import { Routes, Route } from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import CustomCard from "./components/card";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Navigation from "./services/navigation.links";
import ModelsContext from "./components/models";

const Layout = () => {

    const navigations = Navigation();

    return (
        <ModelsContext>
            <div className="main w-100 text-light h-100 d-flex">

                <SideNav />

                <div className="main-space w-100 d-flex flex-column vertical-scroll">

                    <Appbar />

                    <div className="main-work-space">
                        <CustomCard>

                            <Routes>
                                {
                                    navigations.map((nav, index) => {
                                        let Component: any = nav.component;
                                        return (<Route path={nav.link} key={nav.link} element={<Component />} />)
                                    })
                                }
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/settings" element={<Settings />} />
                            </Routes>

                        </CustomCard>
                    </div>

                    <Footer />

                </div>

            </div>
        </ModelsContext>
    );
}

export default Layout;