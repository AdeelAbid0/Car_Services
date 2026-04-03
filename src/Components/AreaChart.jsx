import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const AreaChart = ({ color }) => {
  const [state] = useState({
    series: [
      {
        name: "",
        data: [10, 15, 12, 15],
      },
    ],
    options: {
      chart: {
        type: "area",
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: false,
        },
      },
      stroke: {
        curve: "smooth",
        width: 3,
        colors: [color], // STROKE (LINE) SETTINGS
      },

      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0.5,
          stops: [100, 100, 100],
        },
        colors: [color], // shadow
      },

      xaxis: {
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: { labels: { show: false } },
      grid: { show: false },
      tooltip: { enabled: false },
      legend: { show: false },
      dataLabels: { enabled: false },
      markers: { size: 0 },
    },
  });

  return (
    <ReactApexChart
      options={state.options}
      series={state.series}
      type="area"
      // height={80}
    />
  );
};

export default AreaChart;
