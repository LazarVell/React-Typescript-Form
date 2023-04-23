import React, { FC, useContext, useEffect, useState } from "react";
import { UserContext } from "../Context/UserContext";

interface FormInputProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  required?: boolean;
  placeHolder?: string;
  className?: string;
}

const FormInput: FC<FormInputProps> = ({
  label,
  type = "text",
  name,
  value,
  required = false,
  placeHolder,
}) => {
  const [valueState, setValueState] = useState<string | number>("");
  const { user } = useContext(UserContext);

  const valueSwitch = (name: string) => {
    switch (name) {
      case "email":
        setValueState(user!.email);
        break;
      case "age":
        setValueState(user!.age);
        break;
      case "name":
        setValueState(user!.name);
        break;
      case "phone.ext":
        setValueState(user!.phone.ext);
        break;
      case "phone.number":
        setValueState(user!.phone.number);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (user) valueSwitch(name!);
  }, [user]);

  return (
    <div className="form-input">
      {label && <label htmlFor={name}>{label}</label>}
      <input
        type={type}
        id={name}
        name={name}
        defaultValue={valueState}
        required={required}
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormInput;
