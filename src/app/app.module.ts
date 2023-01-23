import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurProgramsComponent } from './our-programs/our-programs.component';
import { LanguagesCoursesComponent } from './our-programs/languages-courses/languages-courses.component';
import { ITCoursesComponent } from './our-programs/it-courses/it-courses.component';
import { BusinessAdministratonManagementProgramComponent } from './our-programs/business-administraton-management-program/business-administraton-management-program.component';
import { SoftSkillsComponent } from './our-programs/soft-skills/soft-skills.component';
import { TeachingComponent } from './our-programs/teaching/teaching.component';
import { KidsProgramComponent } from './our-programs/kids-program/kids-program.component';

import { OurProgramsService } from 'src/services/our-programs.service';
import { TestCenterComponent } from './test-center/test-center.component';
import { PreSchoolComponent } from './pre-school/pre-school.component';
import { CambridgeUniversityEnglishExamsComponent } from './cambridge-university-english-exams/cambridge-university-english-exams.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { JobOpportunityComponent } from './job-opportunity/job-opportunity.component';
import { OnlinePaymentComponent } from './online-payment/online-payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    OurProgramsComponent,
    LanguagesCoursesComponent,
    ITCoursesComponent,
    BusinessAdministratonManagementProgramComponent,
    SoftSkillsComponent,
    TeachingComponent,
    KidsProgramComponent,
    TestCenterComponent,
    PreSchoolComponent,
    CambridgeUniversityEnglishExamsComponent,
    ContactUsComponent,
    JobOpportunityComponent,
    OnlinePaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgImageSliderModule
  ],
  providers: [OurProgramsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
