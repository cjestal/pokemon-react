import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const pokemons = [
		{
			"url": "https://pokeapi.co/api/v2/pokemon/1/",
			"name": "bulbasaur",
			"starter": true
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/2/",
			"name": "ivysaur",
			"starter": true
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/3/",
			"name": "venusaur",
			"starter": true
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/4/",
			"name": "charmander",
			"starter": true
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/5/",
			"name": "charmeleon",
			"starter": true
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/6/",
			"name": "charizard",
			"starter": true
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/7/",
			"name": "squirtle",
			"starter": true
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/8/",
			"name": "wartortle",
			"starter": true
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/9/",
			"name": "blastoise",
			"starter": true
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/10/",
			"name": "caterpie",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/11/",
			"name": "metapod",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/12/",
			"name": "butterfree",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/13/",
			"name": "weedle",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/14/",
			"name": "kakuna",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/15/",
			"name": "beedrill",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/16/",
			"name": "pidgey",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/17/",
			"name": "pidgeotto",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/18/",
			"name": "pidgeot",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/19/",
			"name": "rattata",
			"starter": false
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/20/",
			"name": "raticate",
			"starter": false
		}];

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
