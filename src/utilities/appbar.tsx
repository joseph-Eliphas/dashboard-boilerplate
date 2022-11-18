import { GiHamburgerMenu } from 'react-icons/gi';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FaUser } from 'react-icons/fa';
import { Button, IconButton } from "@mui/material";
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { logedin, NavExpandedState, thememode } from "../context/atoms";
const Appbar = () => {

    const [navExpanded, setNavExpanded] = useRecoilState(NavExpandedState);
    const [isLogedin, setIsLogedIn] = useRecoilState(logedin);
    const [themeMode, setThemeMode] = useRecoilState(thememode);

    return (
        <div className="appbar d-flex align-items-center justify-content-between px-4">
            <div className="d-flex flex-row align-items-center justify-content-center">
                <Button onClick={(e)=>setNavExpanded(!navExpanded)} style={{ color: 'var(--iconColor)', border: '1px solid  var(--backgroundDimmerColor)' }} className='py-2 py-0'>
                    <GiHamburgerMenu size={19} />
                </Button>
                <h5 className="my-auto mx-4">.</h5>
            </div>
            <div className="">
            <IconButton onClick={(e)=>{
                    if(themeMode == 'light') { setThemeMode('dark') }
                    else{ setThemeMode('light') }
                    console.log(themeMode);
                }} style={{ color: 'var(--iconColor)', border: '1px solid  transparent' }} className='p-2 mx-2'>
                    {
                        (themeMode == 'light') ? (<MdDarkMode size={19} />) : (<MdLightMode size={19} />)
                    }
                </IconButton>
                <Link to="/profile">
                    <IconButton style={{ color: 'var(--iconColor)', border: '1px solid  var(--backgroundDimmerColor)' }} className='p-2 mx-2'>
                        <FaUser size={19} />
                    </IconButton>
                </Link>
            </div>
        </div>
    );
}

export default Appbar;