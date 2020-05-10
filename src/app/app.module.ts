import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployessService } from './employess.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule  ],
  providers: [EmployessService],
  bootstrap: [AppComponent],
})
export class AppModule {}
