<template>
  <div class="home container-fluid">
    <div class="row">
      <calculator-component />
    </div>
  </div>
</template>

<script>
import CalculatorComponent from '../components/CalculatorComponent.vue'
export default {
  components: { CalculatorComponent },
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
