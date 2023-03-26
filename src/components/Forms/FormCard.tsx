import React from 'react';
import { TFormCard } from '../../services/types';

type TProps = {
  card: TFormCard;
};

class FormCard extends React.Component<TProps> {
  render() {
    const { card } = this.props;
    return (
      <div>
        <h3>{card.name}</h3>
        <p>{card.gender}</p>
        <p>{card.date}</p>
        <p>{card.country}</p>
        <img src={card.file} alt="" />
      </div>
    );
  }
}

export default FormCard;
