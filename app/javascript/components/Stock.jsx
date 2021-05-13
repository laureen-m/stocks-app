import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import PageWrapper from "./common/PageWrapper";

function Stock() {
  const [values, setValues] = useState([]);
  const [stock, setStock] = useState([]);
  const { id } = useParams();
  const [hoverData, setHoverData] = useState(null);
  const [chartOptions, setChartOptions] = useState({
    title: {
      text: `Stock data by minute`,
    },
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
          type: "all",
          count: 1,
          text: "All",
        },
      ],
      selected: 1,
      inputEnabled: true,
    },
    series: [
      {
        name: "Price",
        type: "area",
        data: [0], // data updated when useEffect is called with the actual values of my DB
        gapSize: 2,
        threshold: null,
      },
      {
        name: "Volume",
        type: "column",
        data: [0], // data updated when useEffect is called with the actual values of my DB
        gapSize: 2,
        yAxis: 1,
        threshold: null,
      },
    ],
    plotOptions: {
      series: {
          allowPointSelect: true
      }
    },
  });

  // const transformValues = (values) => {
  //   console.log(values);
  // };

  useEffect(() => {
    fetch(`/show/${id}`)
      .then((response) => response.json())
      .then((data) => [
        setValues(data.values),
        // transformValues(
        //   data.values.map((values) => [
        //     new Date(values.datetime).valueOf(),
        //     values.price,
        //   ])
        // ),
        setStock(data.name),
        setChartOptions({
          ...chartOptions,
          title: {
            text: `${data.name} price by minute`,
          },
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
                    point.y;
                }, '<b>' + name + '</b>' +'<br/>' + formattedDate + ' ' + formattedTime);
            },
            shared: true,
          },
          series: [
            {
              data: data.values
                .sort(
                  (a, b) =>
                    parseFloat(a.datetime.split("-")[2]) -
                    parseFloat(b.datetime.split("-")[2])
                )
                .map((values) => [
                  new Date(values.datetime).valueOf(),
                  values.price,
                ]), 
            },
            {
              data: data.values
                .sort(
                  (a, b) =>
                    parseFloat(a.datetime.split("-")[2]) -
                    parseFloat(b.datetime.split("-")[2])
                )
                .map((values) => [
                  new Date(values.datetime).valueOf(),
                  values.volume,
                ]), 
            },
          ],
        }),
      ])
      .catch(console.log);
  }, []);

  return (
    <PageWrapper>
      <h1>{stock}</h1>
      <div className="pa3">
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={"stockChart"}
          options={chartOptions}
        />
      </div>
    </PageWrapper>
  );
}
export default Stock;
