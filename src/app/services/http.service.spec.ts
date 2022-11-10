import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing'
import { MOCK_GAME, MOCK_GAME_LIST } from './mocks/mock-game';

import { HttpService } from './http.service';
import { APIResponse, Game } from '../models';

describe('HttpService', () => {

  let service: HttpService;
  let httpTestingController: HttpTestingController;

  const URL: string = 'https://rawg-video-games-database.p.rapidapi.com';

  const mockList : Array<Game> = MOCK_GAME_LIST;
  const mock : Game = MOCK_GAME;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ HttpClientTestingModule]
    });
    service = TestBed.inject(HttpService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it(`should create service`, () => {
    expect(service).toBeTruthy();
  });

  it(`(U) Should be get game detail`, () =>{

    service.getGameDetails('1').subscribe(() => {
    })

    const req = httpTestingController.expectOne(URL + '/games/1');

    expect(req.request.method).toEqual('GET');

 });



});
