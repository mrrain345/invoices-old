<template>
  <div class="container">
    <h1>Dane do faktury</h1>
    <InvoiceForm :invoiceData.sync="data" />
    <hr style="margin-bottom: 60px;" />
    <h1 class="center">Faktura VAT {{ data.id }}</h1>
    <InvoiceTable :invoiceData.sync="data" />

    <div>{{ priceToWords(data.price) }}</div>

    <div v-if="data.comments !== ''">
      <hr style="margin-top: 30px;" />
      <strong>Uwagi:</strong>
      <span class="comments">{{ data.comments }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InvoiceForm from "@/components/InvoiceForm.vue";
import InvoiceTable from "@/components/InvoiceTable.vue";
import InvoiceData from "@/classes/InvoiceData";
import polishToWords from "@/assets/polish2words.ts";

@Component({
  components: {
    InvoiceForm,
    InvoiceTable
  }
})
export default class Invoice extends Vue {
  data = new InvoiceData();

  priceToWords() {
    const round = Math.round(this.data.getBrutto());
    const rest = Math.round((this.data.getBrutto() * 100) % 100);
    return `${polishToWords(round)} ${rest < 10 ? "0" : ""}${rest}/100 PLN`;
  }
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 20px;
}

.center {
  text-align: center;
}

.comments {
  padding-left: 5px;
  white-space: pre;
  display: inline-block;
  vertical-align: top;
}
</style>
