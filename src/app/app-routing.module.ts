import { JobOpportunityComponent } from './job-opportunity/job-opportunity.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PreSchoolComponent } from './pre-school/pre-school.component';
import { CambridgeUniversityEnglishExamsComponent } from './cambridge-university-english-exams/cambridge-university-english-exams.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ITCoursesComponent } from './our-programs/it-courses/it-courses.component';
import { OurProgramsComponent } from './our-programs/our-programs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { LanguagesCoursesComponent } from './our-programs/languages-courses/languages-courses.component';
import { BusinessAdministratonManagementProgramComponent } from './our-programs/business-administraton-management-program/business-administraton-management-program.component';
import { SoftSkillsComponent } from './our-programs/soft-skills/soft-skills.component';
import { TeachingComponent } from './our-programs/teaching/teaching.component';
import { KidsProgramComponent } from './our-programs/kids-program/kids-program.component';
import { TestCenterComponent } from './test-center/test-center.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';

const routes: Routes = [ 
{ path:'', pathMatch:'full', component: HomeComponent},
{ path:'about-us', component: AboutUsComponent},
{ path:'our-programs', component: OurProgramsComponent},
{ path:'our-programs/languages-courses', component: LanguagesCoursesComponent},
{ path:'our-programs/it-courses', component: ITCoursesComponent},
{ path:'our-programs/business-administraton-and-management-program', component:BusinessAdministratonManagementProgramComponent},
{ path:'our-programs/soft-skills', component:SoftSkillsComponent},
{ path:'our-programs/teaching-diploma', component:TeachingComponent},
{ path:'our-programs/kids-program', component:KidsProgramComponent},
{ path:'test-center', component:TestCenterComponent},
{ path:'preschool', component:PreSchoolComponent},
{ path:'cambridge-university-english-exams', component:CambridgeUniversityEnglishExamsComponent},
{ path:'contact-us', component:ContactUsComponent},
{ path:'job-opportunity', component:JobOpportunityComponent},
{ path:'online-payment', component:OnlinePaymentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' , scrollPositionRestoration: 'enabled'} )],
   exports: [RouterModule]
})
export class AppRoutingModule { }
