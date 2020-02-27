<template>
  <div>
    <Invoice />
  </div>
</template>

<script>
// @ is an alias to /src
import Invoice from "@/components/Invoice";

export default {
  name: "InvoiceView",
  components: {
    Invoice
  }
};
</script>
