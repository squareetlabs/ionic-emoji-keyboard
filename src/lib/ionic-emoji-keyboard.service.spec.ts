import { TestBed } from '@angular/core/testing';

import { IonicEmojiKeyboardService } from './ionic-emoji-keyboard.service';

describe('IonicEmojiPickerService', () => {
  let service: IonicEmojiKeyboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonicEmojiKeyboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
