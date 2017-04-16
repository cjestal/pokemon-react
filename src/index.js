import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';

const pokemons = [
		{
			"url": "https://pokeapi.co/api/v2/pokemon/1/",
			"name": "bulbasaur",
			"starter": true,
			"type": "grass"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/2/",
			"name": "ivysaur",
			"starter": true,
			"type": "grass"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/3/",
			"name": "venusaur",
			"starter": true,
			"type": "grass"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/4/",
			"name": "charmander",
			"starter": true,
			"type": "fire"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/5/",
			"name": "charmeleon",
			"starter": true,
			"type": "fire"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/6/",
			"name": "charizard",
			"starter": true,
			"type": "fire"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/7/",
			"name": "squirtle",
			"starter": true,
			"type": "water"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/8/",
			"name": "wartortle",
			"starter": true,
			"type": "water"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/9/",
			"name": "blastoise",
			"starter": true,
			"type": "water"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/10/",
			"name": "caterpie",
			"starter": false,
			"type": "bug"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/11/",
			"name": "metapod",
			"starter": false,
			"type": "bug"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/12/",
			"name": "butterfree",
			"starter": false,
			"type": "bug"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/13/",
			"name": "weedle",
			"starter": false,
			"type": "bug"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/14/",
			"name": "kakuna",
			"starter": false,
			"type": "bug"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/15/",
			"name": "beedrill",
			"starter": false,
			"type": "bug"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/16/",
			"name": "pidgey",
			"starter": false,
			"type": "flying"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/17/",
			"name": "pidgeotto",
			"starter": false,
			"type": "flying"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/18/",
			"name": "pidgeot",
			"starter": false,
			"type": "flying"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/19/",
			"name": "rattata",
			"starter": false,
			"type": "normal"
		},
		{
			"url": "https://pokeapi.co/api/v2/pokemon/20/",
			"name": "raticate",
			"starter": false,
			"type": "normal"
		}];



class FilterablePokemonTable extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			filterText: '',
			starterOnly: false
		};

		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
		this.handleTextChange = this.handleTextChange.bind(this);
	}

	handleTextChange (filterText) {
		this.setState({
			filterText: filterText
		});
	}

	handleCheckBoxChange (starterOnly) {
		this.setState({
			starterOnly: starterOnly
		});
	}

	render () {
		return (
			<div className="container">
				<PokemonSearchBar 
					id="search-bar"
					filterText={this.state.filterText}
					starterOnly={this.state.starterOnly}
					onCheckBoxChange={this.handleCheckBoxChange}
					onFilterChange={this.handleTextChange}
				/>
				<PokemonTable 
					id="search-table"
					pokemons={this.props.pokemons}
					filterText={this.state.filterText}
					starterOnly={this.state.starterOnly}
					onCheckBoxChange={this.handleCheckBoxChange}
					onFilterChange={this.handleTextChange}
				/>
			</div>
		);
	}
}

class PokemonSearchBar extends React.Component {
	constructor (props) {
		super(props);
		this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this); //bind to component
		this.handleTextChange = this.handleTextChange.bind(this); //bind to component
	}

	handleTextChange (event) {
		this.props.onFilterChange(event.target.value);
	}

	handleCheckBoxChange (event) {
		this.props.onCheckBoxChange(event.target.value);
	}


	render () {
			return (
				<form>
					<input 
						type="text" 
						placeholder="Enter pokemon name..."
						value={this.props.filterText}
						onChange={this.handleTextChange}
					/>
					<p>
						<input 
							type="checkbox" 
							checked={this.props.starterOnly}
							onChange={this.handleCheckBoxChange}
						/>
						{' '} Show starter pokemons only
					</p>
				</form>
			);
		}
}

class PokemonTable extends React.Component {
	render () {
		var rows = [];
		var lastPokemonType = null;

		this.props.pokemons.forEach((pokemon) => {
			//used for filtering pokemons
			if (pokemon.name.indexOf(this.props.filterText) === -1 || (!pokemon.starter && this.props.starterOnly)) {
				return;
			}

			//updates the pokemon type row
			if (pokemon.type !== lastPokemonType) {
				rows.push(<PokemonTypeRow type={pokemon.type} key={pokemon.type} />);
			}

			rows.push(<PokemonRow name={pokemon.name} url={pokemon.url} key={pokemon.name} />);
			lastPokemonType = pokemon.type;
		});

		return (
			<table>
				<thead>
					<tr>
						<th>Pokemon Name</th>
						<th>URL</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>
		);
	}
}

class PokemonTypeRow extends React.Component {
	render () {
		return (
			<tr><th colspan="2">{this.props.type}</th></tr>
		);
	}
}

class PokemonRow extends React.Component {
	render () {
		return (
			<tr>
				<td>{this.props.name}</td>
				<td><a href={this.props.url}>{this.props.url}</a></td>
			</tr>
		);
	}
}

ReactDOM.render(
  <FilterablePokemonTable pokemons={pokemons}/>,
  document.getElementById('root')
);
