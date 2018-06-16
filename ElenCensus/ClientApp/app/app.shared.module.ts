import { NgModule } from '@angular/core';  
import { VoterService } from './services/voterroll.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
//import { NgxTrimDirectiveModule } from 'ngx-trim-directive';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { FetchVoterComponent } from './components/fetchvoter/fetchvoter.component';
import { createvoter } from './components/addvoter/addvoter.component';
import { registerpersonalinfo } from './components/registerpersonalinfo/registerpersonalinfo.component';
import { censuslogin } from './components/censuslogin/censuslogin.component';
import { CensusService } from './services/census.service';
import { StatisticsService } from './services/statistics.service';
import { ChartComponent } from './components/fetchchartdata/fetchchartdata.component';
import { GenderChartComponent } from './components/genderchart/genderchart.component';
import { CrimeChartComponent } from './components/crimechart/crimechart.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        FetchDataComponent,
        HomeComponent,
        FetchVoterComponent,
        createvoter,
        registerpersonalinfo,
        censuslogin,
        ChartComponent,
        GenderChartComponent,
        CrimeChartComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        //NgxTrimDirectiveModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: 'fetch-voter', component: FetchVoterComponent },
            { path: 'register-voter', component: createvoter },
            { path: 'register-personal-info/:id', component: registerpersonalinfo },
            { path: 'census-login', component: censuslogin },
            { path: 'voter/edit/:id', component: createvoter },  
            { path: 'fetch-chart-data', component: ChartComponent },
            { path: 'gender-chart', component: GenderChartComponent },
            { path: 'crime-chart', component: CrimeChartComponent },
            { path: '**', redirectTo: 'home' }

        ])
    ],
    providers: [
        VoterService,
        CensusService,
        StatisticsService
    ]  
})
export class AppModuleShared {
}
