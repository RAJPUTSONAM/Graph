import React from "react";
import { Chart as chartJS, Tooltip, LineElement, CategoryScale, PointElement,Title,Legend, LinearScale, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

chartJS.register(Tooltip,Legend,LinearScale,LineElement,CategoryScale,PointElement,Title, ArcElement);

const PieChart = () => {
    const data = {
        labels:['Red', 'Blue', 'Green', 'Orange', 'Yellow'],
        datasets: [
            {
                label:'Colors',
                data:[223,112,222,344,88],
                backgroundColor:[
                    'Red',
                    'Blue',
                    'Green',
                    'Orange',
                    'Yellow',
                ],
                borderColor:[
                    'rgba(225, 56, 11, 0.2)',
                    'rgba(225, 56, 11, 0.2)',
                    'rgba(225, 56, 11, 0.2)',
                    'rgba(225, 56, 11, 0.2)',
                    'rgba(225, 56, 11, 0.2)',
                ],
            }
        ]
    }
    return(
        <Pie data={data}/>
    )
}
export default PieChart