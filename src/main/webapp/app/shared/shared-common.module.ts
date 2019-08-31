import { NgModule } from '@angular/core';

import { TutorialSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TutorialSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TutorialSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TutorialSharedCommonModule {}
