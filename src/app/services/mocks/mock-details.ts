

import { Subscription } from 'rxjs/internal/Subscription';
import { Game, Details } from 'src/app/models';
import { MOCK_GAME } from "./mock-game";


const mockGame: Game = MOCK_GAME;

 export const MOCK_DETAILS: Details =
{
    gameRating: 0,
    gameId: '1',
    game: mockGame,
    routeSub: new Subscription,
    gameSub: new Subscription
};





