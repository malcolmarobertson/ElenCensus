import { Component } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';
import { Chart } from 'chart.js';

declare let palette: any;

@Component({
    templateUrl: './crimechart.component.html',
})
export class CrimeChartComponent {

    crimeChart = [];

    constructor(private _service: StatisticsService) { }

    ngOnInit() {
        this._service.getCrimeStats()
            .subscribe(res => {

                let xAxisLabel = res['xAxis']
                let yAxisLabel = res['yAxis']
                let crimes = res['barData'].map(res => res.item1)
                let counts = res['barData'].map(res => res.item2)

                let plt = palette('tol', crimes.length).map(function (hex) {
                    return '#' + hex;
                });

                this.crimeChart = new Chart('canvas', {
                    type: 'bar',
                    data: {
                        labels: crimes,
                        datasets: [
                            {
                                data: counts,
                                backgroundColor: plt,
                                fill: false
                            }
                        ]
                    },
                    options: {
                        legend: {
                            display: false
                        },
                        scales: {
                            xAxes: [{
                                display: true
                            }],
                            yAxes: [{
                                display: true
                            }]
                        }
                    }
                })

            })
    }
}