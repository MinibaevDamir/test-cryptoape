"use client";

import { JSX } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export interface ChartDataPoint {
  name: string;
  value: number;
}

interface CryptoChartProps {
  data: ChartDataPoint[];
  lineLabel: string;
  lineColor?: string;
}

const CryptoChart = ({
  data,
  lineLabel,
  lineColor = "#8884d8",
}: CryptoChartProps): JSX.Element => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          name={lineLabel}
          stroke={lineColor}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CryptoChart;
