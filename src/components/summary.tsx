const Summary = ({name='name', value='value', icon=null}:any) => {
    return ( 
        <div className="summary p-4 flex-none d-flex m-2 justify-content-between align-items-center">
            <div className=" flex-none d-flex flex-column justify-content-evenly align-items-start">
                <h4>{value}</h4>
                <small className="fw-light">{name} ~ .............</small>
            </div>
            <div className="icon h-100 d-flex justify-content-center align-items-center">
                {icon}
            </div>
        </div>
     );
}
 
export default Summary;