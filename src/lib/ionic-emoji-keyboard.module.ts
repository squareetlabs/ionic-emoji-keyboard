import { NgModule } from '@angular/core';
import { IonicEmojiKeyboardComponent } from './ionic-emoji-keyboard.component';
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";
import {NgForOf, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {IonicStorageModule} from "@ionic/storage-angular";
import {IonicEmojiKeyboardService} from "./ionic-emoji-keyboard.service";

@NgModule({
  declarations: [
    IonicEmojiKeyboardComponent
  ],
    imports: [
        IonicModule,
        FormsModule,
        NgSwitch,
        NgSwitchCase,
        NgForOf,
        NgIf
    ],
  exports: [
    IonicEmojiKeyboardComponent
  ]
})
export class IonicEmojiKeyboardModule {
    constructor(private load: IonicEmojiKeyboardService) {
        if(load.loaded)
        load.init().then((data) => {
            load.loaded = data;
        });
    }
}
