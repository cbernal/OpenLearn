import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {AppConstants} from './app.constants';
import {AdminTabs} from "./controls/admin/admin.constants";
import {AccessDeniedPageComponent} from './pages/access-denied-page/access-denied-page.component';
import {AdminPageComponent} from "./pages/admin-page/admin-page.component";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {CoursePageComponent} from "./pages/course-page/course-page.component";
import {LandingPageComponent} from "./pages/landing-page/landing-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {StudentPageComponent} from "./pages/student-page/student-page.component";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";
import {AdminAdministratorsComponent} from "./controls/admin/admin-tabs/admin-administrators.component";
import {AdminOrgAdministratorsComponent} from "./controls/admin/admin-tabs/admin-org-administrators.component";
import {AdminCoursesComponent} from "./controls/admin/admin-tabs/admin-courses.component";
import {AdminInstructorsComponent} from "./controls/admin/admin-tabs/admin-instructors.component";
import {AdminOrganizationsComponent} from "./controls/admin/admin-tabs/admin-organizations.component";
import {AdminProgramsComponent} from "./controls/admin/admin-tabs/admin-programs.component";
import {AdminSessionsComponent} from "./controls/admin/admin-tabs/admin-sessions.component";
import {AdminStudentsComponent} from "./controls/admin/admin-tabs/admin-students.component";
import {UserRouteAccessService} from "./shared/auth/user-route-access-service";

const ROUTES: Routes = [
  {
    path: '',
    component: LandingPageComponent,
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
      authorities: [AppConstants.Role.Admin, AppConstants.Role.OrgAdmin, AppConstants.Role.Instructor]
    },
    canActivate: [UserRouteAccessService],
    children: [
      {
        path: AdminTabs.Administrator.route,
        component: AdminAdministratorsComponent,
        data: {
          authorities: AdminTabs.Administrator.authorities
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: AdminTabs.OrgAdministrator.route,
        component: AdminOrgAdministratorsComponent,
        data: {
          authorities: AdminTabs.OrgAdministrator.authorities
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: AdminTabs.Instructor.route,
        component: AdminInstructorsComponent,
        data: {
          authorities: AdminTabs.Instructor.authorities
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: AdminTabs.Student.route,
        component: AdminStudentsComponent,
        data: {
          authorities: AdminTabs.Student.authorities
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: AdminTabs.Organization.route,
        component: AdminOrganizationsComponent,
        data: {
          authorities: AdminTabs.Organization.authorities
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: AdminTabs.Session.route,
        component: AdminSessionsComponent,
        data: {
          authorities: AdminTabs.Session.authorities
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: AdminTabs.Program.route,
        component: AdminProgramsComponent,
        data: {
          authorities: AdminTabs.Program.authorities
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: AdminTabs.Course.route,
        component: AdminCoursesComponent,
        data: {
          authorities: AdminTabs.Course.authorities
        },
        canActivate: [UserRouteAccessService]
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: AdminTabs.Course.route
      },
      {
        path: '**',
        redirectTo: AdminTabs.Course.route
      }
    ]
  },
  {
    path: 'dashboard', // TODO: Rename to my course page or something better than dashboard
    component: DashboardPageComponent,
    data: {
      authorities: [AppConstants.Role.Instructor]
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'course',
    component: CoursePageComponent,
    data: {
      authorities: [AppConstants.Role.Admin, AppConstants.Role.OrgAdmin, AppConstants.Role.Instructor, AppConstants.Role.Student]
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'student',
    component: StudentPageComponent,
    data: {
       authorities: [AppConstants.Role.Admin, AppConstants.Role.OrgAdmin, AppConstants.Role.Instructor, AppConstants.Role.Student]
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'profile',
    component: ProfilePageComponent,
    data: {
       authorities: [AppConstants.Role.Admin, AppConstants.Role.OrgAdmin, AppConstants.Role.Instructor, AppConstants.Role.Student]
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'access-denied',
    component: AccessDeniedPageComponent,
    data: {
      authorities: []
    },
  },
  {
    path: '**',
    redirectTo: ''
  }
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
