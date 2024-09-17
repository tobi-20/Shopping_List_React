import "./styles.css";
import { useState } from "react";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(items) {
    setItems((prevItems) => [...prevItems, items]);
  }

  function handleDeleteItems(itemToDelete) {
    setItems((items) => items.filter((item) => item !== itemToDelete));
  }
  return (
    <>
      <h1>Project 4: Shopping List</h1>
      <div className="shopping-list">
        <h2>Items To Buy</h2>
        <FormAdd onAddItems={handleAddItems} />
        <Sorting items={items} onDeleteItems={handleDeleteItems} />
      </div>
    </>
  );
}

function Button({ children, onClick }) {
  return <button onClick={onClick}>{children}</button>;
}

function FormAdd({ onAddItems }) {
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;

    const newItems = description;

    onAddItems(newItems);
    setDescription("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="groceries"
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Button onClick={handleSubmit}>Add</Button>
    </form>
  );
}

function Sorting({ items, onDeleteItems }) {
  const [sortBy, setSortBy] = useState("input");

  // Sort the items based on the selected option
  let sortedItems = [...items]; // Copy the items array

  if (sortBy === "input") {
    sortedItems;
  }
  if (sortBy === "description") {
    sortedItems.sort((a, b) => {
      return a.localeCompare(b);
    });
  }

  return (
    <div>
      <ul>
        {sortedItems.map((item, index) => (
          <li key={index}>
            {item}
            <Button onClick={() => onDeleteItems(item)}>X</Button>
          </li>
        ))}
      </ul>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Sort by Input order</option>
        <option value="description">Sort by Description</option>
      </select>
    </div>
  );
}
