"use client"

import { useState } from "react"
import { apiClient, type Citation } from "@/lib/api-client"

export interface ChatMessage {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
  citations?: Citation[]
}

export interface ChatState {
  messages: ChatMessage[]
  currentMessage: string
  loading: boolean
  error: string | null
}

export function useChat(apiEndpoint?: string) {
  const [state, setState] = useState<ChatState>({
    messages: [],
    currentMessage: "",
    loading: false,
    error: null,
  })

  const setCurrentMessage = (message: string) => {
    setState((prev) => ({ ...prev, currentMessage: message }))
  }

  const sendMessage = async () => {
    if (!state.currentMessage.trim()) return

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      content: state.currentMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, userMessage],
      currentMessage: "",
      loading: true,
      error: null,
    }))

    try {
      const response = await apiClient.chat(userMessage.content)

      const assistantMessage: ChatMessage = {
        id: `assistant-${Date.now()}`,
        content: response.assistant_message,
        sender: "assistant",
        timestamp: new Date(),
        citations: response.citations,
      }

      setState((prev) => ({
        ...prev,
        messages: [...prev.messages, assistantMessage],
        loading: false,
      }))
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error instanceof Error ? error.message : "Unknown error",
        loading: false,
      }))
    }
  }

  const clearChat = () => {
    setState((prev) => ({ ...prev, messages: [] }))
    apiClient.newConversation()
  }

  return {
    ...state,
    setCurrentMessage,
    sendMessage,
    clearChat,
  }
}