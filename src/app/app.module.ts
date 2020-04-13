import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import { TaskComponent } from './task/task.component';
import { TaskReducer } from './store/reducers/task.reducer';
import { TasksService } from './tasks.service';
import { TaskEffects } from './store/effects/task.effect';
import { DynamicComponent } from './alter/alter.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AngularInterceptor} from './AngularInterceptor'
import {TaskDetailComponent} from './task/detail/task-detail.component'

let rootReducer={
  AppState:{TaskReducer}
}


@NgModule({
  declarations: [
    TaskDetailComponent,
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
  providers: [TasksService,
    { provide: HTTP_INTERCEPTORS, useClass: AngularInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }