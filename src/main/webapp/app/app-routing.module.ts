import { StudentCoursesComponent } from './student-courses/student-courses.component';
import { AccessDeniedPageComponent } from './pages/access-denied-page/access-denied-page.component';
import { Role } from './app.constants';
import {PortfolioComponent} from "./controls/portfolio/portfolio/portfolio.component";
import {StudentPageComponent} from "./pages/student-page/student-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {CoursePageComponent} from "./pages/course-page/course-page.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {UserRouteAccessService} from "./shared/auth/user-route-access-service";
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {AdminAdministratorsComponent} from "./controls/admin/admin-tabs/admin-administrators/admin-administrators.component";
import {AdminInstructorsComponent} from "./controls/admin/admin-tabs/admin-instructors/admin-instructors.component";
import {AdminStudentsComponent} from "./controls/admin/admin-tabs/admin-students/admin-students.component";
import {AdminOrganizationsComponent} from "./controls/admin/admin-tabs/admin-organizations/admin-organizations.component";
import {AdminSessionsComponent} from "./controls/admin/admin-tabs/admin-sessions/admin-sessions.component";
import {AdminProgramsComponent} from "./controls/admin/admin-tabs/admin-programs/admin-programs.component";
import {AdminCoursesComponent} from "./controls/admin/admin-tabs/admin-courses/admin-courses.component";

const ROUTES: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      authorities: []
    },
  },
  {
    path: 'access-denied',
    component: AccessDeniedPageComponent,
    data: {
      authorities: []
    },
  },
  {
    path: 'login',
    component: LoginPageComponent,
    data: {
      authorities: []
    },
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    data: {
      authorities: [Role.Admin]
    },
    canActivate: [UserRouteAccessService],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'organizations'},
      {path: 'organizations', component: AdminOrganizationsComponent},
      {path: 'administrators', component: AdminAdministratorsComponent},
      {path: 'instructors', component: AdminInstructorsComponent},
      {path: 'students', component: AdminStudentsComponent},
      {path: 'sessions', component: AdminSessionsComponent},
      {path: 'programs', component: AdminProgramsComponent},
      {path: 'courses', component: AdminCoursesComponent}
    ]
  },
  {
    path: 'course/:id',
    component: CoursePageComponent,
    data: {
      authorities: [Role.Instructor]
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'student/:id',
    component: StudentPageComponent,
    data: {
       authorities: [Role.Student]
    },
    canActivate: [UserRouteAccessService],
    children: [
      {path: '', pathMatch: 'full', redirectTo: 'portfolio'},
      {path: 'portfolio', component: PortfolioComponent},
      {path: 'course', component: StudentCoursesComponent},
    ]
  },

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}