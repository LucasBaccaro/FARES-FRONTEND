"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useSearch } from "@/hooks/use-search"

const SearchIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
)

const FileTextIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const BookIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
)

const VolumeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M9 12H4a1 1 0 01-1-1V9a1 1 0 011-1h5l4-4v16l-4-4z"
    />
  </svg>
)

const PlayIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.586a1 1 0 01.707.293L12 11l.707-.707A1 1 0 0113.414 10H15M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
)

const EyeIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
)

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    />
  </svg>
)

const documents = [
  {
    id: 1,
    title: "La Oración Contemplativa en la Vida Cristiana",
    description:
      "Una reflexión profunda sobre la importancia de la contemplación en el camino espiritual del cristiano moderno",
    type: "Artículo",
    icon: FileTextIcon,
  },
  {
    id: 2,
    title: "Ejercicio de Cuaresma - Primera Semana",
    description: "Guía completa de ejercicios espirituales para la preparación cuaresmal.",
    type: "Ejercicio",
    icon: FileTextIcon,
  },
  {
    id: 3,
    title: "Contemplación del Domingo de Ramos",
    description: "Meditación sobre la entrada triunfal de Jesús en Jerusalén y su significado para nuestra fe.",
    type: "Contemplación",
    icon: BookIcon,
  },
  {
    id: 4,
    title: "El Sacerdote y la Comunidad Moderna",
    description: "Artículo publicado en la revista diocesana sobre el rol del sacerdote en la sociedad contemporánea.",
    type: "Revista",
    icon: FileTextIcon,
  },
  {
    id: 5,
    title: "Caminos de Santidad",
    description: "Libro completo sobre diversos senderos hacia la santidad en la vida cotidiana.",
    type: "Libro",
    icon: BookIcon,
  },
  {
    id: 6,
    title: "Homilía de Pascua 1998",
    description: "Registro audio de la homilía pascual pronunciada en la Catedral.",
    type: "Audio",
    icon: VolumeIcon,
  },
]

const categories = [
  { name: "Todos", icon: FileTextIcon, active: true },
  { name: "Artículos", icon: FileTextIcon, active: false },
  { name: "Contemplaciones", icon: BookIcon, active: false },
  { name: "Ejercicios Espirituales", icon: FileTextIcon, active: false },
  { name: "Artículos de Revista", icon: FileTextIcon, active: false },
  { name: "Libros", icon: BookIcon, active: false },
  { name: "Audios", icon: VolumeIcon, active: false },
  { name: "Videos", icon: PlayIcon, active: false },
]

export default function DocumentosPage() {
  const {
    query,
    categories,
    results,
    loading,
    error,
    setQuery,
    setActiveCategory,
  } = useSearch() // Add your API endpoint here when ready: useSearch("/api/search")

  return (
    <div className="min-h-screen" style={{backgroundColor: '#F7F2EF'}}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="title-playfair mb-6 text-balance text-slate-700">Documentos y Obras</h1>
            <p className="subtitle-lato max-w-2xl mx-auto text-pretty" style={{color: '#5D5D5D'}}>
              Explorá la rica biblioteca de escritos, contemplaciones y enseñanzas del Padre Diego Fares SJ
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            {/* Mobile-first layout with sidebar as horizontal scroll on mobile */}
            <div className="flex flex-col lg:grid lg:grid-cols-4 gap-6 lg:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3 order-1 lg:order-2">
                {/* Mobile horizontal scroll categories - moved here to be first */}
                <div className="lg:hidden mb-6">
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                    {categories.map((category, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => setActiveCategory(category.id)}
                          className={`flex items-center gap-2 px-3 py-2 rounded-lg text-left transition-colors whitespace-nowrap flex-shrink-0 ${
                            category.active ? "bg-slate-600 text-white" : "bg-gray-100 text-slate-700 hover:bg-gray-200"
                          }`}
                        >
                          <FileTextIcon />
                          <span className="text-sm font-medium">{category.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm mb-6">
                  <div className="relative">
                    <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      <SearchIcon />
                    </div>
                    <input
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Buscar en documentos, títulos, contenido..."
                      className="w-full pl-12 pr-4 py-3 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-slate-400 focus:bg-white transition-colors"
                    />
                  </div>
                  <p className="text-sm text-slate-500 mt-3">
                    {loading ? "Buscando..." : `${results.length} documentos encontrados`}
                  </p>
                  {error && (
                    <p className="text-sm text-red-500 mt-1">Error: {error}</p>
                  )}
                </div>

                {/* Documents List */}
                <div className="space-y-4">
                  {results.map((doc) => {
                    return (
                      <div key={doc.id} className="bg-white rounded-2xl p-4 lg:p-6 shadow-sm overflow-hidden">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                          <div className="flex items-start gap-3 lg:gap-4 flex-1 min-w-0">
                            <div className="p-2 bg-gray-100 rounded-lg flex-shrink-0">
                              <div className="text-slate-600">
                                <FileTextIcon />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0 overflow-hidden">
                              <h3 className="title-playfair-small text-slate-700 line-clamp-2 break-words min-w-0 mb-2">{doc.title}</h3>
                              <p className="text-slate-600 text-sm leading-relaxed line-clamp-1 break-words">{doc.description}</p>
                            </div>
                          </div>
                          <div className="flex flex-col sm:flex-row gap-2 lg:ml-4 lg:flex-shrink-0">
                            {doc.viewLink && (
                              <a
                                href={doc.viewLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-3 lg:px-4 py-2 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                              >
                                <EyeIcon />
                                <span className="text-sm">Ver</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Sidebar - Categories (Desktop only) */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="hidden lg:block bg-white rounded-2xl p-6 shadow-sm">
                  <h3 className="title-playfair-small mb-4 text-slate-700">Categorías</h3>
                  <div className="space-y-2">
                    {categories.map((category, index) => {
                      return (
                        <button
                          key={index}
                          onClick={() => setActiveCategory(category.id)}
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-colors ${
                            category.active ? "bg-slate-600 text-white" : "bg-gray-100 text-slate-700 hover:bg-gray-200"
                          }`}
                        >
                          <FileTextIcon />
                          <span className="text-sm font-medium">{category.name}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
