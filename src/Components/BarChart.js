import React from "react";
import { Bar } from "react-chartjs-2";
import {Chart as ChartJS, BarElement, CategoryScale, Tooltip, Title, Legend, LinearScale} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, Tooltip, Title, Legend, LinearScale);

const BarChart = () => {
    const data = {
    labels:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets:[
        {
            label:['Sales'],
            data:[23, 45, 67, 89, 95, 54],
            backgroundColor:[   
                'lightblue',
                'violet',
                'purple',
                'pink',
                'lightgreen',
                'seagreen'
            ],
            borderColor:[
                'lightblue',
                'violet',
                'purple',
                'pink', 
                'lightgreen',
                'seagreen'
            ],
        }
    ]
};
    return(
        <Bar data={data}/>
    )
}

export default BarChart;