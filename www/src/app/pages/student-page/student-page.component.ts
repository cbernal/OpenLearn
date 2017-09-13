import {Component, OnInit, Inject, Input} from '@angular/core';

import {AdminTabs} from "../../controls/admin/admin.constants";
import {AdminService} from "../../services/admin.service";
import {UserService} from "../../services/user.service";
import {DataService} from "../../services/data.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NotifyService} from "../../services/notify.service";
import {Observable} from "rxjs/Observable";
import {Router} from "@angular/router";
import {Principal} from "../../shared/auth/principal.service";
import {AppConstants} from "../../app.constants";
import {User} from "../../models/user.model";
import {Student} from "../../models/student.model";

@Component({
  selector: 'app-student-page',
  templateUrl: './student-page.component.html',
  styleUrls: ['./student-page.component.css']
})
export class StudentPageComponent implements OnInit {


  constructor(private fb: FormBuilder,
              private adminService: AdminService,
              private userService: UserService,
              private notify: NotifyService,
              private dataService: DataService,
              private router: Router,
              private principle: Principal) {}

  private adding:boolean = false;
  private editing:boolean = false;
  private studentView:boolean = false;

  states: any[];
  filteredStates: Observable<any[]>;
  private roles: any[];

  filteredInstructors: Observable<any[]>;
  filteredSessions: Observable<any[]>;

  private studentId: String;
  private student: Student;
  studentForm: FormGroup;
  formErrors = {
    firstName: '',
    lastName: '',
    login: '',
    password: '',
    authorities: '',
    notes: '',
    email: '',
    phoneNumber: '',
    streetAddress1: '',
    streetAddress2: '',
    city: '',
    postalCode: '',
    guardianFirstName: '',
    guardianLastName: '',
    guardianEmail: '',
    guardianPhone: '',
    school: '',
    gradeLevel: '',
    stateStudentId: '',
    orgStudentId: ''
  };
  validationMessages = {
    firstName: {
      required: 'First Name is required',
      maxlength: 'First Name cannot be more than 50 characters long'
    },
    lastName: {
      required: 'Last Name is required',
      maxlength: 'Last Name cannot be more than 50 characters long'
    },
    login: {
      required: 'Username is required',
      pattern: 'Username contains invalid characters',
      maxlength: 'Username cannot be more than 100 characters long'
    },
    password: {
      required: 'Password is required',
      minlength: 'Password must be at least 6 characters long',
      maxlength: 'Password cannot be more than 50 characters long'
    },
    authorities: {
      required: 'Student must have at least 1 role'
    },
    notes: {
      maxlength: 'Notes cannot be more than 2000 characters long'
    },
    email: {
      // email: 'Email is not formatted correctly', TODO: See comment in buildForm()
      pattern: 'Email is not formatted correctly',
      minlength: 'Email must be at least 5 characters long',
      maxlength: 'Email cannot be more than 100 characters long'
    },
    phoneNumber: {
      pattern: 'Phone is not formatted correctly',
      maxlength: 'Phone cannot be more than 15 characters long'
    },
    streetAddress1: {
      minlength: 'Street Address 1 must be at least 5 characters long',
      maxlength: 'Street Address 1 cannot be more than 50 characters long'
    },
    streetAddress2: {
      minlength: 'Street Address 2 must be at least 5 characters long',
      maxlength: 'Street Address 2 cannot be more than 50 characters long'
    },
    city: {
      maxlength: 'City cannot be more than 50 characters long'
    },
    postalCode: {
      pattern: 'Postal Code is not formatted correctly'
    },
    guardianFirstName: {
      required: 'Guardian First Name is required',
      maxlength: 'Guardian First Name cannot be more than 50 characters long'
    },
    guardianLastName: {
      required: 'Guardian Last Name is required',
      maxlength: 'Guardian Last Name cannot be more than 50 characters long'
    },
    guardianEmail: {
      required: 'Guardian Last Name is required',
      pattern: 'Guardian Email is not formatted correctly',
      minlength: 'Guardian Email must be at least 5 characters long',
      maxlength: 'Guardian Email cannot be more than 100 characters long'
    },
    guardianPhoneNumber: {
      required: 'Guardian Phone is required',
      pattern: 'Guardian Phone is not formatted correctly',
      maxlength: 'Phone cannot be more than 15 characters long'
    },
    school: {
      required: 'School is required',
      maxlength: 'School cannot be more than 100 characters long'
    },
    gradeLevel: {
      required: 'Grade Level is required',
      maxlength: 'Grade Level cannot be more than 100 characters long'
    },
    stateStudentId: {
      required: 'State Student ID is required',
      maxlength: 'State Student ID cannot be more than 100 characters long'
    },
    orgStudentId: {
      required: 'Org Student ID is required',
      maxlength: 'Org Student ID cannot be more than 100 characters long'
    }
  };

  ngOnInit(): void {
    this.studentView = this.principle.getRole() === AppConstants.Role.Student;
    this.student = this.dataService.getStudent();
    this.studentId = this.student.id;
    console.log("StudentID: " + this.studentId);
    console.log("here");
    console.log(this.student);
    this.buildForm();
    this.setEditing(this.adding);
    if(!this.studentView) {
    }
  }
  private buildForm(): void {
    this.studentForm = this.fb.group({
      firstName: [this.student.firstName, [
        Validators.maxLength(50)
      ]],
      lastName: [this.student.lastName, [
        Validators.maxLength(50)
      ]],
      login: [this.student.login, [
        Validators.required,
        Validators.pattern(AppConstants.OLValidators.Login),
        Validators.maxLength(50)
      ]],
      password: [this.student.password, this.adding ? [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(50)
      ] : []],
      email: [this.student.email, [
        // Validators.email, TODO: This forces email to be required, https://github.com/angular/angular/pull/16902 is the fix, pattern below is the workaround
        Validators.pattern(AppConstants.OLValidators.Email),
        Validators.minLength(5),
        Validators.maxLength(100)
      ]],
      phoneNumber: [this.student.phoneNumber, [
        // TODO: Pattern
        Validators.maxLength(15)
      ]],
      streetAddress1: [this.student.streetAddress1, [
        Validators.minLength(5),
        Validators.maxLength(50)
      ]],
      streetAddress2: [this.student.streetAddress2, [
        Validators.minLength(5),
        Validators.maxLength(50)
      ]],
      city: [this.student.city, [
        Validators.maxLength(50)
      ]],
      state: [this.student.state],
      postalCode: [this.student.postalCode, [
        Validators.pattern(AppConstants.OLValidators.PostalCode)
      ]],
      notes: [this.student.notes],
      fourteenPlus: [this.student.fourteenPlus]
    });
    this.studentForm.valueChanges.subscribe(data => this.onValueChanged());
    this.onValueChanged();
  }

  private onValueChanged(): void {
    if (this.studentForm) {
      const form = this.studentForm;
      this.updateFormErrors(form, this.formErrors, this.validationMessages);
    }
  }
  private updateFormErrors(form: FormGroup, formErrors: any, validationMessages: any): void {
    for (const field in formErrors) {
      const control = form.get(field);
      if (control instanceof FormGroup) {
        this.updateFormErrors(control, formErrors[field], validationMessages[field]);
      } else {
        formErrors[field] = '';
        if (control && control.dirty && !control.valid) {
          const messages = validationMessages[field];
          for (const key in control.errors) {
            formErrors[field] += messages[key] + ' ';
          }
        }
      }
    }
  }

  private setEditing(editing: boolean): void {
    if (this.studentForm) {
      if (editing) {
        this.studentForm.enable();
        this.editing = true;
      } else {
        this.studentForm.disable();
        this.editing = false;
      }
    }
  }

  private getRoles(): void {
    this.roles = Object.keys(AppConstants.Role).map(key => AppConstants.Role[key]);
  }

  private getStates(): void {
    this.states = AppConstants.States;
    this.filteredStates = this.studentForm.get('address').get('state')
      .valueChanges
      .startWith(null)
      .map(val => val ? this.filterStates(val) : this.states.slice());
  }

  private filterStates(val: string): any[] {
    return this.states.filter(state => new RegExp(`${val}`, 'gi').test(state.name));
  }

  save(): void {
    if (this.studentForm.valid) {
      if (this.adding) {

      } else {
        this.update();
      }
    } else {
      this.studentForm.markAsTouched();
    }
  }

  private update(): void {
    const toUpdate = this.prepareToUpdate();
    this.userService.update(toUpdate).subscribe(resp => {
      this.notify.success('Successfully updated student');
    }, error => {
      this.notify.error('Failed to update student');
    });
  }

  private prepareToUpdate(): any {
    return {
      id: this.studentId,
      firstName: this.studentForm.get('firstName').value,
      lastName: this.studentForm.get('lastName').value,
      login: this.studentForm.get('login').value,
      password: this.studentForm.get('password').value,
      authorities: this.studentForm.get('authorities').value,
      notes: this.studentForm.get('notes').value,
      email: this.studentForm.get('email').value,
      phoneNumber: this.studentForm.get('phoneNumber').value,
      streetAddress1: this.studentForm.get('streetAddress1').value,
      streetAddress2: this.studentForm.get('streetAddress2').value,
      city: this.studentForm.get('city').value,
      state: this.studentForm.get('state').value,
      postalCode: this.studentForm.get('postalCode').value,
      fourteenPlus: this.studentForm.get('is14Plus').value
    };
  }

  edit(): void {
    this.setEditing(true);
  }

  cancel(): void {
    this.ngOnInit();
  }

  close(): void {

  }

  displayInstructor(instructor: any): string {
    return instructor ? instructor.lastName + ', ' + instructor.firstName : '';
  }

  displaySession(session: any): string {
    return session ? session.name : '';
  }
}
