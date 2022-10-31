import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/theme/macarons';

const COLOR = {
  success: 'rgba(139,195,74,.7)',
  info: 'rgba(1,188,212,.7)',
  text: '#3D4051',
  gray: '#EDF0F1',
};
let valueofchartage10_20 = localStorage.getItem("piedata");
console.log(valueofchartage10_20);

let combo = {};

combo.option = {
    title: {
      text: 'Employees age',
      subtext: 'Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: valueofchartage10_20, name: '10-20' },
          { value: 735, name: '20-30' },
          { value: 580, name: '30-40' },
          { value: 600, name: '40-50' },
          { value: 300, name: '50-60' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  // const handleevent =()=>{

  // }

const Chart = () => (
  <div className="box box-default mb-4">
    <div className="box-body">
      <ReactEcharts  option={combo.option} theme={'macarons'} style={{ height: '450px' }} />
    </div>
  </div>
);

export default Chart;

