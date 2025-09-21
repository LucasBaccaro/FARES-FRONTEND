import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BiografiaPage() {
  return (
    <div className="min-h-screen" style={{backgroundColor: '#F7F2EF'}}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="title-playfair mb-6 text-balance text-slate-700">
              Una vida dedicada al servicio de Dios
              <br />y la Iglesia Argentina
            </h1>
            <p className="subtitle-lato max-w-2xl mx-auto text-pretty" style={{color: '#5D5D5D'}}>
              Conocé la historia del Padre Diego Fares SJ y su legado espiritual
            </p>
          </div>
        </section>

        {/* Portrait Section */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center">
                <img
                  src="/images/biografia.png"
                  alt="P. Diego Fares SJ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-6 lg:p-8 xl:p-12">
              <h2 className="title-playfair-medium text-center mb-8 text-slate-700">Biografía</h2>

              <div className="prose prose-slate max-w-none text-sm leading-relaxed space-y-4">
                <p>
                  El Padre Diego Fares SJ nació en Buenos Aires en 1955 y dedicó su vida al servicio de Dios y la
                  Iglesia Argentina. Ingresó a la Compañía de Jesús siendo joven, donde desarrolló una profunda vocación
                  por la contemplación y la enseñanza espiritual.
                </p>

                <p>
                  Durante sus años de formación jesuita, se destacó por su capacidad de reflexión teológica y su don
                  para la dirección espiritual. Fue ordenado sacerdote en 1985 y desde entonces se dedicó a acompañar a
                  numerosas personas en su camino de fe, especialmente a través de los{" "}
                  <strong>Ejercicios Espirituales de San Ignacio</strong>.
                </p>

                <p>
                  Su ministerio se caracterizó por una profunda comprensión de la espiritualidad ignaciana y una
                  particular habilidad para transmitir las enseñanzas de San Ignacio de Loyola de manera accesible y
                  transformadora. Escribió numerosos artículos y libros sobre contemplación, discernimiento espiritual y
                  la vida cristiana.
                </p>

                <p>
                  El Padre Fares fue reconocido por su sabiduría pastoral y su capacidad para acompañar tanto a laicos
                  como a religiosos en momentos cruciales de sus vidas espirituales. Su enfoque se centraba en ayudar a
                  las personas a <strong>encontrar a Dios en todas las cosas</strong>, siguiendo el carisma ignaciano.
                </p>

                <p>
                  Entre sus obras más destacadas se encuentran reflexiones sobre la oración contemplativa, meditaciones
                  sobre los Evangelios y guías prácticas para la vida espiritual. Su legado continúa inspirando a
                  quienes buscan profundizar en su relación con Dios.
                </p>

                <p>
                  El Padre Diego Fares falleció en 2022, dejando tras de sí un rico patrimonio espiritual y el
                  testimonio de una vida entregada completamente al servicio del Reino de Dios. Su memoria perdura en
                  los corazones de todos aquellos que tuvieron la gracia de conocerlo y ser acompañados por él en su
                  camino de fe.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="px-4 mb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="title-playfair-medium text-center mb-8 text-slate-700">Galería de Recuerdos</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/images/biografia.png"
                  alt="P. Diego Fares SJ"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/images/carousel1.png"
                  alt="P. Diego Fares SJ con el Papa Francisco"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/images/carousel2.png"
                  alt="P. Diego Fares SJ con el Papa Francisco"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/images/carousel3.png"
                  alt="P. Diego Fares SJ con el Papa Francisco"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/images/carousel4.JPG"
                  alt="P. Diego Fares SJ"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="aspect-square bg-white rounded-lg shadow-sm overflow-hidden">
                <img
                  src="/images/logo.svg"
                  alt="Logo P. Diego Fares SJ"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
