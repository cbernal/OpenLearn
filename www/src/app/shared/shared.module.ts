import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DatePipe } from '@angular/common';

import { CookieService } from 'ngx-cookie';
import {
    OpenLearnSharedLibsModule,
    OpenLearnSharedCommonModule,
    CSRFService,
    AuthService,
    AuthServerProvider,
    AccountService,
    StateStorageService,
    LoginService,
    Principal,
    HasAnyAuthorityDirective,
    HasAtLeastAuthorityDirective
} from './';

@NgModule({
    imports: [
        OpenLearnSharedLibsModule,
        OpenLearnSharedCommonModule
    ],
    declarations: [
        HasAnyAuthorityDirective,
        HasAtLeastAuthorityDirective
    ],
    providers: [
        CookieService,
        LoginService,
        AccountService,
        StateStorageService,
        Principal,
        CSRFService,
        AuthServerProvider,
        AuthService,
        DatePipe
    ],
//    entryComponents: [JhiLoginModalComponent],
    exports: [
        OpenLearnSharedCommonModule,
        HasAnyAuthorityDirective,
        HasAtLeastAuthorityDirective,
        DatePipe
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class OpenLearnSharedModule {}
