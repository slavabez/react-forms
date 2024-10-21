import React from "react";
// Импорт из внешней библиотеки
import { useForm } from "react-hook-form";

const HookForm = ({ sendFormData }) => {
  // Достаём нужные функции
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    sendFormData(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Хук форма</h1>

      <div>
        <label>Name:</label>
        <input {...register("name", { required: true })} />
        {errors.name && <span>Name is required</span>}
      </div>
      <div>
        <label>Email:</label>
        <input {...register("email", { required: true })} type="email" />
        {errors.email && <span>Email is required</span>}
      </div>
      <div>
        <label>Age:</label>
        <input {...register("age", { required: true })} type="number" />
        {errors.age && <span>Age is required</span>}
      </div>
      <div>
        <label>
          <input {...register("terms")} type="checkbox" />
          Accept Terms and Conditions
        </label>
      </div>
      <div>
        <label>Interests:</label>
        <label>
          <input {...register("interests.coding")} type="checkbox" />
          Coding
        </label>
        <label>
          <input {...register("interests.music")} type="checkbox" />
          Music
        </label>
        <label>
          <input {...register("interests.sports")} type="checkbox" />
          Sports
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default HookForm;
