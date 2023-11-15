document.addEventListener("DOMContentLoaded", function () {
  var ctx = document.getElementById("myChart").getContext("2d");

  var data = {
    labels: ["2015", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Menn",
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(75, 192, 192, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
        data: [404, 468, 484, 436],
      },
      {
        label: "Kvinner",
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 99, 132, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
        data: [192, 175, 176, 174],
      },
      {
        label: "Begge kjønn",
        backgroundColor: [
          "rgba(255, 205, 86, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(255, 205, 86, 0.6)",
        ],
        borderColor: [
          "rgba(255, 205, 86, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
        data: [596, 643, 660, 610],
      },
    ],
  };

  var options = {
    scales: {
      x: {
        stacked: false, // Ikke stablet på x-aksen
      },
      y: {
        stacked: false, // Ikke stablet på y-aksen
      },
    },
  };

  var myBarChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
});
