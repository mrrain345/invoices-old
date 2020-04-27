<template>
  <div>
    <Invoice :data="data" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Invoice from "@/components/Invoice.vue";

import InvoiceData from "@/classes/InvoiceData";

@Component({
  components: {
    Invoice
  }
})
export default class PreviewView extends Vue {
  data = new InvoiceData();

  constructor() {
    super();

    window.addEventListener("message", e => {
      const { cmd, data } = e.data;

      if (cmd === "PRINT" || cmd === "UPDATE") {
        Object.assign(this.data, data);
      }

      if (cmd === "PRINT") {
        this.$nextTick(() => window.print());
      }
    });
  }
}
</script>
