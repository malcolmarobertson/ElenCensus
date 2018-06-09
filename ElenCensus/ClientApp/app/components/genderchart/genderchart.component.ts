import { Component } from '@angular/core';
import { StatisticsService } from '../../services/statistics.service';
import { Chart } from 'chart.js';

@Component({
    templateUrl: './genderchart.component.html',
})
export class GenderChartComponent {

    genderChart = [];

    constructor(private _service: StatisticsService) { }

    ngOnInit() {
        this._service.getGenderStats()
            .subscribe(res => {

                let xAxisLabel = res['xAxis']
                let yAxisLabel = res['yAxis']
                let genders = res['barData'].map(res => res.item1)
                let counts = res['barData'].map(res => res.item2)

                this.genderChart = new Chart('canvas', {
                    type: 'bar',
                    data: {
                        labels: genders,
                        datasets: [
                            {
                                data: counts,
                                borderColor: '#3cba9f',
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