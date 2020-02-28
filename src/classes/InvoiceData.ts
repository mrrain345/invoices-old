function getCurrentDate(): string {
  return [
    ...new Date()
      .toISOString()
      .split("T")[0]
      .split(".")
  ]
    .reverse()
    .join("-");
}

export default class InvoiceData {
  id = "";
  issueDate = getCurrentDate();
  saleDate = getCurrentDate();

  purchaser = "";
  address = "";
  nip = "";
  price = 0;
  payment: "cash" | "7" | "14" | "21" | "30" = "cash";
  vat = true;
}
