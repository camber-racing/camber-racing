const staticChart = document.getElementById("staticChart").getContext("2d");
const staticChartLabels = ["Presentation", "Design", "Cost Analysis"];
const staticColorHex = ["#FC4D00", "#FF6420", "#FF7D44"];

const dynamicChart = document.getElementById("dynamicChart").getContext("2d");
dynamicChartLabels = [
  "Acceleration",
  "Skid-pad",
  "Autocross",
  "Efficiency",
  "Endurance",
];
const dynamicColorHex = ["#4D00FF", "#9900FF", "#E500FF", "#FF00CC", "#FF0080"];

const myChart = new Chart(staticChart, {
  type: "pie",
  data: {
    labels: staticChartLabels,
    datasets: [
      {
        backgroundColor: staticColorHex,
        data: [75, 150, 100],
        radius: "75%",
        hoverOffset: 10,
        offest: 40,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 16,
          },
        },
      },
    },
  },
});

const dChart = new Chart(dynamicChart, {
  type: "pie",
  data: {
    labels: dynamicChartLabels,
    datasets: [
      {
        backgroundColor: dynamicColorHex,
        data: [75, 50, 150, 100, 300],
        radius: "75%",
        hoverOffset: 10,
        offest: 40,
      },
    ],
  },
  options: {
    responsive: true,
    scales: {},
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          font: {
            size: 16,
          },
        },
      },
    },
  },
});
