class FirstCard extends HTMLElement {

  constructor() {

    super();
    this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {

    return ['img', 'alt', 'mark', 'titlename', 'subtitle', 'description', 'price'];
  }

  attributeChangedCallback(attr, oldVal, newVal) {

    if(attr === 'img' && oldVal !== newVal) {
      this.img = newVal
    }
    if(attr === 'alt' && oldVal !== newVal) {
      this.alt = newVal
    }
    if(attr === 'mark' && oldVal !== newVal) {
      this.mark = newVal
    }
    if(attr === 'titlename' && oldVal !== newVal) {
      this.titlename = newVal
    }
    if(attr === 'subtitle' && oldVal !== newVal) {
      this.subtitle = newVal
    }
    if(attr === 'description' && oldVal !== newVal) {
      this.description = newVal
    }
    if(attr === 'price' && oldVal !== newVal) {
      this.price = newVal
    }
  }

  getTemplate() {

    const template = document.createElement('template');

    template.innerHTML = `
      <article>
        <figure>
          <img src="${this.img}" alt="${this.alt}" width="300"/>
        </figure>

        <div class="text-container">
          <h2>${this.titlename}</h2>
          <h3>${this.subtitle}</h3>
          <p>${this.description}</p>
          <div class="sub-container">
            <h4>${this.price}</h4>
            <button>Comprar</button>
          </div>
        </div>
      </article>

      ${this.getStyle()}
    `;
    return template;
  }

  getStyle() {
    return `
      <style>
        :host {
          --card-color: lightblue;
          --text-color: black;
          --font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        article {
          width: 300px;
          margin: 30px auto 0;
          font-family: var(--font-family);
          position: relative;
          background-color: white;
        }

        figure {
          width: 300px;
          height: 200px;
          margin: 0;
          text-align: center;
          position: relative;
          background-color: var(--card-color);
        }

        figure::before {
          content: '${this.mark}';
          font-size: 5em;
          font-weight: 800;
          position: absolute;
          top: 10px;
          left: 10px;
          opacity: 0.1;
        }

        img {
          width: 100%;
          position: absolute;
          bottom: -60px;
          left: -10px;
          transform: rotate(0deg);
        }

        .text-container {
          padding: 10px;
        }

        h2 {
          margin: 30px auto 10px;
          font-size: 26px;
          line-height: 0.8em;
          letter-spacing: 1.4px;
        }

        h3 {
          margin: 0px auto 20px;
          color: #585858;
          font-size: 15px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
        }

        p {
          color: #333;
          font-size: 15px;
          line-height: 1.4em;
        }

        .sub-container {
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .sub-container > h4 {
          color: #585858;
          font-size: 25px;
        }

        .sub-container > button {
          padding: 10px;
          color: var(--text-color);
          font-size: 16px;
          font-weight: bold;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          border-radius: 5px;
          cursor: pointer;
          background-color: var(--card-color);
        }

        @media (min-width: 768px) {
          article {
            width: 400px;
          }

          figure {
            height: 250px;
          }

          img {
            bottom: -40px;
          }

          .text-container {
            margin-top: 0;
            padding: 15px;
          }

          h2 {
            margin-top: 20px;
          }

          .sub-container > h3 {
            font-size: 30px;
          }
         }

        @media (min-width: 1024px) {
          article {
            width: 900px;
            height: 550px;
            margin: 0 auto;
            display: flex;
          }

          figure {
            width: 60%;
            height: auto;
          }

          img {
            width: 700px;
            height: 460px;
            top: 120px;
            left: -190px;
            transform: rotate(-30deg);
          }

          .text-container {
            width: 50%;
            padding: 40px;
          }

          h2 {
            font-size: 30px;
          }

          h5 {
            font-size: 18px;
          }

          p {
            margin: 50px 0 0 25px;
            font-size: 18px;
          }

          .sub-container {
            margin-top: 60px;
          }

          .sub-container > h3 {
            font-size: 35px;
          }
         }

         @media (hover: hover) {
          button:hover {
            opacity: .6;
          }
         }
      </style>
    `;
  }

  render() {

    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }

  connectedCallback() {

    this.render();
  }
}

customElements.define('first-card', FirstCard);

export { FirstCard };