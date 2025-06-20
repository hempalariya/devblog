import React, { useState } from "react";
import Container from "../components/Container";
import FormCard from "../components/FormCard";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    let { name, value } = e.target;
    if(name === 'number') value = Number(value)
    setInfo((pre) => ({ ...pre, [name]: value }));
    console.log(info);
  }

  async function handleAddUser(e) {
    e.preventDefault();
    if (info.length < 2)
      throw new Error("Name should be at least two characters long");

    if (info.password !== info.confirmPassword)
      throw new Error("Password and confirmPassword should be same");
    if (info.password.length < 4 || info.password.length > 15)
      throw new Error("Password must be 4 to 15 characters long.");

    try {
      const response = await fetch(`http://localhost:3000/api/user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      });

      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <Container>
      <FormCard>
        <h2 className="text-center text-2xl font-bold text-blue-500 mb-3">
          Signup
        </h2>
        <form
          action=""
          onSubmit={handleAddUser}
          className="flex flex-col gap-4"
        >
          <Input
            type={"text"}
            name={"name"}
            value={info.name}
            placeholder={"Name"}
            required={true}
            onChange={handleChange}
          />
          <Input
            type={"email"}
            name={"email"}
            value={info.email}
            placeholder={"Email"}
            required={true}
            onChange={handleChange}
          />
          <Input
            type={"text"}
            name={"number"}
            value={info.number}
            placeholder={"Number"}
            required={true}
            onChange={handleChange}
          />
          <Input
            type={"password"}
            name={"password"}
            value={info.password}
            placeholder={"Password"}
            required={true}
            onChange={handleChange}
          />
          <Input
            type={"password"}
            name={"confirmPassword"}
            value={info.confirmPassword}
            placeholder={"Confirm Password"}
            required={true}
            onChange={handleChange}
          />
          <Button> Sign Up </Button>
        </form>
        <p className="text-center mt-3">
          Already have an account{" "}
          <Link to="/signin" className="">
            SingIN
          </Link>
        </p>
      </FormCard>
    </Container>
  );
}
