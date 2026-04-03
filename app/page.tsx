import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col selection:bg-brand-purple/10 font-body">
      <Header />

      <main>
        <Hero />

        <section
          id="nosotros"
          className="relative py-32 px-6 overflow-hidden -mt-10"
        >
          <img
            src="/assets/images/bg-cream.webp"
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
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-brand-wine text-pretty">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
              {[
                { name: "Manjares", desc: "Dulce de leche tradicional" },
                { name: "Mermeladas", desc: "Fruta pura de estación" },
                { name: "Conservas", desc: "Sabor preservado con amor" },
                { name: "Jarabes y Jugos", desc: "Esencia pura del Elqui" },
              ].map((category) => (
                <article
                  key={category.name}
                  className="group flex flex-col items-center bg-brand-cream/60 rounded-md overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-brand-wine/20 border border-brand-wine/5 hover:-translate-y-2"
                >
                  <div className="relative aspect-5/4 w-full overflow-hidden">
                    <Image
                      src="/assets/images/product.webp"
                      alt={category.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-wine/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-4 flex flex-col items-center gap-4">
                    <h3 className="text-2xl font-medium text-brand-wine text-center leading-tight">
                      {category.name}
                    </h3>
                    {/* <a
                      href={`/productos/${category.name.toLowerCase()}`}
                      className="inline-flex h-12 items-center justify-center rounded-full bg-brand-wine px-12 text-xl font-normal text-white shadow-xl transition-all hover:scale-105 hover:bg-brand-wine/90"
                    >
                      Ver más
                    </a> */}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contacto"
        className="bg-brand-wine text-brand-cream/90 relative overflow-hidden -mt-20"
      >
        <img
          src="/assets/images/bg-purple-lg.webp"
          alt=""
          className="absolute w-full h-full scale-120 inset-0 object-cover object-bottom opacity-30"
        />
        <div className="max-w-7xl mx-auto p-4 py-16 relative grid sm:grid-cols-2 lg:grid-cols-4 gap-16 border-b border-brand-cream/10 pb-20 justify-items-center">
          <div className="space-y-2">
            <img
              src="/assets/images/logo-cream.webp"
              alt="Frutos de Elqui"
              className="sm:w-full w-[80%] max-w-[280px] mx-auto opacity-100"
            />
            <p className="text-base text-center mx-auto italic opacity-80 leading-relaxed max-w-xs">
              Sabores auténticos del Valle de Elqui
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif sm:text-start text-center text-2xl font-normal tracking-wide">
              Contáctanos
            </h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-brand-cream/10 flex items-center justify-center transition-colors group-hover:bg-brand-cream/20">
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
              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-brand-cream/10 flex items-center justify-center transition-colors group-hover:bg-brand-cream/20">
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
              <li className="flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-full bg-brand-cream/10 flex items-center justify-center transition-colors group-hover:bg-brand-cream/20">
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
            <h4 className="font-serif text-2xl font-normal tracking-wide">
              Secciones
            </h4>
            <ul className="grid pl-1 grid-cols-2 lg:grid-cols-1 gap-6 text-xs font-bold uppercase tracking-[0.3em] opacity-80">
              <li>
                <a
                  href="#inicio"
                  className="hover:text-white transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-white transition-colors"
                >
                  Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#productos"
                  className="hover:text-white transition-colors"
                >
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="#contacto"
                  className="hover:text-white transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-2xl font-normal tracking-wide">
              Medios de Pago
            </h4>
            <div className="grid grid-cols-3 gap-4 opacity-80">
              <div className="h-12 px-2 bg-brand-cream/10 rounded-xl border border-brand-cream/10 flex items-center justify-center text-[10px] font-bold tracking-widest hover:bg-brand-cream/20 transition-colors">
                WEBPAY
              </div>
              <div className="h-12 px-2 bg-brand-cream/10 rounded-xl border border-brand-cream/10 flex items-center justify-center text-[10px] font-bold tracking-widest hover:bg-brand-cream/20 transition-colors">
                VISA
              </div>
              <div className="h-12 px-2 bg-brand-cream/10 rounded-xl border border-brand-cream/10 flex items-center justify-center text-[10px] font-bold tracking-widest hover:bg-brand-cream/20 transition-colors">
                MC
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
