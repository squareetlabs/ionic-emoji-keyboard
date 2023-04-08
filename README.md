# Ionic Emoji Keyboard

Ionic Emoji Keyboard is a simple emoji keyboard for Ionic 6+ apps. 

### Install it
```npm i --save ionic-emoji-keyboard```

------------------------
## How to use it

You can use it by importing it into app.module.ts.
```
import {IonicEmojiKeyboardModule} from 'ionic-emoji-keyboard';

@NgModule({
  imports: [
    IonicEmojiKeyboardModule
  ]
})
export class AppModule { }
```
In case you are also using lazy loading pages, check if your pages have a module file, e.g. `chat.module.ts`. If they do, import `IonicEmojiKeyboardModule` into the module of each page where you are going to use it.
```
@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        .....
        IonicEmojiKeyboardModule,
    ],
    declarations: [ChatPage]
})
export class ChatPageModule {
}
```
Once imported, it is ready for use. You can use it in your page controller file as follows:

```
@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit, OnDestroy {
    @ViewChild('messageInput', {static: false}) messageInput!: IonInput;
    showEmojiKeyboard = false;
    constructor() {
    }
    
    onEmojiSelected: (event: Emoji) => {
        that.message.setValue(that.message.value + event.emoji);
    };
    
    onShowEmojiKeyboard: () => {
        that.showEmojiKeyboard = true;
    };
}
```
And in your page html file as follows:
```
<ion-buttons>
    <ion-button (click)="onShowEmojiKeyboard()">
        <ng-container *ngIf="showEmojiKeyboard else keyboard">
            <ion-icon name="happy-outline" slot="icon-only"></ion-icon>
        </ng-container>
        <ng-template #keyboard>
            <ion-icon [src]="'assets/imgs/keyboard.svg'" slot="icon-only"></ion-icon>
        </ng-template>
    </ion-button>
</ion-buttons>
<ion-input #messageInput [formControl]="message" enterkeyhint="send" placeholder="Type text..."></ion-input>
<ionic-emoji-keyboard (emojiSelected)="onEvent('onEmojiSelected', $event)" [color]="'light'" [height]="'183px'" [hide]="showEmojiKeyboard" [mode]="'md'"></ionic-emoji-keyboard>
```


## Properties
| Input         | Type                   | Description                              | Default Value |
|---------------|------------------------|------------------------------------------|----------------------|
| color         | string (optional)      | Background color of the component.        | None                |
| hide          | boolean                | Indicates if the component is hidden.     | false                |
| mode          | "ios" \| "md"          | Display mode of the component.            | "md"                 |
| height        | string                 | Height of the component.                  | "184px"              |


## Events
| Output          | Type                  | Description                                                    |
|-----------------|-----------------------|----------------------------------------------------------------|
| emojiSelected   | EventEmitter\<Emoji\>  | Emits when an emoji is selected in the component.               |


## Building

Run `ng build ionic-emoji-keyboard` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ionic-emoji-keyboard`, go to the dist folder `cd dist/ionic-emoji-keyboard` and run `npm publish`.

## Running unit tests

Run `ng test ionic-emoji-keyboard` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## Credits
- [Alberto Rial Barreiro](https://github.com/alberto-rial)
- [Jacobo Cantorna Cigarrán](https://github.com/jcancig)
- [Desarrollo de apps para moviles](https://squareet.com/desarrollo-de-aplicaciones-para-moviles) SquareetLabs

## License
The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
