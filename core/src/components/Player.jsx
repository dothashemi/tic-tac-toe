import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
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
