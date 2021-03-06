import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultByPipe } from './pipe/mult-by.pipe';
import { ExMarksPipe } from './pipe/ex-marks.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './pipe/filter.pipe';
import { AppCounterService } from './services/app-counter.services';
import { CounterComponent } from './counter/counter.component';
import { HttpComponent } from './http/http.component';
import { HttpClientModule }   from '@angular/common/http';
import { Http2Component } from './http2/http2.component';
// import { AboutComponent } from './about/about.component';
// import { AboutExtraComponent } from './about/about-extra/about-extra.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { AboutPageModule } from './about/about-page.module';
import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './modal/modal.component';
import { TranslocoRootModule } from './transloco/transloco-root.module';
import { TranslateComponentComponent } from './translate-component/translate-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//material
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RefDirective } from './ref.directive';
import { AnimateComponent } from './animate/animate.component';

@NgModule({
  declarations: [
    AppComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    CounterComponent,
    HttpComponent,
    Http2Component,
    // AboutComponent,
    // AboutExtraComponent,
    HomeComponent,
    PostComponent,
    PostsComponent,
    ErrorPageComponent,
    ModalComponent,
    TranslateComponentComponent,
    RefDirective,
    AnimateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AboutPageModule,
    SharedModule,
    TranslocoRootModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [
  ],
  entryComponents:[ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
