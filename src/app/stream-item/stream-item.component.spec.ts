import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamItemComponent } from './stream-item.component';

describe('StreamItemComponent', () => {
  let component: StreamItemComponent;
  let fixture: ComponentFixture<StreamItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
