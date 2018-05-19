import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CensusService } from '../../services/census.service';

@Component({
    templateUrl: './CensusLogin.component.html'
})

export class censuslogin implements OnInit {
    censusLoginForm: FormGroup;
    title: string = "Login";
    errorMessage: any;

    constructor(private _fb: FormBuilder,
        private _censusService: CensusService, private _router: Router) {
        }
    

    ngOnInit() {

        this.censusLoginForm = this._fb.group({
            idNumber: ['', Validators.required]
        })
    }
    
    login() {
        this._censusService.getPersonalInfoById(this.censusLoginForm.value.idNumber)
            .subscribe((data) => {
                this._router.navigate(['/register-personal-info/', this.censusLoginForm.value.idNumber]);
            }, error => this.errorMessage = error)
    }

    cancel() {
        this._router.navigate(['/home']);
    }

    get idNumber() { return this.censusLoginForm.get('idNumber'); }

}  