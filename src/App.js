import { useState } from "react";
import ControlledForm from "./ControlledForm";
import ControlledFormBetter from "./ControlledFormBetter";
import HookForm from "./HookForm";
import "./styles.css";

export default function App() {
  // Переменная для смены варианта формы
  const [variant, setVariant] = useState("simple");
  // Переменная для хранения данных формы
  const [submittedValues, setSubmittedValues] = useState(null);

  // Установить вариант формы
  function handleVariantChange(e) {
    setVariant(e.target.value);
  }

  // Очистить данные
  function clearValues() {
    setSubmittedValues(null);
  }

  // Как отрисовать разный компонент в зависимости от условия
  function renderFormVariant() {
    if (variant === "simple") {
      return <ControlledForm sendFormData={setSubmittedValues} />;
    }
    if (variant === "advanced") {
      return <ControlledFormBetter sendFormData={setSubmittedValues} />;
    }
    if (variant === "hook-form") {
      return <HookForm sendFormData={setSubmittedValues} />;
    }
    // На всякий случай созвращаю пустоту
    return null;
  }

  return (
    <div className="App">
      <select onChange={handleVariantChange} value={variant}>
        <option value="simple">Simple</option>
        <option value="advanced">Advanced</option>
        <option value="hook-form">Hook Form</option>
      </select>
      {renderFormVariant()}
      {submittedValues && (
        <>
          <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
          <button onClick={clearValues}>Clear</button>
        </>
      )}
    </div>
  );
}
