import React, {useState} from 'react';
import './style.css';


const Newsletter = () => {
    return(
      <div className="newsletter">
        <div className="newsletter-ontent-container">
          <h2 className="news-title">
            Participe de nossas news com promoções e novidades!
          </h2>
          <form onSubmit="" className="news-form">
            <div className="news-form-box-name">
              <input
                className="name"
                type="text"
                name="name"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="news-form-box-mail">
              <input
                  className="email"
                  type="text"
                  name="email"
                  placeholder="Digite seu email"
                />

            </div>
            <input type="submit" className="submit" value="Eu quero!" />
          </form>
        </div>
      </div>
    )
}

export default Newsletter