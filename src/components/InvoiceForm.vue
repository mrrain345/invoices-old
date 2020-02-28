<template>
  <form>
    <div class="form-group row">
      <label for="id" class="col-sm-2 col-form-label">Numer faktury</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="id" v-model="data.id" />
      </div>
    </div>

    <div class="form-group row">
      <label for="issue-date" class="col-sm-2 col-form-label">Data wystawienia</label>
      <div class="col-sm-10">
        <input type="date" class="form-control" id="issue-date" v-model="data.issueDate" />
      </div>
    </div>

    <div class="form-group row">
      <label for="sale-date" class="col-sm-2 col-form-label">Data sprzedaży</label>
      <div class="col-sm-10">
        <input type="date" class="form-control" id="sale-date" v-model="data.saleDate" />
      </div>
    </div>

    <br />

    <div class="form-group row">
      <label for="purchaser" class="col-sm-2 col-form-label">Nabywca</label>
      <div class="col-sm-10">
        <textarea
          rows="2"
          class="form-control"
          id="purchaser"
          style="text-transform: uppercase;"
          v-model="data.purchaser"
        ></textarea>
      </div>
    </div>

    <div class="form-group row">
      <label for="address" class="col-sm-2 col-form-label">Adres</label>
      <div class="col-sm-10">
        <textarea rows="2" class="form-control" id="address" v-model="data.address"></textarea>
      </div>
    </div>

    <div class="form-group row">
      <label for="nip" class="col-sm-2 col-form-label">NIP</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="nip" v-model="data.nip" />
      </div>
    </div>

    <div class="form-group row">
      <label for="price" class="col-sm-2 col-form-label">Cena</label>
      <div class="col-sm-10">
        <input type="number" step="0.01" class="form-control" id="price" v-model="data.price" />
      </div>
    </div>

    <div class="form-group row">
      <label class="form-check-label col-sm-2" for="peyment">Metoda płatności</label>
      <div class="col-sm-10">
        <div class="form-check" style="padding-left: 0;">
          <select class="custom-select mr-sm-2" id="peyment" v-model="data.payment">
            <option selected value="cash">Gotówka</option>
            <option value="7">Przelew 7 dni</option>
            <option value="14">Przelew 14 dni</option>
            <option value="21">Przelew 21 dni</option>
            <option value="30">Przelew 30 dni</option>
          </select>
        </div>
      </div>
    </div>

    <div class="form-group row">
      <label class="form-check-label col-sm-2" for="vat">VAT 23%</label>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="vat" checked v-model="data.vat" />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, PropSync, Vue } from "vue-property-decorator";
import InvoiceData from "@/classes/InvoiceData";

@Component
export default class InvoiceForm extends Vue {
  @PropSync("invoiceData", { type: InvoiceData }) data!: InvoiceData;
}
</script>
