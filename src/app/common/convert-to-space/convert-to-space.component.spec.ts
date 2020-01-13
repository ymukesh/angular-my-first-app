import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertToSpaceComponent } from './convert-to-space.component';

describe('ConvertToSpaceComponent', () => {
  let component: ConvertToSpaceComponent;
  let fixture: ComponentFixture<ConvertToSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertToSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertToSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
