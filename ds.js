document.addEventListener("DOMContentLoaded", function () {
    // Sample Data for Sensors
    document.getElementById("soil-moisture").innerText = "45%";
    document.getElementById("soil-temp").innerText = "28°C";
    document.getElementById("city-temp").innerText = "32°C";
    document.getElementById("water-level").innerText = "Medium";

    // Yearly Temperature Graph
    var ctx1 = document.getElementById("yearlyTempChart").getContext("2d");
    var yearlyTempChart = new Chart(ctx1, {
        type: "line",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets: [{
                label: "Temperature (°C)",
                data: [10, 12, 18, 22, 25, 30, 32, 31, 28, 20, 15, 12],
                borderColor: "#0072ff",
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: { beginAtZero: false }
            }
        }
    });

    // Farmer User Doughnut Chart
    var ctx2 = document.getElementById("farmerChart").getContext("2d");
    var farmerChart = new Chart(ctx2, {
        type: "doughnut",
        data: {
            labels: ["Small Farmers", "Medium Farmers", "Large Farmers"],
            datasets: [{
                label: "Users",
                data: [50, 30, 20],
                backgroundColor: ["#0072ff", "#00c6ff", "#ff9800"]
            }]
        },
        options: {
            responsive: true
        }
    });
});