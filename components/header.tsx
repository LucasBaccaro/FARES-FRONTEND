"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header style={{backgroundColor: '#F7F2EF'}} className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10">
              <Image 
                src="images/logo.svg" 
                alt="Logo Padre Diego Fares SJ" 
                width={40} 
                height={40}
                className="w-full h-full"
              />
            </div>
            <span className="text-gray-800 font-medium" style={{fontFamily: 'var(--font-playfair)', fontSize: '18px', fontWeight: '700'}}>Padre Diego Fares SJ</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`transition-colors ${
                pathname === '/' ? 'font-bold' : 'text-gray-600 hover:opacity-75'
              }`}
              style={pathname === '/' ? {color: '#334155'} : {}}
            >
              Inicio
            </Link>
            <Link 
              href="/biografia" 
              className={`transition-colors ${
                pathname === '/biografia' ? 'font-bold' : 'text-gray-600 hover:opacity-75'
              }`}
              style={pathname === '/biografia' ? {color: '#334155'} : {}}
            >
              Biografía
            </Link>
            <Link 
              href="/documentos" 
              className={`transition-colors ${
                pathname === '/documentos' ? 'font-bold' : 'text-gray-600 hover:opacity-75'
              }`}
              style={pathname === '/documentos' ? {color: '#334155'} : {}}
            >
              Documentos
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`transition-colors py-2 ${
                  pathname === '/' ? 'font-bold' : 'text-gray-600 hover:opacity-75'
                }`}
                style={pathname === '/' ? {color: '#334155'} : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link 
                href="/biografia" 
                className={`transition-colors py-2 ${
                  pathname === '/biografia' ? 'font-bold' : 'text-gray-600 hover:opacity-75'
                }`}
                style={pathname === '/biografia' ? {color: '#334155'} : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                Biografía
              </Link>
              <Link 
                href="/documentos" 
                className={`transition-colors py-2 ${
                  pathname === '/documentos' ? 'font-bold' : 'text-gray-600 hover:opacity-75'
                }`}
                style={pathname === '/documentos' ? {color: '#334155'} : {}}
                onClick={() => setIsMenuOpen(false)}
              >
                Documentos
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}