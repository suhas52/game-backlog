import React, { useState, useEffect } from 'react'
import Gamelist from './componenets/gamelist'
import AddNewGameModel from './componenets/newGameModal'
import CategoriesList from './componenets/categorieslist'



function App() {

  const [categoryId, setCategoryId] = useState('');
  
  return (<>
     {console.log(categoryId)}
    <AddNewGameModel />
    <CategoriesList setFormData={setCategoryId}/>
    <Gamelist categoryId={categoryId}/>
    </>
  )
}

export default App