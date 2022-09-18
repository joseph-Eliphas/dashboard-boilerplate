import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            backgroundColor: 'rgb(53, 161, 255)',
        },
        {
            label: 'Dataset 2',
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            backgroundColor: 'rgb(255, 164, 53)',
        },
    ],
};
const Charts = () => {
    return (
        <div className="fg-color-custom chart p-4 my-4 w-100">
            <Bar height="50%" options={options} data={data} />
        </div>
    );
}

export default Charts;