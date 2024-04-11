import dynamic from "next/dynamic";
import React from "react";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export const RadialMultiBarChart = (props) => {
  console.log("prosp from radial multi bart", props)
  const options = {
    chart: {
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
      },
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
    plotOptions: {
      pie: {
        customScale: 0.8,
      },
    },
    legend: {
      position: "bottom",
      labels: {
        colors: "#ffffff",
      },
    },

    labels: ["CSE", "CIVIL", "ME", "EE"],
  };
  // const series = [44, 55, 41, 17, 15];
  const series = [
    props?.data?.total_students_by_branch[0]?.total_students ? props?.data?.total_students_by_branch[0]?.total_students : 0,
    props?.data?.total_students_by_branch[1]?.total_students ? props?.data?.total_students_by_branch[1]?.total_students : 0,
    props?.data?.total_students_by_branch[2]?.total_students ? props?.data?.total_students_by_branch[2]?.total_students : 0,
    props?.data?.total_students_by_branch[3]?.total_students  ? props?.data?.total_students_by_branch[3]?.total_students : 0,
  ];

  console.log("series ", series)
  return (
    <>
      {props.data ?
        <ApexChart
          type="donut"
          options={options}
          series={series}
          height={400}
          width={400}
        /> : null}
    </>

  );
};
