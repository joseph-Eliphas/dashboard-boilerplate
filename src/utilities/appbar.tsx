import { GiHamburgerMenu } from 'react-icons/gi';
import { MdDarkMode } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { Button, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { NavExpandedState } from "../context/atoms";
const Appbar = () => {

    const [navExpanded, setNavExpanded] = useRecoilState(NavExpandedState);

    return (
        <div className="appbar d-flex align-items-center justify-content-between px-4">
            <div className="d-flex flex-row align-items-center justify-content-center">
                <Button onClick={(e)=>setNavExpanded(!navExpanded)} style={{ color: 'white' }} className='p-2'>
                    <GiHamburgerMenu size={19} />
                </Button>
                <h5 className="my-auto mx-4">NTC</h5>
            </div>
            <div className="">
                <Link to="/profile">
                    <IconButton style={{ color: 'white', border: '1px solid  rgb(52, 52, 52)' }} className='p-2 mx-2'>
                        <FaUser size={19} />
                    </IconButton>
                </Link>
                <IconButton style={{ color: 'white', border: '1px solid  rgb(52, 52, 52)' }} className='p-2 mx-2'>
                    <MdDarkMode size={19} />
                </IconButton>
            </div>
        </div>
    );
}

export default Appbar;