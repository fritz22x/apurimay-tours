export const companyInfo = {
  name: "ApuRimay Tours",
  legalName: "Fritz Johan Arone Barazorda",
  businessType: "Persona natural con negocio",
  ruc: "10717729116",
  email: "info@apurimaytours.com",
  address: "Abancay, Apur\u00edmac, Per\u00fa",
  whatsappPrimary: "51941215482",
  salesPhones: ["+51 973 700 075", "+51 984 709 080"],
  operationsPhones: ["+51 980 832 014", "+51 965 271 445"],
} as const;

export function buildPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
