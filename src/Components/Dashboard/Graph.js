import React from 'react'
import ReactEcharts from 'echarts-for-react';
import 'echarts/theme/macarons';

const COLOR = {
    success: 'rgba(139,195,74,.7)',
    info: 'rgba(1,188,212,.7)',
    text: '#3D4051',
    gray: '#EDF0F1',
  };

  let combo = {};
  combo.option = {
    title: {
      text: 'Number of Employee',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['0-20', '20-40', '40-50', '50-60', '6-70', '70-80', '80-90']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '0-10',
        type: 'line',
        stack: 'Total',
        data: [200, 400, 1, 134, 90, 230, 210]
      },
      {
        name: '10-20',
        type: 'line',
        stack: 'Total',
        data: [220, 182, 191, 234, 290, 330, 310]
      },
      {
        name: '20-30',
        type: 'line',
        stack: 'Total',
        data: [150, 232, 201, 154, 190, 330, 410]
      },
      {
        name: '30-40',
        type: 'line',
        stack: 'Total',
        data: [320, 332, 301, 334, 390, 330, 320]
      },
      {
        name: '40-50',
        type: 'line',
        stack: 'Total',
        data: [820, 932, 901, 934, 1290, 1330, 1320]
      }
    ]
  };


const Graph = () => {

  return (
    <div>
        <div>
        <ReactEcharts option={combo.option} theme={'macarons'} style={{ height: '350px' }} />
        </div>
    </div>
  )
}

export default Graph