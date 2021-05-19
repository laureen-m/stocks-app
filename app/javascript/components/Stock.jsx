import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import PageWrapper from "./common/PageWrapper";

function Stock() {
  const [stock, setStock] = useState([]);
  const { id } = useParams(); // allows to fetch data of selected stock per id 
  const [chartOptions, setChartOptions] = useState({
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
    rangeSelector: {
      buttons: [
        {
          type: "hour",
          count: 1,
          text: "1h",
        },
        {
          type: "day",
          count: 1,
          text: "1D",
        },
        {
          type: "day",
          count: 5,
          text: "5D",
        },
        {
          type: "month",
          count: 1,
          text: "1M",
        },
        {
          type: "all",
          count: 1,
          text: "All",
        },
      ],
      // buttons styles
      buttonTheme: { // styles for the buttons
        fill: 'none',
        stroke: 'none',
        'stroke-width': 0,
        r: 8,
        style: {
            color: 'black',
            fontWeight: 'bold'
        },
        states: {
            hover: {
            },
            select: {
                fill: 'yellow',
                style: {
                    color: 'black'
                }
            }
        }
      },
      inputBoxWidth: 100,
      inputBoxHeight: 18,
      inputStyle: {
        color: 'black',
        fontWeight: 'bold'
      },
      labelStyle: {
        color: 'silver',
        fontWeight: 'bold'
      },
      // end of button styles
      selected: 1,
      inputEnabled: true,
    },
     // navigator styles
    navigator: {
      maskFill: 'rgba(255, 255, 240, 0.5)',
      maskOpacity: '50%'
    },
     // end of navigator styles
    colors: ['#D6D6D6', '#6A6A6A'],
    series: [
      {
        name: "Price",
        type: "area",
        data: [0], // data updated upon useEffect call
        gapSize: 2,
        threshold: null,  // Y axis value to serve as the base for the area, for distinguishing between values above and below a threshold. 
      },
      {
        name: "Volume",
        type: "column",
        data: [0], // data updated upon useEffect call 
        gapSize: 2,
        yAxis: 1, // defines which yAxis the particular series is connected to in the yAxis array, with 0 being the first.
        threshold: null, // Y axis value to serve as the base for the area, for distinguishing between values above and below a threshold. 
      },
    ],
  });

  useEffect(() => {
    fetch(`/api/v1/show/${id}`)
      .then((response) => response.json())
      .then((data) => [
        setStock(data.name), // used to display stock name at the top of the page
        setChartOptions({ // update graph infos
          ...chartOptions,
          // title: {
          //   text: `${data.name} price by minute`,
          // },
          tooltip: {
            valueDecimals: 2,
            formatter: function() {
              const name = data.name;
              const primitiveDate = this.x;
              const date = new Date(primitiveDate);
              const formattedDate = date.toDateString();
              const formattedHour = date.getHours() + 5;
              const formattedMinute = date.toTimeString().slice(3, 5);
              const formattedTime = formattedHour + ":" + formattedMinute;
              return this.points.reduce(function (s, point) {
                return s + '<br/>' + point.series.name + ': ' +
                    point.y.toLocaleString();
                }, '<b>' + name + '</b>' +'<br/>' + formattedDate + ' ' + formattedTime);
            },
            shared: true,
          },
          series: [
            {
              data: data.values
                .sort(  // change date format of my DB to display correctly on the graph
                  (a, b) =>
                    parseFloat(a.datetime.split("-")[2]) -
                    parseFloat(b.datetime.split("-")[2])
                )
                .map((values) => [ // map through stock intraday data and display
                  new Date(values.datetime).valueOf(),
                  values.price,
                ]),
                point: {
                  events: {
                    click: handleClick.bind(this),
                  },
                }, 
            },
            {
              data: data.values
                .sort( // change date format of my DB to display correctly on the graph
                  (a, b) =>
                    parseFloat(a.datetime.split("-")[2]) -
                    parseFloat(b.datetime.split("-")[2])
                )
                .map((values) => [ // map through stock intraday data and display
                  new Date(values.datetime).valueOf(),
                  values.volume,
                ]), 
            },
          ],
        }),
      ])
      .catch(console.log);
  }, []);

  const handleClick = (chart) => {
    console.log(chart.point.options.y);
  };

  return (
    <PageWrapper>
      <h1 className="tc">{stock}</h1>
      <div className="pa3">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={chartOptions}
          handleClick={handleClick}
        />
      </div>
    </PageWrapper>
  );
}
export default Stock;
