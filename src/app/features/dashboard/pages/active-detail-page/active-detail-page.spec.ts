import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDetailPage } from './active-detail-page';

describe('ActiveDetailPage', () => {
  let component: ActiveDetailPage;
  let fixture: ComponentFixture<ActiveDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveDetailPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
