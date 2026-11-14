import {html} from 'htm/preact'
import Hello from './Hello.js'
import {Icon} from '@iconify/react'

export default function App(){
    return html`
     <div>
      <main class="px-0.5">
          <section style="background-image:url(./image_c8cfd0f2.jpg)" class="mnh-100vh d-f pi-c pc-c pn-r bg-url()_center/cover_no-repeat_hsl(50_100%_40%) ta-c mx--0.5">
            <div class="pb-5">
              <h1 class="fz-5 s:fz-15 lh-1 c-hsl(212_100%_16%)">Oukraina</h1>
              <h2 class="c-20 fs-i fw-3 mt-2">art of the states technology</h2>
            </div>

            <div class="pn-a i-80vh_0_0_0 bg-hsl(212_100%_16%) d-f pi-c pc-c"></div>

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
          <div class="ta-c"><span class="d-ib tf-scaleX(-1)">\u00A9</span> <span class="mt-5 mb-1"> a<abbr class="d-ib px-0.3 fs-i c-hsl(212_100%_46%)" title="one who attempts or ventures">pirate</abbr><span class="c-hsl(50_100%_50%)">iland</span></span> since et list 1187</div>
          <div class="c-60 mt-1">with ❤️ to earth</div>
          <div class="d-ib fz-1.5 ff-1 mt-2 c-40">
            <${Hello}/>
          </div>
      </footer>
</div>
    `
}
