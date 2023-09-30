import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GuerrasListPage } from './guerras-list.page';

describe('GuerrasListPage', () => {
  let component: GuerrasListPage;
  let fixture: ComponentFixture<GuerrasListPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GuerrasListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
