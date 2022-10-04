import {useState} from 'react'

export const AddCategory = ({newCategory}) => {

const [inputvalue, setInputvalue] = useState('')
console.log(inputvalue)
const onInputChange = ({target}) => {
    setInputvalue(target.value)
}

const onSubmit = (e) => {
    e.preventDefault();
    if(inputvalue.trim().length <= 1) return;
    //addCategory(categories => [inputvalue,...categories])
    newCategory(inputvalue.trim())
    setInputvalue('')
}
  return (
    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="buscar gifts"
        value={inputvalue}
        onChange={onInputChange}
        />
    </form>
  )
}

