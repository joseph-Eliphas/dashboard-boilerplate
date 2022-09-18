import { MdDashboard, MdCategory } from 'react-icons/md'

const Navigation = () => {
    return [
        {
            name: 'Dashboard',
            link: '/',
            icon: <MdDashboard size={19}/>,
        },
        {
            name: 'Profile',
            link: '/profile',
            icon: <MdCategory size={19}/>,
        }
    ]
}
 
export default Navigation;