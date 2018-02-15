let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>:host { display: inline-block; width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round; }</style>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
`;

class IconLinkedin extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define('i-linkedin', IconLinkedin);
