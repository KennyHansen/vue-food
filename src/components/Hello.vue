<template>
  <div class="hello">
    <!--<calorie-count></calorie-count>-->

    <h2> Total Calories: {{calories}} </h2>
    <button @click="addCalories(1)">Eat a Calorie</button>

    <form v-if="!details.report" @submit.prevent="search">
      <input type="text" v-model="query">
      <button type="submit">Find</button>
    </form>
    
    <ul v-if="!details.report">
      <li v-for="food in foods" @click="getNutrients(food)">{{food.name}}</li>
    </ul>

    <div v-if="details.report" @click="details = {}">
      {{details.report.foods[0]}} <br>
      Calories: {{details.report.foods[0].nutrients[0].value}}  <br>
      <button @click="eatFood(details.report)"> Eat </button>
    </div>



  </div>
</template>

<script>
import foodService from '../food-service'
import CalorieCount from './CalorieCount'

export default {
  name: 'hello',
  data () {
    return {
      query: '',
      foods: [],
      details: {},
      calories: 0
    }
  },
  // components: {CalorieCount},
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
    },
    eatFood(foodItem) {
      var calories = foodItem.foods[0].nutrients[0].value || 0
      this.addCalories(calories)
    },
    addCalories(calories) {
        this.calories += parseInt(calories)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
