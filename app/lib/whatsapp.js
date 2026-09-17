// TODO: replace with Ivar's real WhatsApp Business number before launch.
export const IVAR_WHATSAPP_NUMBER = "+91 90000 00001";

export function buildWhatsAppLink(message, number = IVAR_WHATSAPP_NUMBER) {
  const digits = number.replace(/[^0-9]/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
