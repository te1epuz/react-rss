import { TSearchResult } from '../../services/types';
import styles from './ResultsCard.module.scss';

type TProps = {
  searchResult: TSearchResult;
};

export default function ResultsCard({ searchResult }: TProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.img__wrapper}>
          <img className={styles.img} src={searchResult.image} alt={searchResult.name} />
        </div>
        <h3 className={styles.name}>{searchResult.name}</h3>
        <p className={styles.status}>Status: {searchResult.status}</p>
      </div>
      {/* <button className={styles.card__button} type="button">
        Details
      </button> */}
    </div>
  );
}
