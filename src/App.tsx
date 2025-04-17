import { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([
    {
      id: 0,
      name: "Item Name",
      description: "more details here, maybe a couple lines",
      price: 0,
    },
  ]);

  const remove = (itemId: number) => {
    setItems(items.filter((item) => item.id !== itemId));
  };

  return (
    <>
      {items.map((item) => (
        <div style={{ display: "flex", gap: "50px" }}>
          <div>{item.name}</div>
          <div>{item.description}</div>
          <div>{item.price}</div>
          <button onClick={() => remove(item.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}

export default App;
