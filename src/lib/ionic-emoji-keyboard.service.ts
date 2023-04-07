import {Injectable} from '@angular/core';

export interface Emoji {
    id: number;
    name: string;
    emoji: string;
}

@Injectable({
    providedIn: 'root'
})
export class IonicEmojiKeyboardService {
    loaded: boolean = true;
    emojis: Emoji[] = [];
    smileys: Emoji[] = [];
    foods: Emoji[] = [];
    activities: Emoji[] = [];
    travel: Emoji[] = [];
    objects: Emoji[] = [];
    recentOld: Emoji[] = [];
    animals: Emoji[] = [];
    symbols: Emoji[] = [];
    flag: Emoji[] = [];

    constructor() {
    }

    public async init() {
        return new Promise<boolean>(async (resolve) => {
            if (this.loaded) {
                let recent = this.getObject("recent_emoji");
                if (recent != null) {
                    this.recentOld = recent;
                }
                this.smileys = [
                    {
                        "id": 1,
                        "name": "Grinning Face",
                        "emoji": "😀"
                    },
                    {
                        "id": 2,
                        "name": "Grinning Face With Big Eyes",
                        "emoji": "😃"
                    },
                    {
                        "id": 3,
                        "name": "Grinning Face With Smiling Eyes",
                        "emoji": "😄"
                    },
                    {
                        "id": 4,
                        "name": "Beaming Face With Smiling Eyes",
                        "emoji": "😁"
                    },
                    {
                        "id": 5,
                        "name": "Grinning Squinting Face",
                        "emoji": "😆"
                    },
                    {
                        "id": 6,
                        "name": "Grinning Face With Sweat",
                        "emoji": "😅"
                    },
                    {
                        "id": 7,
                        "name": "Rolling on the Floor Laughing",
                        "emoji": "🤣"
                    },
                    {
                        "id": 8,
                        "name": "Face With Tears of Joy",
                        "emoji": "😂"
                    },
                    {
                        "id": 9,
                        "name": "Slightly Smiling Face",
                        "emoji": "🙂"
                    },
                    {
                        "id": 10,
                        "name": "Upside-Down Face",
                        "emoji": "🙃"
                    },
                    {
                        "id": 11,
                        "name": "Winking Face",
                        "emoji": "😉"
                    },
                    {
                        "id": 12,
                        "name": "Smiling Face With Smiling Eyes",
                        "emoji": "😊"
                    },
                    {
                        "id": 13,
                        "name": "Smiling Face With Halo",
                        "emoji": "😇"
                    },
                    {
                        "id": 14,
                        "name": "Smiling Face With Hearts",
                        "emoji": "🥰"
                    },
                    {
                        "id": 15,
                        "name": "Smiling Face With Heart-Eyes",
                        "emoji": "😍"
                    },
                    {
                        "id": 16,
                        "name": "Star-Struck",
                        "emoji": "🤩"
                    },
                    {
                        "id": 17,
                        "name": "Face Blowing a Kiss",
                        "emoji": "😘"
                    },
                    {
                        "id": 18,
                        "name": "Kissing Face",
                        "emoji": "😗"
                    },
                    {
                        "id": 19,
                        "name": "Smiling Face",
                        "emoji": "☺"
                    },
                    {
                        "id": 20,
                        "name": "Kissing Face With Closed Eyes",
                        "emoji": "😚"
                    },
                    {
                        "id": 21,
                        "name": "Kissing Face With Smiling Eyes",
                        "emoji": "😙"
                    },
                    {
                        "id": 22,
                        "name": "Face Savoring Food",
                        "emoji": "😋"
                    },
                    {
                        "id": 23,
                        "name": "Face With Tongue",
                        "emoji": "😛"
                    },
                    {
                        "id": 24,
                        "name": "Winking Face With Tongue",
                        "emoji": "😜"
                    },
                    {
                        "id": 25,
                        "name": "Zany Face",
                        "emoji": "🤪"
                    },
                    {
                        "id": 26,
                        "name": "Squinting Face With Tongue",
                        "emoji": "😝"
                    },
                    {
                        "id": 27,
                        "name": "Money-Mouth Face",
                        "emoji": "🤑"
                    },
                    {
                        "id": 28,
                        "name": "Hugging Face",
                        "emoji": "🤗"
                    },
                    {
                        "id": 29,
                        "name": "Face With Hand Over Mouth",
                        "emoji": "🤭"
                    },
                    {
                        "id": 30,
                        "name": "Shushing Face",
                        "emoji": "🤫"
                    },
                    {
                        "id": 31,
                        "name": "Thinking Face",
                        "emoji": "🤔"
                    },
                    {
                        "id": 32,
                        "name": "Zipper-Mouth Face",
                        "emoji": "🤐"
                    },
                    {
                        "id": 33,
                        "name": "Face With Raised Eyebrow",
                        "emoji": "🤨"
                    },
                    {
                        "id": 34,
                        "name": "Neutral Face",
                        "emoji": "😐"
                    },
                    {
                        "id": 35,
                        "name": "Expressionless Face",
                        "emoji": "😑"
                    },
                    {
                        "id": 36,
                        "name": "Face Without Mouth",
                        "emoji": "😶"
                    },
                    {
                        "id": 37,
                        "name": "Smirking Face",
                        "emoji": "😏"
                    },
                    {
                        "id": 38,
                        "name": "Unamused Face",
                        "emoji": "😒"
                    },
                    {
                        "id": 39,
                        "name": "Face With Rolling Eyes",
                        "emoji": "🙄"
                    },
                    {
                        "id": 40,
                        "name": "Grimacing Face",
                        "emoji": "😬"
                    },
                    {
                        "id": 41,
                        "name": "Lying Face",
                        "emoji": "🤥"
                    },
                    {
                        "id": 42,
                        "name": "Relieved Face",
                        "emoji": "😌"
                    },
                    {
                        "id": 43,
                        "name": "Pensive Face",
                        "emoji": "😔"
                    },
                    {
                        "id": 44,
                        "name": "Sleepy Face",
                        "emoji": "😪"
                    },
                    {
                        "id": 45,
                        "name": "Drooling Face",
                        "emoji": "🤤"
                    },
                    {
                        "id": 46,
                        "name": "Sleeping Face",
                        "emoji": "😴"
                    },
                    {
                        "id": 47,
                        "name": "Face With Medical Mask",
                        "emoji": "😷"
                    },
                    {
                        "id": 48,
                        "name": "Face With Thermometer",
                        "emoji": "🤒"
                    },
                    {
                        "id": 49,
                        "name": "Face With Head-Bandage",
                        "emoji": "🤕"
                    },
                    {
                        "id": 50,
                        "name": "Nauseated Face",
                        "emoji": "🤢"
                    },
                    {
                        "id": 51,
                        "name": "Face Vomiting",
                        "emoji": "🤮"
                    },
                    {
                        "id": 52,
                        "name": "Sneezing Face",
                        "emoji": "🤧"
                    },
                    {
                        "id": 53,
                        "name": "Hot Face",
                        "emoji": "🥵"
                    },
                    {
                        "id": 54,
                        "name": "Cold Face",
                        "emoji": "🥶"
                    },
                    {
                        "id": 55,
                        "name": "Woozy Face",
                        "emoji": "🥴"
                    },
                    {
                        "id": 56,
                        "name": "Dizzy Face",
                        "emoji": "😵"
                    },
                    {
                        "id": 57,
                        "name": "Exploding Head",
                        "emoji": "🤯"
                    },
                    {
                        "id": 58,
                        "name": "Cowboy Hat Face",
                        "emoji": "🤠"
                    },
                    {
                        "id": 59,
                        "name": "Partying Face",
                        "emoji": "🥳"
                    },
                    {
                        "id": 60,
                        "name": "Smiling Face With Sunglasses",
                        "emoji": "😎"
                    },
                    {
                        "id": 61,
                        "name": "Nerd Face",
                        "emoji": "🤓"
                    },
                    {
                        "id": 62,
                        "name": "Face With Monocle",
                        "emoji": "🧐"
                    },
                    {
                        "id": 63,
                        "name": "Confused Face",
                        "emoji": "😕"
                    },
                    {
                        "id": 64,
                        "name": "Worried Face",
                        "emoji": "😟"
                    },
                    {
                        "id": 65,
                        "name": "Slightly Frowning Face",
                        "emoji": "🙁"
                    },
                    {
                        "id": 66,
                        "name": "Frowning Face",
                        "emoji": "☹️"
                    },
                    {
                        "id": 67,
                        "name": "Face With Open Mouth",
                        "emoji": "🚣"
                    },
                    {
                        "id": 68,
                        "name": "Hushed Face",
                        "emoji": "😯"
                    },
                    {
                        "id": 69,
                        "name": "Astonished Face",
                        "emoji": "😲"
                    },
                    {
                        "id": 70,
                        "name": "Flushed Face",
                        "emoji": "😳"
                    },
                    {
                        "id": 71,
                        "name": "Pleading Face",
                        "emoji": "🥺"
                    },
                    {
                        "id": 72,
                        "name": "Frowning Face With Open Mouth",
                        "emoji": "😦"
                    },
                    {
                        "id": 73,
                        "name": "Anguished Face",
                        "emoji": "😧"
                    },
                    {
                        "id": 74,
                        "name": "Fearful Face",
                        "emoji": "😨"
                    },
                    {
                        "id": 75,
                        "name": "Anxious Face With Sweat",
                        "emoji": "😰"
                    },
                    {
                        "id": 76,
                        "name": "Sad but Relieved Face",
                        "emoji": "😥"
                    },
                    {
                        "id": 77,
                        "name": "Crying Face",
                        "emoji": "😢"
                    },
                    {
                        "id": 78,
                        "name": "Loudly Crying Face",
                        "emoji": "😭"
                    },
                    {
                        "id": 79,
                        "name": "Face Screaming in Fear",
                        "emoji": "😱"
                    },
                    {
                        "id": 80,
                        "name": "Confounded Face",
                        "emoji": "😖"
                    },
                    {
                        "id": 81,
                        "name": "Persevering Face",
                        "emoji": "😣"
                    },
                    {
                        "id": 82,
                        "name": "Disappointed Face",
                        "emoji": "😞"
                    },
                    {
                        "id": 83,
                        "name": "Downcast Face With Sweat",
                        "emoji": "😓"
                    },
                    {
                        "id": 84,
                        "name": "Weary Face",
                        "emoji": "😩"
                    },
                    {
                        "id": 85,
                        "name": "Tired Face",
                        "emoji": "😫"
                    },
                    {
                        "id": 86,
                        "name": "Face With Steam From Nose",
                        "emoji": "😤"
                    },
                    {
                        "id": 87,
                        "name": "Pouting Face",
                        "emoji": "😡"
                    },
                    {
                        "id": 88,
                        "name": "Angry Face",
                        "emoji": "😠"
                    },
                    {
                        "id": 89,
                        "name": "Face With Symbols on Mouth",
                        "emoji": "🤬"
                    },
                    {
                        "id": 90,
                        "name": "Smiling Face With Horns",
                        "emoji": "😈"
                    },
                    {
                        "id": 91,
                        "name": "Angry Face With Horns",
                        "emoji": "👿"
                    },
                    {
                        "id": 92,
                        "name": "Skull",
                        "emoji": "💀"
                    },
                    {
                        "id": 93,
                        "name": "Skull and Crossbones",
                        "emoji": "☠"
                    },
                    {
                        "id": 94,
                        "name": "Pile of Poo",
                        "emoji": "💩"
                    },
                    {
                        "id": 95,
                        "name": "Clown Face",
                        "emoji": "🤡"
                    },
                    {
                        "id": 96,
                        "name": "Ogre",
                        "emoji": "👹"
                    },
                    {
                        "id": 97,
                        "name": "Goblin",
                        "emoji": "👺"
                    },
                    {
                        "id": 98,
                        "name": "Ghost",
                        "emoji": "👻"
                    },
                    {
                        "id": 99,
                        "name": "Alien",
                        "emoji": "👽"
                    },
                    {
                        "id": 100,
                        "name": "Alien Monster",
                        "emoji": "👾"
                    },
                    {
                        "id": 101,
                        "name": "Robot Face",
                        "emoji": "🤖"
                    },
                    {
                        "id": 102,
                        "name": "Grinning Cat Face",
                        "emoji": "😺"
                    },
                    {
                        "id": 103,
                        "name": "Grinning Cat Face With Smiling Eyes",
                        "emoji": "😸"
                    },
                    {
                        "id": 104,
                        "name": "Cat Face With Tears of Joy",
                        "emoji": "😹"
                    },
                    {
                        "id": 105,
                        "name": "Smiling Cat Face With Heart-Eyes",
                        "emoji": "😻"
                    },
                    {
                        "id": 106,
                        "name": "Cat Face With Wry Smile",
                        "emoji": "😼"
                    },
                    {
                        "id": 107,
                        "name": "Kissing Cat Face",
                        "emoji": "😽"
                    },
                    {
                        "id": 108,
                        "name": "Weary Cat Face",
                        "emoji": "🙀"
                    },
                    {
                        "id": 109,
                        "name": "Crying Cat Face",
                        "emoji": "😿"
                    },
                    {
                        "id": 110,
                        "name": "Pouting Cat Face",
                        "emoji": "😾"
                    },
                    {
                        "id": 111,
                        "name": "Kiss Mark",
                        "emoji": "💋"
                    },
                    {
                        "id": 112,
                        "name": "Waving Hand",
                        "emoji": "👋"
                    },
                    {
                        "id": 113,
                        "name": "Raised Back of Hand",
                        "emoji": "🤚"
                    },
                    {
                        "id": 114,
                        "name": "Hand With Fingers Splayed",
                        "emoji": "🖐"
                    },
                    {
                        "id": 115,
                        "name": "Raised Hand",
                        "emoji": "✋"
                    },
                    {
                        "id": 116,
                        "name": "Vulcan Salute",
                        "emoji": "🖖"
                    },
                    {
                        "id": 117,
                        "name": "OK Hand",
                        "emoji": "👌"
                    },
                    {
                        "id": 118,
                        "name": "Victory Hand",
                        "emoji": "✌"
                    },
                    {
                        "id": 119,
                        "name": "Crossed Fingers",
                        "emoji": "🤞"
                    },
                    {
                        "id": 120,
                        "name": "Love-You Gesture",
                        "emoji": "🤟"
                    },
                    {
                        "id": 121,
                        "name": "Sign of the Horns",
                        "emoji": "🤘"
                    },
                    {
                        "id": 122,
                        "name": "Call Me Hand",
                        "emoji": "🤙"
                    },
                    {
                        "id": 123,
                        "name": "Backhand Index Pointing Left",
                        "emoji": "👈"
                    },
                    {
                        "id": 124,
                        "name": "Backhand Index Pointing Right",
                        "emoji": "👉"
                    },
                    {
                        "id": 125,
                        "name": "Backhand Index Pointing Up",
                        "emoji": "👆"
                    },
                    {
                        "id": 126,
                        "name": "Middle Finger",
                        "emoji": "🖕"
                    },
                    {
                        "id": 127,
                        "name": "Backhand Index Pointing Down",
                        "emoji": "👇"
                    },
                    {
                        "id": 128,
                        "name": "Index Pointing Up",
                        "emoji": "☝"
                    },
                    {
                        "id": 129,
                        "name": "Thumbs Up",
                        "emoji": "👍"
                    },
                    {
                        "id": 130,
                        "name": "Thumbs Down",
                        "emoji": "👎"
                    },
                    {
                        "id": 131,
                        "name": "Raised Fist",
                        "emoji": "✊"
                    },
                    {
                        "id": 132,
                        "name": "Oncoming Fist",
                        "emoji": "👊"
                    },
                    {
                        "id": 133,
                        "name": "Left-Facing Fist",
                        "emoji": "🤛"
                    },
                    {
                        "id": 134,
                        "name": "Right-Facing Fist",
                        "emoji": "🤜"
                    },
                    {
                        "id": 135,
                        "name": "Clapping Hands",
                        "emoji": "👏"
                    },
                    {
                        "id": 136,
                        "name": "Raising Hands",
                        "emoji": "🙌"
                    },
                    {
                        "id": 137,
                        "name": "Open Hands",
                        "emoji": "👐"
                    },
                    {
                        "id": 138,
                        "name": "Palms Up Together",
                        "emoji": "🤲"
                    },
                    {
                        "id": 139,
                        "name": "Handshake",
                        "emoji": "🤝"
                    },
                    {
                        "id": 140,
                        "name": "Folded Hands",
                        "emoji": "🙏"
                    },
                    {
                        "id": 141,
                        "name": "Writing Hand",
                        "emoji": "✍"
                    },
                    {
                        "id": 142,
                        "name": "Nail Polish",
                        "emoji": "💅"
                    },
                    {
                        "id": 143,
                        "name": "Selfie",
                        "emoji": "🤳"
                    },
                    {
                        "id": 144,
                        "name": "Flexed Biceps",
                        "emoji": "💪"
                    },
                    {
                        "id": 145,
                        "name": "Leg",
                        "emoji": "🦵"
                    },
                    {
                        "id": 146,
                        "name": "Foot",
                        "emoji": "🦶"
                    },
                    {
                        "id": 147,
                        "name": "Ear",
                        "emoji": "👂"
                    },
                    {
                        "id": 148,
                        "name": "Nose",
                        "emoji": "👃"
                    },
                    {
                        "id": 149,
                        "name": "Brain",
                        "emoji": "🧠"
                    },
                    {
                        "id": 150,
                        "name": "Tooth",
                        "emoji": "🦷"
                    },
                    {
                        "id": 151,
                        "name": "Bone",
                        "emoji": "🦴"
                    },
                    {
                        "id": 152,
                        "name": "Eyes",
                        "emoji": "👀"
                    },
                    {
                        "id": 153,
                        "name": "Eye",
                        "emoji": "👁"
                    },
                    {
                        "id": 154,
                        "name": "Tongue",
                        "emoji": "👅"
                    },
                    {
                        "id": 155,
                        "name": "Mouth",
                        "emoji": "👄"
                    },
                    {
                        "id": 156,
                        "name": "Baby",
                        "emoji": "👶"
                    },
                    {
                        "id": 157,
                        "name": "Child",
                        "emoji": "🧒"
                    },
                    {
                        "id": 158,
                        "name": "Boy",
                        "emoji": "👦"
                    },
                    {
                        "id": 159,
                        "name": "Girl",
                        "emoji": "👧"
                    },
                    {
                        "id": 160,
                        "name": "Person",
                        "emoji": "🧑"
                    },
                    {
                        "id": 161,
                        "name": "Man",
                        "emoji": "👨"
                    },
                    {
                        "id": 162,
                        "name": "Man: Beard",
                        "emoji": "🧔"
                    },
                    {
                        "id": 163,
                        "name": "Man: Blond Hair",
                        "emoji": "👱"
                    },
                    {
                        "id": 164,
                        "name": "Man: Red Hair",
                        "emoji": "👨‍🦰"
                    },
                    {
                        "id": 165,
                        "name": "Man: Curly Hair",
                        "emoji": "👨‍🦱"
                    },
                    {
                        "id": 166,
                        "name": "Man: White Hair",
                        "emoji": "👨‍🦳"
                    },
                    {
                        "id": 167,
                        "name": "Man: Bald",
                        "emoji": "👨‍🦲"
                    },
                    {
                        "id": 168,
                        "name": "Woman",
                        "emoji": "👩"
                    },
                    {
                        "id": 169,
                        "name": "Woman: Blond Hair",
                        "emoji": "👱"
                    },
                    {
                        "id": 170,
                        "name": "Woman: Red Hair",
                        "emoji": "👩‍🦰"
                    },
                    {
                        "id": 171,
                        "name": "Woman: Curly Hair",
                        "emoji": "👩‍🦱"
                    },
                    {
                        "id": 172,
                        "name": "Woman: White Hair",
                        "emoji": "👩‍🦳"
                    },
                    {
                        "id": 173,
                        "name": "Woman: Bald",
                        "emoji": "👩‍🦲"
                    },
                    {
                        "id": 174,
                        "name": "Older Person",
                        "emoji": "🧓"
                    },
                    {
                        "id": 175,
                        "name": "Old Man",
                        "emoji": "👴"
                    },
                    {
                        "id": 176,
                        "name": "Old Woman",
                        "emoji": "👵"
                    },
                    {
                        "id": 177,
                        "name": "Man Frowning",
                        "emoji": "🙍"
                    },
                    {
                        "id": 178,
                        "name": "Woman Frowning",
                        "emoji": "🙍"
                    },
                    {
                        "id": 179,
                        "name": "Man Pouting",
                        "emoji": "🙎"
                    },
                    {
                        "id": 180,
                        "name": "Woman Pouting",
                        "emoji": "🙎"
                    },
                    {
                        "id": 181,
                        "name": "Man Gesturing No",
                        "emoji": "🙅"
                    },
                    {
                        "id": 182,
                        "name": "Woman Gesturing No",
                        "emoji": "🙅"
                    },
                    {
                        "id": 183,
                        "name": "Man Gesturing OK",
                        "emoji": "🙆"
                    },
                    {
                        "id": 184,
                        "name": "Woman Gesturing OK",
                        "emoji": "🙆"
                    },
                    {
                        "id": 185,
                        "name": "Man Tipping Hand",
                        "emoji": "💁"
                    },
                    {
                        "id": 186,
                        "name": "Woman Tipping Hand",
                        "emoji": "💁"
                    },
                    {
                        "id": 187,
                        "name": "Man Raising Hand",
                        "emoji": "🙋"
                    },
                    {
                        "id": 188,
                        "name": "Woman Raising Hand",
                        "emoji": "🙋"
                    },
                    {
                        "id": 189,
                        "name": "Man Bowing",
                        "emoji": "🙇"
                    },
                    {
                        "id": 190,
                        "name": "Woman Bowing",
                        "emoji": "🙇"
                    },
                    {
                        "id": 191,
                        "name": "Man Facepalming",
                        "emoji": "🤦"
                    },
                    {
                        "id": 192,
                        "name": "Woman Facepalming",
                        "emoji": "🤦"
                    },
                    {
                        "id": 193,
                        "name": "Man Shrugging",
                        "emoji": "🤷"
                    },
                    {
                        "id": 194,
                        "name": "Woman Shrugging",
                        "emoji": "🤷"
                    },
                    {
                        "id": 195,
                        "name": "Man Health Worker",
                        "emoji": "👨‍⚕️"
                    },
                    {
                        "id": 196,
                        "name": "Woman Health Worker",
                        "emoji": "👩‍⚕️"
                    },
                    {
                        "id": 197,
                        "name": "Man Student",
                        "emoji": "👨‍🎓"
                    },
                    {
                        "id": 198,
                        "name": "Woman Student",
                        "emoji": "👩‍🎓"
                    },
                    {
                        "id": 199,
                        "name": "Man Teacher",
                        "emoji": "👨‍🏫"
                    },
                    {
                        "id": 200,
                        "name": "Woman Teacher",
                        "emoji": "👩‍🏫"
                    },
                    {
                        "id": 201,
                        "name": "Man Judge",
                        "emoji": "👨‍⚖️"
                    },
                    {
                        "id": 202,
                        "name": "Woman Judge",
                        "emoji": "👩‍⚖️"
                    },
                    {
                        "id": 203,
                        "name": "Man Farmer",
                        "emoji": "👨‍🌾"
                    },
                    {
                        "id": 204,
                        "name": "Woman Farmer",
                        "emoji": "👩‍🌾"
                    },
                    {
                        "id": 205,
                        "name": "Man Cook",
                        "emoji": "👨‍🍳"
                    },
                    {
                        "id": 206,
                        "name": "Woman Cook",
                        "emoji": "👩‍🍳"
                    },
                    {
                        "id": 207,
                        "name": "Man Mechanic",
                        "emoji": "👨‍🔧"
                    },
                    {
                        "id": 208,
                        "name": "Woman Mechanic",
                        "emoji": "👩‍🔧"
                    },
                    {
                        "id": 209,
                        "name": "Man Factory Worker",
                        "emoji": "👨‍🏭"
                    },
                    {
                        "id": 210,
                        "name": "Woman Factory Worker",
                        "emoji": "👩‍🏭"
                    },
                    {
                        "id": 211,
                        "name": "Man Office Worker",
                        "emoji": "👨‍💼"
                    },
                    {
                        "id": 212,
                        "name": "Woman Office Worker",
                        "emoji": "👩‍💼"
                    },
                    {
                        "id": 213,
                        "name": "Man Scientist",
                        "emoji": "👨‍🔬"
                    },
                    {
                        "id": 214,
                        "name": "Woman Scientist",
                        "emoji": "👩‍🔬"
                    },
                    {
                        "id": 215,
                        "name": "Man Technologist",
                        "emoji": "👨‍💻"
                    },
                    {
                        "id": 216,
                        "name": "Woman Technologist",
                        "emoji": "👩‍💻"
                    },
                    {
                        "id": 217,
                        "name": "Man Singer",
                        "emoji": "👨‍🎤"
                    },
                    {
                        "id": 218,
                        "name": "Woman Singer",
                        "emoji": "👩‍🎤"
                    },
                    {
                        "id": 219,
                        "name": "Man Artist",
                        "emoji": "👨‍🎨"
                    },
                    {
                        "id": 220,
                        "name": "Woman Artist",
                        "emoji": "👩‍🎨"
                    },
                    {
                        "id": 221,
                        "name": "Man Pilot",
                        "emoji": "👨‍✈️"
                    },
                    {
                        "id": 222,
                        "name": "Woman Pilot",
                        "emoji": "👩‍✈️"
                    },
                    {
                        "id": 223,
                        "name": "Man Astronaut",
                        "emoji": "👨‍🚀"
                    },
                    {
                        "id": 224,
                        "name": "Woman Astronaut",
                        "emoji": "👩‍🚀"
                    },
                    {
                        "id": 225,
                        "name": "Man Firefighter",
                        "emoji": "👨‍🚒"
                    },
                    {
                        "id": 226,
                        "name": "Woman Firefighter",
                        "emoji": "👩‍🚒"
                    },
                    {
                        "id": 227,
                        "name": "Man Police Officer",
                        "emoji": "👮"
                    },
                    {
                        "id": 228,
                        "name": "Woman Police Officer",
                        "emoji": "👮"
                    },
                    {
                        "id": 229,
                        "name": "Man Detective",
                        "emoji": "🕵️"
                    },
                    {
                        "id": 230,
                        "name": "Woman Detective",
                        "emoji": "🕵️"
                    },
                    {
                        "id": 231,
                        "name": "Man Guard",
                        "emoji": "💂"
                    },
                    {
                        "id": 232,
                        "name": "Woman Guard",
                        "emoji": "💂"
                    },
                    {
                        "id": 233,
                        "name": "Man Construction Worker",
                        "emoji": "👷"
                    },
                    {
                        "id": 234,
                        "name": "Woman Construction Worker",
                        "emoji": "👷"
                    },
                    {
                        "id": 235,
                        "name": "Prince",
                        "emoji": "🤴"
                    },
                    {
                        "id": 236,
                        "name": "Princess",
                        "emoji": "👸"
                    },
                    {
                        "id": 237,
                        "name": "Man Wearing Turban",
                        "emoji": "👳"
                    },
                    {
                        "id": 238,
                        "name": "Woman Wearing Turban",
                        "emoji": "👳"
                    },
                    {
                        "id": 239,
                        "name": "Man With Chinese Cap",
                        "emoji": "👲"
                    },
                    {
                        "id": 240,
                        "name": "Woman With Headscarf",
                        "emoji": "🧕"
                    },
                    {
                        "id": 241,
                        "name": "Man in Tuxedo",
                        "emoji": "🤵"
                    },
                    {
                        "id": 242,
                        "name": "Bride With Veil",
                        "emoji": "👰"
                    },
                    {
                        "id": 243,
                        "name": "Pregnant Woman",
                        "emoji": "🤰"
                    },
                    {
                        "id": 244,
                        "name": "Breast-Feeding",
                        "emoji": "🤱"
                    },
                    {
                        "id": 245,
                        "name": "Baby Angel",
                        "emoji": "👼"
                    },
                    {
                        "id": 246,
                        "name": "Santa Claus",
                        "emoji": "🎅"
                    },
                    {
                        "id": 247,
                        "name": "Mrs. Claus",
                        "emoji": "🤶"
                    },
                    {
                        "id": 248,
                        "name": "Man Superhero",
                        "emoji": "🦸"
                    },
                    {
                        "id": 249,
                        "name": "Woman Superhero",
                        "emoji": "🦸"
                    },
                    {
                        "id": 250,
                        "name": "Man Supervillain",
                        "emoji": "🦹"
                    },
                    {
                        "id": 251,
                        "name": "Woman Supervillain",
                        "emoji": "🦹"
                    },
                    {
                        "id": 252,
                        "name": "Man Mage",
                        "emoji": "🧙"
                    },
                    {
                        "id": 253,
                        "name": "Woman Mage",
                        "emoji": "🧙"
                    },
                    {
                        "id": 254,
                        "name": "Man Fairy",
                        "emoji": "🧚"
                    },
                    {
                        "id": 255,
                        "name": "Woman Fairy",
                        "emoji": "🧚"
                    },
                    {
                        "id": 256,
                        "name": "Man Vampire",
                        "emoji": "🧛"
                    },
                    {
                        "id": 257,
                        "name": "Woman Vampire",
                        "emoji": "🧛"
                    },
                    {
                        "id": 258,
                        "name": "Merman",
                        "emoji": "🧜"
                    },
                    {
                        "id": 259,
                        "name": "Mermaid",
                        "emoji": "🧜"
                    },
                    {
                        "id": 260,
                        "name": "Man Elf",
                        "emoji": "🧝"
                    },
                    {
                        "id": 261,
                        "name": "Woman Elf",
                        "emoji": "🧝"
                    },
                    {
                        "id": 262,
                        "name": "Man Genie",
                        "emoji": "🧞"
                    },
                    {
                        "id": 263,
                        "name": "Woman Genie",
                        "emoji": "🧞"
                    },
                    {
                        "id": 264,
                        "name": "Man Zombie",
                        "emoji": "🧟"
                    },
                    {
                        "id": 265,
                        "name": "Woman Zombie",
                        "emoji": "🧟"
                    },
                    {
                        "id": 266,
                        "name": "Man Getting Massage",
                        "emoji": "💆"
                    },
                    {
                        "id": 267,
                        "name": "Woman Getting Massage",
                        "emoji": "💆"
                    },
                    {
                        "id": 268,
                        "name": "Man Getting Haircut",
                        "emoji": "💇"
                    },
                    {
                        "id": 269,
                        "name": "Woman Getting Haircut",
                        "emoji": "💇"
                    },
                    {
                        "id": 270,
                        "name": "Man Walking",
                        "emoji": "🚶"
                    },
                    {
                        "id": 271,
                        "name": "Woman Walking",
                        "emoji": "🚶"
                    },
                    {
                        "id": 272,
                        "name": "Man Running",
                        "emoji": "🏃"
                    },
                    {
                        "id": 273,
                        "name": "Woman Running",
                        "emoji": "🏃"
                    },
                    {
                        "id": 274,
                        "name": "Woman Dancing",
                        "emoji": "💃"
                    },
                    {
                        "id": 275,
                        "name": "Man Dancing",
                        "emoji": "🕺"
                    },
                    {
                        "id": 276,
                        "name": "Man in Suit Levitating",
                        "emoji": "🕴"
                    },
                    {
                        "id": 277,
                        "name": "Men With Bunny Ears",
                        "emoji": "👯"
                    },
                    {
                        "id": 278,
                        "name": "Women With Bunny Ears",
                        "emoji": "👯"
                    },
                    {
                        "id": 279,
                        "name": "Man in Steamy Room",
                        "emoji": "🧖"
                    },
                    {
                        "id": 280,
                        "name": "Woman in Steamy Room",
                        "emoji": "🧖"
                    },
                    {
                        "id": 281,
                        "name": "Person in Lotus Position",
                        "emoji": "🧘"
                    },
                    {
                        "id": 282,
                        "name": "Women Holding Hands",
                        "emoji": "👭"
                    },
                    {
                        "id": 283,
                        "name": "Woman and Man Holding Hands",
                        "emoji": "👫"
                    },
                    {
                        "id": 284,
                        "name": "Men Holding Hands",
                        "emoji": "👬"
                    },
                    {
                        "id": 285,
                        "name": "Kiss",
                        "emoji": "💏"
                    },
                    {
                        "id": 286,
                        "name": "Kiss: Man, Man",
                        "emoji": "👨‍❤️‍💋‍👨"
                    },
                    {
                        "id": 287,
                        "name": "Kiss: Woman, Woman",
                        "emoji": "👩‍❤️‍💋‍👩"
                    },
                    {
                        "id": 288,
                        "name": "Couple With Heart",
                        "emoji": "💑"
                    },
                    {
                        "id": 289,
                        "name": "Couple With Heart: Man, Man",
                        "emoji": "👨‍❤️‍👨"
                    },
                    {
                        "id": 290,
                        "name": "Couple With Heart: Woman, Woman",
                        "emoji": "👩‍❤️‍👩"
                    },
                    {
                        "id": 291,
                        "name": "Family",
                        "emoji": "👪"
                    },
                    {
                        "id": 292,
                        "name": "Family: Man, Woman, Boy",
                        "emoji": "👨‍👩‍👦"
                    },
                    {
                        "id": 293,
                        "name": "Family: Man, Woman, Girl",
                        "emoji": "👨‍👩‍👧"
                    },
                    {
                        "id": 294,
                        "name": "Family: Man, Woman, Girl, Boy",
                        "emoji": "👨‍👩‍👧‍👦"
                    },
                    {
                        "id": 295,
                        "name": "Family: Man, Woman, Boy, Boy",
                        "emoji": "👨‍👩‍👦‍👦"
                    },
                    {
                        "id": 296,
                        "name": "Family: Man, Woman, Girl, Girl",
                        "emoji": "👨‍👩‍👧‍👧"
                    },
                    {
                        "id": 297,
                        "name": "Family: Man, Man, Boy",
                        "emoji": "👨‍👨‍👦"
                    },
                    {
                        "id": 298,
                        "name": "Family: Man, Man, Girl",
                        "emoji": "👨‍👨‍👧"
                    },
                    {
                        "id": 299,
                        "name": "Family: Man, Man, Girl, Boy",
                        "emoji": "👨‍👨‍👧‍👦"
                    },
                    {
                        "id": 300,
                        "name": "Family: Man, Man, Boy, Boy",
                        "emoji": "👨‍👨‍👦‍👦"
                    },
                    {
                        "id": 301,
                        "name": "Family: Man, Man, Girl, Girl",
                        "emoji": "👨‍👨‍👧‍👧"
                    },
                    {
                        "id": 302,
                        "name": "Family: Woman, Woman, Boy",
                        "emoji": "👩‍👩‍👦"
                    },
                    {
                        "id": 303,
                        "name": "Family: Woman, Woman, Girl",
                        "emoji": "👩‍👩‍👧"
                    },
                    {
                        "id": 304,
                        "name": "Family: Woman, Woman, Girl, Boy",
                        "emoji": "👩‍👩‍👧‍👦"
                    },
                    {
                        "id": 305,
                        "name": "Family: Woman, Woman, Boy, Boy",
                        "emoji": "👩‍👩‍👦‍👦"
                    },
                    {
                        "id": 306,
                        "name": "Family: Woman, Woman, Girl, Girl",
                        "emoji": "👩‍👩‍👧‍👧"
                    },
                    {
                        "id": 307,
                        "name": "Family: Man, Boy",
                        "emoji": "👨‍👦"
                    },
                    {
                        "id": 308,
                        "name": "Family: Man, Boy, Boy",
                        "emoji": "👨‍👦‍👦"
                    },
                    {
                        "id": 309,
                        "name": "Family: Man, Girl",
                        "emoji": "👨‍👧"
                    },
                    {
                        "id": 310,
                        "name": "Family: Man, Girl, Boy",
                        "emoji": "👨‍👧‍👦"
                    },
                    {
                        "id": 311,
                        "name": "Family: Man, Girl, Girl",
                        "emoji": "👨‍👧‍👧"
                    },
                    {
                        "id": 312,
                        "name": "Family: Woman, Boy",
                        "emoji": "👩‍👦"
                    },
                    {
                        "id": 313,
                        "name": "Family: Woman, Boy, Boy",
                        "emoji": "👩‍👦‍👦"
                    },
                    {
                        "id": 314,
                        "name": "Family: Woman, Girl",
                        "emoji": "👩‍👧"
                    },
                    {
                        "id": 315,
                        "name": "Family: Woman, Girl, Boy",
                        "emoji": "👩‍👧‍👦"
                    },
                    {
                        "id": 316,
                        "name": "Family: Woman, Girl, Girl",
                        "emoji": "👩‍👧‍👧"
                    },
                    {
                        "id": 317,
                        "name": "Speaking Head",
                        "emoji": "🗣"
                    },
                    {
                        "id": 318,
                        "name": "Bust in Silhouette",
                        "emoji": "👤"
                    },
                    {
                        "id": 319,
                        "name": "Busts in Silhouette",
                        "emoji": "👥"
                    },
                    {
                        "id": 320,
                        "name": "Footprints",
                        "emoji": "👣"
                    },
                    {
                        "id": 321,
                        "name": "Luggage",
                        "emoji": "🧳"
                    },
                    {
                        "id": 322,
                        "name": "Closed Umbrella",
                        "emoji": "🌂"
                    },
                    {
                        "id": 323,
                        "name": "Umbrella",
                        "emoji": "☂"
                    },
                    {
                        "id": 324,
                        "name": "Thread",
                        "emoji": "🧵"
                    },
                    {
                        "id": 325,
                        "name": "Yarn",
                        "emoji": "🧶"
                    },
                    {
                        "id": 326,
                        "name": "Glasses",
                        "emoji": "👓"
                    },
                    {
                        "id": 327,
                        "name": "Sunglasses",
                        "emoji": "🕶"
                    },
                    {
                        "id": 328,
                        "name": "Goggles",
                        "emoji": "🥽"
                    },
                    {
                        "id": 329,
                        "name": "Lab Coat",
                        "emoji": "🥼"
                    },
                    {
                        "id": 330,
                        "name": "Necktie",
                        "emoji": "👔"
                    },
                    {
                        "id": 331,
                        "name": "T-Shirt",
                        "emoji": "👕"
                    },
                    {
                        "id": 332,
                        "name": "Jeans",
                        "emoji": "👖"
                    },
                    {
                        "id": 333,
                        "name": "Scarf",
                        "emoji": "🧣"
                    },
                    {
                        "id": 334,
                        "name": "Gloves",
                        "emoji": "🧤"
                    },
                    {
                        "id": 335,
                        "name": "Coat",
                        "emoji": "🧥"
                    },
                    {
                        "id": 336,
                        "name": "Socks",
                        "emoji": "🧦"
                    },
                    {
                        "id": 337,
                        "name": "Dress",
                        "emoji": "👗"
                    },
                    {
                        "id": 338,
                        "name": "Kimono",
                        "emoji": "👘"
                    },
                    {
                        "id": 339,
                        "name": "Bikini",
                        "emoji": "👙"
                    },
                    {
                        "id": 340,
                        "name": "Woman’s Clothes",
                        "emoji": "👚"
                    },
                    {
                        "id": 341,
                        "name": "Purse",
                        "emoji": "👛"
                    },
                    {
                        "id": 342,
                        "name": "Handbag",
                        "emoji": "👜"
                    },
                    {
                        "id": 343,
                        "name": "Clutch Bag",
                        "emoji": "👝"
                    },
                    {
                        "id": 344,
                        "name": "Backpack",
                        "emoji": "🎒"
                    },
                    {
                        "id": 345,
                        "name": "Man’s Shoe",
                        "emoji": "👞"
                    },
                    {
                        "id": 346,
                        "name": "Running Shoe",
                        "emoji": "👟"
                    },
                    {
                        "id": 347,
                        "name": "Hiking Boot",
                        "emoji": "🥾"
                    },
                    {
                        "id": 348,
                        "name": "Flat Shoe",
                        "emoji": "🥿"
                    },
                    {
                        "id": 349,
                        "name": "High-Heeled Shoe",
                        "emoji": "👠"
                    },
                    {
                        "id": 350,
                        "name": "Woman’s Sandal",
                        "emoji": "👡"
                    },
                    {
                        "id": 351,
                        "name": "Woman’s Boot",
                        "emoji": "👢"
                    },
                    {
                        "id": 352,
                        "name": "Crown",
                        "emoji": "👑"
                    },
                    {
                        "id": 353,
                        "name": "Woman’s Hat",
                        "emoji": "👒"
                    },
                    {
                        "id": 354,
                        "name": "Top Hat",
                        "emoji": "🎩"
                    },
                    {
                        "id": 355,
                        "name": "Graduation Cap",
                        "emoji": "🎓"
                    },
                    {
                        "id": 356,
                        "name": "Billed Cap",
                        "emoji": "🧢"
                    },
                    {
                        "id": 357,
                        "name": "Rescue Worker’s Helmet",
                        "emoji": "⛑"
                    },
                    {
                        "id": 358,
                        "name": "Lipstick",
                        "emoji": "💄"
                    },
                    {
                        "id": 359,
                        "name": "Ring",
                        "emoji": "💍"
                    },
                    {
                        "id": 360,
                        "name": "Briefcase",
                        "emoji": "💼"
                    }
                ];
                this.animals = [
                    {
                        "id": 1,
                        "name": "Dog Face",
                        "emoji": "🐶"
                    },
                    {
                        "id": 2,
                        "name": "Cat Face",
                        "emoji": "🐱"
                    },
                    {
                        "id": 3,
                        "name": "Mouse Face",
                        "emoji": "🐭"
                    },
                    {
                        "id": 4,
                        "name": "Hamster Face",
                        "emoji": "🐹"
                    },
                    {
                        "id": 5,
                        "name": "Rabbit Face",
                        "emoji": "🐰"
                    },
                    {
                        "id": 6,
                        "name": "Fox Face",
                        "emoji": "🦊"
                    },
                    {
                        "id": 7,
                        "name": "Bear Face",
                        "emoji": "🐻"
                    },
                    {
                        "id": 8,
                        "name": "Panda Face",
                        "emoji": "🐼"
                    },
                    {
                        "id": 9,
                        "name": "Tiger Face",
                        "emoji": "🐨"
                    },
                    {
                        "id": 10,
                        "name": "Lion Face",
                        "emoji": "🐯"
                    },
                    {
                        "id": 11,
                        "name": "Cow Face",
                        "emoji": "🦁"
                    },
                    {
                        "id": 12,
                        "name": "Pig Face",
                        "emoji": "🐮"
                    },
                    {
                        "id": 13,
                        "name": "Pig Nose",
                        "emoji": "🐷"
                    },
                    {
                        "id": 14,
                        "name": "Frog Face",
                        "emoji": "🐽"
                    },
                    {
                        "id": 15,
                        "name": "Monkey Face",
                        "emoji": "🐸"
                    },
                    {
                        "id": 16,
                        "name": "See-No-Evil Monkey",
                        "emoji": "🐵"
                    },
                    {
                        "id": 17,
                        "name": "Hear-No-Evil Monkey",
                        "emoji": "🙈"
                    },
                    {
                        "id": 18,
                        "name": "Speak-No-Evil Monkey",
                        "emoji": "🙉"
                    },
                    {
                        "id": 19,
                        "name": "Monkey",
                        "emoji": "🙊"
                    },
                    {
                        "id": 20,
                        "name": "Collision",
                        "emoji": "🐒"
                    },
                    {
                        "id": 21,
                        "name": "Dizzy",
                        "emoji": "💥"
                    },
                    {
                        "id": 22,
                        "name": "Sweat Droplets",
                        "emoji": "💫"
                    },
                    {
                        "id": 23,
                        "name": "Dashing Away",
                        "emoji": "💦"
                    },
                    {
                        "id": 24,
                        "name": "Gorilla",
                        "emoji": "💨"
                    },
                    {
                        "id": 25,
                        "name": "Dog",
                        "emoji": "🦍"
                    },
                    {
                        "id": 26,
                        "name": "Poodle",
                        "emoji": "🐕"
                    },
                    {
                        "id": 27,
                        "name": "Wolf Face",
                        "emoji": "🐩"
                    },
                    {
                        "id": 28,
                        "name": "Raccoon",
                        "emoji": "🐺"
                    },
                    {
                        "id": 29,
                        "name": "Cat",
                        "emoji": "🦝"
                    },
                    {
                        "id": 30,
                        "name": "Tiger",
                        "emoji": "🐈"
                    },
                    {
                        "id": 31,
                        "name": "Leopard",
                        "emoji": "🐅"
                    },
                    {
                        "id": 32,
                        "name": "Horse Face",
                        "emoji": "🐆"
                    },
                    {
                        "id": 33,
                        "name": "Horse",
                        "emoji": "🐴"
                    },
                    {
                        "id": 34,
                        "name": "Unicorn Face",
                        "emoji": "🐎"
                    },
                    {
                        "id": 35,
                        "name": "Zebra",
                        "emoji": "🦄"
                    },
                    {
                        "id": 36,
                        "name": "Ox",
                        "emoji": "🦓"
                    },
                    {
                        "id": 37,
                        "name": "Water Buffalo",
                        "emoji": "🐂"
                    },
                    {
                        "id": 38,
                        "name": "Cow",
                        "emoji": "🐃"
                    },
                    {
                        "id": 39,
                        "name": "Pig",
                        "emoji": "🐄"
                    },
                    {
                        "id": 40,
                        "name": "Boar",
                        "emoji": "🐖"
                    },
                    {
                        "id": 41,
                        "name": "Ram",
                        "emoji": "🐗"
                    },
                    {
                        "id": 42,
                        "name": "Ewe",
                        "emoji": "🐏"
                    },
                    {
                        "id": 43,
                        "name": "Goat",
                        "emoji": "🐑"
                    },
                    {
                        "id": 44,
                        "name": "Camel",
                        "emoji": "🐐"
                    },
                    {
                        "id": 45,
                        "name": "Two-Hump Camel",
                        "emoji": "🐪"
                    },
                    {
                        "id": 46,
                        "name": "Llama",
                        "emoji": "🐫"
                    },
                    {
                        "id": 47,
                        "name": "Giraffe",
                        "emoji": "🦙"
                    },
                    {
                        "id": 48,
                        "name": "Elephant",
                        "emoji": "🦒"
                    },
                    {
                        "id": 49,
                        "name": "Rhinoceros",
                        "emoji": "🐘"
                    },
                    {
                        "id": 50,
                        "name": "Hippopotamus",
                        "emoji": "🦏"
                    },
                    {
                        "id": 51,
                        "name": "Mouse",
                        "emoji": "🦛"
                    },
                    {
                        "id": 52,
                        "name": "Rat",
                        "emoji": "🐁"
                    },
                    {
                        "id": 53,
                        "name": "Rabbit",
                        "emoji": "🐀"
                    },
                    {
                        "id": 54,
                        "name": "Chipmunk",
                        "emoji": "🐇"
                    },
                    {
                        "id": 55,
                        "name": "Hedgehog",
                        "emoji": "🐿"
                    },
                    {
                        "id": 56,
                        "name": "Bat",
                        "emoji": "🦔"
                    },
                    {
                        "id": 57,
                        "name": "Koala",
                        "emoji": "🦇"
                    },
                    {
                        "id": 58,
                        "name": "Kangaroo",
                        "emoji": "🦘"
                    },
                    {
                        "id": 59,
                        "name": "Badger",
                        "emoji": "🦡"
                    },
                    {
                        "id": 60,
                        "name": "Paw Prints",
                        "emoji": "🐾"
                    },
                    {
                        "id": 61,
                        "name": "Turkey",
                        "emoji": "🦃"
                    },
                    {
                        "id": 62,
                        "name": "Chicken",
                        "emoji": "🐔"
                    },
                    {
                        "id": 63,
                        "name": "Rooster",
                        "emoji": "🐓"
                    },
                    {
                        "id": 64,
                        "name": "Hatching Chick",
                        "emoji": "🐣"
                    },
                    {
                        "id": 65,
                        "name": "Baby Chick",
                        "emoji": "🐤"
                    },
                    {
                        "id": 66,
                        "name": "Front-Facing Baby Chick",
                        "emoji": "🐥"
                    },
                    {
                        "id": 67,
                        "name": "Bird",
                        "emoji": "🐦"
                    },
                    {
                        "id": 68,
                        "name": "Penguin",
                        "emoji": "🐧"
                    },
                    {
                        "id": 69,
                        "name": "Dove",
                        "emoji": "🕊"
                    },
                    {
                        "id": 70,
                        "name": "Eagle",
                        "emoji": "🦅"
                    },
                    {
                        "id": 71,
                        "name": "Duck",
                        "emoji": "🦆"
                    },
                    {
                        "id": 72,
                        "name": "Swan",
                        "emoji": "🦢"
                    },
                    {
                        "id": 73,
                        "name": "Owl",
                        "emoji": "🦉"
                    },
                    {
                        "id": 74,
                        "name": "Peacock",
                        "emoji": "🦚"
                    },
                    {
                        "id": 75,
                        "name": "Parrot",
                        "emoji": "🦜"
                    },
                    {
                        "id": 76,
                        "name": "Crocodile",
                        "emoji": "🐊"
                    },
                    {
                        "id": 77,
                        "name": "Turtle",
                        "emoji": "🐢"
                    },
                    {
                        "id": 78,
                        "name": "Lizard",
                        "emoji": "🦎"
                    },
                    {
                        "id": 79,
                        "name": "Snake",
                        "emoji": "🐍"
                    },
                    {
                        "id": 80,
                        "name": "Dragon Face",
                        "emoji": "🐲"
                    },
                    {
                        "id": 81,
                        "name": "Dragon",
                        "emoji": "🐉"
                    },
                    {
                        "id": 82,
                        "name": "Sauropod",
                        "emoji": "🦕"
                    },
                    {
                        "id": 83,
                        "name": "T-Rex",
                        "emoji": "🦖"
                    },
                    {
                        "id": 84,
                        "name": "Spouting Whale",
                        "emoji": "🐳"
                    },
                    {
                        "id": 85,
                        "name": "Whale",
                        "emoji": "🐋"
                    },
                    {
                        "id": 86,
                        "name": "Dolphin",
                        "emoji": "🐬"
                    },
                    {
                        "id": 87,
                        "name": "Fish",
                        "emoji": "🐟"
                    },
                    {
                        "id": 88,
                        "name": "Tropical Fish",
                        "emoji": "🐠"
                    },
                    {
                        "id": 89,
                        "name": "Blowfish",
                        "emoji": "🐡"
                    },
                    {
                        "id": 90,
                        "name": "Shark",
                        "emoji": "🦈"
                    },
                    {
                        "id": 91,
                        "name": "Octopus",
                        "emoji": "🐙"
                    },
                    {
                        "id": 92,
                        "name": "Spiral Shell",
                        "emoji": "🐚"
                    },
                    {
                        "id": 93,
                        "name": "Snail",
                        "emoji": "🐌"
                    },
                    {
                        "id": 94,
                        "name": "Butterfly",
                        "emoji": "🦋"
                    },
                    {
                        "id": 95,
                        "name": "Bug",
                        "emoji": "🐛"
                    },
                    {
                        "id": 96,
                        "name": "Ant",
                        "emoji": "🐜"
                    },
                    {
                        "id": 97,
                        "name": "Honeybee",
                        "emoji": "🐝"
                    },
                    {
                        "id": 98,
                        "name": "Lady Beetle",
                        "emoji": "🐞"
                    },
                    {
                        "id": 99,
                        "name": "Cricket",
                        "emoji": "🦗"
                    },
                    {
                        "id": 100,
                        "name": "Spider",
                        "emoji": "🕷"
                    },
                    {
                        "id": 101,
                        "name": "Spider Web",
                        "emoji": "🕸"
                    },
                    {
                        "id": 102,
                        "name": "Scorpion",
                        "emoji": "🦂"
                    },
                    {
                        "id": 103,
                        "name": "Mosquito",
                        "emoji": "🦟"
                    },
                    {
                        "id": 104,
                        "name": "Microbe",
                        "emoji": "🦠"
                    },
                    {
                        "id": 105,
                        "name": "Bouquet",
                        "emoji": "💐"
                    },
                    {
                        "id": 106,
                        "name": "Cherry Blossom",
                        "emoji": "🌸"
                    },
                    {
                        "id": 107,
                        "name": "White Flower",
                        "emoji": "💮"
                    },
                    {
                        "id": 108,
                        "name": "Rosette",
                        "emoji": "🏵"
                    },
                    {
                        "id": 109,
                        "name": "Rose",
                        "emoji": "🌹"
                    },
                    {
                        "id": 110,
                        "name": "Wilted Flower",
                        "emoji": "🥀"
                    },
                    {
                        "id": 111,
                        "name": "Hibiscus",
                        "emoji": "🌺"
                    },
                    {
                        "id": 112,
                        "name": "Sunflower",
                        "emoji": "🌻"
                    },
                    {
                        "id": 113,
                        "name": "Blossom",
                        "emoji": "🌼"
                    },
                    {
                        "id": 114,
                        "name": "Tulip",
                        "emoji": "🌷"
                    },
                    {
                        "id": 115,
                        "name": "Seedling",
                        "emoji": "🌱"
                    },
                    {
                        "id": 116,
                        "name": "Evergreen Tree",
                        "emoji": "🌲"
                    },
                    {
                        "id": 117,
                        "name": "Deciduous Tree",
                        "emoji": "🌳"
                    },
                    {
                        "id": 118,
                        "name": "Palm Tree",
                        "emoji": "🌴"
                    },
                    {
                        "id": 119,
                        "name": "Cactus",
                        "emoji": "🌵"
                    },
                    {
                        "id": 120,
                        "name": "Sheaf of Rice",
                        "emoji": "🌾"
                    },
                    {
                        "id": 121,
                        "name": "Herb",
                        "emoji": "🌿"
                    },
                    {
                        "id": 122,
                        "name": "Shamrock",
                        "emoji": "☘"
                    },
                    {
                        "id": 123,
                        "name": "Four Leaf Clover",
                        "emoji": "🍀"
                    },
                    {
                        "id": 124,
                        "name": "Maple Leaf",
                        "emoji": "🍁"
                    },
                    {
                        "id": 125,
                        "name": "Fallen Leaf",
                        "emoji": "🍂"
                    },
                    {
                        "id": 126,
                        "name": "Leaf Fluttering in Wind",
                        "emoji": "🍃"
                    },
                    {
                        "id": 127,
                        "name": "Mushroom",
                        "emoji": "🍄"
                    },
                    {
                        "id": 128,
                        "name": "Chestnut",
                        "emoji": "🌰"
                    },
                    {
                        "id": 129,
                        "name": "Crab",
                        "emoji": "🦀"
                    },
                    {
                        "id": 130,
                        "name": "Lobster",
                        "emoji": "🦞"
                    },
                    {
                        "id": 131,
                        "name": "Shrimp",
                        "emoji": "🦐"
                    },
                    {
                        "id": 132,
                        "name": "Squid",
                        "emoji": "🦑"
                    },
                    {
                        "id": 133,
                        "name": "Globe Showing Europe-Africa",
                        "emoji": "🌍"
                    },
                    {
                        "id": 134,
                        "name": "Globe Showing Americas",
                        "emoji": "🌎"
                    },
                    {
                        "id": 135,
                        "name": "Globe Showing Asia-Australia",
                        "emoji": "🌏"
                    },
                    {
                        "id": 136,
                        "name": "Globe With Meridians",
                        "emoji": "🌐"
                    },
                    {
                        "id": 137,
                        "name": "New Moon",
                        "emoji": "🌑"
                    },
                    {
                        "id": 138,
                        "name": "Waxing Crescent Moon",
                        "emoji": "🌒"
                    },
                    {
                        "id": 139,
                        "name": "First Quarter Moon",
                        "emoji": "🌓"
                    },
                    {
                        "id": 140,
                        "name": "Waxing Gibbous Moon",
                        "emoji": "🌔"
                    },
                    {
                        "id": 141,
                        "name": "Full Moon",
                        "emoji": "🌕"
                    },
                    {
                        "id": 142,
                        "name": "Waning Gibbous Moon",
                        "emoji": "🌖"
                    },
                    {
                        "id": 143,
                        "name": "Last Quarter Moon",
                        "emoji": "🌗"
                    },
                    {
                        "id": 144,
                        "name": "Waning Crescent Moon",
                        "emoji": "🌘"
                    },
                    {
                        "id": 145,
                        "name": "Crescent Moon",
                        "emoji": "🌙"
                    },
                    {
                        "id": 146,
                        "name": "New Moon Face",
                        "emoji": "🌚"
                    },
                    {
                        "id": 147,
                        "name": "First Quarter Moon Face",
                        "emoji": "🌛"
                    },
                    {
                        "id": 148,
                        "name": "Last Quarter Moon Face",
                        "emoji": "🌜"
                    },
                    {
                        "id": 149,
                        "name": "Sun",
                        "emoji": "☀"
                    },
                    {
                        "id": 150,
                        "name": "Full Moon Face",
                        "emoji": "🌝"
                    },
                    {
                        "id": 151,
                        "name": "Sun With Face",
                        "emoji": "🌞"
                    },
                    {
                        "id": 152,
                        "name": "Star",
                        "emoji": "⭐"
                    },
                    {
                        "id": 153,
                        "name": "Glowing Star",
                        "emoji": "🌟"
                    },
                    {
                        "id": 154,
                        "name": "Shooting Star",
                        "emoji": "🌠"
                    },
                    {
                        "id": 155,
                        "name": "Cloud",
                        "emoji": "☁"
                    },
                    {
                        "id": 156,
                        "name": "Sun Behind Cloud",
                        "emoji": "⛅"
                    },
                    {
                        "id": 157,
                        "name": "Cloud With Lightning and Rain",
                        "emoji": "⛈"
                    },
                    {
                        "id": 158,
                        "name": "Sun Behind Small Cloud",
                        "emoji": "🌤"
                    },
                    {
                        "id": 159,
                        "name": "Sun Behind Large Cloud",
                        "emoji": "🌥"
                    },
                    {
                        "id": 160,
                        "name": "Sun Behind Rain Cloud",
                        "emoji": "🌦"
                    },
                    {
                        "id": 161,
                        "name": "Cloud With Rain",
                        "emoji": "🌧"
                    },
                    {
                        "id": 162,
                        "name": "Cloud With Snow",
                        "emoji": "🌨"
                    },
                    {
                        "id": 163,
                        "name": "Cloud With Lightning",
                        "emoji": "🌩"
                    },
                    {
                        "id": 164,
                        "name": "Tornado",
                        "emoji": "🌪"
                    },
                    {
                        "id": 165,
                        "name": "Fog",
                        "emoji": "🌫"
                    },
                    {
                        "id": 166,
                        "name": "Wind Face",
                        "emoji": "🌬"
                    },
                    {
                        "id": 167,
                        "name": "Rainbow",
                        "emoji": "🌈"
                    },
                    {
                        "id": 168,
                        "name": "Umbrella",
                        "emoji": "☂"
                    },
                    {
                        "id": 169,
                        "name": "Umbrella With Rain Drops",
                        "emoji": "☔"
                    },
                    {
                        "id": 170,
                        "name": "High Voltage",
                        "emoji": "⚡"
                    },
                    {
                        "id": 171,
                        "name": "Snowflake",
                        "emoji": "❄"
                    },
                    {
                        "id": 172,
                        "name": "Snowman",
                        "emoji": "☃"
                    },
                    {
                        "id": 173,
                        "name": "Snowman Without Snow",
                        "emoji": "⛄"
                    },
                    {
                        "id": 174,
                        "name": "Comet",
                        "emoji": "☄"
                    },
                    {
                        "id": 175,
                        "name": "Fire",
                        "emoji": "🔥"
                    },
                    {
                        "id": 176,
                        "name": "Droplet",
                        "emoji": "💧"
                    },
                    {
                        "id": 177,
                        "name": "Water Wave",
                        "emoji": "🌊"
                    },
                    {
                        "id": 178,
                        "name": "Christmas Tree",
                        "emoji": "🎄"
                    },
                    {
                        "id": 179,
                        "name": "Sparkles",
                        "emoji": "✨"
                    },
                    {
                        "id": 180,
                        "name": "Tanabata Tree",
                        "emoji": "🎋"
                    },
                    {
                        "id": 181,
                        "name": "Pine Decoration",
                        "emoji": "🎍"
                    }
                ];
                this.foods = [
                    {
                        "id": 1,
                        "name": "Grapes",
                        "emoji": "🍇"
                    },
                    {
                        "id": 2,
                        "name": "Melon",
                        "emoji": "🍈"
                    },
                    {
                        "id": 3,
                        "name": "Watermelon",
                        "emoji": "🍉"
                    },
                    {
                        "id": 4,
                        "name": "Tangerine",
                        "emoji": "🍊"
                    },
                    {
                        "id": 5,
                        "name": "Lemon",
                        "emoji": "🍋"
                    },
                    {
                        "id": 6,
                        "name": "Banana",
                        "emoji": "🍌"
                    },
                    {
                        "id": 7,
                        "name": "Pineapple",
                        "emoji": "🍍"
                    },
                    {
                        "id": 8,
                        "name": "Mango",
                        "emoji": "🥭"
                    },
                    {
                        "id": 9,
                        "name": "Red Apple",
                        "emoji": "🍎"
                    },
                    {
                        "id": 10,
                        "name": "Green Apple",
                        "emoji": "🍏"
                    },
                    {
                        "id": 11,
                        "name": "Pear",
                        "emoji": "🍐"
                    },
                    {
                        "id": 12,
                        "name": "Peach",
                        "emoji": "🍑"
                    },
                    {
                        "id": 13,
                        "name": "Cherries",
                        "emoji": "🍒"
                    },
                    {
                        "id": 14,
                        "name": "Strawberry",
                        "emoji": "🍓"
                    },
                    {
                        "id": 15,
                        "name": "Kiwi Fruit",
                        "emoji": "🥝"
                    },
                    {
                        "id": 16,
                        "name": "Tomato",
                        "emoji": "🍅"
                    },
                    {
                        "id": 17,
                        "name": "Coconut",
                        "emoji": "🥥"
                    },
                    {
                        "id": 18,
                        "name": "Avocado",
                        "emoji": "🥑"
                    },
                    {
                        "id": 19,
                        "name": "Eggplant",
                        "emoji": "🍆"
                    },
                    {
                        "id": 20,
                        "name": "Potato",
                        "emoji": "🥔"
                    },
                    {
                        "id": 21,
                        "name": "Carrot",
                        "emoji": "🥕"
                    },
                    {
                        "id": 22,
                        "name": "Ear of Corn",
                        "emoji": "🌽"
                    },
                    {
                        "id": 23,
                        "name": "Hot Pepper",
                        "emoji": "🌶"
                    },
                    {
                        "id": 24,
                        "name": "Cucumber",
                        "emoji": "🥒"
                    },
                    {
                        "id": 25,
                        "name": "Leafy Green",
                        "emoji": "🥬"
                    },
                    {
                        "id": 26,
                        "name": "Broccoli",
                        "emoji": "🥦"
                    },
                    {
                        "id": 27,
                        "name": "Mushroom",
                        "emoji": "🍄"
                    },
                    {
                        "id": 28,
                        "name": "Peanuts",
                        "emoji": "🥜"
                    },
                    {
                        "id": 29,
                        "name": "Chestnut",
                        "emoji": "🌰"
                    },
                    {
                        "id": 30,
                        "name": "Bread",
                        "emoji": "🍞"
                    },
                    {
                        "id": 31,
                        "name": "Croissant",
                        "emoji": "🥐"
                    },
                    {
                        "id": 32,
                        "name": "Baguette Bread",
                        "emoji": "🥖"
                    },
                    {
                        "id": 33,
                        "name": "Pretzel",
                        "emoji": "🥨"
                    },
                    {
                        "id": 34,
                        "name": "Bagel",
                        "emoji": "🥯"
                    },
                    {
                        "id": 35,
                        "name": "Pancakes",
                        "emoji": "🥞"
                    },
                    {
                        "id": 36,
                        "name": "Cheese Wedge",
                        "emoji": "🧀"
                    },
                    {
                        "id": 37,
                        "name": "Meat on Bone",
                        "emoji": "🍖"
                    },
                    {
                        "id": 38,
                        "name": "Poultry Leg",
                        "emoji": "🍗"
                    },
                    {
                        "id": 39,
                        "name": "Cut of Meat",
                        "emoji": "🥩"
                    },
                    {
                        "id": 40,
                        "name": "Bacon",
                        "emoji": "🥓"
                    },
                    {
                        "id": 41,
                        "name": "Hamburger",
                        "emoji": "🍔"
                    },
                    {
                        "id": 42,
                        "name": "French Fries",
                        "emoji": "🍟"
                    },
                    {
                        "id": 43,
                        "name": "Pizza",
                        "emoji": "🍕"
                    },
                    {
                        "id": 44,
                        "name": "Hot Dog",
                        "emoji": "🌭"
                    },
                    {
                        "id": 45,
                        "name": "Sandwich",
                        "emoji": "🥪"
                    },
                    {
                        "id": 46,
                        "name": "Taco",
                        "emoji": "🌮"
                    },
                    {
                        "id": 47,
                        "name": "Burrito",
                        "emoji": "🌯"
                    },
                    {
                        "id": 48,
                        "name": "Stuffed Flatbread",
                        "emoji": "🥙"
                    },
                    {
                        "id": 49,
                        "name": "Cooking",
                        "emoji": "🍳"
                    },
                    {
                        "id": 50,
                        "name": "Shallow Pan of Food",
                        "emoji": "🥘"
                    },
                    {
                        "id": 51,
                        "name": "Pot of Food",
                        "emoji": "🍲"
                    },
                    {
                        "id": 52,
                        "name": "Bowl With Spoon",
                        "emoji": "🥣"
                    },
                    {
                        "id": 53,
                        "name": "Green Salad",
                        "emoji": "🥗"
                    },
                    {
                        "id": 54,
                        "name": "Popcorn",
                        "emoji": "🍿"
                    },
                    {
                        "id": 55,
                        "name": "Salt",
                        "emoji": "🧂"
                    },
                    {
                        "id": 56,
                        "name": "Canned Food",
                        "emoji": "🥫"
                    },
                    {
                        "id": 57,
                        "name": "Bento Box",
                        "emoji": "🍱"
                    },
                    {
                        "id": 58,
                        "name": "Rice Cracker",
                        "emoji": "🍘"
                    },
                    {
                        "id": 59,
                        "name": "Rice Ball",
                        "emoji": "🍙"
                    },
                    {
                        "id": 60,
                        "name": "Cooked Rice",
                        "emoji": "🍚"
                    },
                    {
                        "id": 61,
                        "name": "Curry Rice",
                        "emoji": "🍛"
                    },
                    {
                        "id": 62,
                        "name": "Steaming Bowl",
                        "emoji": "🍜"
                    },
                    {
                        "id": 63,
                        "name": "Spaghetti",
                        "emoji": "🍝"
                    },
                    {
                        "id": 64,
                        "name": "Roasted Sweet Potato",
                        "emoji": "🍠"
                    },
                    {
                        "id": 65,
                        "name": "Oden",
                        "emoji": "🍢"
                    },
                    {
                        "id": 66,
                        "name": "Sushi",
                        "emoji": "🍣"
                    },
                    {
                        "id": 67,
                        "name": "Fried Shrimp",
                        "emoji": "🍤"
                    },
                    {
                        "id": 68,
                        "name": "Fish Cake With Swirl",
                        "emoji": "🍥"
                    },
                    {
                        "id": 69,
                        "name": "Moon Cake",
                        "emoji": "🥮"
                    },
                    {
                        "id": 70,
                        "name": "Dango",
                        "emoji": "🍡"
                    },
                    {
                        "id": 71,
                        "name": "Dumpling",
                        "emoji": "🥟"
                    },
                    {
                        "id": 72,
                        "name": "Fortune Cookie",
                        "emoji": "🥠"
                    },
                    {
                        "id": 73,
                        "name": "Takeout Box",
                        "emoji": "🥡"
                    },
                    {
                        "id": 74,
                        "name": "Soft Ice Cream",
                        "emoji": "🍦"
                    },
                    {
                        "id": 75,
                        "name": "Shaved Ice",
                        "emoji": "🍧"
                    },
                    {
                        "id": 76,
                        "name": "Ice Cream",
                        "emoji": "🍨"
                    },
                    {
                        "id": 77,
                        "name": "Doughnut",
                        "emoji": "🍩"
                    },
                    {
                        "id": 78,
                        "name": "Cookie",
                        "emoji": "🍪"
                    },
                    {
                        "id": 79,
                        "name": "Birthday Cake",
                        "emoji": "🎂"
                    },
                    {
                        "id": 80,
                        "name": "Shortcake",
                        "emoji": "🍰"
                    },
                    {
                        "id": 81,
                        "name": "Cupcake",
                        "emoji": "🧁"
                    },
                    {
                        "id": 82,
                        "name": "Pie",
                        "emoji": "🥧"
                    },
                    {
                        "id": 83,
                        "name": "Chocolate Bar",
                        "emoji": "🍫"
                    },
                    {
                        "id": 84,
                        "name": "Candy",
                        "emoji": "🍬"
                    },
                    {
                        "id": 85,
                        "name": "Lollipop",
                        "emoji": "🍭"
                    },
                    {
                        "id": 86,
                        "name": "Custard",
                        "emoji": "🍮"
                    },
                    {
                        "id": 87,
                        "name": "Honey Pot",
                        "emoji": "🍯"
                    },
                    {
                        "id": 88,
                        "name": "Baby Bottle",
                        "emoji": "🍼"
                    },
                    {
                        "id": 89,
                        "name": "Glass of Milk",
                        "emoji": "🥛"
                    },
                    {
                        "id": 90,
                        "name": "Hot Beverage",
                        "emoji": "☕"
                    },
                    {
                        "id": 91,
                        "name": "Teacup Without Handle",
                        "emoji": "🍵"
                    },
                    {
                        "id": 92,
                        "name": "Sake",
                        "emoji": "🍶"
                    },
                    {
                        "id": 93,
                        "name": "Bottle With Popping Cork",
                        "emoji": "🍾"
                    },
                    {
                        "id": 94,
                        "name": "Wine Glass",
                        "emoji": "🍷"
                    },
                    {
                        "id": 95,
                        "name": "Cocktail Glass",
                        "emoji": "🍸"
                    },
                    {
                        "id": 96,
                        "name": "Tropical Drink",
                        "emoji": "🍹"
                    },
                    {
                        "id": 97,
                        "name": "Beer Mug",
                        "emoji": "🍺"
                    },
                    {
                        "id": 98,
                        "name": "Clinking Beer Mugs",
                        "emoji": "🍻"
                    },
                    {
                        "id": 99,
                        "name": "Clinking Glasses",
                        "emoji": "🥂"
                    },
                    {
                        "id": 100,
                        "name": "Tumbler Glass",
                        "emoji": "🥃"
                    },
                    {
                        "id": 101,
                        "name": "Cup With Straw",
                        "emoji": "🥤"
                    },
                    {
                        "id": 102,
                        "name": "Chopsticks",
                        "emoji": "🥢"
                    },
                    {
                        "id": 103,
                        "name": "Fork and Knife With Plate",
                        "emoji": "🍽"
                    },
                    {
                        "id": 104,
                        "name": "Fork and Knife",
                        "emoji": "🍴"
                    },
                    {
                        "id": 105,
                        "name": "Spoon",
                        "emoji": "🥄"
                    }
                ];
                this.travel = [
                    {
                        "id": 1,
                        "name": "Person Rowing Boat",
                        "emoji": "🚣"
                    },
                    {
                        "id": 2,
                        "name": "Map of Japan",
                        "emoji": "🗾"
                    },
                    {
                        "id": 3,
                        "name": "Snow-Capped Mountain",
                        "emoji": "🏔"
                    },
                    {
                        "id": 4,
                        "name": "Mountain",
                        "emoji": "⛰"
                    },
                    {
                        "id": 5,
                        "name": "Volcano",
                        "emoji": "🌋"
                    },
                    {
                        "id": 6,
                        "name": "Mount Fuji",
                        "emoji": "🗻"
                    },
                    {
                        "id": 7,
                        "name": "Camping",
                        "emoji": "🏕"
                    },
                    {
                        "id": 8,
                        "name": "Beach With Umbrella",
                        "emoji": "🏖"
                    },
                    {
                        "id": 9,
                        "name": "Desert",
                        "emoji": "🏜"
                    },
                    {
                        "id": 10,
                        "name": "Desert Island",
                        "emoji": "🏝"
                    },
                    {
                        "id": 11,
                        "name": "National Park",
                        "emoji": "🏞"
                    },
                    {
                        "id": 12,
                        "name": "Stadium",
                        "emoji": "🏟"
                    },
                    {
                        "id": 13,
                        "name": "Classical Building",
                        "emoji": "🏛"
                    },
                    {
                        "id": 14,
                        "name": "Building Construction",
                        "emoji": "🏗"
                    },
                    {
                        "id": 15,
                        "name": "Houses",
                        "emoji": "🏘"
                    },
                    {
                        "id": 16,
                        "name": "Derelict House",
                        "emoji": "🏚"
                    },
                    {
                        "id": 17,
                        "name": "House",
                        "emoji": "🏠"
                    },
                    {
                        "id": 18,
                        "name": "House With Garden",
                        "emoji": "🏡"
                    },
                    {
                        "id": 19,
                        "name": "Office Building",
                        "emoji": "🏢"
                    },
                    {
                        "id": 20,
                        "name": "Japanese Post Office",
                        "emoji": "🏣"
                    },
                    {
                        "id": 21,
                        "name": "Post Office",
                        "emoji": "🏤"
                    },
                    {
                        "id": 22,
                        "name": "Hospital",
                        "emoji": "🏥"
                    },
                    {
                        "id": 23,
                        "name": "Bank",
                        "emoji": "🏦"
                    },
                    {
                        "id": 24,
                        "name": "Hotel",
                        "emoji": "🏨"
                    },
                    {
                        "id": 25,
                        "name": "Love Hotel",
                        "emoji": "🏩"
                    },
                    {
                        "id": 26,
                        "name": "Convenience Store",
                        "emoji": "🏪"
                    },
                    {
                        "id": 27,
                        "name": "School",
                        "emoji": "🏫"
                    },
                    {
                        "id": 28,
                        "name": "Department Store",
                        "emoji": "🏬"
                    },
                    {
                        "id": 29,
                        "name": "Factory",
                        "emoji": "🏭"
                    },
                    {
                        "id": 30,
                        "name": "Japanese Castle",
                        "emoji": "🏯"
                    },
                    {
                        "id": 31,
                        "name": "Castle",
                        "emoji": "🏰"
                    },
                    {
                        "id": 32,
                        "name": "Wedding",
                        "emoji": "💒"
                    },
                    {
                        "id": 33,
                        "name": "Tokyo Tower",
                        "emoji": "🗼"
                    },
                    {
                        "id": 34,
                        "name": "Statue of Liberty",
                        "emoji": "🗽"
                    },
                    {
                        "id": 35,
                        "name": "Church",
                        "emoji": "⛪"
                    },
                    {
                        "id": 36,
                        "name": "Mosque",
                        "emoji": "🕌"
                    },
                    {
                        "id": 37,
                        "name": "Synagogue",
                        "emoji": "🕍"
                    },
                    {
                        "id": 38,
                        "name": "Shinto Shrine",
                        "emoji": "⛩"
                    },
                    {
                        "id": 39,
                        "name": "Kaaba",
                        "emoji": "🕋"
                    },
                    {
                        "id": 40,
                        "name": "Fountain",
                        "emoji": "⛲"
                    },
                    {
                        "id": 41,
                        "name": "Tent",
                        "emoji": "⛺"
                    },
                    {
                        "id": 42,
                        "name": "Foggy",
                        "emoji": "🌁"
                    },
                    {
                        "id": 43,
                        "name": "Night With Stars",
                        "emoji": "🌃"
                    },
                    {
                        "id": 44,
                        "name": "Cityscape",
                        "emoji": "🏙"
                    },
                    {
                        "id": 45,
                        "name": "Sunrise Over Mountains",
                        "emoji": "🌄"
                    },
                    {
                        "id": 46,
                        "name": "Sunrise",
                        "emoji": "🌅"
                    },
                    {
                        "id": 47,
                        "name": "Cityscape at Dusk",
                        "emoji": "🌆"
                    },
                    {
                        "id": 48,
                        "name": "Sunset",
                        "emoji": "🌇"
                    },
                    {
                        "id": 49,
                        "name": "Bridge at Night",
                        "emoji": "🌉"
                    },
                    {
                        "id": 50,
                        "name": "Carousel Horse",
                        "emoji": "🎠"
                    },
                    {
                        "id": 51,
                        "name": "Ferris Wheel",
                        "emoji": "🎡"
                    },
                    {
                        "id": 52,
                        "name": "Roller Coaster",
                        "emoji": "🎢"
                    },
                    {
                        "id": 53,
                        "name": "Locomotive",
                        "emoji": "🚂"
                    },
                    {
                        "id": 54,
                        "name": "Railway Car",
                        "emoji": "🚃"
                    },
                    {
                        "id": 55,
                        "name": "High-Speed Train",
                        "emoji": "🚄"
                    },
                    {
                        "id": 56,
                        "name": "Bullet Train",
                        "emoji": "🚅"
                    },
                    {
                        "id": 57,
                        "name": "Train",
                        "emoji": "🚆"
                    },
                    {
                        "id": 58,
                        "name": "Metro",
                        "emoji": "🚇"
                    },
                    {
                        "id": 59,
                        "name": "Light Rail",
                        "emoji": "🚈"
                    },
                    {
                        "id": 60,
                        "name": "Station",
                        "emoji": "🚉"
                    },
                    {
                        "id": 61,
                        "name": "Tram",
                        "emoji": "🚊"
                    },
                    {
                        "id": 62,
                        "name": "Monorail",
                        "emoji": "🚝"
                    },
                    {
                        "id": 63,
                        "name": "Mountain Railway",
                        "emoji": "🚞"
                    },
                    {
                        "id": 64,
                        "name": "Tram Car",
                        "emoji": "🚋"
                    },
                    {
                        "id": 65,
                        "name": "Bus",
                        "emoji": "🚌"
                    },
                    {
                        "id": 66,
                        "name": "Oncoming Bus",
                        "emoji": "🚍"
                    },
                    {
                        "id": 67,
                        "name": "Trolleybus",
                        "emoji": "🚎"
                    },
                    {
                        "id": 68,
                        "name": "Minibus",
                        "emoji": "🚐"
                    },
                    {
                        "id": 69,
                        "name": "Ambulance",
                        "emoji": "🚑"
                    },
                    {
                        "id": 70,
                        "name": "Fire Engine",
                        "emoji": "🚒"
                    },
                    {
                        "id": 71,
                        "name": "Police Car",
                        "emoji": "🚓"
                    },
                    {
                        "id": 72,
                        "name": "Oncoming Police Car",
                        "emoji": "🚔"
                    },
                    {
                        "id": 73,
                        "name": "Taxi",
                        "emoji": "🚕"
                    },
                    {
                        "id": 74,
                        "name": "Oncoming Taxi",
                        "emoji": "🚖"
                    },
                    {
                        "id": 75,
                        "name": "Automobile",
                        "emoji": "🚗"
                    },
                    {
                        "id": 76,
                        "name": "Oncoming Automobile",
                        "emoji": "🚘"
                    },
                    {
                        "id": 77,
                        "name": "Delivery Truck",
                        "emoji": "🚚"
                    },
                    {
                        "id": 78,
                        "name": "Articulated Lorry",
                        "emoji": "🚛"
                    },
                    {
                        "id": 79,
                        "name": "Tractor",
                        "emoji": "🚜"
                    },
                    {
                        "id": 80,
                        "name": "Racing Car",
                        "emoji": "🏎"
                    },
                    {
                        "id": 81,
                        "name": "Motorcycle",
                        "emoji": "🏍"
                    },
                    {
                        "id": 82,
                        "name": "Motor Scooter",
                        "emoji": "🛵"
                    },
                    {
                        "id": 83,
                        "name": "Bicycle",
                        "emoji": "🚲"
                    },
                    {
                        "id": 84,
                        "name": "Kick Scooter",
                        "emoji": "🛴"
                    },
                    {
                        "id": 85,
                        "name": "Bus Stop",
                        "emoji": "🚏"
                    },
                    {
                        "id": 86,
                        "name": "Railway Track",
                        "emoji": "🛤"
                    },
                    {
                        "id": 87,
                        "name": "Fuel Pump",
                        "emoji": "⛽"
                    },
                    {
                        "id": 88,
                        "name": "Police Car Light",
                        "emoji": "🚨"
                    },
                    {
                        "id": 89,
                        "name": "Horizontal Traffic Light",
                        "emoji": "🚥"
                    },
                    {
                        "id": 90,
                        "name": "Vertical Traffic Light",
                        "emoji": "🚦"
                    },
                    {
                        "id": 91,
                        "name": "Construction",
                        "emoji": "🚧"
                    },
                    {
                        "id": 92,
                        "name": "Anchor",
                        "emoji": "⚓"
                    },
                    {
                        "id": 93,
                        "name": "Sailboat",
                        "emoji": "⛵"
                    },
                    {
                        "id": 94,
                        "name": "Speedboat",
                        "emoji": "🚤"
                    },
                    {
                        "id": 95,
                        "name": "Passenger Ship",
                        "emoji": "🛳"
                    },
                    {
                        "id": 96,
                        "name": "Ferry",
                        "emoji": "⛴"
                    },
                    {
                        "id": 97,
                        "name": "Motor Boat",
                        "emoji": "🛥"
                    },
                    {
                        "id": 98,
                        "name": "Ship",
                        "emoji": "🚢"
                    },
                    {
                        "id": 99,
                        "name": "Airplane",
                        "emoji": "✈"
                    },
                    {
                        "id": 100,
                        "name": "Small Airplane",
                        "emoji": "🛩"
                    },
                    {
                        "id": 101,
                        "name": "Airplane Departure",
                        "emoji": "🛫"
                    },
                    {
                        "id": 102,
                        "name": "Airplane Arrival",
                        "emoji": "🛬"
                    },
                    {
                        "id": 103,
                        "name": "Seat",
                        "emoji": "💺"
                    },
                    {
                        "id": 104,
                        "name": "Helicopter",
                        "emoji": "🚁"
                    },
                    {
                        "id": 105,
                        "name": "Suspension Railway",
                        "emoji": "🚟"
                    },
                    {
                        "id": 106,
                        "name": "Mountain Cableway",
                        "emoji": "🚠"
                    },
                    {
                        "id": 107,
                        "name": "Aerial Tramway",
                        "emoji": "🚡"
                    },
                    {
                        "id": 108,
                        "name": "Satellite",
                        "emoji": "🛰"
                    },
                    {
                        "id": 109,
                        "name": "Rocket",
                        "emoji": "🚀"
                    },
                    {
                        "id": 110,
                        "name": "Flying Saucer",
                        "emoji": "🛸"
                    },
                    {
                        "id": 111,
                        "name": "Shooting Star",
                        "emoji": "🌠"
                    },
                    {
                        "id": 112,
                        "name": "Milky Way",
                        "emoji": "🌌"
                    },
                    {
                        "id": 113,
                        "name": "Umbrella on Ground",
                        "emoji": "⛱"
                    },
                    {
                        "id": 114,
                        "name": "Fireworks",
                        "emoji": "🎆"
                    },
                    {
                        "id": 115,
                        "name": "Sparkler",
                        "emoji": "🎇"
                    },
                    {
                        "id": 116,
                        "name": "Moon Viewing Ceremony",
                        "emoji": "🎑"
                    },
                    {
                        "id": 117,
                        "name": "Yen Banknote",
                        "emoji": "💴"
                    },
                    {
                        "id": 118,
                        "name": "Dollar Banknote",
                        "emoji": "💵"
                    },
                    {
                        "id": 119,
                        "name": "Euro Banknote",
                        "emoji": "💶"
                    },
                    {
                        "id": 120,
                        "name": "Pound Banknote",
                        "emoji": "💷"
                    },
                    {
                        "id": 121,
                        "name": "Moai",
                        "emoji": "🗿"
                    },
                    {
                        "id": 122,
                        "name": "Passport Control",
                        "emoji": "🛂"
                    },
                    {
                        "id": 123,
                        "name": "Customs",
                        "emoji": "🛃"
                    },
                    {
                        "id": 124,
                        "name": "Baggage Claim",
                        "emoji": "🛄"
                    },
                    {
                        "id": 125,
                        "name": "Left Luggage",
                        "emoji": "🛅"
                    }
                ];
                this.activities = [
                    {
                        "id": 1,
                        "name": "Man in Suit Levitating",
                        "emoji": "🕴"
                    },
                    {
                        "id": 2,
                        "name": "Man Climbing",
                        "emoji": "🧗"
                    },
                    {
                        "id": 3,
                        "name": "Woman Climbing",
                        "emoji": "🧗"
                    },
                    {
                        "id": 4,
                        "name": "Horse Racing",
                        "emoji": "🏇"
                    },
                    {
                        "id": 5,
                        "name": "Skier",
                        "emoji": "⛷"
                    },
                    {
                        "id": 6,
                        "name": "Snowboarder",
                        "emoji": "🏂"
                    },
                    {
                        "id": 7,
                        "name": "Man Golfing",
                        "emoji": "🏌️"
                    },
                    {
                        "id": 8,
                        "name": "Woman Golfing",
                        "emoji": "🏌️"
                    },
                    {
                        "id": 9,
                        "name": "Man Surfing",
                        "emoji": "🏄"
                    },
                    {
                        "id": 10,
                        "name": "Woman Surfing",
                        "emoji": "🏄"
                    },
                    {
                        "id": 11,
                        "name": "Man Rowing Boat",
                        "emoji": "🚣"
                    },
                    {
                        "id": 12,
                        "name": "Woman Rowing Boat",
                        "emoji": "🚣"
                    },
                    {
                        "id": 13,
                        "name": "Man Swimming",
                        "emoji": "🏊"
                    },
                    {
                        "id": 14,
                        "name": "Woman Swimming",
                        "emoji": "🏊"
                    },
                    {
                        "id": 15,
                        "name": "Man Bouncing Ball",
                        "emoji": "⛹️"
                    },
                    {
                        "id": 16,
                        "name": "Woman Bouncing Ball",
                        "emoji": "⛹️"
                    },
                    {
                        "id": 17,
                        "name": "Man Lifting Weights",
                        "emoji": "🏋️"
                    },
                    {
                        "id": 18,
                        "name": "Woman Lifting Weights",
                        "emoji": "🏋️"
                    },
                    {
                        "id": 19,
                        "name": "Man Biking",
                        "emoji": "🚴"
                    },
                    {
                        "id": 20,
                        "name": "Woman Biking",
                        "emoji": "🚴"
                    },
                    {
                        "id": 21,
                        "name": "Man Mountain Biking",
                        "emoji": "🚵"
                    },
                    {
                        "id": 22,
                        "name": "Woman Mountain Biking",
                        "emoji": "🚵"
                    },
                    {
                        "id": 23,
                        "name": "Man Cartwheeling",
                        "emoji": "🤸"
                    },
                    {
                        "id": 24,
                        "name": "Woman Cartwheeling",
                        "emoji": "🤸"
                    },
                    {
                        "id": 25,
                        "name": "Men Wrestling",
                        "emoji": "🤼"
                    },
                    {
                        "id": 26,
                        "name": "Women Wrestling",
                        "emoji": "🤼"
                    },
                    {
                        "id": 27,
                        "name": "Man Playing Water Polo",
                        "emoji": "🤽"
                    },
                    {
                        "id": 28,
                        "name": "Woman Playing Water Polo",
                        "emoji": "🤽"
                    },
                    {
                        "id": 29,
                        "name": "Man Playing Handball",
                        "emoji": "🤾"
                    },
                    {
                        "id": 30,
                        "name": "Woman Playing Handball",
                        "emoji": "🤾"
                    },
                    {
                        "id": 31,
                        "name": "Man Juggling",
                        "emoji": "🤹"
                    },
                    {
                        "id": 32,
                        "name": "Woman Juggling",
                        "emoji": "🤹"
                    },
                    {
                        "id": 33,
                        "name": "Man in Lotus Position",
                        "emoji": "🧘🏻‍♂️"
                    },
                    {
                        "id": 34,
                        "name": "Woman in Lotus Position",
                        "emoji": "🧘🏻‍♀️"
                    },
                    {
                        "id": 35,
                        "name": "Circus Tent",
                        "emoji": "🎪"
                    },
                    {
                        "id": 36,
                        "name": "Skateboard",
                        "emoji": "🛹"
                    },
                    {
                        "id": 37,
                        "name": "Reminder Ribbon",
                        "emoji": "🎗"
                    },
                    {
                        "id": 38,
                        "name": "Admission Tickets",
                        "emoji": "🎟"
                    },
                    {
                        "id": 39,
                        "name": "Ticket",
                        "emoji": "🎫"
                    },
                    {
                        "id": 40,
                        "name": "Military Medal",
                        "emoji": "🎖"
                    },
                    {
                        "id": 41,
                        "name": "Trophy",
                        "emoji": "🏆"
                    },
                    {
                        "id": 42,
                        "name": "Sports Medal",
                        "emoji": "🏅"
                    },
                    {
                        "id": 43,
                        "name": "1st Place Medal",
                        "emoji": "🥇"
                    },
                    {
                        "id": 44,
                        "name": "2nd Place Medal",
                        "emoji": "🥈"
                    },
                    {
                        "id": 45,
                        "name": "3rd Place Medal",
                        "emoji": "🥉"
                    },
                    {
                        "id": 46,
                        "name": "Soccer Ball",
                        "emoji": "⚽"
                    },
                    {
                        "id": 47,
                        "name": "Baseball",
                        "emoji": "⚾"
                    },
                    {
                        "id": 48,
                        "name": "Softball",
                        "emoji": "🥎"
                    },
                    {
                        "id": 49,
                        "name": "Basketball",
                        "emoji": "🏀"
                    },
                    {
                        "id": 50,
                        "name": "Volleyball",
                        "emoji": "🏐"
                    },
                    {
                        "id": 51,
                        "name": "American Football",
                        "emoji": "🏈"
                    },
                    {
                        "id": 52,
                        "name": "Rugby Football",
                        "emoji": "🏉"
                    },
                    {
                        "id": 53,
                        "name": "Tennis",
                        "emoji": "🎾"
                    },
                    {
                        "id": 54,
                        "name": "Flying Disc",
                        "emoji": "🥏"
                    },
                    {
                        "id": 55,
                        "name": "Bowling",
                        "emoji": "🎳"
                    },
                    {
                        "id": 56,
                        "name": "Cricket Game",
                        "emoji": "🏏"
                    },
                    {
                        "id": 57,
                        "name": "Field Hockey",
                        "emoji": "🏑"
                    },
                    {
                        "id": 58,
                        "name": "Ice Hockey",
                        "emoji": "🏒"
                    },
                    {
                        "id": 59,
                        "name": "Lacrosse",
                        "emoji": "🥍"
                    },
                    {
                        "id": 60,
                        "name": "Ping Pong",
                        "emoji": "🏓"
                    },
                    {
                        "id": 61,
                        "name": "Badminton",
                        "emoji": "🏸"
                    },
                    {
                        "id": 62,
                        "name": "Boxing Glove",
                        "emoji": "🥊"
                    },
                    {
                        "id": 63,
                        "name": "Martial Arts Uniform",
                        "emoji": "🥋"
                    },
                    {
                        "id": 64,
                        "name": "Flag in Hole",
                        "emoji": "⛳"
                    },
                    {
                        "id": 65,
                        "name": "Ice Skate",
                        "emoji": "⛸"
                    },
                    {
                        "id": 66,
                        "name": "Fishing Pole",
                        "emoji": "🎣"
                    },
                    {
                        "id": 67,
                        "name": "Running Shirt",
                        "emoji": "🎽"
                    },
                    {
                        "id": 68,
                        "name": "Skis",
                        "emoji": "🎿"
                    },
                    {
                        "id": 69,
                        "name": "Sled",
                        "emoji": "🛷"
                    },
                    {
                        "id": 70,
                        "name": "Curling Stone",
                        "emoji": "🥌"
                    },
                    {
                        "id": 71,
                        "name": "Direct Hit",
                        "emoji": "🎯"
                    },
                    {
                        "id": 72,
                        "name": "Pool 8 Ball",
                        "emoji": "🎱"
                    },
                    {
                        "id": 73,
                        "name": "Video Game",
                        "emoji": "🎮"
                    },
                    {
                        "id": 74,
                        "name": "Slot Machine",
                        "emoji": "🎰"
                    },
                    {
                        "id": 75,
                        "name": "Game Die",
                        "emoji": "🎲"
                    },
                    {
                        "id": 76,
                        "name": "Jigsaw",
                        "emoji": "🧩"
                    },
                    {
                        "id": 77,
                        "name": "Chess Pawn",
                        "emoji": "♟"
                    },
                    {
                        "id": 78,
                        "name": "Performing Arts",
                        "emoji": "🎭"
                    },
                    {
                        "id": 79,
                        "name": "Artist Palette",
                        "emoji": "🎨"
                    },
                    {
                        "id": 80,
                        "name": "Thread",
                        "emoji": "🧵"
                    },
                    {
                        "id": 81,
                        "name": "Yarn",
                        "emoji": "🧶"
                    },
                    {
                        "id": 82,
                        "name": "Musical Score",
                        "emoji": "🎼"
                    },
                    {
                        "id": 83,
                        "name": "Microphone",
                        "emoji": "🎤"
                    },
                    {
                        "id": 84,
                        "name": "Headphone",
                        "emoji": "🎧"
                    },
                    {
                        "id": 85,
                        "name": "Saxophone",
                        "emoji": "🎷"
                    },
                    {
                        "id": 86,
                        "name": "Guitar",
                        "emoji": "🎸"
                    },
                    {
                        "id": 87,
                        "name": "Musical Keyboard",
                        "emoji": "🎹"
                    },
                    {
                        "id": 88,
                        "name": "Trumpet",
                        "emoji": "🎺"
                    },
                    {
                        "id": 89,
                        "name": "Violin",
                        "emoji": "🎻"
                    },
                    {
                        "id": 90,
                        "name": "Drum",
                        "emoji": "🥁"
                    },
                    {
                        "id": 91,
                        "name": "Clapper Board",
                        "emoji": "🎬"
                    },
                    {
                        "id": 92,
                        "name": "Bow and Arrow",
                        "emoji": "🏹"
                    }
                ];
                this.objects = [
                    {
                        "id": 1,
                        "name": "Love Letter",
                        "emoji": "💌"
                    },
                    {
                        "id": 2,
                        "name": "Hole",
                        "emoji": "🕳"
                    },
                    {
                        "id": 3,
                        "name": "Bomb",
                        "emoji": "💣"
                    },
                    {
                        "id": 4,
                        "name": "Person Taking Bath",
                        "emoji": "🛀"
                    },
                    {
                        "id": 5,
                        "name": "Person in Bed",
                        "emoji": "🛌"
                    },
                    {
                        "id": 6,
                        "name": "Kitchen Knife",
                        "emoji": "🔪"
                    },
                    {
                        "id": 7,
                        "name": "Amphora",
                        "emoji": "🏺"
                    },
                    {
                        "id": 8,
                        "name": "World Map",
                        "emoji": "🗺"
                    },
                    {
                        "id": 9,
                        "name": "Compass",
                        "emoji": "🧭"
                    },
                    {
                        "id": 10,
                        "name": "Brick",
                        "emoji": "🧱"
                    },
                    {
                        "id": 11,
                        "name": "Barber Pole",
                        "emoji": "💈"
                    },
                    {
                        "id": 12,
                        "name": "Oil Drum",
                        "emoji": "🛢"
                    },
                    {
                        "id": 13,
                        "name": "Bellhop Bell",
                        "emoji": "🛎"
                    },
                    {
                        "id": 14,
                        "name": "Luggage",
                        "emoji": "🧳"
                    },
                    {
                        "id": 15,
                        "name": "Hourglass Done",
                        "emoji": "⌛"
                    },
                    {
                        "id": 16,
                        "name": "Hourglass Not Done",
                        "emoji": "⏳"
                    },
                    {
                        "id": 17,
                        "name": "Watch",
                        "emoji": "⌚"
                    },
                    {
                        "id": 18,
                        "name": "Alarm Clock",
                        "emoji": "⏰"
                    },
                    {
                        "id": 19,
                        "name": "Stopwatch",
                        "emoji": "⏱"
                    },
                    {
                        "id": 20,
                        "name": "Timer Clock",
                        "emoji": "⏲"
                    },
                    {
                        "id": 21,
                        "name": "Mantelpiece Clock",
                        "emoji": "🕰"
                    },
                    {
                        "id": 22,
                        "name": "Thermometer",
                        "emoji": "🌡"
                    },
                    {
                        "id": 23,
                        "name": "Umbrella on Ground",
                        "emoji": "⛱"
                    },
                    {
                        "id": 24,
                        "name": "Firecracker",
                        "emoji": "🧨"
                    },
                    {
                        "id": 25,
                        "name": "Balloon",
                        "emoji": "🎈"
                    },
                    {
                        "id": 26,
                        "name": "Party Popper",
                        "emoji": "🎉"
                    },
                    {
                        "id": 27,
                        "name": "Confetti Ball",
                        "emoji": "🎊"
                    },
                    {
                        "id": 28,
                        "name": "Japanese Dolls",
                        "emoji": "🎎"
                    },
                    {
                        "id": 29,
                        "name": "Carp Streamer",
                        "emoji": "🎏"
                    },
                    {
                        "id": 30,
                        "name": "Wind Chime",
                        "emoji": "🎐"
                    },
                    {
                        "id": 31,
                        "name": "Red Envelope",
                        "emoji": "🧧"
                    },
                    {
                        "id": 32,
                        "name": "Ribbon",
                        "emoji": "🎀"
                    },
                    {
                        "id": 33,
                        "name": "Wrapped Gift",
                        "emoji": "🎁"
                    },
                    {
                        "id": 34,
                        "name": "Crystal Ball",
                        "emoji": "🔮"
                    },
                    {
                        "id": 35,
                        "name": "Nazar Amulet",
                        "emoji": "🧿"
                    },
                    {
                        "id": 36,
                        "name": "Joystick",
                        "emoji": "🕹"
                    },
                    {
                        "id": 37,
                        "name": "Teddy Bear",
                        "emoji": "🧸"
                    },
                    {
                        "id": 38,
                        "name": "Framed Picture",
                        "emoji": "🖼"
                    },
                    {
                        "id": 39,
                        "name": "Thread",
                        "emoji": "🧵"
                    },
                    {
                        "id": 40,
                        "name": "Yarn",
                        "emoji": "🧶"
                    },
                    {
                        "id": 41,
                        "name": "Shopping Bags",
                        "emoji": "🛍"
                    },
                    {
                        "id": 42,
                        "name": "Prayer Beads",
                        "emoji": "📿"
                    },
                    {
                        "id": 43,
                        "name": "Gem Stone",
                        "emoji": "💎"
                    },
                    {
                        "id": 44,
                        "name": "Postal Horn",
                        "emoji": "📯"
                    },
                    {
                        "id": 45,
                        "name": "Studio Microphone",
                        "emoji": "🎙"
                    },
                    {
                        "id": 46,
                        "name": "Level Slider",
                        "emoji": "🎚"
                    },
                    {
                        "id": 47,
                        "name": "Control Knobs",
                        "emoji": "🎛"
                    },
                    {
                        "id": 48,
                        "name": "Radio",
                        "emoji": "📻"
                    },
                    {
                        "id": 49,
                        "name": "Mobile Phone",
                        "emoji": "📱"
                    },
                    {
                        "id": 50,
                        "name": "Mobile Phone With Arrow",
                        "emoji": "📲"
                    },
                    {
                        "id": 51,
                        "name": "Telephone",
                        "emoji": "☎"
                    },
                    {
                        "id": 52,
                        "name": "Telephone Receiver",
                        "emoji": "📞"
                    },
                    {
                        "id": 53,
                        "name": "Pager",
                        "emoji": "📟"
                    },
                    {
                        "id": 54,
                        "name": "Fax Machine",
                        "emoji": "📠"
                    },
                    {
                        "id": 55,
                        "name": "Battery",
                        "emoji": "🔋"
                    },
                    {
                        "id": 56,
                        "name": "Electric Plug",
                        "emoji": "🔌"
                    },
                    {
                        "id": 57,
                        "name": "Laptop Computer",
                        "emoji": "💻"
                    },
                    {
                        "id": 58,
                        "name": "Desktop Computer",
                        "emoji": "🖥"
                    },
                    {
                        "id": 59,
                        "name": "Printer",
                        "emoji": "🖨"
                    },
                    {
                        "id": 60,
                        "name": "Keyboard",
                        "emoji": "⌨"
                    },
                    {
                        "id": 61,
                        "name": "Computer Mouse",
                        "emoji": "🖱"
                    },
                    {
                        "id": 62,
                        "name": "Trackball",
                        "emoji": "🖲"
                    },
                    {
                        "id": 63,
                        "name": "Computer Disk",
                        "emoji": "💽"
                    },
                    {
                        "id": 64,
                        "name": "Floppy Disk",
                        "emoji": "💾"
                    },
                    {
                        "id": 65,
                        "name": "Optical Disk",
                        "emoji": "💿"
                    },
                    {
                        "id": 66,
                        "name": "DVD",
                        "emoji": "📀"
                    },
                    {
                        "id": 67,
                        "name": "Abacus",
                        "emoji": "🧮"
                    },
                    {
                        "id": 68,
                        "name": "Movie Camera",
                        "emoji": "🎥"
                    },
                    {
                        "id": 69,
                        "name": "Film Frames",
                        "emoji": "🎞"
                    },
                    {
                        "id": 70,
                        "name": "Film Projector",
                        "emoji": "📽"
                    },
                    {
                        "id": 71,
                        "name": "Television",
                        "emoji": "📺"
                    },
                    {
                        "id": 72,
                        "name": "Camera",
                        "emoji": "📷"
                    },
                    {
                        "id": 73,
                        "name": "Camera With Flash",
                        "emoji": "📸"
                    },
                    {
                        "id": 74,
                        "name": "Video Camera",
                        "emoji": "📹"
                    },
                    {
                        "id": 75,
                        "name": "Videocassette",
                        "emoji": "📼"
                    },
                    {
                        "id": 76,
                        "name": "Magnifying Glass Tilted Left",
                        "emoji": "🔍"
                    },
                    {
                        "id": 77,
                        "name": "Magnifying Glass Tilted Right",
                        "emoji": "🔎"
                    },
                    {
                        "id": 78,
                        "name": "Candle",
                        "emoji": "🕯"
                    },
                    {
                        "id": 79,
                        "name": "Light Bulb",
                        "emoji": "💡"
                    },
                    {
                        "id": 80,
                        "name": "Flashlight",
                        "emoji": "🔦"
                    },
                    {
                        "id": 81,
                        "name": "Red Paper Lantern",
                        "emoji": "🏮"
                    },
                    {
                        "id": 82,
                        "name": "Notebook With Decorative Cover",
                        "emoji": "📔"
                    },
                    {
                        "id": 83,
                        "name": "Closed Book",
                        "emoji": "📕"
                    },
                    {
                        "id": 84,
                        "name": "Open Book",
                        "emoji": "📖"
                    },
                    {
                        "id": 85,
                        "name": "Green Book",
                        "emoji": "📗"
                    },
                    {
                        "id": 86,
                        "name": "Blue Book",
                        "emoji": "📘"
                    },
                    {
                        "id": 87,
                        "name": "Orange Book",
                        "emoji": "📙"
                    },
                    {
                        "id": 88,
                        "name": "Books",
                        "emoji": "📚"
                    },
                    {
                        "id": 89,
                        "name": "Notebook",
                        "emoji": "📓"
                    },
                    {
                        "id": 90,
                        "name": "Page With Curl",
                        "emoji": "📃"
                    },
                    {
                        "id": 91,
                        "name": "Scroll",
                        "emoji": "📜"
                    },
                    {
                        "id": 92,
                        "name": "Page Facing Up",
                        "emoji": "📄"
                    },
                    {
                        "id": 93,
                        "name": "Newspaper",
                        "emoji": "📰"
                    },
                    {
                        "id": 94,
                        "name": "Rolled-Up Newspaper",
                        "emoji": "🗞"
                    },
                    {
                        "id": 95,
                        "name": "Bookmark Tabs",
                        "emoji": "📑"
                    },
                    {
                        "id": 96,
                        "name": "Bookmark",
                        "emoji": "🔖"
                    },
                    {
                        "id": 97,
                        "name": "Label",
                        "emoji": "🏷"
                    },
                    {
                        "id": 98,
                        "name": "Money Bag",
                        "emoji": "💰"
                    },
                    {
                        "id": 99,
                        "name": "Yen Banknote",
                        "emoji": "💴"
                    },
                    {
                        "id": 100,
                        "name": "Dollar Banknote",
                        "emoji": "💵"
                    },
                    {
                        "id": 101,
                        "name": "Euro Banknote",
                        "emoji": "💶"
                    },
                    {
                        "id": 102,
                        "name": "Pound Banknote",
                        "emoji": "💷"
                    },
                    {
                        "id": 103,
                        "name": "Money With Wings",
                        "emoji": "💸"
                    },
                    {
                        "id": 104,
                        "name": "Credit Card",
                        "emoji": "💳"
                    },
                    {
                        "id": 105,
                        "name": "Receipt",
                        "emoji": "🧾"
                    },
                    {
                        "id": 106,
                        "name": "Envelope",
                        "emoji": "✉"
                    },
                    {
                        "id": 107,
                        "name": "E-Mail",
                        "emoji": "📧"
                    },
                    {
                        "id": 108,
                        "name": "Incoming Envelope",
                        "emoji": "📨"
                    },
                    {
                        "id": 109,
                        "name": "Envelope With Arrow",
                        "emoji": "📩"
                    },
                    {
                        "id": 110,
                        "name": "Outbox Tray",
                        "emoji": "📤"
                    },
                    {
                        "id": 111,
                        "name": "Inbox Tray",
                        "emoji": "📥"
                    },
                    {
                        "id": 112,
                        "name": "Package",
                        "emoji": "📦"
                    },
                    {
                        "id": 113,
                        "name": "Closed Mailbox With Raised Flag",
                        "emoji": "📫"
                    },
                    {
                        "id": 114,
                        "name": "Closed Mailbox With Lowered Flag",
                        "emoji": "📪"
                    },
                    {
                        "id": 115,
                        "name": "Open Mailbox With Raised Flag",
                        "emoji": "📬"
                    },
                    {
                        "id": 116,
                        "name": "Open Mailbox With Lowered Flag",
                        "emoji": "📭"
                    },
                    {
                        "id": 117,
                        "name": "Postbox",
                        "emoji": "📮"
                    },
                    {
                        "id": 118,
                        "name": "Ballot Box With Ballot",
                        "emoji": "🗳"
                    },
                    {
                        "id": 119,
                        "name": "Pencil",
                        "emoji": "✏"
                    },
                    {
                        "id": 120,
                        "name": "Black Nib",
                        "emoji": "✒"
                    },
                    {
                        "id": 121,
                        "name": "Fountain Pen",
                        "emoji": "🖋"
                    },
                    {
                        "id": 122,
                        "name": "Pen",
                        "emoji": "🖊"
                    },
                    {
                        "id": 123,
                        "name": "Paintbrush",
                        "emoji": "🖌"
                    },
                    {
                        "id": 124,
                        "name": "Crayon",
                        "emoji": "🖍"
                    },
                    {
                        "id": 125,
                        "name": "Memo",
                        "emoji": "📝"
                    },
                    {
                        "id": 126,
                        "name": "File Folder",
                        "emoji": "📁"
                    },
                    {
                        "id": 127,
                        "name": "Open File Folder",
                        "emoji": "📂"
                    },
                    {
                        "id": 128,
                        "name": "Card Index Dividers",
                        "emoji": "🗂"
                    },
                    {
                        "id": 129,
                        "name": "Calendar",
                        "emoji": "📅"
                    },
                    {
                        "id": 130,
                        "name": "Tear-Off Calendar",
                        "emoji": "📆"
                    },
                    {
                        "id": 131,
                        "name": "Spiral Notepad",
                        "emoji": "🗒"
                    },
                    {
                        "id": 132,
                        "name": "Spiral Calendar",
                        "emoji": "🗓"
                    },
                    {
                        "id": 133,
                        "name": "Card Index",
                        "emoji": "📇"
                    },
                    {
                        "id": 134,
                        "name": "Chart Increasing",
                        "emoji": "📈"
                    },
                    {
                        "id": 135,
                        "name": "Chart Decreasing",
                        "emoji": "📉"
                    },
                    {
                        "id": 136,
                        "name": "Bar Chart",
                        "emoji": "📊"
                    },
                    {
                        "id": 137,
                        "name": "Clipboard",
                        "emoji": "📋"
                    },
                    {
                        "id": 138,
                        "name": "Pushpin",
                        "emoji": "📌"
                    },
                    {
                        "id": 139,
                        "name": "Round Pushpin",
                        "emoji": "📍"
                    },
                    {
                        "id": 140,
                        "name": "Paperclip",
                        "emoji": "📎"
                    },
                    {
                        "id": 141,
                        "name": "Linked Paperclips",
                        "emoji": "🖇"
                    },
                    {
                        "id": 142,
                        "name": "Straight Ruler",
                        "emoji": "📏"
                    },
                    {
                        "id": 143,
                        "name": "Triangular Ruler",
                        "emoji": "📐"
                    },
                    {
                        "id": 144,
                        "name": "Scissors",
                        "emoji": "✂"
                    },
                    {
                        "id": 145,
                        "name": "Card File Box",
                        "emoji": "🗃"
                    },
                    {
                        "id": 146,
                        "name": "File Cabinet",
                        "emoji": "🗄"
                    },
                    {
                        "id": 147,
                        "name": "Wastebasket",
                        "emoji": "🗑"
                    },
                    {
                        "id": 148,
                        "name": "Locked",
                        "emoji": "🔒"
                    },
                    {
                        "id": 149,
                        "name": "Unlocked",
                        "emoji": "🔓"
                    },
                    {
                        "id": 150,
                        "name": "Locked With Pen",
                        "emoji": "🔏"
                    },
                    {
                        "id": 151,
                        "name": "Locked With Key",
                        "emoji": "🔐"
                    },
                    {
                        "id": 152,
                        "name": "Key",
                        "emoji": "🔑"
                    },
                    {
                        "id": 153,
                        "name": "Old Key",
                        "emoji": "🗝"
                    },
                    {
                        "id": 154,
                        "name": "Hammer",
                        "emoji": "🔨"
                    },
                    {
                        "id": 155,
                        "name": "Pick",
                        "emoji": "⛏"
                    },
                    {
                        "id": 156,
                        "name": "Hammer and Pick",
                        "emoji": "⚒"
                    },
                    {
                        "id": 157,
                        "name": "Hammer and Wrench",
                        "emoji": "🛠"
                    },
                    {
                        "id": 158,
                        "name": "Dagger",
                        "emoji": "🗡"
                    },
                    {
                        "id": 159,
                        "name": "Crossed Swords",
                        "emoji": "⚔"
                    },
                    {
                        "id": 160,
                        "name": "Pistol",
                        "emoji": "🔫"
                    },
                    {
                        "id": 161,
                        "name": "Shield",
                        "emoji": "🛡"
                    },
                    {
                        "id": 162,
                        "name": "Wrench",
                        "emoji": "🔧"
                    },
                    {
                        "id": 163,
                        "name": "Nut and Bolt",
                        "emoji": "🔩"
                    },
                    {
                        "id": 164,
                        "name": "Gear",
                        "emoji": "⚙"
                    },
                    {
                        "id": 165,
                        "name": "Clamp",
                        "emoji": "🗜"
                    },
                    {
                        "id": 166,
                        "name": "Balance Scale",
                        "emoji": "⚖"
                    },
                    {
                        "id": 167,
                        "name": "Link",
                        "emoji": "🔗"
                    },
                    {
                        "id": 168,
                        "name": "Chains",
                        "emoji": "⛓"
                    },
                    {
                        "id": 169,
                        "name": "Toolbox",
                        "emoji": "🧰"
                    },
                    {
                        "id": 170,
                        "name": "Magnet",
                        "emoji": "🧲"
                    },
                    {
                        "id": 171,
                        "name": "Alembic",
                        "emoji": "⚗"
                    },
                    {
                        "id": 172,
                        "name": "Test Tube",
                        "emoji": "🧪"
                    },
                    {
                        "id": 173,
                        "name": "Petri Dish",
                        "emoji": "🧫"
                    },
                    {
                        "id": 174,
                        "name": "DNA",
                        "emoji": "🧬"
                    },
                    {
                        "id": 175,
                        "name": "Microscope",
                        "emoji": "🔬"
                    },
                    {
                        "id": 176,
                        "name": "Telescope",
                        "emoji": "🔭"
                    },
                    {
                        "id": 177,
                        "name": "Satellite Antenna",
                        "emoji": "📡"
                    },
                    {
                        "id": 178,
                        "name": "Syringe",
                        "emoji": "💉"
                    },
                    {
                        "id": 179,
                        "name": "Pill",
                        "emoji": "💊"
                    },
                    {
                        "id": 180,
                        "name": "Door",
                        "emoji": "🚪"
                    },
                    {
                        "id": 181,
                        "name": "Bed",
                        "emoji": "🛏"
                    },
                    {
                        "id": 182,
                        "name": "Couch and Lamp",
                        "emoji": "🛋"
                    },
                    {
                        "id": 183,
                        "name": "Toilet",
                        "emoji": "🚽"
                    },
                    {
                        "id": 184,
                        "name": "Shower",
                        "emoji": "🚿"
                    },
                    {
                        "id": 185,
                        "name": "Bathtub",
                        "emoji": "🛁"
                    },
                    {
                        "id": 186,
                        "name": "Lotion Bottle",
                        "emoji": "🧴"
                    },
                    {
                        "id": 187,
                        "name": "Safety Pin",
                        "emoji": "🧷"
                    },
                    {
                        "id": 188,
                        "name": "Broom",
                        "emoji": "🧹"
                    },
                    {
                        "id": 189,
                        "name": "Basket",
                        "emoji": "🧺"
                    },
                    {
                        "id": 190,
                        "name": "Roll of Paper",
                        "emoji": "🧻"
                    },
                    {
                        "id": 191,
                        "name": "Soap",
                        "emoji": "🧼"
                    },
                    {
                        "id": 192,
                        "name": "Sponge",
                        "emoji": "🧽"
                    },
                    {
                        "id": 193,
                        "name": "Fire Extinguisher",
                        "emoji": "🧯"
                    },
                    {
                        "id": 194,
                        "name": "Cigarette",
                        "emoji": "🚬"
                    },
                    {
                        "id": 195,
                        "name": "Coffin",
                        "emoji": "⚰"
                    },
                    {
                        "id": 196,
                        "name": "Funeral Urn",
                        "emoji": "⚱"
                    },
                    {
                        "id": 197,
                        "name": "Moai",
                        "emoji": "🗿"
                    },
                    {
                        "id": 198,
                        "name": "Potable Water",
                        "emoji": "🚰"
                    }
                ];
                this.symbols = [
                    {
                        "id": 1,
                        "name": "Heart With Arrow",
                        "emoji": "💘"
                    },
                    {
                        "id": 2,
                        "name": "Heart With Ribbon",
                        "emoji": "💝"
                    },
                    {
                        "id": 3,
                        "name": "Sparkling Heart",
                        "emoji": "💖"
                    },
                    {
                        "id": 4,
                        "name": "Growing Heart",
                        "emoji": "💗"
                    },
                    {
                        "id": 5,
                        "name": "Beating Heart",
                        "emoji": "💓"
                    },
                    {
                        "id": 6,
                        "name": "Revolving Hearts",
                        "emoji": "💞"
                    },
                    {
                        "id": 7,
                        "name": "Two Hearts",
                        "emoji": "💕"
                    },
                    {
                        "id": 8,
                        "name": "Heart Decoration",
                        "emoji": "💟"
                    },
                    {
                        "id": 9,
                        "name": "Heavy Heart Exclamation",
                        "emoji": "❣"
                    },
                    {
                        "id": 10,
                        "name": "Broken Heart",
                        "emoji": "💔"
                    },
                    {
                        "id": 11,
                        "name": "Red Heart",
                        "emoji": "❤"
                    },
                    {
                        "id": 12,
                        "name": "Orange Heart",
                        "emoji": "🧡"
                    },
                    {
                        "id": 13,
                        "name": "Yellow Heart",
                        "emoji": "💛"
                    },
                    {
                        "id": 14,
                        "name": "Green Heart",
                        "emoji": "💚"
                    },
                    {
                        "id": 15,
                        "name": "Blue Heart",
                        "emoji": "💙"
                    },
                    {
                        "id": 16,
                        "name": "Purple Heart",
                        "emoji": "💜"
                    },
                    {
                        "id": 17,
                        "name": "Black Heart",
                        "emoji": "🖤"
                    },
                    {
                        "id": 18,
                        "name": "Hundred Points",
                        "emoji": "💯"
                    },
                    {
                        "id": 19,
                        "name": "Anger Symbol",
                        "emoji": "💢"
                    },
                    {
                        "id": 20,
                        "name": "Speech Balloon",
                        "emoji": "💬"
                    },
                    {
                        "id": 21,
                        "name": "Eye in Speech Bubble",
                        "emoji": "👁️‍🗨️"
                    },
                    {
                        "id": 22,
                        "name": "Right Anger Bubble",
                        "emoji": "🗯"
                    },
                    {
                        "id": 23,
                        "name": "Thought Balloon",
                        "emoji": "💭"
                    },
                    {
                        "id": 24,
                        "name": "Zzz",
                        "emoji": "💤"
                    },
                    {
                        "id": 25,
                        "name": "White Flower",
                        "emoji": "💮"
                    },
                    {
                        "id": 26,
                        "name": "Hot Springs",
                        "emoji": "♨"
                    },
                    {
                        "id": 27,
                        "name": "Barber Pole",
                        "emoji": "💈"
                    },
                    {
                        "id": 28,
                        "name": "Stop Sign",
                        "emoji": "🛑"
                    },
                    {
                        "id": 29,
                        "name": "Twelve O’Clock",
                        "emoji": "🕛"
                    },
                    {
                        "id": 30,
                        "name": "Twelve-Thirty",
                        "emoji": "🕧"
                    },
                    {
                        "id": 31,
                        "name": "One O’Clock",
                        "emoji": "🕐"
                    },
                    {
                        "id": 32,
                        "name": "One-Thirty",
                        "emoji": "🕜"
                    },
                    {
                        "id": 33,
                        "name": "Two O’Clock",
                        "emoji": "🕑"
                    },
                    {
                        "id": 34,
                        "name": "Two-Thirty",
                        "emoji": "🕝"
                    },
                    {
                        "id": 35,
                        "name": "Three O’Clock",
                        "emoji": "🕒"
                    },
                    {
                        "id": 36,
                        "name": "Three-Thirty",
                        "emoji": "🕞"
                    },
                    {
                        "id": 37,
                        "name": "Four O’Clock",
                        "emoji": "🕓"
                    },
                    {
                        "id": 38,
                        "name": "Four-Thirty",
                        "emoji": "🕟"
                    },
                    {
                        "id": 39,
                        "name": "Five O’Clock",
                        "emoji": "🕔"
                    },
                    {
                        "id": 40,
                        "name": "Five-Thirty",
                        "emoji": "🕠"
                    },
                    {
                        "id": 41,
                        "name": "Six O’Clock",
                        "emoji": "🕕"
                    },
                    {
                        "id": 42,
                        "name": "Six-Thirty",
                        "emoji": "🕡"
                    },
                    {
                        "id": 43,
                        "name": "Seven O’Clock",
                        "emoji": "🕖"
                    },
                    {
                        "id": 44,
                        "name": "Seven-Thirty",
                        "emoji": "🕢"
                    },
                    {
                        "id": 45,
                        "name": "Eight O’Clock",
                        "emoji": "🕗"
                    },
                    {
                        "id": 46,
                        "name": "Eight-Thirty",
                        "emoji": "🕣"
                    },
                    {
                        "id": 47,
                        "name": "Nine O’Clock",
                        "emoji": "🕘"
                    },
                    {
                        "id": 48,
                        "name": "Nine-Thirty",
                        "emoji": "🕤"
                    },
                    {
                        "id": 49,
                        "name": "Ten O’Clock",
                        "emoji": "🕙"
                    },
                    {
                        "id": 50,
                        "name": "Ten-Thirty",
                        "emoji": "🕥"
                    },
                    {
                        "id": 51,
                        "name": "Eleven O’Clock",
                        "emoji": "🕚"
                    },
                    {
                        "id": 52,
                        "name": "Eleven-Thirty",
                        "emoji": "🕦"
                    },
                    {
                        "id": 53,
                        "name": "Cyclone",
                        "emoji": "🌀"
                    },
                    {
                        "id": 54,
                        "name": "Spade Suit",
                        "emoji": "♠"
                    },
                    {
                        "id": 55,
                        "name": "Heart Suit",
                        "emoji": "♥"
                    },
                    {
                        "id": 56,
                        "name": "Diamond Suit",
                        "emoji": "♦"
                    },
                    {
                        "id": 57,
                        "name": "Club Suit",
                        "emoji": "♣"
                    },
                    {
                        "id": 58,
                        "name": "Joker",
                        "emoji": "🃏"
                    },
                    {
                        "id": 59,
                        "name": "Mahjong Red Dragon",
                        "emoji": "🀄"
                    },
                    {
                        "id": 60,
                        "name": "Flower Playing Cards",
                        "emoji": "🎴"
                    },
                    {
                        "id": 61,
                        "name": "Muted Speaker",
                        "emoji": "🔇"
                    },
                    {
                        "id": 62,
                        "name": "Speaker Low Volume",
                        "emoji": "🔈"
                    },
                    {
                        "id": 63,
                        "name": "Speaker Medium Volume",
                        "emoji": "🔉"
                    },
                    {
                        "id": 64,
                        "name": "Speaker High Volume",
                        "emoji": "🔊"
                    },
                    {
                        "id": 65,
                        "name": "Loudspeaker",
                        "emoji": "📢"
                    },
                    {
                        "id": 66,
                        "name": "Megaphone",
                        "emoji": "📣"
                    },
                    {
                        "id": 67,
                        "name": "Postal Horn",
                        "emoji": "📯"
                    },
                    {
                        "id": 68,
                        "name": "Bell",
                        "emoji": "🔔"
                    },
                    {
                        "id": 69,
                        "name": "Bell With Slash",
                        "emoji": "🔕"
                    },
                    {
                        "id": 70,
                        "name": "Musical Note",
                        "emoji": "🎵"
                    },
                    {
                        "id": 71,
                        "name": "Musical Notes",
                        "emoji": "🎶"
                    },
                    {
                        "id": 72,
                        "name": "ATM Sign",
                        "emoji": "🏧"
                    },
                    {
                        "id": 73,
                        "name": "Litter in Bin Sign",
                        "emoji": "🚮"
                    },
                    {
                        "id": 74,
                        "name": "Potable Water",
                        "emoji": "🚰"
                    },
                    {
                        "id": 75,
                        "name": "Wheelchair Symbol",
                        "emoji": "♿"
                    },
                    {
                        "id": 76,
                        "name": "Men’s Room",
                        "emoji": "🚹"
                    },
                    {
                        "id": 77,
                        "name": "Women’s Room",
                        "emoji": "🚺"
                    },
                    {
                        "id": 78,
                        "name": "Restroom",
                        "emoji": "🚻"
                    },
                    {
                        "id": 79,
                        "name": "Baby Symbol",
                        "emoji": "🚼"
                    },
                    {
                        "id": 80,
                        "name": "Water Closet",
                        "emoji": "🚾"
                    },
                    {
                        "id": 81,
                        "name": "Warning",
                        "emoji": "⚠"
                    },
                    {
                        "id": 82,
                        "name": "Children Crossing",
                        "emoji": "🚸"
                    },
                    {
                        "id": 83,
                        "name": "No Entry",
                        "emoji": "⛔"
                    },
                    {
                        "id": 84,
                        "name": "Prohibited",
                        "emoji": "🚫"
                    },
                    {
                        "id": 85,
                        "name": "No Bicycles",
                        "emoji": "🚳"
                    },
                    {
                        "id": 86,
                        "name": "No Smoking",
                        "emoji": "🚭"
                    },
                    {
                        "id": 87,
                        "name": "No Littering",
                        "emoji": "🚯"
                    },
                    {
                        "id": 88,
                        "name": "Non-Potable Water",
                        "emoji": "🚱"
                    },
                    {
                        "id": 89,
                        "name": "No Pedestrians",
                        "emoji": "🚷"
                    },
                    {
                        "id": 90,
                        "name": "No One Under Eighteen",
                        "emoji": "🔞"
                    },
                    {
                        "id": 91,
                        "name": "Radioactive",
                        "emoji": "☢"
                    },
                    {
                        "id": 92,
                        "name": "Biohazard",
                        "emoji": "☣"
                    },
                    {
                        "id": 93,
                        "name": "Up Arrow",
                        "emoji": "⬆"
                    },
                    {
                        "id": 94,
                        "name": "Up-Right Arrow",
                        "emoji": "↗"
                    },
                    {
                        "id": 95,
                        "name": "Right Arrow",
                        "emoji": "➡"
                    },
                    {
                        "id": 96,
                        "name": "Down-Right Arrow",
                        "emoji": "↘"
                    },
                    {
                        "id": 97,
                        "name": "Down Arrow",
                        "emoji": "⬇"
                    },
                    {
                        "id": 98,
                        "name": "Down-Left Arrow",
                        "emoji": "↙"
                    },
                    {
                        "id": 99,
                        "name": "Left Arrow",
                        "emoji": "⬅"
                    },
                    {
                        "id": 100,
                        "name": "Up-Left Arrow",
                        "emoji": "↖"
                    },
                    {
                        "id": 101,
                        "name": "Up-Down Arrow",
                        "emoji": "↕"
                    },
                    {
                        "id": 102,
                        "name": "Left-Right Arrow",
                        "emoji": "↔"
                    },
                    {
                        "id": 103,
                        "name": "Right Arrow Curving Left",
                        "emoji": "↩"
                    },
                    {
                        "id": 104,
                        "name": "Left Arrow Curving Right",
                        "emoji": "↪"
                    },
                    {
                        "id": 105,
                        "name": "Right Arrow Curving Up",
                        "emoji": "⤴"
                    },
                    {
                        "id": 106,
                        "name": "Right Arrow Curving Down",
                        "emoji": "⤵"
                    },
                    {
                        "id": 107,
                        "name": "Clockwise Vertical Arrows",
                        "emoji": "🔃"
                    },
                    {
                        "id": 108,
                        "name": "Counterclockwise Arrows Button",
                        "emoji": "🔄"
                    },
                    {
                        "id": 109,
                        "name": "Back Arrow",
                        "emoji": "🔙"
                    },
                    {
                        "id": 110,
                        "name": "End Arrow",
                        "emoji": "🔚"
                    },
                    {
                        "id": 111,
                        "name": "On! Arrow",
                        "emoji": "🔛"
                    },
                    {
                        "id": 112,
                        "name": "Soon Arrow",
                        "emoji": "🔜"
                    },
                    {
                        "id": 113,
                        "name": "Top Arrow",
                        "emoji": "🔝"
                    },
                    {
                        "id": 114,
                        "name": "Place of Worship",
                        "emoji": "🛐"
                    },
                    {
                        "id": 115,
                        "name": "Atom Symbol",
                        "emoji": "⚛"
                    },
                    {
                        "id": 116,
                        "name": "Om",
                        "emoji": "🕉"
                    },
                    {
                        "id": 117,
                        "name": "Star of David",
                        "emoji": "✡"
                    },
                    {
                        "id": 118,
                        "name": "Wheel of Dharma",
                        "emoji": "☸"
                    },
                    {
                        "id": 119,
                        "name": "Yin Yang",
                        "emoji": "☯"
                    },
                    {
                        "id": 120,
                        "name": "Latin Cross",
                        "emoji": "✝"
                    },
                    {
                        "id": 121,
                        "name": "Orthodox Cross",
                        "emoji": "☦"
                    },
                    {
                        "id": 122,
                        "name": "Star and Crescent",
                        "emoji": "☪"
                    },
                    {
                        "id": 123,
                        "name": "Peace Symbol",
                        "emoji": "☮"
                    },
                    {
                        "id": 124,
                        "name": "Menorah",
                        "emoji": "🕎"
                    },
                    {
                        "id": 125,
                        "name": "Dotted Six-Pointed Star",
                        "emoji": "🔯"
                    },
                    {
                        "id": 126,
                        "name": "Aries",
                        "emoji": "♈"
                    },
                    {
                        "id": 127,
                        "name": "Taurus",
                        "emoji": "♉"
                    },
                    {
                        "id": 128,
                        "name": "Gemini",
                        "emoji": "♊"
                    },
                    {
                        "id": 129,
                        "name": "Cancer",
                        "emoji": "♋"
                    },
                    {
                        "id": 130,
                        "name": "Leo",
                        "emoji": "♌"
                    },
                    {
                        "id": 131,
                        "name": "Virgo",
                        "emoji": "♍"
                    },
                    {
                        "id": 132,
                        "name": "Libra",
                        "emoji": "♎"
                    },
                    {
                        "id": 133,
                        "name": "Scorpio",
                        "emoji": "♏"
                    },
                    {
                        "id": 134,
                        "name": "Sagittarius",
                        "emoji": "♐"
                    },
                    {
                        "id": 135,
                        "name": "Capricorn",
                        "emoji": "♑"
                    },
                    {
                        "id": 136,
                        "name": "Aquarius",
                        "emoji": "♒"
                    },
                    {
                        "id": 137,
                        "name": "Pisces",
                        "emoji": "♓"
                    },
                    {
                        "id": 138,
                        "name": "Ophiuchus",
                        "emoji": "⛎"
                    },
                    {
                        "id": 139,
                        "name": "Shuffle Tracks Button",
                        "emoji": "🔀"
                    },
                    {
                        "id": 140,
                        "name": "Repeat Button",
                        "emoji": "🔁"
                    },
                    {
                        "id": 141,
                        "name": "Repeat Single Button",
                        "emoji": "🔂"
                    },
                    {
                        "id": 142,
                        "name": "Play Button",
                        "emoji": "▶"
                    },
                    {
                        "id": 143,
                        "name": "Fast-Forward Button",
                        "emoji": "⏩"
                    },
                    {
                        "id": 144,
                        "name": "Reverse Button",
                        "emoji": "◀"
                    },
                    {
                        "id": 145,
                        "name": "Fast Reverse Button",
                        "emoji": "⏪"
                    },
                    {
                        "id": 146,
                        "name": "Upwards Button",
                        "emoji": "🔼"
                    },
                    {
                        "id": 147,
                        "name": "Fast Up Button",
                        "emoji": "⏫"
                    },
                    {
                        "id": 148,
                        "name": "Downwards Button",
                        "emoji": "🔽"
                    },
                    {
                        "id": 149,
                        "name": "Fast Down Button",
                        "emoji": "⏬"
                    },
                    {
                        "id": 150,
                        "name": "Stop Button",
                        "emoji": "⏹"
                    },
                    {
                        "id": 151,
                        "name": "Eject Button",
                        "emoji": "⏏"
                    },
                    {
                        "id": 152,
                        "name": "Cinema",
                        "emoji": "🎦"
                    },
                    {
                        "id": 153,
                        "name": "Dim Button",
                        "emoji": "🔅"
                    },
                    {
                        "id": 154,
                        "name": "Bright Button",
                        "emoji": "🔆"
                    },
                    {
                        "id": 155,
                        "name": "Antenna Bars",
                        "emoji": "📶"
                    },
                    {
                        "id": 156,
                        "name": "Vibration Mode",
                        "emoji": "📳"
                    },
                    {
                        "id": 157,
                        "name": "Mobile Phone Off",
                        "emoji": "📴"
                    },
                    {
                        "id": 158,
                        "name": "Infinity",
                        "emoji": "♾"
                    },
                    {
                        "id": 159,
                        "name": "Recycling Symbol",
                        "emoji": "♻"
                    },
                    {
                        "id": 160,
                        "name": "Trident Emblem",
                        "emoji": "🔱"
                    },
                    {
                        "id": 161,
                        "name": "Name Badge",
                        "emoji": "📛"
                    },
                    {
                        "id": 162,
                        "name": "Japanese Symbol for Beginner",
                        "emoji": "🔰"
                    },
                    {
                        "id": 163,
                        "name": "Heavy Large Circle",
                        "emoji": "⭕"
                    },
                    {
                        "id": 164,
                        "name": "White Heavy Check Mark",
                        "emoji": "✅"
                    },
                    {
                        "id": 165,
                        "name": "Ballot Box With Check",
                        "emoji": "☑"
                    },
                    {
                        "id": 166,
                        "name": "Heavy Check Mark",
                        "emoji": "✔"
                    },
                    {
                        "id": 167,
                        "name": "Heavy Multiplication X",
                        "emoji": "✖"
                    },
                    {
                        "id": 168,
                        "name": "Cross Mark",
                        "emoji": "❌"
                    },
                    {
                        "id": 169,
                        "name": "Cross Mark Button",
                        "emoji": "❎"
                    },
                    {
                        "id": 170,
                        "name": "Heavy Plus Sign",
                        "emoji": "➕"
                    },
                    {
                        "id": 171,
                        "name": "Heavy Minus Sign",
                        "emoji": "➖"
                    },
                    {
                        "id": 172,
                        "name": "Heavy Division Sign",
                        "emoji": "➗"
                    },
                    {
                        "id": 173,
                        "name": "Curly Loop",
                        "emoji": "➰"
                    },
                    {
                        "id": 174,
                        "name": "Double Curly Loop",
                        "emoji": "➿"
                    },
                    {
                        "id": 175,
                        "name": "Part Alternation Mark",
                        "emoji": "〽"
                    },
                    {
                        "id": 176,
                        "name": "Eight-Spoked Asterisk",
                        "emoji": "✳"
                    },
                    {
                        "id": 177,
                        "name": "Eight-Pointed Star",
                        "emoji": "✴"
                    },
                    {
                        "id": 178,
                        "name": "Sparkle",
                        "emoji": "❇"
                    },
                    {
                        "id": 179,
                        "name": "Double Exclamation Mark",
                        "emoji": "‼"
                    },
                    {
                        "id": 180,
                        "name": "Exclamation Question Mark",
                        "emoji": "⁉"
                    },
                    {
                        "id": 181,
                        "name": "Question Mark",
                        "emoji": "❓"
                    },
                    {
                        "id": 182,
                        "name": "White Question Mark",
                        "emoji": "❔"
                    },
                    {
                        "id": 183,
                        "name": "White Exclamation Mark",
                        "emoji": "❕"
                    },
                    {
                        "id": 184,
                        "name": "Exclamation Mark",
                        "emoji": "❗"
                    },
                    {
                        "id": 185,
                        "name": "Copyright",
                        "emoji": "©"
                    },
                    {
                        "id": 186,
                        "name": "Registered",
                        "emoji": "®"
                    },
                    {
                        "id": 187,
                        "name": "Trade Mark",
                        "emoji": "™"
                    },
                    {
                        "id": 188,
                        "name": "Keycap Number Sign",
                        "emoji": "#️⃣"
                    },
                    {
                        "id": 189,
                        "name": "Keycap Digit Zero",
                        "emoji": "0️⃣"
                    },
                    {
                        "id": 190,
                        "name": "Keycap Digit One",
                        "emoji": "1️⃣"
                    },
                    {
                        "id": 191,
                        "name": "Keycap Digit Two",
                        "emoji": "2️⃣"
                    },
                    {
                        "id": 192,
                        "name": "Keycap Digit Three",
                        "emoji": "3️⃣"
                    },
                    {
                        "id": 193,
                        "name": "Keycap Digit Four",
                        "emoji": "4️⃣"
                    },
                    {
                        "id": 194,
                        "name": "Keycap Digit Five",
                        "emoji": "5️⃣"
                    },
                    {
                        "id": 195,
                        "name": "Keycap Digit Six",
                        "emoji": "6️⃣"
                    },
                    {
                        "id": 196,
                        "name": "Keycap Digit Seven",
                        "emoji": "7️⃣"
                    },
                    {
                        "id": 197,
                        "name": "Keycap Digit Eight",
                        "emoji": "8️⃣"
                    },
                    {
                        "id": 198,
                        "name": "Keycap Digit Nine",
                        "emoji": "9️⃣"
                    },
                    {
                        "id": 199,
                        "name": "Keycap: 10",
                        "emoji": "🔟"
                    },
                    {
                        "id": 200,
                        "name": "Input Latin Uppercase",
                        "emoji": "🔠"
                    },
                    {
                        "id": 201,
                        "name": "Input Latin Lowercase",
                        "emoji": "🔡"
                    },
                    {
                        "id": 202,
                        "name": "Input Numbers",
                        "emoji": "🔢"
                    },
                    {
                        "id": 203,
                        "name": "Input Symbols",
                        "emoji": "🔣"
                    },
                    {
                        "id": 204,
                        "name": "Input Latin Letters",
                        "emoji": "🔤"
                    },
                    {
                        "id": 205,
                        "name": "A Button (Blood Type)",
                        "emoji": "🅰"
                    },
                    {
                        "id": 206,
                        "name": "AB Button (Blood Type)",
                        "emoji": "🆎"
                    },
                    {
                        "id": 207,
                        "name": "B Button (Blood Type)",
                        "emoji": "🅱"
                    },
                    {
                        "id": 208,
                        "name": "CL Button",
                        "emoji": "🆑"
                    },
                    {
                        "id": 209,
                        "name": "Cool Button",
                        "emoji": "🆒"
                    },
                    {
                        "id": 210,
                        "name": "Free Button",
                        "emoji": "🆓"
                    },
                    {
                        "id": 211,
                        "name": "Information",
                        "emoji": "ℹ"
                    },
                    {
                        "id": 212,
                        "name": "ID Button",
                        "emoji": "🆔"
                    },
                    {
                        "id": 213,
                        "name": "Circled M",
                        "emoji": "Ⓜ"
                    },
                    {
                        "id": 214,
                        "name": "New Button",
                        "emoji": "🆕"
                    },
                    {
                        "id": 215,
                        "name": "NG Button",
                        "emoji": "🆖"
                    },
                    {
                        "id": 216,
                        "name": "O Button (Blood Type)",
                        "emoji": "🅾"
                    },
                    {
                        "id": 217,
                        "name": "OK Button",
                        "emoji": "🆗"
                    },
                    {
                        "id": 218,
                        "name": "P Button",
                        "emoji": "🅿"
                    },
                    {
                        "id": 219,
                        "name": "SOS Button",
                        "emoji": "🆘"
                    },
                    {
                        "id": 220,
                        "name": "Up! Button",
                        "emoji": "🆙"
                    },
                    {
                        "id": 221,
                        "name": "Vs Button",
                        "emoji": "🆚"
                    },
                    {
                        "id": 222,
                        "name": "Japanese “Here” Button",
                        "emoji": "🈁"
                    },
                    {
                        "id": 223,
                        "name": "Japanese “Service Charge” Button",
                        "emoji": "🈂"
                    },
                    {
                        "id": 224,
                        "name": "Japanese “Monthly Amount” Button",
                        "emoji": "🈷"
                    },
                    {
                        "id": 225,
                        "name": "Japanese “Not Free of Charge” Button",
                        "emoji": "🈶"
                    },
                    {
                        "id": 226,
                        "name": "Japanese “Reserved” Button",
                        "emoji": "🈯"
                    },
                    {
                        "id": 227,
                        "name": "Japanese “Bargain” Button",
                        "emoji": "🉐"
                    },
                    {
                        "id": 228,
                        "name": "Japanese “Discount” Button",
                        "emoji": "🈹"
                    },
                    {
                        "id": 229,
                        "name": "Japanese “Free of Charge” Button",
                        "emoji": "🈚"
                    },
                    {
                        "id": 230,
                        "name": "Japanese “Prohibited” Button",
                        "emoji": "🈲"
                    },
                    {
                        "id": 231,
                        "name": "Japanese “Acceptable” Button",
                        "emoji": "🉑"
                    },
                    {
                        "id": 232,
                        "name": "Japanese “Application” Button",
                        "emoji": "🈸"
                    },
                    {
                        "id": 233,
                        "name": "Japanese “Passing Grade” Button",
                        "emoji": "🈴"
                    },
                    {
                        "id": 234,
                        "name": "Japanese “Vacancy” Button",
                        "emoji": "🈳"
                    },
                    {
                        "id": 235,
                        "name": "Japanese “Congratulations” Button",
                        "emoji": "㊗"
                    },
                    {
                        "id": 236,
                        "name": "Japanese “Secret” Button",
                        "emoji": "㊙"
                    },
                    {
                        "id": 237,
                        "name": "Japanese “Open for Business” Button",
                        "emoji": "🈺"
                    },
                    {
                        "id": 238,
                        "name": "Japanese “No Vacancy” Button",
                        "emoji": "🈵"
                    },
                    {
                        "id": 239,
                        "name": "Red Circle",
                        "emoji": "🔴"
                    },
                    {
                        "id": 240,
                        "name": "Blue Circle",
                        "emoji": "🔵"
                    },
                    {
                        "id": 241,
                        "name": "Black Circle",
                        "emoji": "⚫"
                    },
                    {
                        "id": 242,
                        "name": "White Circle",
                        "emoji": "⚪"
                    },
                    {
                        "id": 243,
                        "name": "Black Large Square",
                        "emoji": "⬛"
                    },
                    {
                        "id": 244,
                        "name": "White Large Square",
                        "emoji": "⬜"
                    },
                    {
                        "id": 245,
                        "name": "Black Medium Square",
                        "emoji": "◼"
                    },
                    {
                        "id": 246,
                        "name": "White Medium Square",
                        "emoji": "◻"
                    },
                    {
                        "id": 247,
                        "name": "Black Medium-Small Square",
                        "emoji": "◾"
                    },
                    {
                        "id": 248,
                        "name": "White Medium-Small Square",
                        "emoji": "◽"
                    },
                    {
                        "id": 249,
                        "name": "Black Small Square",
                        "emoji": "▪"
                    },
                    {
                        "id": 250,
                        "name": "White Small Square",
                        "emoji": "▫"
                    },
                    {
                        "id": 251,
                        "name": "Large Orange Diamond",
                        "emoji": "🔶"
                    },
                    {
                        "id": 252,
                        "name": "Large Blue Diamond",
                        "emoji": "🔷"
                    },
                    {
                        "id": 253,
                        "name": "Small Orange Diamond",
                        "emoji": "🔸"
                    },
                    {
                        "id": 254,
                        "name": "Small Blue Diamond",
                        "emoji": "🔹"
                    },
                    {
                        "id": 255,
                        "name": "Red Triangle Pointed Up",
                        "emoji": "🔺"
                    },
                    {
                        "id": 256,
                        "name": "Red Triangle Pointed Down",
                        "emoji": "🔻"
                    },
                    {
                        "id": 257,
                        "name": "Diamond With a Dot",
                        "emoji": "💠"
                    },
                    {
                        "id": 258,
                        "name": "White Square Button",
                        "emoji": "🔳"
                    },
                    {
                        "id": 259,
                        "name": "Black Square Button",
                        "emoji": "🔲"
                    }
                ];
                this.flag = [
                    {
                        "id": 1,
                        "name": "Chequered Flag",
                        "emoji": "🏁"
                    },
                    {
                        "id": 2,
                        "name": "Triangular Flag",
                        "emoji": "🚩"
                    },
                    {
                        "id": 3,
                        "name": "Crossed Flags",
                        "emoji": "🎌"
                    },
                    {
                        "id": 4,
                        "name": "Black Flag",
                        "emoji": "🏴"
                    },
                    {
                        "id": 5,
                        "name": "White Flag",
                        "emoji": "🏳"
                    },
                    {
                        "id": 6,
                        "name": "Rainbow Flag",
                        "emoji": "🏳️‍🌈"
                    },
                    {
                        "id": 7,
                        "name": "Pirate Flag",
                        "emoji": "🏴‍☠️"
                    },
                    {
                        "id": 8,
                        "name": "Flag: Ascension Island",
                        "emoji": "🇦🇨"
                    },
                    {
                        "id": 9,
                        "name": "Flag: Andorra",
                        "emoji": "🇦🇩"
                    },
                    {
                        "id": 10,
                        "name": "Flag: United Arab Emirates",
                        "emoji": "🇦🇪"
                    },
                    {
                        "id": 11,
                        "name": "Flag: Afghanistan",
                        "emoji": "🇦🇫"
                    },
                    {
                        "id": 12,
                        "name": "Flag: Antigua &amp; Barbuda",
                        "emoji": "🇦🇬"
                    },
                    {
                        "id": 13,
                        "name": "Flag: Anguilla",
                        "emoji": "🇦🇮"
                    },
                    {
                        "id": 14,
                        "name": "Flag: Albania",
                        "emoji": "🇦🇱"
                    },
                    {
                        "id": 15,
                        "name": "Flag: Armenia",
                        "emoji": "🇦🇲"
                    },
                    {
                        "id": 16,
                        "name": "Flag: Angola",
                        "emoji": "🇦🇴"
                    },
                    {
                        "id": 17,
                        "name": "Flag: Antarctica",
                        "emoji": "🇦🇶"
                    },
                    {
                        "id": 18,
                        "name": "Flag: Argentina",
                        "emoji": "🇦🇷"
                    },
                    {
                        "id": 19,
                        "name": "Flag: American Samoa",
                        "emoji": "🇦🇸"
                    },
                    {
                        "id": 20,
                        "name": "Flag: Austria",
                        "emoji": "🇦🇹"
                    },
                    {
                        "id": 21,
                        "name": "Flag: Australia",
                        "emoji": "🇦🇺"
                    },
                    {
                        "id": 22,
                        "name": "Flag: Aruba",
                        "emoji": "🇦🇼"
                    },
                    {
                        "id": 23,
                        "name": "Flag: Åland Islands",
                        "emoji": "🇦🇽"
                    },
                    {
                        "id": 24,
                        "name": "Flag: Azerbaijan",
                        "emoji": "🇦🇿"
                    },
                    {
                        "id": 25,
                        "name": "Flag: Bosnia &amp; Herzegovina",
                        "emoji": "🇧🇦"
                    },
                    {
                        "id": 26,
                        "name": "Flag: Barbados",
                        "emoji": "🇧🇧"
                    },
                    {
                        "id": 27,
                        "name": "Flag: Bangladesh",
                        "emoji": "🇧🇩"
                    },
                    {
                        "id": 28,
                        "name": "Flag: Belgium",
                        "emoji": "🇧🇪"
                    },
                    {
                        "id": 29,
                        "name": "Flag: Burkina Faso",
                        "emoji": "🇧🇫"
                    },
                    {
                        "id": 30,
                        "name": "Flag: Bulgaria",
                        "emoji": "🇧🇬"
                    },
                    {
                        "id": 31,
                        "name": "Flag: Bahrain",
                        "emoji": "🇧🇭"
                    },
                    {
                        "id": 32,
                        "name": "Flag: Burundi",
                        "emoji": "🇧🇮"
                    },
                    {
                        "id": 33,
                        "name": "Flag: Benin",
                        "emoji": "🇧🇯"
                    },
                    {
                        "id": 34,
                        "name": "Flag: St. Barthélemy",
                        "emoji": "🇧🇱"
                    },
                    {
                        "id": 35,
                        "name": "Flag: Bermuda",
                        "emoji": "🇧🇲"
                    },
                    {
                        "id": 36,
                        "name": "Flag: Brunei",
                        "emoji": "🇧🇳"
                    },
                    {
                        "id": 37,
                        "name": "Flag: Bolivia",
                        "emoji": "🇧🇴"
                    },
                    {
                        "id": 38,
                        "name": "Flag: Caribbean Netherlands",
                        "emoji": "🇧🇶"
                    },
                    {
                        "id": 39,
                        "name": "Flag: Brazil",
                        "emoji": "🇧🇷"
                    },
                    {
                        "id": 40,
                        "name": "Flag: Bahamas",
                        "emoji": "🇧🇸"
                    },
                    {
                        "id": 41,
                        "name": "Flag: Bhutan",
                        "emoji": "🇧🇹"
                    },
                    {
                        "id": 42,
                        "name": "Flag: Bouvet Island",
                        "emoji": "🇧🇻"
                    },
                    {
                        "id": 43,
                        "name": "Flag: Botswana",
                        "emoji": "🇧🇼"
                    },
                    {
                        "id": 44,
                        "name": "Flag: Belarus",
                        "emoji": "🇧🇾"
                    },
                    {
                        "id": 45,
                        "name": "Flag: Belize",
                        "emoji": "🇧🇿"
                    },
                    {
                        "id": 46,
                        "name": "Flag: Canada",
                        "emoji": "🇨🇦"
                    },
                    {
                        "id": 47,
                        "name": "Flag: Cocos (Keeling) Islands",
                        "emoji": "🇨🇨"
                    },
                    {
                        "id": 48,
                        "name": "Flag: Congo - Kinshasa",
                        "emoji": "🇨🇩"
                    },
                    {
                        "id": 49,
                        "name": "Flag: Central African Republic",
                        "emoji": "🇨🇫"
                    },
                    {
                        "id": 50,
                        "name": "Flag: Congo - Brazzaville",
                        "emoji": "🇨🇬"
                    },
                    {
                        "id": 51,
                        "name": "Flag: Switzerland",
                        "emoji": "🇨🇭"
                    },
                    {
                        "id": 52,
                        "name": "Flag: Côte d’Ivoire",
                        "emoji": "🇨🇮"
                    },
                    {
                        "id": 53,
                        "name": "Flag: Cook Islands",
                        "emoji": "🇨🇰"
                    },
                    {
                        "id": 54,
                        "name": "Flag: Chile",
                        "emoji": "🇨🇱"
                    },
                    {
                        "id": 55,
                        "name": "Flag: Cameroon",
                        "emoji": "🇨🇲"
                    },
                    {
                        "id": 56,
                        "name": "Flag: China",
                        "emoji": "🇨🇳"
                    },
                    {
                        "id": 57,
                        "name": "Flag: Colombia",
                        "emoji": "🇨🇴"
                    },
                    {
                        "id": 58,
                        "name": "Flag: Clipperton Island",
                        "emoji": "🇨🇵"
                    },
                    {
                        "id": 59,
                        "name": "Flag: Costa Rica",
                        "emoji": "🇨🇷"
                    },
                    {
                        "id": 60,
                        "name": "Flag: Cuba",
                        "emoji": "🇨🇺"
                    },
                    {
                        "id": 61,
                        "name": "Flag: Cape Verde",
                        "emoji": "🇨🇻"
                    },
                    {
                        "id": 62,
                        "name": "Flag: Curaçao",
                        "emoji": "🇨🇼"
                    },
                    {
                        "id": 63,
                        "name": "Flag: Christmas Island",
                        "emoji": "🇨🇽"
                    },
                    {
                        "id": 64,
                        "name": "Flag: Cyprus",
                        "emoji": "🇨🇾"
                    },
                    {
                        "id": 65,
                        "name": "Flag: Czechia",
                        "emoji": "🇨🇿"
                    },
                    {
                        "id": 66,
                        "name": "Flag: Germany",
                        "emoji": "🇩🇪"
                    },
                    {
                        "id": 67,
                        "name": "Flag: Diego Garcia",
                        "emoji": "🇩🇬"
                    },
                    {
                        "id": 68,
                        "name": "Flag: Djibouti",
                        "emoji": "🇩🇯"
                    },
                    {
                        "id": 69,
                        "name": "Flag: Denmark",
                        "emoji": "🇩🇰"
                    },
                    {
                        "id": 70,
                        "name": "Flag: Dominica",
                        "emoji": "🇩🇲"
                    },
                    {
                        "id": 71,
                        "name": "Flag: Dominican Republic",
                        "emoji": "🇩🇴"
                    },
                    {
                        "id": 72,
                        "name": "Flag: Algeria",
                        "emoji": "🇩🇿"
                    },
                    {
                        "id": 73,
                        "name": "Flag: Ceuta &amp; Melilla",
                        "emoji": "🇪🇦"
                    },
                    {
                        "id": 74,
                        "name": "Flag: Ecuador",
                        "emoji": "🇪🇨"
                    },
                    {
                        "id": 75,
                        "name": "Flag: Estonia",
                        "emoji": "🇪🇪"
                    },
                    {
                        "id": 76,
                        "name": "Flag: Egypt",
                        "emoji": "🇪🇬"
                    },
                    {
                        "id": 77,
                        "name": "Flag: Western Sahara",
                        "emoji": "🇪🇭"
                    },
                    {
                        "id": 78,
                        "name": "Flag: Eritrea",
                        "emoji": "🇪🇷"
                    },
                    {
                        "id": 79,
                        "name": "Flag: Spain",
                        "emoji": "🇪🇸"
                    },
                    {
                        "id": 80,
                        "name": "Flag: Ethiopia",
                        "emoji": "🇪🇹"
                    },
                    {
                        "id": 81,
                        "name": "Flag: European Union",
                        "emoji": "🇪🇺"
                    },
                    {
                        "id": 82,
                        "name": "Flag: Finland",
                        "emoji": "🇫🇮"
                    },
                    {
                        "id": 83,
                        "name": "Flag: Fiji",
                        "emoji": "🇫🇯"
                    },
                    {
                        "id": 84,
                        "name": "Flag: Falkland Islands",
                        "emoji": "🇫🇰"
                    },
                    {
                        "id": 85,
                        "name": "Flag: Micronesia",
                        "emoji": "🇫🇲"
                    },
                    {
                        "id": 86,
                        "name": "Flag: Faroe Islands",
                        "emoji": "🇫🇴"
                    },
                    {
                        "id": 87,
                        "name": "Flag: France",
                        "emoji": "🇫🇷"
                    },
                    {
                        "id": 88,
                        "name": "Flag: Gabon",
                        "emoji": "🇬🇦"
                    },
                    {
                        "id": 89,
                        "name": "Flag: United Kingdom",
                        "emoji": "🇬🇧"
                    },
                    {
                        "id": 90,
                        "name": "Flag: Grenada",
                        "emoji": "🇬🇩"
                    },
                    {
                        "id": 91,
                        "name": "Flag: Georgia",
                        "emoji": "🇬🇪"
                    },
                    {
                        "id": 92,
                        "name": "Flag: French Guiana",
                        "emoji": "🇬🇫"
                    },
                    {
                        "id": 93,
                        "name": "Flag: Guernsey",
                        "emoji": "🇬🇬"
                    },
                    {
                        "id": 94,
                        "name": "Flag: Ghana",
                        "emoji": "🇬🇭"
                    },
                    {
                        "id": 95,
                        "name": "Flag: Gibraltar",
                        "emoji": "🇬🇮"
                    },
                    {
                        "id": 96,
                        "name": "Flag: Greenland",
                        "emoji": "🇬🇱"
                    },
                    {
                        "id": 97,
                        "name": "Flag: Gambia",
                        "emoji": "🇬🇲"
                    },
                    {
                        "id": 98,
                        "name": "Flag: Guinea",
                        "emoji": "🇬🇳"
                    },
                    {
                        "id": 99,
                        "name": "Flag: Guadeloupe",
                        "emoji": "🇬🇵"
                    },
                    {
                        "id": 100,
                        "name": "Flag: Equatorial Guinea",
                        "emoji": "🇬🇶"
                    },
                    {
                        "id": 101,
                        "name": "Flag: Greece",
                        "emoji": "🇬🇷"
                    },
                    {
                        "id": 102,
                        "name": "Flag: South Georgia &amp; South Sandwich Islands",
                        "emoji": "🇬🇸"
                    },
                    {
                        "id": 103,
                        "name": "Flag: Guatemala",
                        "emoji": "🇬🇹"
                    },
                    {
                        "id": 104,
                        "name": "Flag: Guam",
                        "emoji": "🇬🇺"
                    },
                    {
                        "id": 105,
                        "name": "Flag: Guinea-Bissau",
                        "emoji": "🇬🇼"
                    },
                    {
                        "id": 106,
                        "name": "Flag: Guyana",
                        "emoji": "🇬🇾"
                    },
                    {
                        "id": 107,
                        "name": "Flag: Hong Kong SAR China",
                        "emoji": "🇭🇰"
                    },
                    {
                        "id": 108,
                        "name": "Flag: Heard &amp; McDonald Islands",
                        "emoji": "🇭🇲"
                    },
                    {
                        "id": 109,
                        "name": "Flag: Honduras",
                        "emoji": "🇭🇳"
                    },
                    {
                        "id": 110,
                        "name": "Flag: Croatia",
                        "emoji": "🇭🇷"
                    },
                    {
                        "id": 111,
                        "name": "Flag: Haiti",
                        "emoji": "🇭🇹"
                    },
                    {
                        "id": 112,
                        "name": "Flag: Hungary",
                        "emoji": "🇭🇺"
                    },
                    {
                        "id": 113,
                        "name": "Flag: Canary Islands",
                        "emoji": "🇮🇨"
                    },
                    {
                        "id": 114,
                        "name": "Flag: Indonesia",
                        "emoji": "🇮🇩"
                    },
                    {
                        "id": 115,
                        "name": "Flag: Ireland",
                        "emoji": "🇮🇪"
                    },
                    {
                        "id": 116,
                        "name": "Flag: Israel",
                        "emoji": "🇮🇱"
                    },
                    {
                        "id": 117,
                        "name": "Flag: Isle of Man",
                        "emoji": "🇮🇲"
                    },
                    {
                        "id": 118,
                        "name": "Flag: India",
                        "emoji": "🇮🇳"
                    },
                    {
                        "id": 119,
                        "name": "Flag: British Indian Ocean Territory",
                        "emoji": "🇮🇴"
                    },
                    {
                        "id": 120,
                        "name": "Flag: Iraq",
                        "emoji": "🇮🇶"
                    },
                    {
                        "id": 121,
                        "name": "Flag: Iran",
                        "emoji": "🇮🇷"
                    },
                    {
                        "id": 122,
                        "name": "Flag: Iceland",
                        "emoji": "🇮🇸"
                    },
                    {
                        "id": 123,
                        "name": "Flag: Italy",
                        "emoji": "🇮🇹"
                    },
                    {
                        "id": 124,
                        "name": "Flag: Jersey",
                        "emoji": "🇯🇪"
                    },
                    {
                        "id": 125,
                        "name": "Flag: Jamaica",
                        "emoji": "🇯🇲"
                    },
                    {
                        "id": 126,
                        "name": "Flag: Jordan",
                        "emoji": "🇯🇴"
                    },
                    {
                        "id": 127,
                        "name": "Flag: Japan",
                        "emoji": "🇯🇵"
                    },
                    {
                        "id": 128,
                        "name": "Flag: Kenya",
                        "emoji": "🇰🇪"
                    },
                    {
                        "id": 129,
                        "name": "Flag: Kyrgyzstan",
                        "emoji": "🇰🇬"
                    },
                    {
                        "id": 130,
                        "name": "Flag: Cambodia",
                        "emoji": "🇰🇭"
                    },
                    {
                        "id": 131,
                        "name": "Flag: Kiribati",
                        "emoji": "🇰🇮"
                    },
                    {
                        "id": 132,
                        "name": "Flag: Comoros",
                        "emoji": "🇰🇲"
                    },
                    {
                        "id": 133,
                        "name": "Flag: St. Kitts &amp; Nevis",
                        "emoji": "🇰🇳"
                    },
                    {
                        "id": 134,
                        "name": "Flag: North Korea",
                        "emoji": "🇰🇵"
                    },
                    {
                        "id": 135,
                        "name": "Flag: South Korea",
                        "emoji": "🇰🇷"
                    },
                    {
                        "id": 136,
                        "name": "Flag: Kuwait",
                        "emoji": "🇰🇼"
                    },
                    {
                        "id": 137,
                        "name": "Flag: Cayman Islands",
                        "emoji": "🇰🇾"
                    },
                    {
                        "id": 138,
                        "name": "Flag: Kazakhstan",
                        "emoji": "🇰🇿"
                    },
                    {
                        "id": 139,
                        "name": "Flag: Laos",
                        "emoji": "🇱🇦"
                    },
                    {
                        "id": 140,
                        "name": "Flag: Lebanon",
                        "emoji": "🇱🇧"
                    },
                    {
                        "id": 141,
                        "name": "Flag: St. Lucia",
                        "emoji": "🇱🇨"
                    },
                    {
                        "id": 142,
                        "name": "Flag: Liechtenstein",
                        "emoji": "🇱🇮"
                    },
                    {
                        "id": 143,
                        "name": "Flag: Sri Lanka",
                        "emoji": "🇱🇰"
                    },
                    {
                        "id": 144,
                        "name": "Flag: Liberia",
                        "emoji": "🇱🇷"
                    },
                    {
                        "id": 145,
                        "name": "Flag: Lesotho",
                        "emoji": "🇱🇸"
                    },
                    {
                        "id": 146,
                        "name": "Flag: Lithuania",
                        "emoji": "🇱🇹"
                    },
                    {
                        "id": 147,
                        "name": "Flag: Luxembourg",
                        "emoji": "🇱🇺"
                    },
                    {
                        "id": 148,
                        "name": "Flag: Latvia",
                        "emoji": "🇱🇻"
                    },
                    {
                        "id": 149,
                        "name": "Flag: Libya",
                        "emoji": "🇱🇾"
                    },
                    {
                        "id": 150,
                        "name": "Flag: Morocco",
                        "emoji": "🇲🇦"
                    },
                    {
                        "id": 151,
                        "name": "Flag: Monaco",
                        "emoji": "🇲🇨"
                    },
                    {
                        "id": 152,
                        "name": "Flag: Moldova",
                        "emoji": "🇲🇩"
                    },
                    {
                        "id": 153,
                        "name": "Flag: Montenegro",
                        "emoji": "🇲🇪"
                    },
                    {
                        "id": 154,
                        "name": "Flag: St. Martin",
                        "emoji": "🇲🇫"
                    },
                    {
                        "id": 155,
                        "name": "Flag: Madagascar",
                        "emoji": "🇲🇬"
                    },
                    {
                        "id": 156,
                        "name": "Flag: Marshall Islands",
                        "emoji": "🇲🇭"
                    },
                    {
                        "id": 157,
                        "name": "Flag: North Macedonia",
                        "emoji": "🇲🇰"
                    },
                    {
                        "id": 158,
                        "name": "Flag: Mali",
                        "emoji": "🇲🇱"
                    },
                    {
                        "id": 159,
                        "name": "Flag: Myanmar (Burma)",
                        "emoji": "🇲🇲"
                    },
                    {
                        "id": 160,
                        "name": "Flag: Mongolia",
                        "emoji": "🇲🇳"
                    },
                    {
                        "id": 161,
                        "name": "Flag: Macau Sar China",
                        "emoji": "🇲🇴"
                    },
                    {
                        "id": 162,
                        "name": "Flag: Northern Mariana Islands",
                        "emoji": "🇲🇵"
                    },
                    {
                        "id": 163,
                        "name": "Flag: Martinique",
                        "emoji": "🇲🇶"
                    },
                    {
                        "id": 164,
                        "name": "Flag: Mauritania",
                        "emoji": "🇲🇷"
                    },
                    {
                        "id": 165,
                        "name": "Flag: Montserrat",
                        "emoji": "🇲🇸"
                    },
                    {
                        "id": 166,
                        "name": "Flag: Malta",
                        "emoji": "🇲🇹"
                    },
                    {
                        "id": 167,
                        "name": "Flag: Mauritius",
                        "emoji": "🇲🇺"
                    },
                    {
                        "id": 168,
                        "name": "Flag: Maldives",
                        "emoji": "🇲🇻"
                    },
                    {
                        "id": 169,
                        "name": "Flag: Malawi",
                        "emoji": "🇲🇼"
                    },
                    {
                        "id": 170,
                        "name": "Flag: Mexico",
                        "emoji": "🇲🇽"
                    },
                    {
                        "id": 171,
                        "name": "Flag: Malaysia",
                        "emoji": "🇲🇾"
                    },
                    {
                        "id": 172,
                        "name": "Flag: Mozambique",
                        "emoji": "🇲🇿"
                    },
                    {
                        "id": 173,
                        "name": "Flag: Namibia",
                        "emoji": "🇳🇦"
                    },
                    {
                        "id": 174,
                        "name": "Flag: New Caledonia",
                        "emoji": "🇳🇨"
                    },
                    {
                        "id": 175,
                        "name": "Flag: Niger",
                        "emoji": "🇳🇪"
                    },
                    {
                        "id": 176,
                        "name": "Flag: Norfolk Island",
                        "emoji": "🇳🇫"
                    },
                    {
                        "id": 177,
                        "name": "Flag: Nigeria",
                        "emoji": "🇳🇬"
                    },
                    {
                        "id": 178,
                        "name": "Flag: Nicaragua",
                        "emoji": "🇳🇮"
                    },
                    {
                        "id": 179,
                        "name": "Flag: Netherlands",
                        "emoji": "🇳🇱"
                    },
                    {
                        "id": 180,
                        "name": "Flag: Norway",
                        "emoji": "🇳🇴"
                    },
                    {
                        "id": 181,
                        "name": "Flag: Nepal",
                        "emoji": "🇳🇵"
                    },
                    {
                        "id": 182,
                        "name": "Flag: Nauru",
                        "emoji": "🇳🇷"
                    },
                    {
                        "id": 183,
                        "name": "Flag: Niue",
                        "emoji": "🇳🇺"
                    },
                    {
                        "id": 184,
                        "name": "Flag: New Zealand",
                        "emoji": "🇳🇿"
                    },
                    {
                        "id": 185,
                        "name": "Flag: Oman",
                        "emoji": "🇴🇲"
                    },
                    {
                        "id": 186,
                        "name": "Flag: Panama",
                        "emoji": "🇵🇦"
                    },
                    {
                        "id": 187,
                        "name": "Flag: Peru",
                        "emoji": "🇵🇪"
                    },
                    {
                        "id": 188,
                        "name": "Flag: French Polynesia",
                        "emoji": "🇵🇫"
                    },
                    {
                        "id": 189,
                        "name": "Flag: Papua New Guinea",
                        "emoji": "🇵🇬"
                    },
                    {
                        "id": 190,
                        "name": "Flag: Philippines",
                        "emoji": "🇵🇭"
                    },
                    {
                        "id": 191,
                        "name": "Flag: Pakistan",
                        "emoji": "🇵🇰"
                    },
                    {
                        "id": 192,
                        "name": "Flag: Poland",
                        "emoji": "🇵🇱"
                    },
                    {
                        "id": 193,
                        "name": "Flag: St. Pierre &amp; Miquelon",
                        "emoji": "🇵🇲"
                    },
                    {
                        "id": 194,
                        "name": "Flag: Pitcairn Islands",
                        "emoji": "🇵🇳"
                    },
                    {
                        "id": 195,
                        "name": "Flag: Puerto Rico",
                        "emoji": "🇵🇷"
                    },
                    {
                        "id": 196,
                        "name": "Flag: Palestinian Territories",
                        "emoji": "🇵🇸"
                    },
                    {
                        "id": 197,
                        "name": "Flag: Portugal",
                        "emoji": "🇵🇹"
                    },
                    {
                        "id": 198,
                        "name": "Flag: Palau",
                        "emoji": "🇵🇼"
                    },
                    {
                        "id": 199,
                        "name": "Flag: Paraguay",
                        "emoji": "🇵🇾"
                    },
                    {
                        "id": 200,
                        "name": "Flag: Qatar",
                        "emoji": "🇶🇦"
                    },
                    {
                        "id": 201,
                        "name": "Flag: Réunion",
                        "emoji": "🇷🇪"
                    },
                    {
                        "id": 202,
                        "name": "Flag: Romania",
                        "emoji": "🇷🇴"
                    },
                    {
                        "id": 203,
                        "name": "Flag: Serbia",
                        "emoji": "🇷🇸"
                    },
                    {
                        "id": 204,
                        "name": "Flag: Russia",
                        "emoji": "🇷🇺"
                    },
                    {
                        "id": 205,
                        "name": "Flag: Rwanda",
                        "emoji": "🇷🇼"
                    },
                    {
                        "id": 206,
                        "name": "Flag: Saudi Arabia",
                        "emoji": "🇸🇦"
                    },
                    {
                        "id": 207,
                        "name": "Flag: Solomon Islands",
                        "emoji": "🇸🇧"
                    },
                    {
                        "id": 208,
                        "name": "Flag: Seychelles",
                        "emoji": "🇸🇨"
                    },
                    {
                        "id": 209,
                        "name": "Flag: Sudan",
                        "emoji": "🇸🇩"
                    },
                    {
                        "id": 210,
                        "name": "Flag: Sweden",
                        "emoji": "🇸🇪"
                    },
                    {
                        "id": 211,
                        "name": "Flag: Singapore",
                        "emoji": "🇸🇬"
                    },
                    {
                        "id": 212,
                        "name": "Flag: St. Helena",
                        "emoji": "🇸🇭"
                    },
                    {
                        "id": 213,
                        "name": "Flag: Slovenia",
                        "emoji": "🇸🇮"
                    },
                    {
                        "id": 214,
                        "name": "Flag: Svalbard &amp; Jan Mayen",
                        "emoji": "🇸🇯"
                    },
                    {
                        "id": 215,
                        "name": "Flag: Slovakia",
                        "emoji": "🇸🇰"
                    },
                    {
                        "id": 216,
                        "name": "Flag: Sierra Leone",
                        "emoji": "🇸🇱"
                    },
                    {
                        "id": 217,
                        "name": "Flag: San Marino",
                        "emoji": "🇸🇲"
                    },
                    {
                        "id": 218,
                        "name": "Flag: Senegal",
                        "emoji": "🇸🇳"
                    },
                    {
                        "id": 219,
                        "name": "Flag: Somalia",
                        "emoji": "🇸🇴"
                    },
                    {
                        "id": 220,
                        "name": "Flag: Suriname",
                        "emoji": "🇸🇷"
                    },
                    {
                        "id": 221,
                        "name": "Flag: South Sudan",
                        "emoji": "🇸🇸"
                    },
                    {
                        "id": 222,
                        "name": "Flag: São Tomé &amp; Príncipe",
                        "emoji": "🇸🇹"
                    },
                    {
                        "id": 223,
                        "name": "Flag: El Salvador",
                        "emoji": "🇸🇻"
                    },
                    {
                        "id": 224,
                        "name": "Flag: Sint Maarten",
                        "emoji": "🇸🇽"
                    },
                    {
                        "id": 225,
                        "name": "Flag: Syria",
                        "emoji": "🇸🇾"
                    },
                    {
                        "id": 226,
                        "name": "Flag: Swaziland",
                        "emoji": "🇸🇿"
                    },
                    {
                        "id": 227,
                        "name": "Flag: Tristan Da Cunha",
                        "emoji": "🇹🇦"
                    },
                    {
                        "id": 228,
                        "name": "Flag: Turks &amp; Caicos Islands",
                        "emoji": "🇹🇨"
                    },
                    {
                        "id": 229,
                        "name": "Flag: Chad",
                        "emoji": "🇹🇩"
                    },
                    {
                        "id": 230,
                        "name": "Flag: French Southern Territories",
                        "emoji": "🇹🇫"
                    },
                    {
                        "id": 231,
                        "name": "Flag: Togo",
                        "emoji": "🇹🇬"
                    },
                    {
                        "id": 232,
                        "name": "Flag: Thailand",
                        "emoji": "🇹🇭"
                    },
                    {
                        "id": 233,
                        "name": "Flag: Tajikistan",
                        "emoji": "🇹🇯"
                    },
                    {
                        "id": 234,
                        "name": "Flag: Tokelau",
                        "emoji": "🇹🇰"
                    },
                    {
                        "id": 235,
                        "name": "Flag: Timor-Leste",
                        "emoji": "🇹🇱"
                    },
                    {
                        "id": 236,
                        "name": "Flag: Turkmenistan",
                        "emoji": "🇹🇲"
                    },
                    {
                        "id": 237,
                        "name": "Flag: Tunisia",
                        "emoji": "🇹🇳"
                    },
                    {
                        "id": 238,
                        "name": "Flag: Tonga",
                        "emoji": "🇹🇴"
                    },
                    {
                        "id": 239,
                        "name": "Flag: Turkey",
                        "emoji": "🇹🇷"
                    },
                    {
                        "id": 240,
                        "name": "Flag: Trinidad &amp; Tobago",
                        "emoji": "🇹🇹"
                    },
                    {
                        "id": 241,
                        "name": "Flag: Tuvalu",
                        "emoji": "🇹🇻"
                    },
                    {
                        "id": 242,
                        "name": "Flag: Taiwan",
                        "emoji": "🇹🇼"
                    },
                    {
                        "id": 243,
                        "name": "Flag: Tanzania",
                        "emoji": "🇹🇿"
                    },
                    {
                        "id": 244,
                        "name": "Flag: Ukraine",
                        "emoji": "🇺🇦"
                    },
                    {
                        "id": 245,
                        "name": "Flag: Uganda",
                        "emoji": "🇺🇬"
                    },
                    {
                        "id": 246,
                        "name": "Flag: U.S. Outlying Islands",
                        "emoji": "🇺🇲"
                    },
                    {
                        "id": 247,
                        "name": "Flag: United Nations",
                        "emoji": "🇺🇳"
                    },
                    {
                        "id": 248,
                        "name": "Flag: United States",
                        "emoji": "🇺🇸"
                    },
                    {
                        "id": 249,
                        "name": "Flag: Uruguay",
                        "emoji": "🇺🇾"
                    },
                    {
                        "id": 250,
                        "name": "Flag: Uzbekistan",
                        "emoji": "🇺🇿"
                    },
                    {
                        "id": 251,
                        "name": "Flag: Vatican City",
                        "emoji": "🇻🇦"
                    },
                    {
                        "id": 252,
                        "name": "Flag: St. Vincent &amp; Grenadines",
                        "emoji": "🇻🇨"
                    },
                    {
                        "id": 253,
                        "name": "Flag: Venezuela",
                        "emoji": "🇻🇪"
                    },
                    {
                        "id": 254,
                        "name": "Flag: British Virgin Islands",
                        "emoji": "🇻🇬"
                    },
                    {
                        "id": 255,
                        "name": "Flag: U.S. Virgin Islands",
                        "emoji": "🇻🇮"
                    },
                    {
                        "id": 256,
                        "name": "Flag: Vietnam",
                        "emoji": "🇻🇳"
                    },
                    {
                        "id": 257,
                        "name": "Flag: Vanuatu",
                        "emoji": "🇻🇺"
                    },
                    {
                        "id": 258,
                        "name": "Flag: Wallis &amp; Futuna",
                        "emoji": "🇼🇫"
                    },
                    {
                        "id": 259,
                        "name": "Flag: Samoa",
                        "emoji": "🇼🇸"
                    },
                    {
                        "id": 260,
                        "name": "Flag: Kosovo",
                        "emoji": "🇽🇰"
                    },
                    {
                        "id": 261,
                        "name": "Flag: Yemen",
                        "emoji": "🇾🇪"
                    },
                    {
                        "id": 262,
                        "name": "Flag: Mayotte",
                        "emoji": "🇾🇹"
                    },
                    {
                        "id": 263,
                        "name": "Flag: South Africa",
                        "emoji": "🇿🇦"
                    },
                    {
                        "id": 264,
                        "name": "Flag: Zambia",
                        "emoji": "🇿🇲"
                    },
                    {
                        "id": 265,
                        "name": "Flag: Zimbabwe",
                        "emoji": "🇿🇼"
                    }
                ];
                resolve(false);
            } else {
                resolve(false);
            }

        });

    }


    setObject(key: string, object: Object): boolean {
        try {
            localStorage.setItem(key, JSON.stringify(object));
            return true;
        } catch (reason) {
            console.log(reason);
            return false;
        }
    }

// get a key/value object
    getObject(key: string): any {
        try {
            const result = localStorage.getItem(key);
            if (result != null) {
                return JSON.parse(result);
            }
            return null;
        } catch (reason) {
            console.log(reason);
            return null;
        }
    }
}
