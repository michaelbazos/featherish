let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>:host { display: inline-block; width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round; }</style>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
`;

class IconRefreshCw extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define('i-refresh-cw', IconRefreshCw);
