import React from 'react';
import { TSearchResults } from '../../services/types';
import ResultsCard from './ResultsCard';
import './SearchResults.scss';

type TProps = {
  searchText: string;
  searchResults: TSearchResults;
};

export default function SearchResults({ searchText, searchResults }: TProps) {
  return (
    <div>
      <h4>
        {searchText ? `Search results for '${searchText}'` : 'No filter'} (found:{' '}
        {searchResults.info.count}):
      </h4>
      <div className="items__big_grid" data-testid="results__list">
        {searchResults.results.map((result) => (
          <ResultsCard key={result.id} searchResult={result} />
        ))}
      </div>
    </div>
  );
}
