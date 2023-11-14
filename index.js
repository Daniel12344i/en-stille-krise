document.addEventListener("DOMContentLoaded", function() {
    // Hent data fra tabellen
    var table = document.getElementById("data-table");
    var data = [];
    for (var i = 1; i < table.rows.length; i++) {
        var rowData = {
            year: table.rows[i].cells[0].innerHTML,
            men: parseInt(table.rows[i].cells[1].innerHTML),
            women: parseInt(table.rows[i].cells[2].innerHTML),
            total: parseInt(table.rows[i].cells[3].innerHTML)
        };
        data.push(rowData);
    }

    // Opprett en enkel linjegraf
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(item => item.year),
            datasets: [
                {
                    label: 'Menn',
                    borderColor: 'blue',
                    data: data.map(item => item.men)
                },
                {
                    label: 'Kvinner',
                    borderColor: 'pink',
                    data: data.map(item => item.women)
                },
                {
                    label: 'Begge kjønn',
                    borderColor: 'green',
                    data: data.map(item => item.total)
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom'
                },
                y: {
                    type: 'linear',
                    position: 'left'
                }
            }
        }
    });
});
