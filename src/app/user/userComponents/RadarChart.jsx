// components/charts.tsx (or .jsx)
import dynamic from 'next/dynamic';
const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

export const RadarChart = (props) => {
  // const {percentage_academic , percentage_art , percentage_etc , percentage_sports , percentage_tech } = props;
  console.log("props from radarchart" , props)
  // console.log("props from radarchart" , percentage_academic && percentage_academic , percentage_art , percentage_etc , percentage_sports , percentage_tech)
    const options = {
        chart: {
            id: 'apexchart-example',
        },
        xaxis: {
            categories: ["Academic" , "Arts" , "ECA" , "Sports" , "Tech" ],
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['purple'],
          dashArray: 0
        },
        markers: {
          size: 4,
          colors: 'red',
          strokeColors: 'blue',
          hover: {
            size: 7,
            color:'red',
            sizeOffset: 3
          },
        }
    };

    const series = [
        { name: 'series-1', data: [props?.props.percentage_academic , props?.props.percentage_art , props?.props.percentage_etc , props?.props.percentage_sports , props?.props.percentage_tech ] },
    ];

    return (
        <ApexChart type="radar" options={options} series={series} height={500} width={500} />
    );
}
