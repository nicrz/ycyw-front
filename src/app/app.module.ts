import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChatListComponent } from './features/articles/components/list/list.component';
import { ChatDetailComponent } from './features/articles/components/detail/detail.component';
import { ChatFormComponent } from './features/articles/components/form/form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

const materialModule = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatFormFieldModule, 
  MatSelectModule,
  MatInputModule,
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ChatListComponent,
    ChatDetailComponent,
    ChatFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    FlexLayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    ...materialModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
