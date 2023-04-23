import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Components/Form";
import FormInput from "./Components/FormInput";

// describe("Form component", () => {
//   it("submits form with correct values", async () => {
//     const initialValues = {
//       email: "",
//       age: 0,
//       name: "",
//       phone: {
//         ext: "",
//         number: "",
//       },
//     };
//     const onSubmitMock = jest.fn();

//     const { getByLabelText, getByText } = render(
//       <Form initialValues={initialValues} onSubmit={onSubmitMock}>
//         <FormInput
//           type="email"
//           required
//           name="email"
//           placeHolder="your@email.com"
//           label="E-mail"
//         />
//         <FormInput label="Age" type="number" name="age" />
//         <FormInput label="Name" type="text" required name="name" />
//         <FormInput label="phone-ext" type="text" name="phone.ext" />
//         <FormInput label="phone-number" type="text" name="phone.number" />
//         <FormInput type="submit" value="Submit" />
//       </Form>
//     );

//     const emailInput = getByLabelText("E-mail");
//     const ageInput = getByLabelText("Age");
//     const nameInput = getByLabelText("Name");
//     const extInput = getByLabelText("phone-ext");
//     const numberInput = getByLabelText("phone-number");
//     const submitButton = getByText("Submit");

//     fireEvent.change(emailInput, { target: { value: "test@example.com" } });
//     fireEvent.change(ageInput, { target: { value: "30" } });
//     fireEvent.change(nameInput, { target: { value: "John Doe" } });
//     fireEvent.change(extInput, { target: { value: "12345" } });
//     fireEvent.change(numberInput, { target: { value: "555-123-4567" } });

//     fireEvent.click(submitButton);

//     expect(onSubmitMock).toHaveBeenCalledWith({
//       email: "test@example.com",
//       age: 30,
//       name: "John Doe",
//       ['phone.ext']: "12345",
//       ['phone.number']: "555-123-4567",
//     });
//   });
// });

describe("FormInput component", () => {
  it("renders label and input with correct attributes", () => {
    const { getByLabelText } = render(
      <FormInput type="text" name="myField" label="My Field" required />
    );

    const input = getByLabelText("My Field");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "myField");
    expect(input).toBeRequired();
  });
});
