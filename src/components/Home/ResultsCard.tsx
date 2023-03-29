import React from 'react';
import { TProduct } from '../../services/types';
import './ResultsCard.scss';

type TProps = {
  result: TProduct;
};

export default function ResultsCard({ result }: TProps) {
  return (
    <div className="card card__content_grid">
      <div className="card__content">
        <div className="img__wrapper">
          <img className="img" src={result.thumbnail} alt={result.title} />
        </div>
        <div className="price">
          <h3>${result.price}</h3>
          <p className="text_rating">Rating: {result.rating}</p>
        </div>
        <p className="title">{result.title}</p>
        <div className="disabled">
          <p className="text_greyed">Categoty: {result.category}</p>
          <p className="text_greyed">Brand: {result.brand}</p>
          <p className="text_greyed">
            <span>Discount: {result.discountPercentage}% | </span>
            <span>Stock: {result.stock}</span>
          </p>
        </div>
      </div>

      <div className="card__buttons">
        <button className="card__button" type="button">
          Details
        </button>

        <button className="card__button" type="button">
          2nd button
        </button>
      </div>
    </div>
  );
}
