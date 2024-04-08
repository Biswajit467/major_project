"user client";
import dynamic from "next/dynamic";
import React, { useRef, useEffect } from "react";
import "./apexchart.css";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CompareRadarChart = ({
  onClose,
  current_user_score,
  tobeCompared_student_score,
}) => {
  const popupRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
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
          color: "#121212",
        },
      },
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
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
      size: 3,
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
    legend: {
      position: "bottom",
      labels: {
        colors: "#ffffff",
      },
    },
  };

  const series = [
    {
      name: "You",
      data: current_user_score && [
        current_user_score?.academic,
        current_user_score?.art,
        current_user_score?.etc,
        current_user_score?.sports,
        current_user_score?.tech,
      ],
    },
    {
      name: tobeCompared_student_score?.student_details.name,
      data: tobeCompared_student_score && [
        tobeCompared_student_score?.academic,
        tobeCompared_student_score?.art,
        tobeCompared_student_score?.etc,
        tobeCompared_student_score?.sports,
        tobeCompared_student_score?.tech,
      ],
    },
  ];

  return (
    <div className="fixed top-0 left-0 w-screen h-full flex items-center justify-center z-50 bg-black bg-opacity-50 backdrop-blur">
      <div
        ref={popupRef}
        className="bg-slate-800 rounded-lg shadow-lg p-8 w-100"
      >
        <ApexChart
          type="radar"
          options={options}
          series={series}
          height={500}
          width={500}
        />
        <div>
          {tobeCompared_student_score?.overall > current_user_score?.overall ? (
            <div style={{ textAlign: "center" }}>
              You are{" "}
              {tobeCompared_student_score?.overall -
                current_user_score?.overall +
                1}{" "}
              points away to beat{" "}
              {tobeCompared_student_score?.student_details.name}
            </div>
          ) : (
            <div style={{ textAlign: "center" }}>
              {" "}
              you have already beated{" "}
              {tobeCompared_student_score?.student_details.name}{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareRadarChart;
