window.onload = () => {
    const canvas = document.getElementById('myChart');
    const ctx = canvas.getContext('2d');
        let dataLabels = [];
        let data = [];
        let data2 = [];
        for (let i = 1; i < 30; i++){
            dataLabels[i-1] = i+"일";
            data[i-1] = (Math.random() * 3 + 12);
            data2[i-1] = 13;
        }

        const myChart = new Chart(ctx, {
            type: 'bar',
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
                responsive: false,
                scales: {
                    x: {
                        
                        grid:{
                            display: true,
                            drawBorder : true,
                        },
                        ticks: {
                            font :{
                                size : 15,
                            }
                        }
                    },
                    y: {
                        grid:{
                            display: true,
                            drawBorder : true,
                        },
                        min: 11,
                        max: 16,
                        ticks: {
                            // Include a dollar sign in the ticks
                            callback: function(value, index, ticks) {
                                return '￦' + value * 10 + ',000';
                            },
                            font :{
                                size : 15,
                            }
                        }
                    }
                }
            },
        });

        let smooth = false;
    }