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
  const stockName = stock;
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: `${stockName} Stock price by minute`
  },
    xAxis: {
      gapGridLineWidth: 0,
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
      inputEnabled: false
    },
    series: [
      {
        name: `${stockName} Name`,
        type: 'area',
        data: [1,2,3],
        gapSize: 5,
        tooltip: {
            valueDecimals: 2
        },
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
      .then((data) => setValues(data.values))
      .catch(console.log)
    fetch(`/show/${id}`)
      .then((response) => response.json())
      .then((data) => setStock(data.name))
      .catch(console.log)

    /*fetch("https://canvasjs.com/data/docs/ltcusd2018.json")
    .then(res => res.json())
    .then((data) => {
        price = [], volume = [];
        for (var i = 0; i < data.length; i++) {
          price.push([
            data[i].date,
            data[i].price
          ]);

          volume.push([
            data[i].date,
            data[i].volume
          ])
        }
    });*/
  }, []);

  /*const options = {
    title: {
      text: `${stock} stock chart`
    },
    series: [{
      type: 'price',
      id: 'aapl-ohlc',
      name: `${stock} Stock Price`,
      data: price
    }, {
      type: 'column',
      id: 'aapl-volume',
      name: `${stock} Volume`,
      data: volume,
      yAxis: 1
    }],
  }*/

  /*const updateSeries = () => {
    setChartOptions({ 
      series: [
          { data: [Math.random() * 5, 2, 1]}
        ]
    });
  }*/

  const handleClick = () => {
    console.log(values)
  }

  
  /*const MyStockChart = () => <HighchartsReact
    highcharts={Highcharts}
    constructorType={'stockChart'}
    options={chartOptions}
  />*/

  return (
    <PageWrapper>
      <h1>{stock}</h1>
      <div className='pa3'>
        <select onClick={handleClick}>
          <option>Date</option>
          { values.map(values => (
            <option key={values.id} value={values.id}>{values.date}</option>
            )) }
        </select>
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

/*
----------


    Highcharts.stockChart('container', {
        yAxis: [{
            labels: {
                align: 'left'
            },
            height: '80%',
            resize: {
                enabled: true
            }
        }, {
            labels: {
                align: 'left'
            },
            top: '80%',
            height: '20%',
            offset: 0
        }],
        tooltip: {
            shape: 'square',
            headerShape: 'callout',
            borderWidth: 0,
            shadow: false,
            positioner: function (width, height, point) {
                var chart = this.chart,
                    position;

                if (point.isHeader) {
                    position = {
                        x: Math.max(
                            // Left side limit
                            chart.plotLeft,
                            Math.min(
                                point.plotX + chart.plotLeft - width / 2,
                                // Right side limit
                                chart.chartWidth - width - chart.marginRight
                            )
                        ),
                        y: point.plotY
                    };
                } else {
                    position = {
                        x: point.series.chart.plotLeft,
                        y: point.series.yAxis.top - chart.plotTop
                    };
                }

                return position;
            }
        },
        series: [{
            type: 'ohlc',
            id: 'aapl-ohlc',
            name: 'AAPL Stock Price',
            data: ohlc
        }, {
            type: 'column',
            id: 'aapl-volume',
            name: 'AAPL Volume',
            data: volume,
            yAxis: 1
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 800
                },
                chartOptions: {
                    rangeSelector: {
                        inputEnabled: false
                    }
                }
            }]
        }
    });
});*/