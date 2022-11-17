window.onload = () => {
    const canvas1 = document.getElementById('myChart1');
    const canvas2 = document.getElementById('myChart2');
    const canvas3 = document.getElementById('myChart3');
    const canvas4 = document.getElementById('myChart4');
    
    const canvases = [canvas1,canvas2,canvas3,canvas4];

    for (let canvas of canvases){
        
        const ctx = canvas.getContext('2d');
            let dataLabels = [];
            let data = [];
            let data2 = [];
            for (let i = 1; i < 30; i++){
                dataLabels[i-1] = i+"일";
                data[i-1] = (Math.floor(Math.random() * 300) + 900) * 100;
                data2[i-1] = 13;
            }

            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dataLabels,
                    datasets: [
                        {
                        data: data,
                        //backgroundColor: '#0770E3',
                        backgroundColor: '#83B8F144',
                        borderColor: '#83B8F1',
                        borderWidth: 3,
                        pointRadius: 0,
                        fill: {value: 0}
                        },
                        // {
                        // data: data2,
                        // borderColor: '#83B8F1',
                        // borderWidth: 1,
                        // pointRadius: 0,
                        // },
                    ]
                },
                options: {
                    
                    elements:{
                        line:{
                            tension:0.3
                        }
                    },
                    plugins: {
                        legend:{
                            display: false
                        },
                        filler: {
                            propagate: false,
                        },
                    
                    },
                    interaction: {
                        intersect: false,
                    },
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            
                            grid:{
                                display: false,
                            },
                            ticks: {
                                display: false,
                            }
                        },
                        y: {
                            grid:{
                                display: false,
                            },
                            min: 80000,
                            max: 140000,
                            ticks: {
                                display: false,
                            }
                        }
                    }
                },
            });

            let smooth = false;
        }
}