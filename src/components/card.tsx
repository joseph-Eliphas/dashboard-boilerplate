import './components.css';

const CustomCard = (props:any) => {
    const { children } = props;
    return ( 
        <div className="custom-card m-4">
            {children}
        </div>
    );
}
 
export default CustomCard;