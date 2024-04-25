
import React, { useState } from 'react';
import Header from './Header';
import Filter from './Filter';
import ShoppingList from './ShoppingList';
import itemData from '../data/items';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');


  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : 'light'}`}>
  
      <Header onDarkModeClick={toggleDarkMode} />
      <Filter onCategoryChange={handleCategoryChange} />
      <ShoppingList items={itemData} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;

