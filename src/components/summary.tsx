const Summary = ({name='name', value='value'}) => {
    return ( 
        <div className="summary p-4 flex-none d-flex flex-column m-2 justify-content-evenly align-items-start">
            <small className="fw-light">{name} ~</small>
            <h4>{value}</h4>
        </div>
     );
}
 
export default Summary;