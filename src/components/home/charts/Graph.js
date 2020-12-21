import React from 'react'
import ReactApexChart from 'react-apexcharts'

function Graph() {
    const series = [{
        name: 'Asset Balance (In Lakhs)',
        data: [100,200,300,400,500,600,700,800,900,1000]
      }];
      const options = {
        annotations: {
          points: [{
            x: '7',
            seriesIndex: 0,
            label: {
              borderColor: '#775DD0',
              offsetY: 0,
              style: {
                color: '#fff',
                background: '#775DD0',
              },
              text: '6.3%',
            }
          }]
        },
        chart: {
          height: 350,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            columnWidth: '50%',
            endingShape: 'rounded'  ,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2
        },
        
        grid: {
          row: {
            colors: ['#fff', '#f2f2f2']
          }
        },
        xaxis: {
            name: 'No of Years',
          labels: {
            rotate: -45
          },
          categories: ['1','2','3','4','5','6','7','8','9','10'
          ],
          tickPlacement: 'on'
        },
        yaxis: {
          title: {
            text: 'Asset Balance (In Lakhs)',
          },
        },
        fill: {
            colors: ['#3a008b'],
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100]
          },
        }
      };
    return (
        <div className="graph">
            <ReactApexChart options={options} series={series} type="bar" height={350} />
         </div>
            
        
    )
}

export default Graph
