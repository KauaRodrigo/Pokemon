import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import axios from 'axios';

@Injectable()
export class PokemonService {  

  async findAll() {
    const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1008&offset=0`).then((res) => {
      delete res.data.moves
      delete res.data.abilities    
      return res.data             
    })    
    return pokemons.results;
  }

  async findOne(id: number | string) {
    let pokemon = {
      name: '',
      height: 0,
      weight: 0,
      type1: '',
      type2: ''
    }
    await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
      delete res.data.moves
      delete res.data.abilities      
      pokemon.name = res.data.name
      pokemon.height = res.data.height
      pokemon.weight = res.data.weight
      pokemon.type1 = res.data.types[0].type.name
      pokemon.type2 = res.data.types[1]?.type.name            
    })
    return pokemon;
  }

}
