import React, { useState } from 'react';

function Categories() {
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  console.log(activeCategory);
  return (
    <div className="categories">
      <ul>
        {categories.map((category, index) => (
          <li
            onClick={() => setActiveCategory(index)}
            className={activeCategory === index ? 'active' : ''}
            key={index}>
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
