let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>:host { display: inline-block; width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round; }</style>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line></svg>
`;

class IconArrowDownCircle extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define('i-arrow-down-circle', IconArrowDownCircle);
