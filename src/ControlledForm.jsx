import React, { useState } from "react";

// "Простая" форма - для каждого инпута (поля ввода) своя переменная
const ControlledForm = ({ sendFormData }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [terms, setTerms] = useState(false);
  const [coding, setCoding] = useState(false);
  const [music, setMusic] = useState(false);
  const [sports, setSports] = useState(false);

  // При отправке формы - собираем в красивый объект и отправляем
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      email,
      age,
      terms,
      interests: {
        coding,
        music,
        sports,
      },
    };
    sendFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Простая форма</h1>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          Accept Terms and Conditions
        </label>
      </div>
      <div>
        <label>Interests:</label>
        <label>
          <input
            type="checkbox"
            checked={coding}
            onChange={(e) => setCoding(e.target.checked)}
          />
          Coding
        </label>
        <label>
          <input
            type="checkbox"
            checked={music}
            onChange={(e) => setMusic(e.target.checked)}
          />
          Music
        </label>
        <label>
          <input
            type="checkbox"
            checked={sports}
            onChange={(e) => setSports(e.target.checked)}
          />
          Sports
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
