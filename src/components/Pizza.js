import React from "react";

function Pizza({pizza, onEdit}) {
  const {topping, size, vegetarian} = pizza

  function handleEdit(){
    onEdit(pizza)
    //console.log("click")
  }

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={handleEdit}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
