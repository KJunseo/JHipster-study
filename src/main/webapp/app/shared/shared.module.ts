import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TutorialSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TutorialSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TutorialSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TutorialSharedModule {
  static forRoot() {
    return {
      ngModule: TutorialSharedModule
    };
  }
}
