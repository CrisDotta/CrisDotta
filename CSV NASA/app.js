const xLabels = [];
const yLabels = [];
let fetchCSV = async () => {
    const response = await fetch("ZonAnn.Ts+dSST.csv");
    const table = await response.text()
    const split = table.split("\n").slice(1);
    split.forEach(elt => {
        const row = elt.split(",")
        const year = row[0];
        xLabels.push(year);
        const temp = row[1];
        yLabels.push (parseFloat(temp) + 14);
        console.log(year, temp)
    })
}


const ctx = document.getElementById('chart').getContext("2d");
new Chart(ctx, {
    type: 'line',
    data: {
        labels: xLabels,
        datasets: [{
            label: 'Global Average Temperature',
            data: yLabels,
            backgroundColor: "hsl(205, 78%, 95%)",
            borderColor: "black",
            fill: true,
            borderWidth: 1
        }]
    }
});

fetchCSV()