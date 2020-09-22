let staticChart = document.getElementById("staticChart").getContext("2d");
let staticChartLabels = ["Presentation", "Design", "Cost Analysis"];
let staticColorHex = ["#FC4D00", "#FF6420", "#FF7D44"];

let dynamicChart = document.getElementById("dynamicChart").getContext("2d");
let dynamicChartLabels = [
  "Acceleration",
  "Skin-pad",
  "Autocross",
  "Efficiency",
  "Endurance",
];
let dynamicColorHex = ["#4D00FF", "#9900FF", "#E500FF", "#FF00CC", "#FF0080"];

let myChart = new Chart(staticChart, {
  type: "doughnut",
  data: {
    datasets: [
      {
        data: [75, 150, 100],
        backgroundColor: staticColorHex,
      },
    ],
    labels: staticChartLabels,
  },
  options: {
    responsive: true,
    hover: {
      mode: null,
    },
    legend: {
      display: true,
      position: "right",

      labels: {
        fontSize: 20,
        fontColor: "#000000",
      }
    }

  },
});

let piechart = new Chart(dynamicChart, {
  type: "pie",
  data: {
    datasets: [
      {
        data: [75, 50, 150, 100, 300],
        backgroundColor: dynamicColorHex,
      },
    ],
    labels: dynamicChartLabels,
  },
  options: {
    responsive: true,
    hover: {
      mode: null,
    },
    legend: {
      display: true,
      position: "right",

      labels: {
        fontSize: 20,
        fontColor: "#000000",
      }
    },
  },
});
