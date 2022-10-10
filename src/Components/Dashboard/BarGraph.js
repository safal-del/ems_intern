import React from 'react';
import ReactEcharts from 'echarts-for-react';
import 'echarts/theme/macarons';

let combo={}

combo.option = {
    title: {
        text: 'Weekly attendence of Employee',
        left: 'center'
      },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri',]
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [90, 95, 85, 60, 70, 50,],
        type: 'bar'
      }
    ]
  };



const BarGraph = () => {
  return (
    <div>
        <ReactEcharts  option={combo.option} theme={'macarons'}  style={{ height: '450px'}} />

    </div>
  )
}

export default BarGraph