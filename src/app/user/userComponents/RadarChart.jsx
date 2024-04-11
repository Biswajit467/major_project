"user client";
import dynamic from "next/dynamic";
import "./apexchart.css";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadarChart = (props) => {
  const options = {
    chart: {
      id: "apexchart-example",
      title: {
        text: "full overview",
        align: "center",
        margin: 10,
        style: {
          fontSize: "20px",
          fontWeight: "bold",
          color: "#ffffff",
        },
      },
    },
    xaxis: {
      categories: ["Academic", "Arts", "ECA", "Sports", "Tech"],
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["purple"],
      dashArray: 0,
    },
    markers: {
      size: 4,
      colors: "#735dd5",
      strokeColors: "#735dd5",
      hover: {
        size: 7,
        color: "sky",
        sizeOffset: 3,
      },
    },
    tooltip: {
      enabled: true,
      followCursor: true,
      hideEmptySeries: true,
      fillSeriesColor: true,
      theme: true,
      style: {
        fontSize: "12px",
        color: "black",
      },
      onDatasetHover: {
        highlightDataSeries: true,
      },
      style: {
        backgroundColor: "white",
        color: "black",
      },
    },
  };

  const series = [
    {
      name: "Overall Performance",
      data: props?.props && [
        props?.props.percentage_academic
          ? Math.ceil(props?.props.percentage_academic)
          : 0,
        props?.props.percentage_art
          ? Math.ceil(props?.props.percentage_art)
          : 0,
        props?.props.percentage_etc
          ? Math.ceil(props?.props.percentage_etc)
          : 0,
        props?.props.percentage_sports
          ? Math.ceil(props?.props.percentage_sports)
          : 0,
        props?.props.percentage_tech
          ? Math.ceil(props?.props.percentage_tech)
          : 0,
      ],
    },
  ];

  return props?.props ? (
    <ApexChart
      type="radar"
      options={options}
      series={series}
      height={400}
      width={400}
    />
  ) : null;
};

export default RadarChart;
