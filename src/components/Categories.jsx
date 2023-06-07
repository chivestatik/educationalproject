import React from 'react';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Categories({ value, onClickCategory }) {
  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => (
          <li
            onClick={() => onClickCategory(index)}
            className={value === index ? 'active' : ''}
            key={index}>
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
