import Subject from "@/classes/Subject";

function getCurrentDate(): string {
  return new Date().toISOString().split("T")[0];
}

export default class InvoiceData {
  id = "";
  issueDate = getCurrentDate();
  saleDate = getCurrentDate();

  customer = "";
  address = "";
  nip = "";
  price = 0;
  payment: "cash" | "7" | "14" | "21" | "30" = "cash";
  comments = "";
  vat = true;

  getBrutto() {
    const price = Math.round((this.price * 1 + Number.EPSILON) * 100) / 100;
    const vat = this.vat
      ? Math.round((this.price * 0.23 + Number.EPSILON) * 100) / 100
      : 0;
    return price + vat;
  }

  getCustomer() {
    return new Subject("Nabywca", this.customer, this.address, this.nip);
  }
}
