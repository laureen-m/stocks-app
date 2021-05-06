import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import PageWrapper from './common/PageWrapper';

function Stock() {
  const [values, setValues] = useState([]);
  const [stock, setStock] = useState([]);
  const { id } = useParams();
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: `Stock price by minute`
  },
    xAxis: {
      type: "datetime",
      tickInterval: 24 * 3600 * 1000,
      /*labels: {
        formatter: function() {
          return Highcharts.dateFormat('%Y %M %d', this.value);
        }
      }*/
    },
    rangeSelector: {
      buttons: [{
          type: 'hour',
          count: 1,
          text: '1h'
      }, {
          type: 'day',
          count: 1,
          text: '1D'
      }, {
          type: 'all',
          count: 1,
          text: 'All'
      }],
      selected: 1,
      inputEnabled: true
    },
    series: [{
        name: 'Stock',
        type: 'area',
        data: [0],
        gapSize: 5,
        tooltip: {
          valueDecimals: 2,
          xDateFormat: '%A, %b %e, %H:%M',
          dateTimeLabelFormats: '%A, %b %e, %H:%M',
        },
        pointStart: Date.UTC(2021, 2, 19),
        fillColor: {
            linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1
            },
            stops: [
                [0, Highcharts.getOptions().colors[0]],
                [1, Highcharts.color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
            ]
        },
        threshold: null
    }],
    plotOptions: {
      series: {
        point: {
          events: {
            mouseOver(e){
              setHoverData(e.target.category)
            }
          }
        }
      }
    }
  });

  
  useEffect(() => {
    fetch(`/show/${id}`)
      .then((response) => response.json())
      .then((data) => [setValues(data.values), setChartOptions({ ...chartOptions, series: [{
        data: data.values.map(values => ([values.datetime, values.price]))
      }]})])
      .catch(console.log)
    /*fetch(`/show/${id}`)
      .then((response) => response.json())
      .then((data) => [setStock(data.name), setChartOptions({ ...chartOptions, 
        title: {
          text: `${data.name} price by minute`
        },
        series: [{
          name: data.name
        }]})
      ])
      .catch(console.log)*/
    }, []);

  const handleClick = () => {
    console.log(chartOptions.series[0].data);
    console.log(values)
  }

  return (
    <PageWrapper>
      <h1>{stock}</h1>
      <div className='pa3'>
        <button onClick={handleClick}>Action</button>
        <br />
        <p></p>
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={chartOptions}
        /> 
      </div>
    </PageWrapper>
  );
}
export default Stock;