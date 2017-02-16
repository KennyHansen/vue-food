<template>
  <div class="hello">
    <form @submit.prevent="search">
      <input type="text" v-model="query">
      <button type="submit">Find</button>
    </form>
    
    <ul v-if="!details.report">
      <li v-for="food in foods" @click="getNutrients(food)">{{food.name}}</li>
    </ul>

    <div v-if="details.report" @click="details = {}">
      {{details.report}}
    </div>



  </div>
</template>

<script>
import foodService from '../food-service'

export default {
  name: 'hello',
  data () {
    return {
      query: '',
      foods: [],
      details: {}
    }
  },
  methods: {
    search(){
      foodService.findFoods(this.query).then(res => { res.json().then(foods => {
          this.foods = foods.list.item
        })
      })
    },
    getNutrients(food){
      foodService.getNutrients(food).then(res => {
        res.json().then(d => {
          this.details = d
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
