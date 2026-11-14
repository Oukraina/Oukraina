import {html} from 'htm/preact'
import {Icon} from '@iconify/react'
import {useState, useEffect} from 'react'
import snarkdown from 'snarkdown' // A tiny markdown parser (~1kb)

export default function App(){
    const [username, setUsername] = useState(null)
  const [markdownHtml, setMarkdownHtml] = useState('')
  const [loading, setLoading] = useState(false)

  // 1. Check URL pattern for /~username
  useEffect(() => {
    const path = window.location.pathname
    const match = path.match(/^\/~([a-zA-Z0-9_-]+)/)
    if (match) {
      setUsername(match[1])
    }
  }, [])

  // 2. Fetch markdown content when username is found
  useEffect(() => {
    if (!username) return

    setLoading(true)
    fetch(`https://raw.githubusercontent.com/Oukraina/-${username}/refs/heads/main/README.md`)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load markdown')
        return res.text()
      })
      .then((text) => {
        // Parse raw text into HTML string using snarkdown
        setMarkdownHtml(snarkdown(text))
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setMarkdownHtml('<p style="color: red;">Error loading personal space content.</p>')
        setLoading(false)
      })
  }, [username])

  if (username) {
    return html`
      <div class="bg-hsl(212_100%_16%) c-w mnh-100vh d-f pi-c pc-c flex-column py-5">
        <main class="w-100 maxw-600px px-2">
          <header class="ta-c mb-4">
            <h1 class="fz-5 s:fz-15 lh-1 c-hsl(50_100%_50%)">@${username}</h1>
            <p class="mt-2 fz-2 c-80">Personal space(край) ://oukraina.com{username}</p>
          </header>

          <article class="bg-hsl(212_100%_10%) p-4 bR-3 border-1px_solid_hsl(212_100%_25%) c-15">
            ${loading 
              ? html`<p class="ta-c">Loading space layout...</p>`
              : html`<div dangerouslySetInnerHTML=${{ __html: markdownHtml }} />`
            }
          </article>

          <footer class="ta-c mt-5">
            <a href="/" class="d-ib c-15 bg-hsl(50_100%_50%) p-1 bR-1 td-n">← Return Home</a>
          </footer>
        </main>
      </div>
    `
  }
}
