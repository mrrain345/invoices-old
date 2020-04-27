<template>
  <div class="container">
    <div style="margin-bottom: 40px;"></div>

    <h1>Dane do faktury</h1>
    <InvoiceForm :invoiceData.sync="data" />

    <div>
      <button class="btn btn-primary float-right" @click="generatePDF()">
        Generuj PDF
      </button>
      <div style="clear: both;"></div>
    </div>

    <hr />

    <iframe id="preview" src="/preview"></iframe>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import InvoiceForm from "@/components/InvoiceForm.vue";
import Invoice from "@/components/Invoice.vue";

import InvoiceData from "@/classes/InvoiceData";

@Component({
  components: {
    InvoiceForm,
    Invoice
  }
})
export default class InvoiceView extends Vue {
  data = new InvoiceData();

  constructor() {
    super();
    document.title = "Faktura-" + this.data.issueDate.toString();
  }

  @Watch("data", { deep: true })
  odDataChanged() {
    document.title = "Faktura-" + this.data.issueDate.toString();
    this.sendData("UPDATE", this.data);
  }

  generatePDF() {
    this.sendData("PRINT", this.data);
  }

  private sendData(cmd: string, data: {}) {
    const preview = document.getElementById("preview") as HTMLIFrameElement;
    preview.contentWindow?.postMessage({ cmd, data }, "/");
  }
}
</script>

<style scoped>
h1 {
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 20px;
}

iframe {
  width: 1200px;
  height: 1600px;
  border: none;
  margin: 0 auto;
  display: block;
  box-sizing: border-box;
}
</style>
