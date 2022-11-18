import { Button } from "@mui/material";
import Navigation from "../services/navigation.links";
import { VscSettings } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { ActiveNavLink, NavExpandedState } from "../context/atoms";

const SideNav = () => {

    const [navExpanded, setNavExpanded] = useRecoilState(NavExpandedState);
    const [activeNavLink, setActiveNavLink] = useRecoilState(ActiveNavLink);

    return (
        <nav className={`side d-flex flex-column overflow-hidden ${navExpanded ? 'active' : ''}`}>
            <div className="logo my-4" style={{ color: 'var(--iconColor)', fill: 'var(--iconColor)' }}>Logo</div>
            <ul className="navigation h-100 my-4 list-unstyled d-flex flex-column justify-content-start align-items-center">
                {
                    Navigation().map(nav => (
                        <li className="my-2 w-100" style={{textDecoration: 'none'}}>
                            <Link to={nav.link} onClick={(e)=>{setActiveNavLink(nav.link)}} className="w-100 text-decoration-none">
                                <Button className={`nav-button p-2 px-4 mx-auto d-flex flex-row align-items-center ${(activeNavLink == nav.link ? "active" : '')} ${navExpanded ? 'justify-content-start' : 'justify-content-center'} w-100`}>
                                    {nav.icon}
                                    <p className={`mx-2 my-0 opacity-100 text-capitalize ${!navExpanded ? 'd-none' : ''}`}>{nav.name}</p>
                                </Button>
                            </Link>
                        </li>
                    ))
                }

            </ul>
            <div className="bottom my-4">
                <Link to="/settings">
                <Button style={{ color: 'var(--iconColor)' }} className='p-2'>
                        <VscSettings size={19} />
                        {/* <p>{nav.name}</p> */}
                    </Button>
                </Link>
            </div>
        </nav>
    );
}

export default SideNav;