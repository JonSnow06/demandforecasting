import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const DoughnutChart = () => {
  const data = [
    { name: "Red", value: 300 },
    { name: "Blue", value: 50 },
    { name: "Yellow", value: 100 },
  ];

  const COLORS = ["#FF6384", "#36A2EB", "#FFCD56"];

  return (
    <PieChart width={400} height={400} style={{}}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        innerRadius={70} // This makes it a doughnut chart
        outerRadius={120}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default DoughnutChart;
