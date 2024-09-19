import './style.css';
import { renderCategory } from "./src/services/categories.js";
import { handleGetProductsStore } from './src/views/store.js';
import { handleSearch } from './src/services/searchBar.js';


renderCategory();
handleGetProductsStore()
handleSearch()