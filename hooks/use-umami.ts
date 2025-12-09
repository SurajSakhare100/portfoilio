'use client'

import { useCallback } from "react"
import type { AnalyticsEvent } from "@/types/analytics"

declare global {
  interface Window {
    umami?: {
      track: (event: AnalyticsEvent['name'], data: AnalyticsEvent['data']) => void
    }
  }
}

export function useUmami() {
  const trackEvent = useCallback((event: AnalyticsEvent) => {
    try {
      if (typeof window !== "undefined" && window.umami) {
        window.umami.track(event.name, event.data)
      }
    } catch (error) {
      console.error("Error tracking Umami event:", error)
    }
  }, [])

  return { trackEvent }
}