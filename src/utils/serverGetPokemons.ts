import { pokemon } from "@/interfaces/pokemon";
import data from "../data/data.json";
export default async function serverGetPokemons() {
  const pokemonList: pokemon[] = data.pokemon.map((item) => ({
    id: item.id,
    name: item.name,
    img: item.img,
    type: item.type,
    weight: item.weight,
    height: item.height,
    weeknesses: item.weaknesses,
    spawn_chance: item.spawn_chance,
    avg_spawns: item.avg_spawns,
  }));
  return pokemonList.sort((a, b) => a.id - b.id);
}
