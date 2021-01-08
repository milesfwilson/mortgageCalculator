<template>
  <div class="calculator-component col-12 pt-5 mt-5">
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <h3 class="text-center py-2">
          Mortgage Calculator
        </h3>
      </div>
    </div>
    <form action="">
      <div class="row ">
        <div class="col-6 d-flex justify-content-end">
          <label>Amount</label>
        </div>
        <div class="col-6 d-flex justify-content-start">
          <input class=" w-50" type="number" v-model="state.values.amount">
        </div>
      </div>
      <div class="row ">
        <div class="col-6 d-flex justify-content-end">
          <label>Interest Rate</label>
        </div>
        <div class="col-6 d-flex justify-content-start">
          <input class=" w-50" type="number" v-model="state.values.interest">
        </div>
      </div>
      <div class="row ">
        <div class="col-6 d-flex justify-content-end">
          <label>Term</label>
        </div>
        <div class="col-6 d-flex justify-content-start">
          <select class=" w-50" name="" id="" v-model="state.values.length">
            <option value="15">
              15
            </option>
            <option value="30">
              30
            </option>
          </select>
        </div>
      </div>
    </form>
    <div class="row ">
      <div class="col-6 d-flex justify-content-end">
        <label>Total Balance</label>
      </div>
      <div class="col-6 d-flex justify-content-start">
        <p>
          ${{ calculateBalance(state.values.amount, state.values.length, state.values.interest) }}
        </p>
      </div>
    </div>
    <div class="row ">
      <div class="col-6 d-flex justify-content-end">
        <label>Monthly Payment</label>
      </div>
      <div class="col-6 d-flex justify-content-start">
        <p>
          ${{ calculatePayment(state.values.amount, state.values.length, state.values.interest) }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'CalculatorComponent',
  setup() {
    const state = reactive({
      values: {
        amount: 100000,
        length: 15,
        interest: 5.5
      }

    })

    return {
      state,
      calculateBalance(amount, length, interest) {
        const r = (interest * 0.01) / 12
        const n = length * 12
        const p = amount

        const balance = ((r * p * n) / (1 - Math.pow(1 + r, -n))).toFixed(2)

        return balance
      },
      calculatePayment(amount, length, interest) {
        const r = (interest * 0.01) / 12
        const n = length * 12
        const p = amount

        const balance = ((r * p * n) / (1 - Math.pow(1 + r, -n))).toFixed(2)

        return (balance / n).toFixed(2)
      }

    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>
input, select {
    margin: 3px;
    border: 1px solid #d3d3d3;
    border-radius: 3px;
    padding: 3px;
}
</style>
