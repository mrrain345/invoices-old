<template>
  <div>
    <div id="invoice" class="container">
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
    </div>

    <div class="page-footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="sign">Podpis osoby upoważnionej do wystawienia</div>
          </div>
          <div class="col-md-6">
            <div class="sign">Podpis osoby uprawnionej do odbioru</div>
          </div>
        </div>
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
    "PL 9291024492"
  );

  /*seller = new Subject(
    "Sprzedawca",
    "USŁUGI LEŚNE KAROLINA BARTOSIK",
    "ul. Objazdowa 17\n66-008 Słone",
    "PL 9731052430"
  );*/
}
</script>

<style scoped>
#invoice {
  color: #000000;
  padding: 27mm 16mm 27mm 16mm;
  box-sizing: border-box;
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
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
}

.page-footer {
  position: absolute;
  bottom: 0;
  padding-bottom: 20px;
  width: 100%;
}
</style>
