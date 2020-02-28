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
        <td>{{ toLocale(data.price) }}</td>
        <td>{{ toLocale(data.price) }}</td>
        <td>{{ data.vat ? "23%" : "Np." }}</td>
        <td>{{ toLocale(data.vat ? (data.price * 0.23) : 0) }}</td>
        <td>{{ toLocale(data.getBrutto()) }}</td>
      </tr>
      <tr>
        <td colspan="5" class="bold">W tym</td>
        <td>{{ toLocale(data.price) }}</td>
        <td>{{ data.vat ? "23%" : "Np." }}</td>
        <td>{{ toLocale(data.vat ? (data.price * 0.23) : 0) }}</td>
        <td>{{ toLocale(data.getBrutto()) }}</td>
      </tr>
      <tr>
        <td colspan="5" class="bold">Razem</td>
        <td>{{ toLocale(data.price) }}</td>
        <td>{{ data.vat ? "23%" : "Np." }}</td>
        <td>{{ toLocale(data.vat ? (data.price * 0.23) : 0) }}</td>
        <td>{{ toLocale(data.getBrutto()) }}</td>
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

  private toLocale(num: number): string {
    return Number(num).toLocaleString("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
}
</script>

<style scoped>
.bold {
  text-align: right;
  font-weight: bold;
}
</style>
