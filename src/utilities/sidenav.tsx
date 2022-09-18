import { Button } from "@mui/material";
import Navigation from "../services/navigation.links";
import { VscSettings } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { NavExpandedState } from "../context/atoms";

const SideNav = () => {

    const [navExpanded, setNavExpanded] = useRecoilState(NavExpandedState);

    return (
        <nav className={`side d-flex flex-column overflow-hidden ${navExpanded ? 'active' : ''}`}>
            <div className="logo my-4">Logo</div>
            <ul className="navigation h-100 my-4 list-unstyled d-flex flex-column justify-content-center align-items-center">
                {
                    Navigation().map(nav => (
                        <li className="my-2 w-100" style={{textDecoration: 'none'}}>
                            <Link to={nav.link} className="w-100" style={{textTransform: 'capitalize'}}>
                                <Button style={{ color: 'white', textDecoration: 'none' }} className={`p-2 d-flex flex-row align-items-center ${navExpanded ? 'justify-content-start' : 'justify-content-center'} w-100`}>
                                    {nav.icon}
                                    <p className={`mx-1 my-0 ${!navExpanded ? 'd-none' : ''}`}>{nav.name}</p>
                                </Button>
                            </Link>
                        </li>
                    ))
                }

            </ul>
            <div className="bottom my-4">
                <Link to="/settings">
                    <Button style={{ color: 'white' }} className='p-2'>
                        <VscSettings size={19} />
                        {/* <p>{nav.name}</p> */}
                    </Button>
                </Link>
            </div>
        </nav>
    );
}

export default SideNav;