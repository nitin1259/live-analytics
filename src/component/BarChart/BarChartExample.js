import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default class BarChartExample extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/30763kr7/";

  render() {
    console.log(this.props.data);
    const data = this.props.data.slice(
      Math.max(this.props.data.length - 10, 1)
    );
    return (
      // <BarChart
      //   width={500}
      //   height={300}
      //   data={data}
      //   isAnimationActive={false}
      //   margin={{
      //     top: 5,
      //     right: 30,
      //     left: 20,
      //     bottom: 5,
      //   }}
      // >
      //   <CartesianGrid strokeDasharray="3 3" />
      //   <XAxis dataKey="name" />
      //   <YAxis />
      //   <Tooltip />
      //   <Legend />
      //   <Bar dataKey="pv" fill="#8884d8" />
      //   <Bar dataKey="uv" fill="#82ca9d" />
      // </BarChart>
      <LineChart
        width={1100}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          isAnimationActive={false}
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
        />
        <Line
          isAnimationActive={false}
          type="monotone"
          dataKey="uv"
          stroke="#82ca9d"
        />
      </LineChart>
    );
  }
}
