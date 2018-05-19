import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CensusService {
    myAppUrl: string = "";

    constructor(private _http: Http, @Inject('BASE_URL') baseUrl: string) {
        this.myAppUrl = baseUrl + 'api/PersonalInfo/';
    }

    getCensusData() {
        return this._http.get(this.myAppUrl + 'Index') 
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    getPersonalInfoById(idNumber: string) {
        return this._http.get(this.myAppUrl + 'Details/' + idNumber)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    savePersonalInfo(personalInfo) {
        return this._http.post(this.myAppUrl + 'Create', personalInfo)
            .map((response: Response) => response.json())
            .catch(this.errorHandler)
    }

    updatePersonalInfo(personalInfo) {
        return this._http.put(this.myAppUrl + 'Edit', personalInfo)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    deletePersonalInfo(personalInfo) {
        return this._http.delete(this.myAppUrl + 'Delete/' + personalInfo)
            .map((response: Response) => response.json())
            .catch(this.errorHandler);
    }

    errorHandler(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}  