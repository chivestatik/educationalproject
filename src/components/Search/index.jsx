import React, { useContext } from 'react';
import styles from './Search.module.scss';
import icon from '../../assets/images/search.svg';
import cross from '../../assets/images/search-cross.svg';
import { SearchContext } from '../../App';

function Search() {

	const {searchValue, setSearchValue} = useContext(SearchContext)
  return (
    <div className={styles.root}>
      <img className={styles.search} src={icon} alt="search" />
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <img onClick={() => setSearchValue('')} className={styles.cross} src={cross} alt="cross" />
      )}
    </div>
  );
}

export default Search;
