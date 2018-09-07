import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { AuthService } from './auth.service';
import { NewsService } from './news.service';
import { AuthInterceptor } from './auth.interceptor';
import { NewsComponent } from './news/news.component';
import { MaterialModule } from './material.module.module';
import { NewsAddComponent } from './news/news-add/news-add.component';
import { NewsEditComponent } from './news/news-edit/news-edit.component';
import { AuthGuard } from './login-form/auth.guard';

const Routes = [
  {path: 'login', component: LoginFormComponent},
  {path: 'news', component: NewsComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NewsComponent,
    NewsAddComponent,
    NewsEditComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot(Routes),
    ReactiveFormsModule
  ],
  entryComponents: [
    NewsAddComponent,
    NewsEditComponent,
  ],
  providers: [AuthService, NewsService, AuthGuard,
              {
                provide: HTTP_INTERCEPTORS ,
                useClass: AuthInterceptor,
                multi: true
              }],
  bootstrap: [AppComponent]
})
export class AppModule { }
