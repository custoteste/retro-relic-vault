const steps = [
  { title: "Organizado Por Título, Año y País", desc: "Kalimán, Condorito, Memín, Cebollita — cada colección separada, con sus números en orden. No es un folder caótico. Es una biblioteca real." },
  { title: "Tu Tablet del Sillón. Tu Celular. Tu Computadora.", desc: "Accede desde cualquier dispositivo Android, iOS, Windows o Mac. Descarga los que quieras para leer sin internet — en el camión, en la sala, donde sea." },
  { title: "Tuyo Para Siempre. Sin Mensualidades.", desc: "Un solo pago. Acceso de por vida. Sin renovaciones ni bloqueos. El abuelo hubiera querido que tuvieras esto guardado para siempre." },
];

const GoogleDriveIcon = () => (
  <svg width="56" height="50" viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" className="mx-auto">
    <path d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/>
    <path d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-20.4 35.3c-.8 1.4-1.2 2.95-1.2 4.5h27.5z" fill="#00ac47"/>
    <path d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.5l5.85 11.5z" fill="#ea4335"/>
    <path d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/>
    <path d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/>
    <path d="m73.4 26.5-10.2-17.65c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 23.8h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/>
  </svg>
);

const DeliverySection = () => (
  <section className="py-16 px-4 bg-secondary">
    <div className="bg-background border border-primary/40 rounded-xl p-10 max-w-[900px] mx-auto text-center">
      <GoogleDriveIcon />
      <h2 className="font-display text-[clamp(18px,3.5vw,28px)] text-foreground my-4 tracking-wide">
        🔒 PAGAS AHORA. EN 5 MINUTOS ABRES EL PRIMER NÚMERO EN TU TABLET.
      </h2>
      <p className="text-muted-foreground text-lg mb-9">
        Sin instalaciones raras. Sin esperas. Recibes el enlace de Google Drive en tu correo — organizado por título, listo para que esta noche llames a tus hijos y abran juntos el primer Kalimán.
      </p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-7">
        {steps.map((s, i) => (
          <div key={i} className="text-center">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
              {i + 1}
            </div>
            <h3 className="text-[clamp(14px,2vw,18px)] font-extrabold text-foreground mb-1.5">{s.title}</h3>
            <p className="text-base text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default DeliverySection;
