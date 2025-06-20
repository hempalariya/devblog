import React, { useState } from "react";
import Container from "../components/Container";
import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import FormCard from "../components/FormCard";

export default function SingnIn() {
  const [cred, setCred] = useState({mailOrNum:'', password: ''})

  async function handleLoginUser(){

  }


  return (
    <Container>
      <FormCard>
        <h2 className="text-center text-2xl font-bold text-blue-500 mb-3">Login</h2>
        <form action="" onSubmit={handleLoginUser} className="flex flex-col gap-3">
          <Input type={'input'} placeholder={'Email/Password'}/>
          <Input type ={'password'} placeholder={'Password'}/>
          <Button>Sign In</Button>
        </form>
        <p className="text-center mt-3">Don't have an account <Link to = '/signup' className="">Sinup</Link></p>
      </FormCard>
    </Container>
  );
}
