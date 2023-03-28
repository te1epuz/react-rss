import React from 'react';
import { TFormCard } from '../../services/types';
import styles from './FormCard.module.scss';

type TProps = {
  card: TFormCard;
};

class FormCard extends React.Component<TProps> {
  render() {
    const { card } = this.props;
    return (
      <div className={styles.card}>
        <div className={styles.card__content}>
          <div className={styles.img__wrapper}>
            <img className={styles.img} src={card.file} alt={card.name} />
          </div>
          <h3 className={styles.title}>{card.name}</h3>
          <p className={styles.text}>Gender: {card.gender}</p>
          <p className={styles.text}>Date of birth: {card.date}</p>
          <p className={styles.text}>Destination: {card.country}</p>
        </div>
      </div>
    );
  }
}

export default FormCard;
