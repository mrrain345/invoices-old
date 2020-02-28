<template>
  <div class="row">
    <div class="col-6">
      <div class="row field">
        <div class="col-4 key">Sposób płatności</div>
        <div class="col-8 value" v-if="data.payment === 'cash'">gotówka</div>
        <div class="col-8 value" v-else>przelew w terminie {{ data.payment }} dni</div>
      </div>
      <div class="row field" v-if="data.payment !== 'cash'">
        <div class="col-4 key">Termin płatności</div>
        <div class="col-8 value">{{ printPaymentDate() }}</div>
      </div>
      <div class="row field" v-if="data.payment !== 'cash'">
        <div class="col-4 key">Numer konta</div>
        <div class="col-8 value">
          BPS S.A.
          <br />85 1930 1060 2260 0273 5454 0001
        </div>
      </div>
    </div>
    <div class="col-6">
      <div class="row field">
        <div class="col-4 key">
          <strong>Do zapłaty</strong>
        </div>
        <div class="col-8 value">
          <strong>{{ toLocale(data.getBrutto()) }} PLN</strong>
        </div>
      </div>
      <div class="row field">
        <div class="col-4 key">Słownie</div>
        <div class="col-8 value">{{ priceToWords(data.price) }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import InvoiceData from "@/classes/InvoiceData";
import polishToWords from "@/assets/polish2words.ts";

@Component
export default class InvoiceSummary extends Vue {
  @Prop() data!: InvoiceData;

  priceToWords() {
    const round = Math.round(this.data.getBrutto());
    const rest = Math.round((this.data.getBrutto() * 100) % 100);
    return `${polishToWords(round)} ${rest < 10 ? "0" : ""}${rest}/100 PLN`;
  }

  private toLocale(num: number): string {
    return Number(num).toLocaleString("pl-PL", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }

  printDate(date: string) {
    return date
      .split("-")
      .reverse()
      .join("-");
  }

  printPaymentDate() {
    if (this.data.payment === "cash") return "";
    const dateStr = this.data.issueDate.split("-");
    const date = new Date();
    console.log(
      parseInt(dateStr[0]),
      parseInt(dateStr[1]) - 1,
      parseInt(dateStr[2]) + parseInt(this.data.payment)
    );

    date.setFullYear(
      parseInt(dateStr[0]),
      parseInt(dateStr[1]) - 1,
      parseInt(dateStr[2]) + parseInt(this.data.payment)
    );

    console.log(date.toISOString());

    return [
      ...date
        .toISOString()
        .split("T")[0]
        .split("-")
    ]
      .reverse()
      .join("-");
  }
}
</script>

<style scoped>
.field {
  border-top: solid 1px #222222;
  margin: 0px;
  padding: 2px;
}

.key {
  text-align: right;
}

.value {
  padding: 0;
}
</style>
