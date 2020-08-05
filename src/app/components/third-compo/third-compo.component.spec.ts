import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdCompoComponent } from './third-compo.component';

describe('ThirdCompoComponent', () => {
  let component: ThirdCompoComponent;
  let fixture: ComponentFixture<ThirdCompoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdCompoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdCompoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
