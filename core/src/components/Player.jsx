import { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, name);
    }
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <>
      <li className={isActive ? "space-x-4 p-3 border" : "space-x-4 p-3"}>
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
