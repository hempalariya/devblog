import React, { useState } from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import FormCard from "../components/FormCard";
import { useToast } from "../store/ToastContext";

export default function SingnIn() {
  const [cred, setCred] = useState({ userId: "", password: "" });
  const { showToast } = useToast();

  function handleChange(e) {
    let { name, value } = e.target;
    setCred((pre) => ({ ...pre, [name]: value }));
    console.log(cred)
  }

  async function handleLoginUser(e) {
    e.preventDefault();
    try{

      const response = await fetch(`http://localhost:3000/api/user/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cred),
        });
      
        const data = await response.json()
        if(!response.ok) showToast(data.error, "Failed")
        
        showToast(data.message)
    }catch(error){
      showToast(error.message, 'Failed')
    }
  }

  return (
    <Container>
      <FormCard>
        <h2 className="text-center text-2xl font-bold text-blue-500 mb-3">
          Login
        </h2>
        <form
          action=""
          onSubmit={handleLoginUser}
          className="flex flex-col gap-3"
        >
          <Input
            type={"input"}
            placeholder={"Email/Password"}
            name={"userId"}
            required={true}
            onChange={handleChange}
            value={cred.userId}
          />
          <Input
            type={"password"}
            placeholder={"Password"}
            name={"password"}
            required={true}
            onChange={handleChange}
            value={cred.password}
          />
          <Button>Sign In</Button>
        </form>
        <p className="text-center mt-3">
          Don't have an account{" "}
          <Link to="/signup" className="">
            Sinup
          </Link>
        </p>
      </FormCard>
    </Container>
  );
}
