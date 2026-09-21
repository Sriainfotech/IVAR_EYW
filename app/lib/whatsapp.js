export const IVAR_WHATSAPP_NUMBER = "+91 97013 14138";

export function buildWhatsAppLink(message, number = IVAR_WHATSAPP_NUMBER) {
  const digits = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
