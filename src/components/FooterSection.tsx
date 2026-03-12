const FooterSection = () => (
  <footer className="bg-dark border-t border-border py-8 px-4 text-center">
    <p className="text-muted-foreground text-xs mb-1">
      © {new Date().getFullYear()} Nostalgia en Vena — Todos los derechos reservados.
    </p>
    <p className="text-muted-foreground text-xs">
      Este producto es un archivo digital. Las imágenes son ilustrativas.
    </p>
  </footer>
);

export default FooterSection;
