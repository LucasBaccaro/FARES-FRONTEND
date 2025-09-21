export interface ChatResponse {
  thread_id: string
  assistant_message: string
  citations: Citation[]
}

export interface Citation {
  file_id: string
  file_name: string
  quote: string
  text: string
  download_link: string
}

export interface SearchResponse {
  success: boolean
  total: number
  carpeta_buscada?: string
  archivos: DriveFile[]
}

export interface DriveFile {
  id: string
  name: string
  view_link: string
  download_link: string
  mime_type: string
  size: string
  modified_time: string
}

export interface HealthResponse {
  status: string
  openai_enabled: boolean
  drive_enabled: boolean
  assistant_id: string
  references_loaded: number
}

class DiegoFaresAPI {
  private baseURL: string
  private currentThreadId: string | null = null

  constructor(baseURL = 'https://fares-backend-production.up.railway.app') {
    this.baseURL = baseURL
  }

  async chat(message: string): Promise<ChatResponse> {
    const response = await fetch(`${this.baseURL}/ask`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message,
        thread_id: this.currentThreadId
      })
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`)
    }

    const result = await response.json()
    this.currentThreadId = result.thread_id // Save for next messages
    return result
  }

  async searchDrive(query: string, carpeta?: string): Promise<SearchResponse> {
    const body: { query: string; carpeta?: string } = { query }
    if (carpeta) body.carpeta = carpeta

    const response = await fetch(`${this.baseURL}/search-drive`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`)
    }

    return await response.json()
  }

  async health(): Promise<HealthResponse> {
    const response = await fetch(`${this.baseURL}/health`)
    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${await response.text()}`)
    }
    return await response.json()
  }

  newConversation() {
    this.currentThreadId = null
  }

  getCurrentThreadId() {
    return this.currentThreadId
  }
}

// Export singleton instance
export const apiClient = new DiegoFaresAPI()