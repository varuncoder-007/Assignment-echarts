import React from "react";
import ReactEcharts from "echarts-for-react";
import x from "../Wine-Data.json";

const ScatterPlot = () => {
  //required data for Color Intensity v/s Hue
  var dataArray = [];
  for (let i = 0; i < x.length; i++) {
    dataArray.push([x[i]["Color intensity"], x[i]["Hue"]]);
  }
  dataArray.sort((a, b) => {
    return a[0] - b[0];
  });

  const option = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "Color Intensity v/s Hue",
    },

    dataZoom: [
      {
        type: "inside",
        start: 0,
        end: 20,
      },
      {
        start: 0,
        end: 20,
      },
    ],
    xAxis: {
      type: "category",
      name: "Color Intensity",
      min: 0,
    },
    yAxis: {
      type: "value",
      name: "Hue",
    },

    series: [
      {
        data: dataArray,

        symbolSize: 10,
        type: "scatter",
      },
    ],
  };
  return <ReactEcharts option={option} />;
};

export default ScatterPlot;
