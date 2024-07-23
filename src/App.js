import React from 'react';
import BarChart from './Components/BarChart';
import PieChart from './Components/PieChart'
import LineChart from './Components/LineChart';

function App() {
  return (
    <div className="App">
      <div style={{ width: '600px', margin: '0 auto' }}>
        <h2>Bar Chart</h2>
        <BarChart />
        <h2>Pie Chart</h2>
        <PieChart />
        <h2>Line Chart</h2>
        <LineChart />
      </div>
    </div>
  );
}

export default App;
