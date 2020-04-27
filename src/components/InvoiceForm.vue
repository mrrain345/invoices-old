<template>
  <div>
    <div class="form-group row">
      <label for="id" class="col-sm-2 col-form-label">Numer faktury</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="id" v-model="data.id" />
      </div>
    </div>

    <div class="form-group row">
      <label for="issue-date" class="col-sm-2 col-form-label"
        >Data wystawienia</label
      >
      <div class="col-sm-10">
        <input
          type="date"
          class="form-control"
          id="issue-date"
          v-model="data.issueDate"
        />
      </div>
    </div>

    <div class="form-group row">
      <label for="sale-date" class="col-sm-2 col-form-label"
        >Data sprzedaży</label
      >
      <div class="col-sm-10">
        <input
          type="date"
          class="form-control"
          id="sale-date"
          v-model="data.saleDate"
        />
      </div>
    </div>

    <br />

    <div class="form-group row">
      <label for="preset" class="col-sm-2 col-form-label">Preset</label>
      <div class="col-sm-10">
        <select class="custom-select" id="preset" v-model="preset">
          <option value="-1">nowy</option>
          <option v-for="(item, id) in presets" :key="id" :value="id">
            <span>{{ item.customer }}</span>
          </option>
        </select>
      </div>
    </div>

    <div class="form-group row">
      <label for="customer" class="col-sm-2 col-form-label">Nabywca</label>
      <div class="col-sm-10">
        <textarea
          rows="2"
          class="form-control"
          id="customer"
          style="text-transform: uppercase;"
          v-model="data.customer"
        ></textarea>
      </div>
    </div>

    <div class="form-group row">
      <label for="address" class="col-sm-2 col-form-label">Adres</label>
      <div class="col-sm-10">
        <textarea
          rows="2"
          class="form-control"
          id="address"
          v-model="data.address"
        ></textarea>
      </div>
    </div>

    <div class="form-group row">
      <label for="nip" class="col-sm-2 col-form-label">NIP</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="nip" v-model="data.nip" />
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-12">
        <div class="float-right">
          <button class="btn btn-secondary" @click="remove">
            Usuń
          </button>
          <button
            class="btn btn-secondary"
            @click="save"
            style="margin-left: 10px;"
          >
            Zapisz
          </button>
        </div>
      </div>
    </div>

    <br />

    <div class="form-group row">
      <label for="price" class="col-sm-2 col-form-label">Cena</label>
      <div class="col-sm-10">
        <input
          type="number"
          step="0.01"
          class="form-control"
          id="price"
          v-model="data.price"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="form-check-label col-sm-2" for="peyment"
        >Metoda płatności</label
      >
      <div class="col-sm-10">
        <div class="form-check" style="padding-left: 0;">
          <select
            class="custom-select mr-sm-2"
            id="peyment"
            v-model="data.payment"
          >
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
      <label for="comments" class="col-sm-2 col-form-label">Uwagi</label>
      <div class="col-sm-10">
        <textarea
          rows="3"
          class="form-control"
          id="comments"
          v-model="data.comments"
        ></textarea>
      </div>
    </div>

    <div class="form-group row">
      <label class="form-check-label col-sm-2" for="vat">VAT 23%</label>
      <div class="col-sm-10">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="vat"
            checked
            v-model="data.vat"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, PropSync, Vue, Watch } from "vue-property-decorator";
import InvoiceData from "@/classes/InvoiceData";
import Preset from "@/classes/Preset";

@Component
export default class InvoiceForm extends Vue {
  @PropSync("invoiceData", { type: InvoiceData }) data!: InvoiceData;
  preset = -1;
  presets: Preset[] = [];

  constructor() {
    super();
    const json = localStorage.getItem("presets");
    if (json === null) return;
    const presets: Preset[] = JSON.parse(json);
    this.presets.push(...presets);
  }

  @Watch('preset')
  onPresetChanged(val: number) {
    if (val == -1) {
      this.data.customer = "";
      this.data.address = "";
      this.data.nip = "";
      return;
    };

    const preset = this.presets[val];
    this.data.customer = preset.customer;
    this.data.address = preset.address;
    this.data.nip = preset.nip;
  }

  save() {
    const preset = {
      customer: this.data.customer.toUpperCase(),
      address: this.data.address,
      nip: this.data.nip
    }

    this.preset = this.presets.push(preset) -1;
    localStorage.setItem("presets", JSON.stringify(this.presets));
  }

  remove() {
    if (this.preset === -1) return;
    this.presets.splice(this.preset, 1);
    this.preset = -1;
    localStorage.setItem("presets", JSON.stringify(this.presets));
  }

  private setPreset() {
    const preset = (this.preset !== -1) ? this.presets[this.preset] : new Preset();

    this.data.customer = preset.customer;
    this.data.address = preset.address;
    this.data.nip = preset.nip;
  }
}
</script>
