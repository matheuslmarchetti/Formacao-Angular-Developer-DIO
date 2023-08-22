import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon: PokemonData

  constructor(private service:PokemonService){
    this.pokemon = {
      id:0,
      name:'',
      sprites:{front_default:''},
      types:[]
    }
  }

  ngOnInit(): void {
    this.getPokemon('pikachu')
  }

  getPokemon(searchName:string){
    this.service.getPokemon(searchName).subscribe(
      {
        next: (resposta) => {
          this.pokemon = {
            id: resposta.id,
            name: resposta.name,
            sprites: resposta.sprites,
            types: resposta.types
          }
        },
        error: (error) => console.log('not found')
      }
    )
  }
}
