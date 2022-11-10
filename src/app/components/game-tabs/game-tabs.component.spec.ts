import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBarComponent } from '../search-bar/search-bar.component';

import { GameTabsComponent } from './game-tabs.component';

describe('GameTabsComponent', () => {
  let component: GameTabsComponent;
  let fixture: ComponentFixture<GameTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameTabsComponent, SearchBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
