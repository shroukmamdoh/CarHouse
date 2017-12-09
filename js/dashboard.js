/* function of sidebar action &resize width */
        $(document).ready(function(){
            $('#sidebar-btn').click(function(){
                $('#sidebar').toggleClass('visible');
            $('#content').toggleClass('visible');
            });
        });

/* function of office chart */ 
new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["type1", "type2", "type3"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#dc3c37", "rgb(243, 156, 18)","rgb(52, 152, 219)"],
        data: [2478,5267,734]
      }]
    },
    options: {
      title: {
        display: true,
        text: ''
      }
    }
});     

/*chart of Factories*/
var speedCanvas = document.getElementById("speedChart");

Chart.defaults.global.defaultFontFamily = "Lato";
Chart.defaults.global.defaultFontSize = 14;

var speedData = {
  labels: ["January", "February", "March","January", "February", "March",],
  datasets: [{
    label: "Factories relationshipes ",
    data: [0, 59, 75, 20, 20, 55, 10],
  }]
};

var chartOptions = {
  legend: {
    display: true,
    position: 'top',
    labels: {
      boxWidth: 80,
      fontColor: 'black'
    }
  }
};

var lineChart = new Chart(speedCanvas, {
  type: 'line',
  data: speedData,
  options: chartOptions
});

/* script os pupup img */

