import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighlightedCardComponent } from './highlighted-card.component';

describe('HighlightedCardComponent', () => {
  let component: HighlightedCardComponent;
  let fixture: ComponentFixture<HighlightedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighlightedCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighlightedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
