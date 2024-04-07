import { useState } from "react";

export default function Player({ initialName, symbol }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <li className="space-x-4">
        <span>
          {isEditing ? (
            <input
              type="text"
              value={name}
              className="w-32 text-center rounded bg-gray-500"
              onChange={handleChange}
              required
            />
          ) : (
            name
          )}
        </span>

        <span>{symbol}</span>

        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
