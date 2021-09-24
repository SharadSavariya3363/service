import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DataEntryComponent } from './data-entry/data-entry.component';
import { DataDisplayComponent } from './data-display/data-display.component';

const appRoutes: Routes = [
    {path:'' , redirectTo:'data-entry' , pathMatch:'full'},
    {path: 'data-entry', component: DataEntryComponent},
    {path: 'data-display', component: DataDisplayComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
