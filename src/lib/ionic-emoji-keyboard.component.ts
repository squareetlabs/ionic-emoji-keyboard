import {AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {Emoji, IonicEmojiKeyboardService} from "./ionic-emoji-keyboard.service";

@Component({
    selector: 'ionic-emoji-keyboard',
    templateUrl: './ionic-emoji-keyboard.component.html',
    styleUrls: ['./ionic-emoji-keyboard.component.scss']
})
export class IonicEmojiKeyboardComponent implements OnChanges, AfterViewInit {
    @Input("color") color?: string;
    @Input("hide") hide: boolean = false;
    @Input("mode") mode: "ios" | "md" = "md";
    @Input("height") height: string = "184px";
    @Output("emojiSelected") callbackEmoji: EventEmitter<Emoji> = new EventEmitter<Emoji>();
    smileys: Emoji[] = [];
    animals: Emoji[] = [];
    foods: Emoji[] = [];
    travel: Emoji[] = [];
    activities: Emoji[] = [];
    objects: Emoji[] = [];
    symbols: Emoji[] = [];
    flag: Emoji[] = [];
    recent: Emoji[] = [];
    recentChange: boolean = true;
    heightStyle: string = "height:" + this.height;
    recentOld: Emoji[] = [];
    events: any = {};
    type: any;

    constructor(public loadData: IonicEmojiKeyboardService) {
    }

    ngAfterViewInit(): void {
        const that = this;
        setTimeout(() => {
            that.recentOld = that.loadData.recentOld;
            that.smileys = that.loadData.smileys;
            that.animals = that.loadData.animals;
            that.foods = that.loadData.foods;
            that.travel = that.loadData.travel;
            that.activities = that.loadData.activities;
            that.objects = that.loadData.objects;
            that.symbols = that.loadData.symbols;
            that.flag = that.loadData.flag;
        }, 1000);
        this.attachUIEvents();
    }

    onEvent(event: string, e: any): void {
        if (e && typeof e.stopPropagation === 'function') {
            e.stopPropagation();
        }
        if (this.events[event]) {
            this.events[event](e);
        }
    }

    private attachUIEvents(): void {
        const that = this;
        this.events = {
            onSelectEmoji: (item: Emoji) => {
                let i = that.recent.length - 1;
                while (i >= 0) {
                    if (that.recent[i].id === item.id && item.emoji === that.recent[i].emoji)
                        break;
                    i--;
                }

                if (i < 0) {
                    if (that.recent.length >= 35) {
                        that.recent.splice(that.recent.length - 1, 1);
                    }
                    that.recent.splice(0, 0, item);
                } else {
                    that.recent.splice(i, 1);
                    that.recent.splice(0, 0, item);
                }
                that.recentChange = true;
                that.loadData.setObject("recent_emoji", that.recent);
                that.callbackEmoji.emit(item);
            }
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        const that = this;
        if (changes?.hide?.currentValue) {
            this.height = "height:" + this.heightStyle;
        } else {
            this.height = "height: 0px";
            if (this.recentChange) {
                let recent = this.loadData.getObject("recent_emoji");
                this.recentChange = false;
                if (recent != null) {
                    setTimeout(() => that.recentOld = recent, 250);
                }
            }
        }
    }


}
