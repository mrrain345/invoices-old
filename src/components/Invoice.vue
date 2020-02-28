<template>
  <div id="invoice" style="width: 210mm; height: 297mm;">
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

    <div style="margin-bottom: 50px;"></div>

    <InvoiceSummary :data="data" />

    <div class="comments-div" v-if="data.comments !== ''">
      <strong>Uwagi:</strong>
      <span class="comments">{{ data.comments }}</span>
    </div>

    <div style="margin-bottom: 160px;"></div>

    <div class="row">
      <div class="col-md-6">
        <div class="sign">Podpis osoby upoważnionej do wystawienia</div>
      </div>
      <div class="col-md-6">
        <div class="sign">Podpis osoby uprawnionej do odbioru</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import InvoiceDate from "@/components/InvoiceDate.vue";
import InvoiceSubject from "@/components/InvoiceSubject.vue";
import InvoiceTable from "@/components/InvoiceTable.vue";
import InvoiceSummary from "@/components/InvoiceSummary.vue";

import InvoiceData from "@/classes/InvoiceData";
import Subject from "@/classes/Subject";

@Component({
  components: {
    InvoiceDate,
    InvoiceSubject,
    InvoiceTable,
    InvoiceSummary
  }
})
export default class Invoice extends Vue {
  @Prop() data!: InvoiceData;

  seller = new Subject(
    "Sprzedawca",
    "ADI TRANSPORT ADAM MAJEWSKI",
    "ul. Objazdowa 19\n66-008 Słone",
    "PL9291024492"
  );
}
</script>

<style scoped>
#invoice {
  margin: 0 auto;
  padding: 10mm;
}

h1 {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 20px;
}

.title {
  text-align: center;
  margin-top: 40px;
  color: #222222;
}

.comments-div {
  border-top: solid 1px #222222;
  margin-top: 40px;
  padding: 5px;
}

.comments {
  padding-left: 5px;
  white-space: pre-wrap;
  display: inline-block;
  vertical-align: top;
  letter-spacing: 0.2px;
}

.sign {
  border-top: dotted 1px #222222;
  text-align: center;
  margin: 0 30px;
  padding-top: 5px;
  font-size: 12px;
  font-weight: bold;
}
</style>
