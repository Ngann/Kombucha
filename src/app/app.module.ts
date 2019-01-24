import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule }  from '@angular/forms';


import { AppComponent } from './app.component';
import { PatronComponent } from './patron/patron.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditKegsComponent } from './edit-kegs/edit-kegs.component';
import { NewKegsComponent } from './new-kegs/new-kegs.component';
import { KegListComponent } from './keg-list/keg-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PatronComponent,
    EmployeeComponent,
    EditKegsComponent,
    NewKegsComponent,
    KegListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
