import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

export class NasaImage extends DDDSuper(I18NMixin(LitElement)) {

  constructor() {
    super();
    this.title = '';
    this.source = '';
    this.secondaryOwner= '';
    this.alt = '';
  }

  static get properties() {
    return {
        source: { type: String },
        title: { type: String },
        secondaryOwner: { type: String },
        alt: { type: String }
    };
  }

  static get styles() {
    return [css`
    

    .image {
    display: inline-block;
    }

    .image div {
    max-width: 240px;
    max-height: auto;
    font-size: 16px;
    font-weight: bold;

    }

    .image img {
    display: block;
    width: 240px;
    height: 200px;
    margin:auto;
    }

    .image:hover {
      background-color: var(--ddd-theme-default-globalNeon);
    }

  

    `];
  }

  render() {
    return html`
    <div class="image">
        <img src="${this.source}" alt="${this.alt}" />
        <div>${this.title}</div>
        <div>${this.secondaryOwner}</div>
    </div>
    `;
  }
  static get tag() {
    return "nasa-image";
  }
}
customElements.define(NasaImage.tag, NasaImage);