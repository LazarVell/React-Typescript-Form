import React, { useState } from "react";
import { render, fireEvent } from "@testing-library/react";
import Form from "./Components/Form";
import FormInput from "./Components/FormInput";

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
