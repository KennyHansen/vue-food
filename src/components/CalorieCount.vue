<template>
  <div class="calorie-count">
      
  </div>
</template>

<script>

export default {
  name: 'calorie-count',
  data () {
    return {
      calories: 0,
    }
  },
  methods: {
      addCalories(calories) {
          this.calories += calories
      }
  }
}
</script>

<style scoped>
.calorie-count {
    left: 0px;
}

</style>
