import React, { useState } from "react";

const CreateForm = ({ onCreate }) => {
  const [entityType, setEntityType] = useState("user");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleCreate = () => {
    if (inputValue.trim() !== "") {
      onCreate({ type: entityType, value: inputValue });
      setInputValue("");
    }
  };

  return (
    <div>
      <label>
        Entity Type:
        <select value={entityType} onChange={(e) => setEntityType(e.target.value)}>
          <option value="user">User</option>
          <option value="policy">Policy</option>
          <option value="claim">Claim</option>
        </select>
      </label>
      <label>
        Value:
        <input type="text" value={inputValue} onChange={handleInputChange} />
      </label>
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateForm;
