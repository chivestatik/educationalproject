import React, { useEffect, useState } from 'react';
import { Header, Categories, Sort, PizzaBlock, Skeleton } from './components';
// import pizzas from './assets/pizzas.json';

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/00bb6d3e-8c6b-4716-8d66-63d29b51f791')
      .then((res) => res.json())
      .then((json) => {
        setIsLoading(false);
        setItems(json);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
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
        </div>
      </div>
    </div>
  );
}

export default App;
