import React from 'react';
import
    {
        Chart as ChartJS,
        RadialLinearScale,
        ArcElement,
        Tooltip,
        Legend,
    } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Orders',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
                'rgba(255, 159, 64, 0.5)',
            ],
            borderWidth: 1,
        },
    ],
};

export function Order()
{
    return (<div className='w-[30%] h-5/6 text-slate-900 font-medium text-sm'>
        <h4 className='pb-4'>Total Orders:</h4>
        <PolarArea data={data} />
    </div>)
}
