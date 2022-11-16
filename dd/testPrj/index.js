import Chart from 'chart.js/auto';
import { getRelativePosition } from 'chart.js/helpers';

let myChartTwo = document.getElementById("myChartTwo").getContext("2d");



let barChartTwo = new Chart(myChartTwo,{
    type : 'bar',
    data : {
        labels:['22-11-16','22-11-17','22-11-18','22-11-19','22-11-20','22-11-21','22-11-22','22-11-23','22-11-24','22-11-25'
                ],
        datasets:[{
            label : '김포-제주도',
            data : [
                29000,
                10000,
                25000,
                20000,
                18000,
                29000,
                30000,
                34000,
                20000,
                19000
            ],
            backgroundColor:[
                'red',
                
            ],
            borderWidth : 3,
            borderColor : '#000',
            hoverBorderWidth : 2,
        }]
    }
})