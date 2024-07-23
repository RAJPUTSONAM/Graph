import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LineChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Website Visitors',
        data: [150, 200, 180, 220, 240, 260, 280],
        fill: false,
        backgroundColor: 'rgba(75, 192, 192, 4.8)',
        borderColor: 'rgba(75, 192, 192, 0.9)',
      },
    ],
  };

  return <Line data={data} />;
};

export default LineChart;
