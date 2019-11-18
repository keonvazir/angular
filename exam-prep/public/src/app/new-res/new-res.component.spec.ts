import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewResComponent } from './new-res.component';

describe('NewResComponent', () => {
  let component: NewResComponent;
  let fixture: ComponentFixture<NewResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
