import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import { TaskComponent } from './task/task.component';
import { TaskReducer } from './store/reducers/task.reducer';
import { TasksService } from './tasks.service';
import { HttpClientModule  } from '@angular/common/http';
import { TaskEffects } from './store/effects/task.effect';
import { DynamicComponent } from './alter/alter.component';

let rootReducer={
  AppState:{TaskReducer}
}


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    DynamicComponent
  ],
  entryComponents: [DynamicComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer.AppState),
    EffectsModule.forRoot([TaskEffects]),
    HttpClientModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }