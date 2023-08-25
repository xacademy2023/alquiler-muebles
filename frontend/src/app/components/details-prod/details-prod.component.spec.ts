import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProdComponent } from './details-prod.component';

describe('DetailsProdComponent', () => {
  let component: DetailsProdComponent;
  let fixture: ComponentFixture<DetailsProdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsProdComponent]
    });
    fixture = TestBed.createComponent(DetailsProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
