import { MdDashboard, MdCategory } from 'react-icons/md'
import Dashboard from '../pages/dashboard';
import Profile from '../pages/profile';

const Navigation = () => {
    return [
        {
            name: 'Dashboard',
            link: '/',
            icon: <MdDashboard size={19}/>,
            clickable: true,
            component: Dashboard
        },
        {
            name: 'Profile',
            link: '/profile',
            icon: <MdCategory size={19}/>,
            clickable: true,
            component: Profile

        }
    ]
}
 
export default Navigation;