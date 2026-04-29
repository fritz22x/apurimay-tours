import { companyInfo } from "@/src/data/company";

export function buildWhatsAppLink(
  message: string,
  phone = companyInfo.whatsappPrimary
) {
  const params = new URLSearchParams({
    text: message,
  });

  return `https://wa.me/${phone}?${params.toString()}`;
}
