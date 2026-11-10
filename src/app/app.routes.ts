import { Routes } from '@angular/router';
import { AboutPage } from './about-page/about-page';
import { FamousMonument } from './famous-monument/famous-monument';
import { Pictures } from './pictures/pictures';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Monuments } from './monuments/monuments';
import { signupGuardGuard } from './signup-guard-guard';
import { leaveSignUpGuard } from './leave-sign-up-guard';

export const monumentRoutes: Routes = [
    {path:"other", component:Monuments}
]

export const routes: Routes = [
    {path: "about", component:AboutPage},
    {path: "famousMonument", component:FamousMonument, children:monumentRoutes},
    {path: "pictures", component:Pictures},
    {path: "signup", component:ReactiveForm, canActivate:[signupGuardGuard], canDeactivate:[leaveSignUpGuard]},
    {path: "", component:AboutPage},
    {path: "**",  redirectTo:"about"},
];
