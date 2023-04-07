import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicEmojiKeyboardComponent } from './ionic-emoji-keyboard.component';

describe('IonicEmojiPickerComponent', () => {
  let component: IonicEmojiKeyboardComponent;
  let fixture: ComponentFixture<IonicEmojiKeyboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonicEmojiKeyboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicEmojiKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
