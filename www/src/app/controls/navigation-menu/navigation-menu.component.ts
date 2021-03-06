import {Component} from '@angular/core';

import {LoginService} from "../../services/login.service";
import {Principal} from "../../shared/auth/principal.service";
import {AppConstants} from "../../app.constants";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent {

  name: string;
  roleDescription: string;
  roles = {
    admin: false,
    orgAdmin: false,
    instructor: false,
    student: false
  };

  private roleDescriptions = {
    Admin: 'Administrator',
    OrgAdmin: 'Org Administrator',
    Instructor: 'Instructor',
    Student: 'Student'
  };

  constructor(private loginService: LoginService,
              private dataService: DataService,
              private principal: Principal) {}

  authenticated(): boolean {
    let authenticated = this.principal.isIdentityResolved();
    if (authenticated) {
      this.refreshMenu();
    }
    return authenticated;
  }

  private refreshMenu(): void {
    this.name = this.principal.getName();
    this.setRoles();
    this.setRoleDescription();
  }

  private setRoles(): void {
    let role = this.principal.getRole();
    this.roles.admin = role === AppConstants.Role.Admin;
    this.roles.orgAdmin = role === AppConstants.Role.OrgAdmin;
    this.roles.instructor = role === AppConstants.Role.Instructor;
    this.roles.student = role === AppConstants.Role.Student;
  }

  private setRoleDescription(): void {
    let role = this.principal.getRole();
    if (role === AppConstants.Role.Admin) {
      this.roleDescription = this.roleDescriptions.Admin;
    } else if (role === AppConstants.Role.OrgAdmin) {
      this.roleDescription = this.roleDescriptions.OrgAdmin;
    } else if (role === AppConstants.Role.Instructor) {
      this.roleDescription = this.roleDescriptions.Instructor;
    } else if (role === AppConstants.Role.Student) {
      this.roleDescription = this.roleDescriptions.Student;
    } else {
      this.roleDescription = 'UNAUTHORIZED';
    }
  }

  logout(): void {
    this.loginService.logout();
  }

  toStudentPage()
  {
    this.dataService.setStudentById(this.principal.getId());
  }
}
