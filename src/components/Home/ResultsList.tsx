import React from 'react';
import { TProduct } from '../../services/types';
import ResultsCard from './ResultsCard';
import './ResultsList.scss';

type TProps = {
  resultsArray: TProduct[];
};

class ResultsList extends React.Component<TProps> {
  render() {
    const { resultsArray } = this.props;
    return (
      <div>
        <h4>Search Results</h4>
        <div className="items__big_grid" data-testid="results__list">
          {resultsArray.map((result) => (
            <ResultsCard key={result.id} result={result} />
          ))}
        </div>
      </div>
    );
  }
}

export default ResultsList;
