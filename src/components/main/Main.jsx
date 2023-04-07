import React from "react";
import data from "../../data.json";
import './main.scss'

function Main() {
  return (
    <main className="main">
      <div className="hero">
        <div className="hero__imagen"></div>
        <div className="hero__overview">
          <div className="hero__overview-title">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="hero__overview-text">
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is it
              really fulfilling its promise?
            </p>
            <button>READ MORE</button>
          </div>
        </div>
        <div className="hero__suggestions">
          <h2>New</h2>
          <div className="hero__suggestions-article">
            <h3>Hydrogen VS Electric Cars</h3>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>
          <div className="hero__suggestions-article">
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>
          <div className="hero__suggestions-article">
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <section className="articles">
        {data.map((item, i) => (
          <div key={i} className="articles__item">
            <img
              src={item.imagen}
              alt={item.title}
              className="articles__item-logo"
            />
            <div className="articles__item-data">
              <h2 className="articles__item-number">{item.number}</h2>
              <h3 className="articles__item-title">{item.title}</h3>
              <p className="articles__item-text">{item.text}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Main;
