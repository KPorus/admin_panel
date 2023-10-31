import React from 'react';
import
{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import dynamic from 'next/dynamic';
const ChartTitle = dynamic(() => import('./ChartTitle'))

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Total user login',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            fill: true,
            label: 'User login',
            data: [100,400,500,200,700,150,430],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

export function User_login()
{
    return (<div className='w-[60%] h-full text-slate-900 font-medium text-sm ml-7'>
        <ChartTitle title="Total user login"></ChartTitle>
        <Line options={options} data={data} />
    </div>)
}
