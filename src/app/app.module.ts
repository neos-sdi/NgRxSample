import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { MessageService } from 'primeng/api'
import { ButtonModule } from 'primeng/button'
import { MenubarModule } from 'primeng/menubar'
import { ToastModule } from 'primeng/toast'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { UserFormModule } from './components/user-form/user-form.module'
import { UserListModule } from './components/user-list/user-list.module'
import { UserEffects } from './store/user.effects'
import { userReducer } from './store/user.reducer';
import { LoaderComponent } from './components/loader/loader.component'

@NgModule({
    declarations: [AppComponent, LoaderComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ButtonModule,
        MenubarModule,
        UserListModule,
        UserFormModule,
        ToastModule,
        StoreModule.forRoot({
            users: userReducer,
        }),
        EffectsModule.forRoot([UserEffects]),
        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: false, // Restrict extension to log-only mode
            autoPause: true, // Pauses recording actions and state changes when the extension window is not open
        }),
    ],
    providers: [MessageService],
    bootstrap: [AppComponent],
})
export class AppModule {}
