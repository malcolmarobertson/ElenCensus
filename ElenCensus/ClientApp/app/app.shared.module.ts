import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { registerpersonalinfo } from './components/registerpersonalinfo/registerpersonalinfo.component';
import { censuslogin } from './components/censuslogin/censuslogin.component';
import { CensusService } from './services/census.service';
import { StatisticsService } from './services/statistics.service';
import { GenderChartComponent } from './components/genderchart/genderchart.component';
import { RaceChartComponent } from './components/racechart/racechart.component';
import { CrimeChartComponent } from './components/crimechart/crimechart.component';
import { CrimeMapComponent } from './components/crimemap/crimemap.component';


@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        CounterComponent,
        HomeComponent,
        registerpersonalinfo,
        censuslogin,
        GenderChartComponent,
        RaceChartComponent,
        CrimeChartComponent,
        CrimeMapComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'register-personal-info/:id', component: registerpersonalinfo },
            { path: 'census-login', component: censuslogin },
            { path: 'gender-chart', component: GenderChartComponent },
            { path: 'race-chart', component: RaceChartComponent },
            { path: 'crime-chart', component: CrimeChartComponent },
            { path: 'crime-map', component: CrimeMapComponent },
            { path: '**', redirectTo: 'home' }

        ])
    ],
    providers: [
        CensusService,
        StatisticsService
    ]  
})
export class AppModuleShared {
}
