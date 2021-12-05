import React, {useState, useEffect} from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {
  const [pizzas, setPizzas] = useState([])
  const [editPizza, setEditPizza] = useState(null)

  useEffect(()=>{
    fetch("http://localhost:3001/pizzas")
    .then(res => res.json())
    .then(data => setPizzas(data))
  },[])

  function handleChangeForm(name, value) {
    setEditPizza({
      ...editPizza,
      [name]: value,
    });
  }

  function handleEditPizza(editPizza){
    const updatePizza = pizzas.map((pizza)=> pizza.id === editPizza.id? editPizza: pizza);
    setEditPizza(updatePizza)
    setPizzas(updatePizza)
  }

  return (
    <>
      <Header />
      <PizzaForm 
        pizza = {editPizza} 
        onEditForm = {handleEditPizza} 
        onChangeInput={handleChangeForm} 
      />
      <PizzaList pizzas = {pizzas} onEdit = {setEditPizza} />
    </>
  );
}

export default App;
