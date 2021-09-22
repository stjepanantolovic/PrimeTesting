import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PannelMenuComponent } from './pannel-menu.component';

describe('PannelMenuComponent', () => {
  let component: PannelMenuComponent;
  let fixture: ComponentFixture<PannelMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PannelMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PannelMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
