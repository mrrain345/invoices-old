<template>
  <table class="table table-bordered">
    <thead>
      <tr>
        <th scope="col">Lp.</th>
        <th scope="col">Nazwa towaru lub usługi</th>
        <th scope="col">Jm.</th>
        <th scope="col">Ilość</th>
        <th scope="col">Cena netto</th>
        <th scope="col">Wartość netto</th>
        <th scope="col">Stawka VAT</th>
        <th scope="col">Kwota VAT</th>
        <th scope="col">Wartość brutto</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Usługa Transportowa</td>
        <td>szt.</td>
        <td>1</td>
        <td>{{ price }}</td>
        <td>{{ price }}</td>
        <td>{{ vat ? "23%" : "Np." }}</td>
        <td>{{ vat ? price * 0.23 : "Np." }}</td>
        <td>{{ vat ? price * 1.23 : "Np." }}</td>
      </tr>
      <tr>
        <td colspan="5" class="bold">W tym</td>
        <td>{{ price }}</td>
        <td>{{ vat ? "23%" : "Np." }}</td>
        <td>296,70</td>
        <td>1 586,70</td>
      </tr>
      <tr>
        <td colspan="5" class="bold">Razem</td>
        <td>1 290,00</td>
        <td>23%</td>
        <td>296,70</td>
        <td>1 586,70</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class InvoiceTable extends Vue {
  price = 1000;
  vat = true;
}
</script>

<style scoped>
.bold {
  text-align: right;
  font-weight: bold;
}
</style>
