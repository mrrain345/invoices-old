export default class InvoiceData {
  id = "";
  issueDate: Date = new Date();
  saleDate: Date = new Date();

  purchaser = "";
  address = "";
  nip = "";
  price = 0;
  payment: "cash" | "7" | "14" | "21" | "30" = "cash";
  vat = true;
}
