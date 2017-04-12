import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { RouterModule } from '@angular/router';
import { IAppState } from './store';

import { AppComponent } from './app.component';
import { Components } from './components'; // Sous-entend le index.ts du dossier components
import { Containers } from './containers'; // Sous-entend le index.ts du dossier containers
import { Actions, DefaultState } from './store'; // Sous-entend le index.ts du dossier store
import { RootReducer } from './store/root.reducer';
import { Services } from './services'; // Sous-entend le index.ts du dossier services

import { routes } from './app.routes';

@NgModule({
  declarations: [// tous les composants créés pour ce module
    AppComponent,
    ...Components,
    ...Containers
  ],
  imports: [
    BrowserModule, // module qui gère les intéractions avec le DOM
    FormsModule,
    HttpModule,
    NgReduxModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ...Actions,
    ...Services
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private store: NgRedux<IAppState>) {

    this.store.configureStore(
      RootReducer,
      DefaultState,
      []
    );
  }
}
