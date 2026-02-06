declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: any[]) => void
    __ga4InitializedId?: string
  }
}

export type GtagEventParams = Record<string, unknown>

export function getGaId() {
  const id = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID as string | undefined
  return id?.trim() || ''
}

export function injectGaScript(measurementId: string) {
  if (!measurementId) return
  // Se você colou o snippet no index.html, já vai existir um <script src="...gtag/js?id=...">
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)) return
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js"]`)) return
  if (document.getElementById('ga4-script')) return

  const script = document.createElement('script')
  script.id = 'ga4-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)
}

export function initGa(measurementId: string) {
  if (!measurementId) return
  if (window.__ga4InitializedId === measurementId) return

  window.dataLayer = window.dataLayer || []
  window.gtag =
    window.gtag ||
    function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer?.push(arguments as any)
    }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, {
    anonymize_ip: true,
    send_page_view: true,
  })

  window.__ga4InitializedId = measurementId
}

export function trackEvent(action: string, params?: GtagEventParams) {
  if (!window.gtag) return
  window.gtag('event', action, params || {})
}

