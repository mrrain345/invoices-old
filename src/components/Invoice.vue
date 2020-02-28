<template>
  <div class="container">
    <h1>Dane do faktury</h1>
    <InvoiceForm :invoiceData.sync="data" />
    <hr />
    <h1 class="center">Faktura VAT {{ data.id }}</h1>
    <InvoiceTable :invoiceData.sync="data" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InvoiceForm from "@/components/InvoiceForm.vue";
import InvoiceTable from "@/components/InvoiceTable.vue";
import InvoiceData from "@/classes/InvoiceData";

@Component({
  components: {
    InvoiceForm,
    InvoiceTable
  }
})
export default class Invoice extends Vue {
  data = new InvoiceData();
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 20px;
}

hr {
  margin-bottom: 60px;
}

.center {
  text-align: center;
}
</style>
