import { Game, Genre, ParentPlatform, Publishers, Rating, Screenshots, Trailer} from 'src/app/models';

const genre: Array<Genre> = [{name: 'Name_Genre_test'}, {name: 'Name_Genre_test2'}];

const parentPlataform: Array<ParentPlatform> = [
  {
    platform: {
        name: 'platform_test'
      }
  }
];

const publishers: Array<Publishers> = [
  {name: "Publishers_Test"}
];

const ratings: Array<Rating> = [
  {
    id: 1,
    count: 1,
    title: 'rating_title_test'
  }
];

const screenshots: Array<Screenshots> = [
  {image: 'image_screenshots'}
];

const trailer: Array<Trailer> = [
  {data: {
    max: '3'
  }
}
];

export const MOCK_GAME: Game = {
   background_image: "imagem Background",
    name: "name_test",
    released: "releaded_test",
    metacritic_url:'metacritc_url_test',
    website: 'webSite_test',
    description: 'description_test',
    metacritic: 0,
    genres: genre,
    parent_platforms: parentPlataform,
    publishers: publishers,
    ratings: ratings,
    screenshots: screenshots,
    trailers: trailer
};

export const MOCK_GAME_LIST: Array<Game> =[
  {
  background_image: "imagem Background",
   name: "name_test",
   released: "releaded_test",
   metacritic_url:'metacritc_url_test',
   website: 'webSite_test',
   description: 'description_test',
   metacritic: 0,
   genres: genre,
   parent_platforms: parentPlataform,
   publishers: publishers,
   ratings: ratings,
   screenshots: screenshots,
   trailers: trailer
},
{
  background_image: "imagem Background2",
   name: "name_test2",
   released: "releaded_test2",
   metacritic_url:'metacritc_url_test2',
   website: 'webSite_test2',
   description: 'description_test2',
   metacritic: 0,
   genres: genre,
   parent_platforms: parentPlataform,
   publishers: publishers,
   ratings: ratings,
   screenshots: screenshots,
   trailers: trailer
},
{
  background_image: "imagem Background3",
   name: "name_test3",
   released: "releaded_test3",
   metacritic_url:'metacritc_url_test3',
   website: 'webSite_test3',
   description: 'description_test3',
   metacritic: 0,
   genres: genre,
   parent_platforms: parentPlataform,
   publishers: publishers,
   ratings: ratings,
   screenshots: screenshots,
   trailers: trailer
},

];
