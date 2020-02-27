<template>
  <form>
    <div class="form-group row">
      <label for="id" class="col-sm-2 col-form-label">
        Numer faktury
      </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="id" />
      </div>
    </div>

    <div class="form-group row">
      <label for="issue-date" class="col-sm-2 col-form-label">
        Data wystawienia
      </label>
      <div class="col-sm-10">
        <input type="date" class="form-control" id="issue-date" />
      </div>
    </div>

    <div class="form-group row">
      <label for="sale-date" class="col-sm-2 col-form-label">
        Data sprzedaży
      </label>
      <div class="col-sm-10">
        <input type="date" class="form-control" id="sale-date" />
      </div>
    </div>

    <br />

    <div class="form-group row">
      <label for="purchaser" class="col-sm-2 col-form-label">
        Nabywca
      </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="purchaser" />
      </div>
    </div>

    <div class="form-group row">
      <label for="address" class="col-sm-2 col-form-label">
        Adres
      </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="address" />
      </div>
    </div>

    <div class="form-group row">
      <label for="nip" class="col-sm-2 col-form-label">
        NIP
      </label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="nip" />
      </div>
    </div>

    <div class="form-group row">
      <label for="price" class="col-sm-2 col-form-label">
        Cena
      </label>
      <div class="col-sm-10">
        <input type="number" step="0.01" class="form-control" id="price" />
      </div>
    </div>

    <div class="form-group row">
      <label class="form-check-label col-sm-2" for="peyment">
        Metoda płatności
      </label>
      <div class="col-sm-10">
        <div class="form-check" style="padding-left: 0;">
          <select class="custom-select mr-sm-2" id="peyment">
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
      <label class="form-check-label col-sm-2" for="vat">
        VAT 23%
      </label>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="vat" />
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class InvoiceForm extends Vue {
  price = 0;
  vat = true;
}
</script>
