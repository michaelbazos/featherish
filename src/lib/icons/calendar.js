let tmpl = document.createElement('template');
tmpl.innerHTML = `
  <style>:host { display: inline-block; width: 24px; height: 24px; fill: none; stroke: currentColor; stroke-width: 2px; stroke-linecap: round; stroke-linejoin: round; }</style>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
`;

class IconCalendar extends HTMLElement {
  constructor() {
    super();
    let shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.appendChild(tmpl.content.cloneNode(true));
  }
}

customElements.define('i-calendar', IconCalendar);
