import { useRef } from "react";

interface ChatMessage {
  from: "seller" | "buyer";
  text: string;
  time: string;
}

interface Testimonial {
  avatar: string;
  phone: string;
  messages: ChatMessage[];
}

const testimonials: Testimonial[] = [
  {
    avatar: "A", phone: "+55 91 8429-1124",
    messages: [
      { from: "seller", text: "¡Hola! 😊 Te escribo para confirmar si pudiste acceder al producto. ¿Funcionó todo bien? 👍", time: "10:48" },
      { from: "buyer", text: "Todo perfecto... Acceso ok ✅", time: "11:21" },
      { from: "seller", text: "¡Qué bueno que todo salió bien, disfrútalo! 🤗", time: "11:23" },
    ],
  },
  {
    avatar: "C", phone: "+55 69 9283-8493",
    messages: [
      { from: "seller", text: "¡Hola! 😊 ¿Pudiste acceder al producto? ¿Funcionó todo? 👍", time: "10:39" },
      { from: "buyer", text: "Buenas tardes. Todo salió bien. ✅", time: "13:01" },
      { from: "seller", text: "¡Qué bueno, disfrútalo! 🤗", time: "13:02" },
    ],
  },
  {
    avatar: "J", phone: "+55 41 9761-4014",
    messages: [
      { from: "seller", text: "¡Hola! 😊 ¿Pudiste acceder al producto? ¿Funcionó todo bien? 👍", time: "10:50" },
      { from: "buyer", text: "Sí lo recibí ✅", time: "11:16" },
      { from: "seller", text: "¡Qué bueno, disfrútalo! 🤗", time: "11:18" },
    ],
  },
  {
    avatar: "R", phone: "+55 61 9244-3651",
    messages: [
      { from: "seller", text: "¡Hola! 😊 ¿Todo bien con el acceso? 👍", time: "10:38" },
      { from: "buyer", text: "¡¡Todo perfecto!! ¡Abrió sin problema!! ¡Son muy chidos! ¡¡Gracias!! 🎉", time: "10:43" },
      { from: "seller", text: "¡Qué bueno, disfrútalo! 🤗", time: "10:45" },
    ],
  },
  {
    avatar: "H", phone: "+55 14 99725-8610",
    messages: [
      { from: "seller", text: "¡Hola! 😊 ¿Todo bien con el acceso al material? 👍", time: "10:48" },
      { from: "buyer", text: "Sí lo obtuve, gracias ✅", time: "10:49" },
      { from: "seller", text: "¡Qué bueno, disfrútalo! 🤗", time: "10:49" },
    ],
  },
  {
    avatar: "🇧🇷", phone: "+55 48 9145-0535",
    messages: [
      { from: "seller", text: "¡Hola! 😊 ¿Todo bien con el acceso? 👍", time: "10:48" },
      { from: "buyer", text: "Buenos días. Sí funcionó. ¡Material maravilloso! ¡Gracias! 🙌", time: "11:04" },
      { from: "seller", text: "¡Qué bueno, disfrútalo! 🤗", time: "11:05" },
    ],
  },
];

const ChatCard = ({ t }: { t: Testimonial }) => (
  <div className="flex-shrink-0 w-[280px] rounded-lg overflow-hidden shadow-lg border border-border bg-background">
    {/* Header */}
    <div className="bg-[#075e54] p-3 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-[#128c7e] flex items-center justify-center text-sm font-bold text-white">
        {t.avatar}
      </div>
      <div>
        <p className="text-white text-sm font-bold">{t.phone}</p>
        <p className="text-green-200 text-xs">en línea</p>
      </div>
    </div>
    {/* Messages */}
    <div className="bg-[#ece5dd] p-3 space-y-2 min-h-[200px]">
      <p className="text-[10px] text-center text-muted-foreground mb-2">🔒 Cifrado de extremo a extremo</p>
      {t.messages.map((m, i) => (
        <div key={i} className={`max-w-[85%] rounded-lg p-2 text-xs ${m.from === "seller" ? "bg-white ml-0" : "bg-[#dcf8c6] ml-auto"}`}>
          <p className="text-foreground">{m.text}</p>
          <p className="text-[10px] text-muted-foreground text-right mt-1">{m.time} {m.from === "seller" ? "✓✓" : ""}</p>
        </div>
      ))}
    </div>
  </div>
);

const TestimonialsSection = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: number) => trackRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section className="py-16 px-4 bg-[#e3dede]">
      <h2 className="font-display text-[clamp(20px,4vw,34px)] text-center text-foreground mb-7 tracking-wider">
        TESTIMONIOS DE CLIENTES SATISFECHOS
      </h2>
      <div className="relative">
        <button onClick={() => scroll(-1)} className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-dark/70 text-dark-foreground rounded-full w-9 h-9 text-xl">‹</button>
        <div ref={trackRef} className="flex gap-4 overflow-x-auto px-10 py-2 scroll-hide">
          {testimonials.map((t, i) => <ChatCard key={i} t={t} />)}
        </div>
        <button onClick={() => scroll(1)} className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-dark/70 text-dark-foreground rounded-full w-9 h-9 text-xl">›</button>
      </div>
    </section>
  );
};

export default TestimonialsSection;
