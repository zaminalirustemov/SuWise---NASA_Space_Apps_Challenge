import { arcticSea, global } from "./datas.js";

// Extract years and kilometers from the data
const years = arcticSea.map((item) => item.year);
const kilometers = arcticSea.map((item) => item.km);

// Get the canvas element and create a chart
const ctx = document.getElementById("lineChart").getContext("2d");
new Chart(ctx, {
  type: "line",
  data: {
    labels: years,
    datasets: [
      {
        label: "Arctic Sea Ice (in million sq km)",
            borderColor: "#96DEFD",
        borderWidth: 2,
            pointBackgroundColor: "#96DEFD",
        pointRadius: 5,
        data: kilometers,
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Ice Area (million sq km)",
        },
      },
    },
  },
});

// Data 2

const years2 = global.map((item) => item.year);
const noSmoothData = global.map((item) => item.noSmooth);
const lowessData = global.map((item) => item.lowess);

const ctx2 = document.getElementById("lineChart2").getContext("2d");
new Chart(ctx2, {
  type: "line",
  data: {
    labels: years2,
    datasets: [
      {
        label: "No Smooth",
        borderColor: "#96DEFD",
        backgroundColor: "transparent",
        data: noSmoothData,
        fill: false,
      },
      {
        label: "Lowess",
        borderColor: "#EB82D4",
        backgroundColor: "transparent",
        data: lowessData,
        fill: false,
      },
    ],
  },
  options: {
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        },
      },
      y: {
        title: {
          display: true,
          text: "Value",
        },
      },
    },
  },
});
