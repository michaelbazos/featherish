let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>:host { display: inline-block; width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round; }</style>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22.08 9C19.81 1.41 16.54-.35 9 1.92S-.35 7.46 1.92 15 7.46 24.35 15 22.08 24.35 16.54 22.08 9z"></path><line x1="12.57" y1="5.99" x2="16.15" y2="16.39"></line><line x1="7.85" y1="7.61" x2="11.43" y2="18.01"></line><line x1="16.39" y1="7.85" x2="5.99" y2="11.43"></line><line x1="18.01" y1="12.57" x2="7.61" y2="16.15"></line></svg>
`;

class IconSlack extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define('i-slack', IconSlack);
