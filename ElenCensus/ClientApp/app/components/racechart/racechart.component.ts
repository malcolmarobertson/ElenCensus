import { Component } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';
import { Chart } from 'chart.js';
//import * as D3 from 'd3';

declare let palette: any;

@Component({
    templateUrl: './racechart.component.html',
})
export class RaceChartComponent {

    raceChart = [];

    constructor(private _service: StatisticsService) { }

    

    ngOnInit() {
        this._service.getRaceStats()
            .subscribe(res => {

                let xAxisLabel = res['xAxis']
                let yAxisLabel = res['yAxis']
                let races = res['barData'].map(res => res.item1)
                let counts = res['barData'].map(res => res.item2)

                let plt = palette('tol', races.length).map(function (hex) {
                    return '#' + hex;
                });



                this.raceChart = new Chart('canvas', {
                    type: 'bar',
                    data: {
                        labels: races,
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