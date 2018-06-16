import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class StatisticsService {

    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl + 'api/StatisticData/';
    }

    dailyForecast() {
        return this._http.get("https://samples.openweathermap.org/data/2.5/history/city?q=Warren,OH&appid=b6907d289e10d714a6e88b30761fae22")
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getGenderStats() {
        return this._http.get(this.myAppUrl + 'GenderStats')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getCrimeStats() {
        return this._http.get(this.myAppUrl + 'CrimeStats')
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    testPy() {
        return '<div>malcolmpy</div>';
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}