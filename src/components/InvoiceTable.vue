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
        <td>{{ data.price }}</td>
        <td>{{ data.price }}</td>
        <td>{{ data.vat ? "23%" : "Np." }}</td>
        <td>{{ data.vat ? data.price * 0.23 : "Np." }}</td>
        <td>{{ data.vat ? data.price * 1.23 : data.price }}</td>
      </tr>
      <tr>
        <td colspan="5" class="bold">W tym</td>
        <td>{{ data.price }}</td>
        <td>{{ data.vat ? "23%" : "Np." }}</td>
        <td>{{ data.vat ? data.price * 0.23 : "Np." }}</td>
        <td>{{ data.vat ? data.price * 1.23 : data.price }}</td>
      </tr>
      <tr>
        <td colspan="5" class="bold">Razem</td>
        <td>{{ data.price }}</td>
        <td>{{ data.vat ? "23%" : "Np." }}</td>
        <td>{{ data.vat ? data.price * 0.23 : "Np." }}</td>
        <td>{{ data.vat ? data.price * 1.23 : data.price }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from "vue-property-decorator";
import InvoiceData from "@/classes/InvoiceData";

@Component
export default class InvoiceTable extends Vue {
  @PropSync("invoiceData", { type: InvoiceData }) data!: InvoiceData;
}
</script>

<style scoped>
.bold {
  text-align: right;
  font-weight: bold;
}
</style>
