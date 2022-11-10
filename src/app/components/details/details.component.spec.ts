import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { GameTabsComponent } from '../game-tabs/game-tabs.component';
import { SearchBarComponent } from '../search-bar/search-bar.component';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const mock: Array<SearchBarComponent> = []

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent, SearchBarComponent],
      imports:[RouterTestingModule, HttpClientModule ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
