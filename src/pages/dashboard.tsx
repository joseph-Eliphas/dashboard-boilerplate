import Charts from "../components/charts";
import Summary from "../components/summary";

const Dashboard = () => {
    return ( 
        <div>
            <div className="summary-section w-100 d-flex flex-wrap border-bottom py-4">
                <Summary name="name" value="100"/>
                <Summary name="name" value="100"/>
                <Summary name="name" value="100"/>
                <Summary name="name" value="100"/>
                <Summary name="name" value="100"/>
            </div>
            <div className="w-100">
                <Charts/>
            </div>
        </div>
     );
}
 
export default Dashboard;