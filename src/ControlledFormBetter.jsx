import React, { useState } from "react";

// "Продвинутая" форма - используем одну умную переменную и функцию
const ControlledFormBetter = ({ sendFormData }) => {
  // Одна "мега" переменная для всей формы
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    age: "",
    terms: false,
    interests: {
      coding: false,
      music: false,
      sports: false,
    },
  });

  // Одна умная функция, которая находит что изменилось и меняет конкретное поле
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name in formData.interests) {
        setFormData((prev) => ({
          ...prev,
          interests: {
            ...prev.interests,
            [name]: checked,
          },
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: checked }));
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Продвинутая форма</h1>

      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Last name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />
          Accept Terms and Conditions
        </label>
      </div>
      <div>
        <label>Interests:</label>
        <label>
          <input
            type="checkbox"
            name="coding"
            checked={formData.interests.coding}
            onChange={handleChange}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            name="music"
            checked={formData.interests.music}
            onChange={handleChange}
          />
          Music
        </label>
        <label>
          <input
            type="checkbox"
            name="sports"
            checked={formData.interests.sports}
            onChange={handleChange}
          />
          Sports
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledFormBetter;
