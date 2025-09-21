"use client"

import { useState, useEffect } from "react"

export interface LiturgicalDay {
  date: string
  day: string
  liturgicalSeason: string
  liturgicalColor: string
  readings: string[]
  contemplation?: string
  active: boolean
}

export interface LiturgicalCalendarState {
  currentWeek: LiturgicalDay[]
  selectedDate: string | null
  loading: boolean
  error: string | null
}

export function useLiturgicalCalendar(apiEndpoint?: string) {
  const [state, setState] = useState<LiturgicalCalendarState>({
    currentWeek: [],
    selectedDate: null,
    loading: false,
    error: null,
  })

  const loadWeek = async (baseDate?: Date) => {
    if (!apiEndpoint) {
      // Mock calendar data for development
      setState((prev) => ({ ...prev, loading: true, error: null }))
      
      await new Promise((resolve) => setTimeout(resolve, 300))
      
      const mockWeek: LiturgicalDay[] = [
        { date: "29", day: "Vie", liturgicalSeason: "Tiempo Ordinario", liturgicalColor: "verde", readings: ["1 Cor 4:1-5", "Mt 25:14-30"], active: false },
        { date: "30", day: "Sáb", liturgicalSeason: "Tiempo Ordinario", liturgicalColor: "verde", readings: ["1 Cor 4:6-15", "Mt 25:31-46"], active: false },
        { date: "31", day: "Dom", liturgicalSeason: "Tiempo Ordinario", liturgicalColor: "verde", readings: ["Is 25:6-10a", "Mt 22:1-14"], contemplation: "La invitación al banquete del Reino", active: false },
        { date: "1", day: "Lun", liturgicalSeason: "Tiempo Ordinario", liturgicalColor: "verde", readings: ["Ef 2:1-10", "Lc 12:13-21"], contemplation: "La riqueza verdadera", active: true },
        { date: "2", day: "Mar", liturgicalSeason: "Tiempo Ordinario", liturgicalColor: "verde", readings: ["Ef 2:11-22", "Lc 12:35-38"], active: false },
      ]

      setState((prev) => ({ ...prev, currentWeek: mockWeek, loading: false }))
      return
    }

    try {
      setState((prev) => ({ ...prev, loading: true, error: null }))
      
      const date = baseDate || new Date()
      const response = await fetch(`${apiEndpoint}?date=${date.toISOString()}`)
      
      if (!response.ok) throw new Error("Failed to load liturgical calendar")
      
      const data = await response.json()
      setState((prev) => ({ ...prev, currentWeek: data.week, loading: false }))
    } catch (error) {
      setState((prev) => ({ 
        ...prev, 
        error: error instanceof Error ? error.message : "Unknown error",
        loading: false 
      }))
    }
  }

  const selectDate = (date: string) => {
    setState((prev) => ({
      ...prev,
      selectedDate: date,
      currentWeek: prev.currentWeek.map(day => ({
        ...day,
        active: day.date === date
      }))
    }))
  }

  const navigateWeek = (direction: "prev" | "next") => {
    const currentDate = new Date()
    const offset = direction === "next" ? 7 : -7
    const newDate = new Date(currentDate.getTime() + offset * 24 * 60 * 60 * 1000)
    loadWeek(newDate)
  }

  // Load current week on mount
  useEffect(() => {
    loadWeek()
  }, [apiEndpoint])

  const getSelectedDay = () => {
    return state.currentWeek.find(day => day.active)
  }

  return {
    ...state,
    loadWeek,
    selectDate,
    navigateWeek,
    getSelectedDay,
  }
}