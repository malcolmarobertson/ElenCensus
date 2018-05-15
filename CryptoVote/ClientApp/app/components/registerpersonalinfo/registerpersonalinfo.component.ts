import { Component, OnInit } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CensusService } from '../../services/census.service';

@Component({
    templateUrl: './RegisterPersonalInfo.component.html'
})

export class registerpersonalinfo implements OnInit {
    personalInfoForm: FormGroup;
    formTitle: string = "Census Details Already Exist";
    personalInfoID: number;
    errorMessage: any;

    constructor(private _fb: FormBuilder, private _avRoute: ActivatedRoute,
        private _censusService: CensusService, private _router: Router) {
        if (this._avRoute.snapshot.params["id"]) {
            this.personalInfoID = this._avRoute.snapshot.params["id"];
        }

        this.personalInfoForm = this._fb.group({
            personalInfoID: 2,
            idNumber: ['', [Validators.required]],
            age: ['', [Validators.required]],
            title: ['', [Validators.required]],
            firstName: ['', [Validators.required]],
            surname: ['', [Validators.required]],
            gender: ['', [Validators.required]],
            race: ['', [Validators.required]],
            maritalStatus: ['', [Validators.required]],
            religion: ['', [Validators.required]],
            addressLine1: ['', [Validators.required]],
            addressLine2: ['', [Validators.required]],
            addressLine3: ['', [Validators.required]],
            addressLine4: ['', [Validators.required]],
            province: ['', [Validators.required]],
            countryOfBirth: ['', [Validators.required]]


        })

    }

    ngOnInit() {

        if (this.personalInfoID > 0) {
            this._censusService.getPersonalInfoById(this.personalInfoID)
                .subscribe(resp => this.personalInfoForm.setValue(resp)
                    , error => this.errorMessage = error);
        }

    }

    save() {

        if (!this.personalInfoForm.valid) {
            return;
        }

        //if (this.title == "Create") {
        //    this._censusService.savePersonalInfo(this.personalInfoForm.value)
        //        .subscribe((data) => {
        //            this._router.navigate(['/home']);
        //        }, error => this.errorMessage = error)
        //}
        //else if (this.title == "Edit") {
        //    this._censusService.updatePersonalInfo(this.personalInfoForm.value)
        //        .subscribe((data) => {
        //            this._router.navigate(['/home']);
        //        }, error => this.errorMessage = error)
        //}
    }

    cancel() {
        this._router.navigate(['/home']);
    }

    get age() { return this.personalInfoForm.get('age'); }
    get title() { return this.personalInfoForm.get('title'); }
    get firstName() { return this.personalInfoForm.get('firstName'); }
    get surname() { return this.personalInfoForm.get('surname'); }
    get gender() { return this.personalInfoForm.get('gender'); }
    get race() { return this.personalInfoForm.get('race'); }
    get maritalStatus() { return this.personalInfoForm.get('maritalStatus'); }
    get religion() { return this.personalInfoForm.get('religion'); }
    get addressLine1() { return this.personalInfoForm.get('addressLine1'); }
    get addressLine2() { return this.personalInfoForm.get('addressLine2'); }
    get addressLine3() { return this.personalInfoForm.get('addressLine3'); }
    get addressLine4() { return this.personalInfoForm.get('addressLine4'); }
    get province() { return this.personalInfoForm.get('province'); }
    get countryOfBirth() { return this.personalInfoForm.get('countryOfBirth'); }

    //get fullName() {
    //    return this.voterForm.get('fullName');
    //}
}  