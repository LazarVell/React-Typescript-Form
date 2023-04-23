import React, { FC, ReactNode, useContext, useEffect, useState } from "react";
import { UserContext, UserInfo } from "../Context/UserContext";

interface FormProps {
  initialValues: UserInfo;
  onSubmit: (values: UserInfo) => void;
  children: ReactNode;
  className?: string;
}

type valuesFormatterType = (arg1: {
  [k: string]: FormDataEntryValue;
}) => UserInfo;

const valuesFormatter: valuesFormatterType = (values) => {
  return {
    email: values.email as string,
    age: parseInt(values.age as string),
    name: values.name as string,
    phone: {
      ext: values["phone.ext"] as string,
      number: values["phone.number"] as string,
    },
  };
};

const Form: FC<FormProps> = ({ initialValues, children }) => {
  const { user, updateUser } = useContext(UserContext);
  //initLoading prevents the console log on default value setting
  const [initLoading, setInitLoading] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const values = Object.fromEntries(formData.entries());
    updateUser(valuesFormatter(values));
    setInitLoading(true);
  };

  useEffect(() => {
    updateUser(initialValues);
  }, []);

  //takes care of async call
  useEffect(() => {
    if (user && initLoading) console.log(user);
  }, [user]);

  return (
    <form onSubmit={handleSubmit} className="form">
      {children}
    </form>
  );
};

export default Form;
