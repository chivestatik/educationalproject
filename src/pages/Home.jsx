import React, { useState, useEffect } from 'react';
import { Categories, Sort, PizzaBlock, Skeleton } from '../components';

function Home() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://6458061e0c15cb1482169417.mockapi.io/items')
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setItems(json);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </>
  );
}

export default Home;
