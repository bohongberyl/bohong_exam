import { NgModule } from '@angular/core';

import { ModelpNamePipe } from './modelp-name.pipe';
import { TokPipe } from './tok.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    ModelpNamePipe,
    TokPipe
  ],
  exports:[
    ModelpNamePipe,
    TokPipe
  ]
})
export class PipesModule { }
