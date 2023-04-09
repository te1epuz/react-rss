import { useState } from 'react';
import { TSearchResult } from '../../services/types';
import styles from './ResultsCard.module.scss';
import InfoWindow from './InfoWindow';

type TProps = {
  searchResult: TSearchResult;
};

export default function ResultsCard({ searchResult }: TProps) {
  const [isInfoWindowActive, setIsInfoWindowActive] = useState(false);
  return (
    <div>
      <div className={styles.card} onClick={() => setIsInfoWindowActive(true)} role="card">
        <div className={styles.card__content}>
          <div className={styles.img__wrapper}>
            <img className={styles.img} src={searchResult.image} alt={searchResult.name} />
          </div>
          <h3 className={styles.name}>{searchResult.name}</h3>
          <p className={styles.status}>Status: {searchResult.status}</p>
        </div>
      </div>
      {isInfoWindowActive && (
        <InfoWindow searchResult={searchResult} setIsInfoWindowActive={setIsInfoWindowActive} />
      )}
    </div>
  );
}
