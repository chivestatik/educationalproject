import React, { useState, useEffect, useContext } from 'react';
import { Categories, Sort, PizzaBlock, Skeleton, Pagination } from '../components';
import { SearchContext } from '../App';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({ name: 'популярности', sortProperty: 'rating' });
  const [sortOrder, setSortOrder] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

	const {searchValue} = useContext(SearchContext)

  useEffect(() => {
    const search = searchValue ? `&search=${searchValue}` : '';
    setIsLoading(true);
    fetch(
      `https://6458061e0c15cb1482169417.mockapi.io/items?${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortProperty}&order=${
        sortOrder ? 'asc' : 'desc'
      }${search}&page=${currentPage}&limit=4`,
    )
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setItems(json);
      });
  }, [categoryId, sortType, sortOrder, searchValue, currentPage]);

  return (
    <>
      <div className="content__top">
        <Categories value={categoryId} onClickCategory={(i) => setCategoryId(i)} />
        <Sort
          value={sortType}
          onChangeSort={(obj) => setSortType(obj)}
          onChangeSortOrder={(value) => setSortOrder(value)}
          sortOrder={sortOrder}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(4)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination onChangePage={number => setCurrentPage(number)} />
    </>
  );
}

export default Home;
