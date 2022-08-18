import React from "react";
import "../App.css";
import ReactEcharts from "echarts-for-react";
import x from "../Wine-Data.json";

const BarChart = () => {
  //Calculation on data for Alocohol v/s Average(Malic Acid on the basis of class)

  var dataset = [];
  var l1 = 0;
  var add1 = 0;
  var add2 = 0;
  var l2 = 0;
  var add3 = 0;
  var l3 = 0;

  for (let i = 0; i < x.length; i++) {
    if (x[i]["Alcohol"] === 1) {
      add1 = add1 + Number(x[i]["Malic Acid"]);
      l1 = i + 1;
    }
    if (x[i]["Alcohol"] === 2) {
      add2 = add2 + Number(x[i]["Malic Acid"]);
      l2 = i + 1;
    }
    if (x[i]["Alcohol"] === 3) {
      add3 = add3 + Number(x[i]["Malic Acid"]);
      l3 = i + 1;
    }
  }

  for (let i = 0; i < x.length; i++) {
    if (x[i]["Alcohol"] === 1) {
      dataset.push([x[i]["Alcohol"], add1 / l1]);
    }
    if (x[i]["Alcohol"] === 2) {
      dataset.push([x[i]["Alcohol"], add2 / (l2 - l1)]);
    }
    if (x[i]["Alcohol"] === 3) {
      dataset.push([x[i]["Alcohol"], add3 / (l3 - l2)]);
    }
  }

  const bar = {
    tooltip: {
      trigger: "axis",
      position: function (pt) {
        return [pt[0], "10%"];
      },
    },
    title: {
      left: "center",
      text: "Alcohol v/s Avg(Malic Acid)",
    },
    xAxis: {
      type: "category",
      name: "Alcohol",
    },
    yAxis: {
      type: "value",
      name: "Average(Malic acid)",
    },

    series: [
      {
        data: dataset,
        type: "bar",
        color: "rgb(255, 70, 131)",
        barWidth: "50%",
        barGap: "10%",
        barCategoryGap: "10%",
      },
    ],
  };
  return (
    <div>
      <ReactEcharts option={bar} />
    </div>
  );
};

export default BarChart;
