"use client"

import { MessageCircle, Send, Loader2 } from "lucide-react"
import { useChat } from "@/hooks/use-chat"

export default function ChatSection() {
  const {
    messages,
    currentMessage,
    loading,
    error,
    setCurrentMessage,
    sendMessage,
  } = useChat() // Add your API endpoint here when ready: useChat("/api/chat")

  const handleSend = () => {
    sendMessage()
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <section className="px-4 mb-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-slate-600 rounded-2xl overflow-hidden shadow-lg">
          {/* Header */}
          <div className="bg-slate-600 px-4 lg:px-6 py-4 flex items-center gap-3">
            <MessageCircle className="w-6 h-6 text-white" />
            <div>
              <h2 className="title-playfair-medium text-white">Conversá sobre el legado del P. Diego Fares SJ</h2>
              <p className="text-slate-200 text-xs lg:text-sm">Explora sus enseñanzas, contemplaciones y sabiduría espiritual</p>
            </div>
          </div>

          {/* Chat Content */}
          <div className="bg-white">
            {/* Welcome Message */}
            <div className="p-4 lg:p-6">
              <div className="bg-gray-100 rounded-lg p-4 mb-6">
                <p className="text-sm text-slate-700">
                  Bienvenido. Estoy aquí para ayudarte a explorar las enseñanzas y el legado del P. Diego Fares SJ. ¿En
                  qué puedo asistirte hoy?
                </p>
              </div>

              {/* Chat Messages */}
              <div className="min-h-[250px] lg:min-h-[400px] mb-6 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] lg:max-w-[80%] rounded-lg p-3 text-sm ${
                      msg.sender === 'user'
                        ? 'bg-slate-600 text-white'
                        : 'bg-gray-100 text-slate-700'
                    }`}>
                      <div className="whitespace-pre-wrap">{msg.content}</div>
                      {msg.citations && msg.citations.length > 0 && (() => {
                        // Filter citations with valid links and remove duplicates
                        const validCitations = msg.citations.filter(citation =>
                          citation.download_link && citation.download_link.trim() !== ''
                        )

                        const uniqueCitations = validCitations.reduce((acc, current) => {
                          const exists = acc.find(item =>
                            item.file_id === current.file_id &&
                            item.quote === current.quote
                          )
                          if (!exists) {
                            acc.push(current)
                          }
                          return acc
                        }, [] as typeof validCitations)

                        if (uniqueCitations.length === 0) return null

                        return (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <h4 className="font-semibold text-xs mb-2 text-slate-600">Referencias:</h4>
                            <div className="space-y-2">
                              {uniqueCitations.map((citation, index) => (
                                <div key={index} className="bg-white rounded p-2 border">
                                  <div className="flex items-start justify-between gap-2">
                                    <div className="flex-1 min-w-0">
                                      <p className="text-xs font-medium text-slate-700 truncate">{citation.file_name}</p>
                                      {citation.quote && citation.quote.trim() !== '' && (
                                        <p className="text-xs text-slate-600 mt-1 italic line-clamp-2">{citation.quote}</p>
                                      )}
                                    </div>
                                    <a
                                      href={citation.download_link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-xs bg-slate-100 hover:bg-slate-200 px-2 py-1 rounded transition-colors flex-shrink-0"
                                    >
                                      Ver
                                    </a>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )
                      })()}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-100 text-slate-700 rounded-lg p-3 text-sm flex items-center gap-2">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Pensando...
                    </div>
                  </div>
                )}
              </div>
              
              {error && (
                <div className="text-red-500 text-sm mb-4 text-center">
                  Error: {error}
                </div>
              )}

              {/* Input Area */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={currentMessage}
                  onChange={(e) => setCurrentMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Escribí tu pregunta sobre el P. Diego Fares SJ y sus enseñanzas..."
                  className="flex-1 px-4 py-2 lg:py-3 rounded-lg bg-gray-100 text-gray-900 placeholder-gray-500 border-0 focus:ring-2 focus:ring-slate-400 focus:bg-white transition-colors text-sm lg:text-base"
                  disabled={loading}
                />
                <button 
                  onClick={handleSend}
                  disabled={loading || !currentMessage.trim()}
                  className="bg-slate-600 hover:bg-slate-700 p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <Loader2 className="w-5 h-5 text-white animate-spin" />
                  ) : (
                    <Send className="w-5 h-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
