<template>
  <div class="container">
    <h1>Dane do faktury</h1>
    <InvoiceForm :invoiceData.sync="data" />

    <div>
      <button class="btn btn-primary float-right" @click="generatePDF()">
        Generuj PDF
      </button>
      <div style="clear: both;"></div>
    </div>

    <hr style="margin-bottom: 60px;" />

    <Invoice :data="data" />

    <div style="margin-bottom: 80px;"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import InvoiceForm from "@/components/InvoiceForm.vue";
import Invoice from "@/components/Invoice.vue";

import InvoiceData from "@/classes/InvoiceData";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

@Component({
  components: {
    InvoiceForm,
    Invoice
  }
})
export default class InvoiceView extends Vue {
  data = new InvoiceData();

  generatePDF() {
    console.log("generate");
    const filename = `Faktura-${this.data.issueDate}.pdf`;
    const invoice: HTMLElement | null = document.querySelector("#invoice");
    if (invoice === null) return;

    const scroll = window.scrollY;
    window.scrollTo(0, 0);

    html2canvas(invoice, { scale: 1 }).then(canvas => {
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight();
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, width, height);
      console.log(width, height);
      pdf.save(filename);
      window.scrollTo(0, scroll);
    });
  }
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 20px;
}
</style>
