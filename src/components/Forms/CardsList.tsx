import React from 'react';
import { TFormCard } from '../../services/types';
import FormCard from './FormCard';
import './CardsList.scss';

type TProps = {
  cardsList: TFormCard[];
};

class CardsList extends React.Component<TProps> {
  render() {
    const { cardsList } = this.props;
    return (
      <div>
        <hr />
        <h2>Cards list</h2>
        {cardsList.length === 0 ? (
          <p>List is empty</p>
        ) : (
          <div className="cardsList">
            {cardsList.map((card) => (
              <FormCard key={card.id} card={card} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CardsList;
