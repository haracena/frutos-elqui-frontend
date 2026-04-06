import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OrnamentalDivider from "@/components/OrnamentalDivider";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-brand-purple/10 font-body">
      <Header />

      <main>
        <Hero />

        <section
          id="nosotros"
          className="relative py-32 px-6 overflow-hidden -mt-16"
        >
          <img
            src="/assets/images/bg-texture.webp"
            alt="Textura crema"
            className="absolute h-full w-full inset-0 -z-10 object-cover opacity-100 object-top"
          />
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 text-center">
              <header className="space-y-4">
                {/* <div className="flex flex-col items-start gap-2">
                  <img
                    src="/assets/images/title-decor.webp"
                    alt=""
                    className="opacity-60 w-20"
                  />
                  <span className="text-brand-purple font-serif italic text-2xl">
                    Nuestra Esencia
                  </span>
                </div> */}
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-brand-purple text-pretty">
                  Tradición Familiar y Sabor Artesanal
                </h2>
                <OrnamentalDivider color="bg-brand-wine" />
              </header>
              <div className="space-y-6 text-lg text-foreground/80 leading-relaxed max-w-xl text-pretty">
                <p>
                  Desde 1995, nuestra familia elabora con dedicación y cariño
                  una variedad de productos artesanales, utilizando recetas
                  tradicionales y frutas seleccionadas del fértil Valle de
                  Elqui.
                </p>
                {/* <p>
                  Cada frasco contiene el alma de nuestra tierra y el secreto de
                  generaciones que han perfeccionado el arte de capturar la
                  dulzura del sol elquino.
                </p> */}
              </div>
              {/* <a
                href="#historia"
                className="inline-flex h-12 items-center justify-center rounded-full bg-brand-wine px-10 text-sm font-bold uppercase tracking-widest text-white transition-all hover:bg-brand-wine/90 shadow-lg shadow-brand-wine/20"
              >
                Nuestra Historia
              </a> */}
            </div>

            <img
              src="/assets/images/family.webp"
              alt="Proceso artesanal y familia"
              className="object-cover group-hover:scale-105 md:translate-x-0 -translate-x-[3%]"
            />
          </div>
        </section>

        {/* Products Section */}
        <section
          id="productos"
          className="relative py-32 px-6 -mt-24 lg:-mt-16"
        >
          <img
            src="/assets/images/bg-cream.webp"
            alt="Fondo rústico"
            className="absolute inset-0 h-full w-full -z-10 object-cover opacity-100 saturate-0 object-top"
          />
          <div className="container mx-auto space-y-8 sm:space-y-20">
            <header className="text-center space-y-6">
              <div className="flex justify-center items-center gap-2 lg:gap-4 overflow-hidden">
                <img
                  src="/assets/images/title-decor.webp"
                  alt=""
                  className="opacity-40 w-32"
                />
                <h2 className="font-serif text-4xl md:text-7xl font-normal tracking-tight text-brand-wine">
                  Nuestros Productos
                </h2>
                <img
                  src="/assets/images/title-decor.webp"
                  alt=""
                  className="opacity-40 w-32 rotate-180"
                />
              </div>
              <p className="font-serif italic text-2xl md:text-3xl text-brand-purple/70">
                Auténticos Sabores Artesanales
              </p>
            </header>

            <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {[
                {
                  name: "Manjar de Almendra",
                  img: "/assets/images/manjar-almendra.webp",
                },
                {
                  name: "Manjar de Café",
                  img: "/assets/images/manjar-cafe.webp",
                },
                {
                  name: "Manjar de Papaya",
                  img: "/assets/images/manjar-papaya.webp",
                },
                {
                  name: "Manjar de Plátano",
                  img: "/assets/images/manjar-platano.webp",
                },
                {
                  name: "Manjar de Vainilla",
                  img: "/assets/images/manjar-vainilla.webp",
                },
                // {
                //   name: "Manjar Tradicional",
                //   img: "/assets/images/manjar.webp",
                // },
                {
                  name: "Mermelada de Durazno",
                  img: "/assets/images/mermelada-durazno.webp",
                },
                {
                  name: "Mermelada de Higo",
                  img: "/assets/images/mermelada-higo.webp",
                },
                {
                  name: "Mermelada de Tomate",
                  img: "/assets/images/mermelada-tomate.webp",
                },
              ].map((product) => (
                <ProductCard
                  key={product.name}
                  name={product.name}
                  img={product.img}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contacto"
        className="bg-foreground text-brand-cream/90 relative overflow-hidden -mt-20"
      >
        <img
          src="/assets/images/bg-purple-lg.webp"
          alt=""
          className="absolute w-full h-full scale-120 inset-0 object-cover object-bottom opacity-30"
        />
        <div className="max-w-7xl mx-auto p-4 py-16 relative grid sm:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-brand-cream/10 pb-20 justify-items-center">
          <div className="space-y-2">
            <img
              src="/assets/images/logo-cream-new.webp"
              alt="Frutos de Elqui"
              className="sm:w-full w-[80%] max-w-[280px] mx-auto opacity-100"
            />
            <p className="text-base text-center mx-auto italic opacity-80 leading-relaxed max-w-xs">
              Sabores auténticos del Valle de Elqui
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif sm:text-start text-center text-2xl font-normal tracking-wide text-brand-cream">
              Contáctanos
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-brand-lavender/10 flex items-center justify-center transition-colors group-hover:bg-brand-lavender/20">
                  <svg
                    className="w-6 h-6 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <span className="text-lg tracking-wider">+56 9 8821 0841</span>
              </li>
              <li className="flex items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-brand-lavender/10 flex items-center justify-center transition-colors group-hover:bg-brand-lavender/20">
                  <svg
                    className="w-6 h-6 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-lg tracking-wider">
                  contacto@frutosdeelqui.cl
                </span>
              </li>
              <li className="flex items-center gap-2 group">
                <div className="w-12 h-12 rounded-full bg-brand-lavender/10 flex items-center justify-center transition-colors group-hover:bg-brand-lavender/20">
                  <svg
                    className="w-6 h-6 opacity-80"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <span className="text-lg tracking-wider">Valle de Elqui</span>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-2xl font-normal tracking-wide text-brand-cream">
              Secciones
            </h4>
            <ul className="grid pl-1 grid-cols-2 lg:grid-cols-1 gap-6 text-xs font-bold uppercase tracking-[0.3em] opacity-80">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-brand-lavender transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-brand-lavender transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  className="hover:text-brand-lavender transition-colors"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-brand-lavender transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-2xl font-normal tracking-wide text-brand-cream">
              Medios de Pago
            </h4>
            <div className="grid grid-cols-3 gap-4 opacity-80">
              <div className="h-12 px-2 bg-white/90 rounded-xl border border-white/5 flex items-center justify-center text-[10px] font-bold tracking-widest hover:bg-white/80 transition-colors">
                <img src="/assets/images/webpay.png" alt="" />
              </div>
              <div className="h-12 px-2 bg-white/90 rounded-xl border border-white/5 flex items-center justify-center text-[10px] font-bold tracking-widest hover:bg-white/80 transition-colors">
                <img src="/assets/images/visa.png" alt="" />
              </div>
              <div className="h-12 px-2 bg-white/90 rounded-xl border border-white/5 flex items-center justify-center text-[10px] font-bold tracking-widest hover:bg-white/80 transition-colors">
                <img src="/assets/images/mastercard.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto py-8 text-center text-[10px] font-bold uppercase tracking-[0.5em]">
          <p>
            © 2026 Sabores del Valle de Elqui. Tradición elquina embotellada.
          </p>
        </div>
      </footer>
    </div>
  );
}
