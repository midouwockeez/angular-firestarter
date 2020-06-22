import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsComponent } from './containers/units/units.component';
import { UnitsRoutingModule } from './units-routing.module';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [UnitsComponent],
  imports: [
    CommonModule,
    RouterModule,
    UnitsRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class UnitsModule { }
