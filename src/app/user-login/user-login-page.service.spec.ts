import { TestBed } from '@angular/core/testing';

import { UserLoginPageService } from './user-login-page.service';

describe('UserLoginPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserLoginPageService = TestBed.get(UserLoginPageService);
    expect(service).toBeTruthy();
  });
});
