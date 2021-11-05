
Vue.component('poke-card',{
  props:['name','image'],
  template:`
    <div>
      <img width="50" height="50" :src="image" :alt="name">
      <h3>{{name}}</h3>
    </div>
  `
})

const app = new Vue({
  el:'#app',
  data:{
    pokemons:[],
    srcImage:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/',
    limit:100
  },
  methods:{
    renderPokemon() {
      for(let i = 0; i < this.limit; i++){ 
        let pokemon_id = i + 1;
        let pokeData = {
          name:"",
          image:this.srcImage + pokemon_id+'.png'
        }    
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=${this.limit}`)
        .then(res => res.json())
        .then(res => {
          pokeData.name = res.results[i].name    
          this.pokemons.push(pokeData);
        })
      }      
    }
  },

  created(){
    this.renderPokemon()
  }
  
});


