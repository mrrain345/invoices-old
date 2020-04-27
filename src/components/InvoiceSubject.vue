<template>
  <div class="row">
    <div class="col-12">
      <div class="title">{{ subject.title }}</div>
    </div>
    <div class="col-12 name">{{ subject.name }}</div>
    <div class="col-12 address">{{ subject.address }}</div>
    <div class="col-12 nip">
      {{ subject.nip !== "" ? "NIP:" : "" }} {{ subject.nip }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Subject from "@/classes/Subject";

@Component
export default class InvoiceSubject extends Vue {
  @Prop() subject!: Subject;
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

.name {
  text-transform: uppercase;
  white-space: pre-wrap;
  font-weight: bold;
}

.address {
  white-space: pre-wrap;
}
</style>
