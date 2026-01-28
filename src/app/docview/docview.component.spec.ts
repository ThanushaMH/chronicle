import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocviewComponent } from './docview.component';

describe('DocviewComponent', () => {
  let component: DocviewComponent;
  let fixture: ComponentFixture<DocviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DocviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
