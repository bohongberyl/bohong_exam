import { NgModule } from '@angular/core';

import { ModelNamePipe } from './model-name.pipe';
import { TokPipe } from './tok.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    ModelNamePipe,
    TokPipe
  ],
  exports:[
    ModelNamePipe,
    TokPipe
  ]
})
export class PipesModule { }
