import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ContentComponent } from './content/content.component';
import { AppGuard } from "./app.guard";
import { AuthService } from "app/login/auth.service";

export const appRoutes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'system', component: ContentComponent, canActivate: [AppGuard] }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy:PreloadAllModules})],
    exports: [RouterModule],
    providers: [AuthService,AppGuard]
})
export class AppRoutingModule {}