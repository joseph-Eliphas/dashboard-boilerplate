import Charts from "../components/charts";
import Summary from "../components/summary";
import { BiBarChartAlt } from 'react-icons/bi';
import { BsFillPieChartFill } from 'react-icons/bs';
import { MdStackedLineChart } from 'react-icons/md';
import { FaUserFriends } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import { Button } from "@mui/material";
import { openConfirmationModel } from "../components/functions";

const Dashboard = () => {

    const test = () => {
        openConfirmationModel({ title: "", message: "", onCancel: async () => { }, onConfirm: async () => { } })
    }

    return (
        <div>
            <div className="summary-section w-100 d-flex flex-wrap border-bottom">
                <Summary name="name" value="100" icon={<MdStackedLineChart size={29} />} />
                <Summary name="name" value="100" icon={<BsFillPieChartFill size={29} />} />
                <Summary name="name" value="100" icon={<BiBarChartAlt size={29} />} />
                <Summary name="name" value="100" icon={<FaUserFriends size={29} />} />
                <Summary name="name" value="100" icon={<FiActivity size={29} />} />
            </div>
            <div className="w-100">
                <Button>Test</Button>
                <Charts />
            </div>
        </div>
    );
}

export default Dashboard;