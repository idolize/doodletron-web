'use client'

import React, { useEffect } from 'react'

declare const Canny: (
  method: string,
  options: {
    boardToken: string
    basePath: `/${string}`
    theme: 'light' | 'dark' | 'auto'
    ssoToken: string | null // for sharing user session with the app itself
  }
) => void

const boardToken = 'f3c66293-774e-83db-a3ee-ab8a690de184'

// https://developers.canny.io/install/widget/web
export function FeedbackBoard() {
  /* eslint-disable */
  useEffect(() => {
    ;(function (w: any, d, i, s) {
      function l() {
        if (!d.getElementById(i)) {
          var f = d.getElementsByTagName(s)[0],
            e = d.createElement(s) as HTMLScriptElement
          ;((e.type = 'text/javascript'),
            (e.async = !0),
            (e.src = 'https://canny.io/sdk.js'),
            f?.parentNode?.insertBefore(e, f))
        }
      }
      if ('function' != typeof w.Canny) {
        var c: any = function () {
          c.q.push(arguments)
        }
        ;((c.q = []),
          (w.Canny = c),
          'complete' === d.readyState
            ? l()
            : w.attachEvent
              ? w.attachEvent('onload', l)
              : w.addEventListener('load', l, !1))
      }
    })(window, document, 'canny-jssdk', 'script')
    /* eslint-enable */

    Canny('render', {
      boardToken,
      basePath: '/support',
      theme: 'light',
      ssoToken: null,
    })
  }, [])

  return <div data-canny />
}
