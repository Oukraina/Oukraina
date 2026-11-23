import {html} from 'htm/preact'
import Hello from './Hello.js'
import {Icon} from '@iconify/react'
import {Logo, X, Youtube, Instagram, GitHub} from './Logo.js'
import { useState, useEffect} from 'react'

const COMMANDS = [
  'запускати геніальні дурниці',
  'будувати ноосферу власноруч',
  'перетворювати хаос на сенс',
  'винаходити майбутнє сьогодні',
  'проєктувати простір для життя',
  'перетворювати мрії на інфраструктуру',
  'робити красиво, а не як завжди',
  'множити свободу на здоровий глузд'
]
const INTERVAL_MS = 4000 // Change every 4 seconds

export default function App(){
 const [index, setIndex] = useState(0)
  const [copied, setCopied] = useState(false)

  const fullCommand = `sudo Oukraina do "${COMMANDS[index]}" --no-explain`

  useEffect(() => {
    // Pause rotation while the "copied!" confirmation is showing
    if (copied) return

    const timer = setInterval(() => {
      setIndex((prev) => {
        if (COMMANDS.length <= 1) return 0
        let next
        do {
          next = Math.floor(Math.random() * COMMANDS.length)
        } while (next === prev) // Guarantees a different phrase every tick
        return next
      })
    }, INTERVAL_MS)

    return () => clearInterval(timer)
  }, [copied])

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullCommand)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return html`
     <div>
      <main class="px-0.5">
          <section style="background-image:url(./image_c8cfd0f2.jpg)" class="mnh-100vh d-f pi-c pc-c pn-r bg-url()_center/cover_no-repeat_hsl(50_100%_40%) ta-c mx--0.5">
            <div class="pb-5 px-0.5">
              <h1 class="fz-5 s:fz-15 lh-1 c-hsl(212_100%_16%)">Oukraina</h1>
              <h2 class="c-20 fs-i fw-3 mt-2">art of the states technology</h2>

              <div class="mt-4 bg-hsla(212_100%_16%/95%) py-1 px-2 bR-1 o-0.9 d-if">
                <h3 class="d-f gp-2 fw-1 fz-1.5 ff-monospace pi-c">
                  ${fullCommand}
                  <button
                    onClick=${handleCopy}
                    aria-label="Copy command"
                    class="bg-hsl(50_100%_40%) b-n cu-p o-0.9 [:hover]:o-1 p-1 bR-1 fz-3"
                    style="appearance: none"
                  >
                    <${Icon} icon=${copied ? 'mdi:check' : 'mdi:content-copy'} />
                  </button>
                </h3>
              </div>

            <div class="fz-1.5 ff-monospace c-20">
              ${copied ? 'copied!' : 'try in AI Mode, ChatGPT or Claude'}
            </div>
            </div>

            <div class="pn-a i-95vh_0_0_0 bg-hsl(212_100%_16%) d-f pi-c pc-c"></div>

            <div class=" ta-right pn-f i-0_0_75vh_0">
              <a class="d-ib fz-2 p-1" href="mailto:vi@oukraina.com"><${Icon} icon="mdi:envelope"/></a>
            </div>
          </section>

          <section class="my-10 s:mx-3 bg-hsl(50_100%_20%) bR-3 of-h c-15 c-w d-g gt-auto_/_1fr s:gt-auto_/_1fr_2fr">
            <div class="px-2 py-4">
              <h3 class="fz-4">Ou~kraina</h3>
              <p>Inspired by Volodymyr Vernadsky's work, culture, history and language.</p>
            </div>

            <div class="bg-hsl(50_100%_17%) px-2 py-4">
              <dl class="[_dd]:mb-2">
                <dt>край</dt>
                <dd>In a broad sense, it means land or domain.</dd>
                <dt>украй</dt>
                <dd>Following the principle of finality (as in у-твір, у-хвала, у-лов) — i.e., finalized or established land.</dd>
                <dt>україна</dt>
                <dd>It is the state, space and shape of a land (as in диви-на, давни-на, батьківщи-на).</dd>
              </dl>
            </div>
          </section>
      </main>

      <footer class="c-80 ta-c py-5 bdt-10px_solid_#ccc px-0.5 bg-hsl(212_100%_6%)">
         <nav class="fz-2.4 d-f gp-0.8 pc-c">
            ${[
              {u:'https://x.com/OukrainaHQ',i:X},
              {u:'https://github.com/Oukraina',i:GitHub},
              {u:'https://www.instagram.com/OukrainaHQ',i:Instagram},
              // {u:'https://youtube.com/@OukrainaHQ',i:Youtube},
              ].map(v => html`<a class="p-0.4 bc-hsl(50_100%_17%) bR-5 o-0.8 c-w [:hover]:o-1" href="${v.u}"><${v.i}/></a>`)}
          </nav>


          <div class="mt-2">
            <a href="http://next.oukraina.com" class="o-0.5" target="_blank" rel="noopener noreferrer">
              <span>next</span>
              <span>://oukraina.com</span>
            </a>
          </div>

          <div class="ta-c mt-3">
            <span class="d-ib tf-scaleX(-1)">\u00A9</span> <span class="mt-5 mb-1"> a<abbr class="d-ib px-0.3 fs-i c-hsl(212_100%_46%)" title="one who attempts or ventures">pirate</abbr><span class="c-hsl(50_100%_50%)">iland</span></span> since et list 1187
          </div>

          <div class="c-60 mt-1">with ❤️ to earth</div>

          <div class="d-ib fz-1.5 ff-1 mt-2 c-40">
            <${Hello}/>
          </div>

      </footer>
</div>
    `
}
