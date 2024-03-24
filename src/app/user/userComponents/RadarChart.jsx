
"user client";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const RadarChart = (props) => {
const options = {
    chart: {
      id: "apexchart-example",
      title: {
        text: 'full overview', 
        align: 'center', 
        margin: 10,
        style: {
          fontSize: '20px', 
          fontWeight: 'bold', 
          color: '#ffffff'
        }
      }
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
        fontSize: '12px',
        color: 'black',
      },
      onDatasetHover: {
          highlightDataSeries: true,
      },
      style: {
        backgroundColor: 'white',
        color: 'black',
      },
  },
  };

  const series = [
    {
      name: "Overall Performance",
      data: props?.props && [
        props?.props.percentage_academic,
        props?.props.percentage_art,
        props?.props.percentage_etc,
        props?.props.percentage_sports,
        props?.props.percentage_tech,
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
