import { NgModule } from '@angular/core';

import { ProtypeNamePipe } from './protype-name.pipe';
import { TokPipe } from './tok.pipe';

@NgModule({
  imports: [
  ],
  declarations: [
    ProtypeNamePipe,
    TokPipe
  ],
  exports:[
    ProtypeNamePipe,
    TokPipe
  ]
})
export class PipesModule { }
