import { Button } from "@mui/material";
import Navigation from "../services/navigation.links";

const SideNav = () => {
    return (
        <nav className="side d-flex flex-column overflow-hidden">
            <div className="logo my-4">Logo</div>
            <ul className="navigation h-100 my-4 list-unstyled d-flex flex-column justify-content-center align-items-start">
                {
                    Navigation().map(nav => (
                        <li className="my-2">
                            <Button style={{color: 'white'}} className='p-2'>
                                {nav.icon}
                                {/* <p>{nav.name}</p> */}
                            </Button>
                        </li>
                    ))
                }
                
            </ul>
            <div className="bottom my-4">Bottom</div>
        </nav>
    );
}

export default SideNav;