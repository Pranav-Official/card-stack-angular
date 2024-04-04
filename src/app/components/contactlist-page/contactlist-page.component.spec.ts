import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlistPageComponent } from './contactlist-page.component';

describe('ContactlistPageComponent', () => {
  let component: ContactlistPageComponent;
  let fixture: ComponentFixture<ContactlistPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactlistPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactlistPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
