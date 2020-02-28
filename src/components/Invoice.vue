<template>
  <div class="container">
    <h1>Dane do faktury</h1>
    <InvoiceForm :invoiceData.sync="data" />
    <hr style="margin-bottom: 60px;" />

    <div class="row">
      <div class="col-md-6"></div>
      <div class="col-md-6">
        <InvoiceDate :data="data" />
      </div>
    </div>

    <div style="margin-bottom: 50px;"></div>

    <div class="row">
      <div class="col-md-6">
        <InvoiceSubject :subject="seller" />
      </div>
      <div class="col-md-6">
        <InvoiceSubject :subject="data.getCustomer()" />
      </div>
    </div>

    <h1 class="title">Faktura VAT {{ data.id }}</h1>
    <InvoiceTable :data="data" />

    <div>{{ priceToWords(data.price) }}</div>

    <div v-if="data.comments !== ''">
      <hr style="margin-top: 30px;" />
      <strong>Uwagi:</strong>
      <span class="comments">{{ data.comments }}</span>
    </div>

    <div style="margin-bottom: 40px;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InvoiceForm from "@/components/InvoiceForm.vue";
import InvoiceDate from "@/components/InvoiceDate.vue";
import InvoiceSubject from "@/components/InvoiceSubject.vue";
import InvoiceTable from "@/components/InvoiceTable.vue";
import InvoiceData from "@/classes/InvoiceData";
import Subject from "@/classes/Subject";
import polishToWords from "@/assets/polish2words.ts";

@Component({
  components: {
    InvoiceForm,
    InvoiceDate,
    InvoiceSubject,
    InvoiceTable
  }
})
export default class Invoice extends Vue {
  data = new InvoiceData();
  seller = new Subject(
    "Sprzedawca",
    "ADI TRANSPORT ADAM MAJEWSKI",
    "ul. Objazdowa 19\n66-008 Słone",
    "9291024492"
  );

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

.title {
  text-align: center;
  margin-top: 20px;
  color: #222222;
}

.comments {
  padding-left: 5px;
  white-space: pre-wrap;
  display: inline-block;
  vertical-align: top;
}
</style>
