import { useEffect } from 'react'
import { getGaId, injectGaScript, initGa, trackEvent } from '../analytics/ga'

function getAnchorHref(target: EventTarget | null) {
  const el = target as HTMLElement | null
  const a = el?.closest?.('a[href]') as HTMLAnchorElement | null
  return a?.getAttribute('href') || ''
}

export default function Analytics() {
  useEffect(() => {
    const id = getGaId()
    if (!id) return

    injectGaScript(id)
    initGa(id)

    const onClick = (e: MouseEvent) => {
      const href = getAnchorHref(e.target)
      if (!href) return

      // WhatsApp
      if (href.includes('wa.me/5518996809368')) {
        trackEvent('whatsapp_click', { href, location: window.location.pathname })
        return
      }

      // Amostras / externos
      if (
        href.includes('dchef.com.br') ||
        href.includes('drmatheuskasai.com') ||
        href.includes('clubmais.app')
      ) {
        trackEvent('sample_click', { href })
        return
      }

      // CTAs internos
      if (href === '#contact') {
        trackEvent('cta_contact_click', { href })
        return
      }
      if (href === '#about') {
        trackEvent('cta_about_click', { href })
      }
    }

    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true } as any)
  }, [])

  return null
}

