"use client"

import { useState, useEffect } from "react"
import { apiClient, type DriveFile } from "@/lib/api-client"

export interface SearchCategory {
  id: string
  name: string
  active: boolean
}

export interface SearchResult {
  id: string
  title: string
  description: string
  type: string
  category: string
  url?: string
  viewLink?: string
  downloadLink?: string
  mimeType?: string
  size?: string
  modifiedTime?: string
}

export interface SearchState {
  query: string
  categories: SearchCategory[]
  results: SearchResult[]
  loading: boolean
  error: string | null
}

export function useSearch(apiEndpoint?: string) {
  const [state, setState] = useState<SearchState>({
    query: "",
    categories: [
      { id: "articulos", name: "Artículos", active: true },
      { id: "contemplaciones", name: "Contemplaciones", active: false },
      { id: "libros", name: "Libros", active: false },
      { id: "audios", name: "Audios", active: false },
      { id: "videos", name: "Videos", active: false },
    ],
    results: [],
    loading: false,
    error: null,
  })

  const setQuery = (query: string) => {
    setState((prev) => ({ ...prev, query }))
  }

  const setActiveCategory = (categoryId: string) => {
    setState((prev) => ({
      ...prev,
      categories: prev.categories.map((cat) => ({
        ...cat,
        active: cat.id === categoryId,
      })),
    }))
  }

  const search = async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }))

      const activeCategory = state.categories.find(c => c.active)
      const carpeta = activeCategory?.id

      const response = await apiClient.searchDrive(state.query, carpeta)

      // Convert DriveFile to SearchResult
      const results: SearchResult[] = response.archivos.map((file: DriveFile) => ({
        id: file.id,
        title: file.name,
        description: `Archivo ${file.mime_type.includes('pdf') ? 'PDF' : file.mime_type.includes('audio') ? 'de Audio' : file.mime_type.includes('video') ? 'de Video' : 'de Texto'}`,
        type: getFileType(file.mime_type),
        category: carpeta || activeCategory?.id || "articulos",
        viewLink: file.view_link,
        downloadLink: file.download_link,
        mimeType: file.mime_type,
        size: file.size,
        modifiedTime: file.modified_time
      }))

      setState((prev) => ({
        ...prev,
        results,
        loading: false
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "Unknown error",
        loading: false
      }))
    }
  }

  const getFileType = (mimeType: string): string => {
    if (mimeType.includes('pdf')) return 'PDF'
    if (mimeType.includes('audio')) return 'Audio'
    if (mimeType.includes('video')) return 'Video'
    if (mimeType.includes('text')) return 'Texto'
    if (mimeType.includes('document')) return 'Documento'
    return 'Archivo'
  }

  // Load all documents for the selected category
  const loadCategoryDocuments = async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }))

      const activeCategory = state.categories.find(c => c.active)
      const carpeta = activeCategory?.id

      // Use "*" as query to get all documents in the category
      const response = await apiClient.searchDrive("*", carpeta)

      // Convert DriveFile to SearchResult
      const results: SearchResult[] = response.archivos.map((file: DriveFile) => ({
        id: file.id,
        title: file.name,
        description: `Archivo ${file.mime_type.includes('pdf') ? 'PDF' : file.mime_type.includes('audio') ? 'de Audio' : file.mime_type.includes('video') ? 'de Video' : 'de Texto'}`,
        type: getFileType(file.mime_type),
        category: carpeta || activeCategory?.id || "articulos",
        viewLink: file.view_link,
        downloadLink: file.download_link,
        mimeType: file.mime_type,
        size: file.size,
        modifiedTime: file.modified_time
      }))

      setState((prev) => ({
        ...prev,
        results,
        loading: false
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "Unknown error",
        loading: false
      }))
    }
  }

  // Auto-search when query or category changes
  useEffect(() => {
    const debounce = setTimeout(() => {
      if (state.query.trim().length > 0) {
        search()
      } else {
        // When query is empty, load all documents for the selected category
        loadCategoryDocuments()
      }
    }, 300)

    return () => clearTimeout(debounce)
  }, [state.query, state.categories])

  // Load documents when component mounts
  useEffect(() => {
    loadCategoryDocuments()
  }, [])

  return {
    ...state,
    setQuery,
    setActiveCategory,
    search,
  }
}