
class firstCard extends HTMLElement {
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
          <img src="${this.img}" alt="${this.alt}"/>
        </figure>

        <div class="text-container">
          <h2>${this.titlename}</h2>
          <h5>${this.subtitle}</h5>
          <p>${this.description}</p>
          <div class="sub-container">
            <h3>${this.price}</h3>
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

      article {
        width: 300px;
        margin: 30px auto 0;
        position: relative;
        font-family: var(--font-family);
        background-color: white;
      }

      figure {
        position: relative;
        height: 200px;
        margin: 0;
        text-align: center;
        box-sizing: border-box;
        background-color: var(--card-color);
      }

      figure::before {
        position: absolute;
        top: 10px;
        left: 10px;
        content: '${this.mark}';
        font-size: 5em;
        font-weight: 800;
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
        margin: 0;
        padding: 10px;
      }

      h2 {
        margin: 30px auto 10px;
        font-size: 26px;
        line-height: 0.8em;
        letter-spacing: 1.4px;
      }

      h5 {
        margin: 0px auto 20px;
        font-size: 15px;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        color: #999;
      }

      p {
        font-size: 15px;
        line-height: 1.4em;
        color: #333;
      }

      .sub-container {
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .sub-container > h3 {
        font-size: 25px;
        color: #999;
      }

      .sub-container > button {
        padding: 10px;
        font-size: 16px;
        letter-spacing: 1.4px;
        text-transform: uppercase;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;
        color: var(--text-color);
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
          margin-top: 50px;
          margin-left: 25px;
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

customElements.define('first-card', firstCard);

export {firstCard};