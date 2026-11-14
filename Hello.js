import {html} from 'htm/preact'
import {useState} from 'react'

let a=['world', 'you', 'universe', 'friend', 'coder', 'human', 'galaxy','there', 'planet', 'everyone']

export default function App(){
    const [hello, setHello]=useState(a[0])

    return html`
        <div>Vi ${hello}</div>
        <button class="fz-2 cu-p mt-1 c-0 bg-1" onClick=${() => {setHello(
            a[
                Math.ceil(
                    Math.random() * a.length -1
                )
            ]
        )
    }}>
            O
        </button>
    `
}
