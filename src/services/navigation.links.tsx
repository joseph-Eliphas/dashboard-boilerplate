import { MdDashboard, MdCategory } from 'react-icons/md'

const Navigation = () => {
    return [
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: <MdDashboard size={19}/>,
        },
        {
            name: 'Dashboard',
            link: '/dashboard',
            icon: <MdCategory size={19}/>,
        }
    ]
}
 
export default Navigation;