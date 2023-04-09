import { TSearchResult } from '../../services/types';
import styles from './InfoWindow.module.scss';

type TProps = {
  searchResult: TSearchResult;
  setIsInfoWindowActive: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function InfoWindow({ searchResult, setIsInfoWindowActive }: TProps) {
  return (
    <div className={styles.overlay} onClick={() => setIsInfoWindowActive(false)}>
      <div className={styles.window} onClick={(event) => event.stopPropagation()}>
        <button
          className={styles.close__button}
          type="button"
          onClick={() => setIsInfoWindowActive(false)}
        >
          X
        </button>
        <div className={styles.top}>
          <div className={styles.img__wrapper}>
            <img className={styles.img} src={searchResult.image} alt={searchResult.name} />
          </div>
          <div>
            <h2 className={styles.name}>{searchResult.name}</h2>
            <p>Status: {searchResult.status}</p>
            <p>Gender: {searchResult.gender}</p>
            <p>Species: {searchResult.species}</p>
            <p>Origin: {searchResult.origin.name}</p>
            <p className={styles.additional_info}>Location: {searchResult.location.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
