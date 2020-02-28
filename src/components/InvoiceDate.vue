<template>
  <div>
    <div class="title">Miejsce wystawienia</div>
    <div class="field">Słone</div>
    <div class="title">Data wystawienia</div>
    <div class="field">{{ printDate(data.issueDate) }}</div>
    <div class="title">Data sprzedaży</div>
    <div class="field">{{ printDate(data.saleDate) }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import InvoiceData from "@/classes/InvoiceData";

@Component
export default class InvoiceDate extends Vue {
  @Prop() data!: InvoiceData;

  printDate(date: string) {
    return date
      .split("-")
      .reverse()
      .join("-");
  }
}
</script>

<style scoped>
.title {
  font-weight: bold;
  text-align: center;
  background-color: #dddddd;
  color: #222222;
  padding: 2px;
  border-top: solid 1px #888888;
  margin-bottom: 4px;
}

.field {
  font-weight: bold;
  text-align: center;
}
</style>
