import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href="https://wa.me/254725486708?text=Hello%20Rankline%20Driving%20School%2C%20I%27d%20like%20to%20know%20more%20about%20your%20driving%20lessons."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Rankline Driving School on WhatsApp"
    >
      <MessageCircle size={22} />
      <span>Chat with us</span>
    </a>
  );
}
