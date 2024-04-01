"user client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "./apexchart.css";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const ColumnGraph = (props) => {
  const [formattedData, setFormattedData] = useState(null);
  useEffect(() => {
    if (props?.props) {
      const data_fromatation = props?.props.map((item) => ({
        x: `sem ${item.sem}`,
        y: Math.ceil(item.overall),
      }));
      setFormattedData(data_fromatation);
    } else {
      null;
    }
  }, [props]);

  const options = {
    chart: {
      type: "bar",
    },
    plotOptions: {
      bar: {
        distributed: true,
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
    xaxis: {
      labels: {
        style: {
          colors: "#ffffff",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#ffffff",
        },
      },
    },
    legend: {
      position: "right",
      labels: {
        colors: "#ffffff",
      },
    },
    markers: {
      size: 5,
      strokeOpacity: 0.1,
      fillOpacity: 0.1,
    },
  };

  const series = [
    {
      data: formattedData,
    },
  ];
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <ApexChart
        type="bar"
        options={options}
        series={series}
        height={500}
        width={1000}
      />
    </div>
  );
};
