import React, { useState } from "react";
import Form from "./Components/Form";
import FormInput from "./Components/FormInput";

export const App = () => {
  // Example
  const [userInfo, setUserInfo] = useState({
    email: "example@alea.com",
    age: 30,
    name: "John Doe",
    phone: {
      ext: "00387",
      number: "65/123-456",
    },
  });

  return (
    <div className="form-container">
      <Form initialValues={userInfo} onSubmit={setUserInfo}>
        <FormInput
          type="email"
          required
          name="email"
          placeHolder="your@email.com"
          label="E-mail"
        />
        <FormInput label="Age" type="number" name="age" />
        <FormInput label="Name" type="text" required name="name" />
        <FormInput label="phone-ext" type="text" name="phone.ext" />
        <FormInput label="phone-number" type="text" name="phone.number" />
        <FormInput type="submit" value="Submit" />
      </Form>
    </div>
  );
};

export default App;
