import {useState} from 'react'
import {AddCategory,GiftGrid} from './components';

export const GiftApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    const onAddCategory = (newCategory) =>{
      if(categories.includes(newCategory)) return;
        setCategories([newCategory,...categories]);
    }

  return (
    <>
        <h1>GiftApp</h1>

        <AddCategory newCategory={(e)=>onAddCategory(e)}/>
        
       
            {
            categories.map((category) =>  (
            <GiftGrid key={category} category={category}/>
            ))
            }
          
       
    </>
  )
}

