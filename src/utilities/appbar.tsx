import { GiHamburgerMenu } from 'react-icons/gi';
import { FaUser } from 'react-icons/fa';
import { Button, IconButton } from "@mui/material";

const Appbar = () => {
    return (
        <div className="appbar d-flex align-items-center justify-content-between px-4">
            <div className="">
                <Button style={{ color: 'white' }} className='p-2'>
                    <GiHamburgerMenu size={19}/>
                </Button>

            </div>
            <div className="">
                <IconButton style={{ color: 'white' }} className='p-2'>
                    <FaUser size={19}/>
                </IconButton>
            </div>
        </div>
    );
}

export default Appbar;