import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import Card from "../utils/Card";
import Input from "../component/Input";
import Button from "../utils/Button";
import { FaGoogle } from "react-icons/fa";
import { showTost } from "../helpers/showToast";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/user/user.slice";


const signInSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export default function SignIn() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [creds, setCreds] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setCreds({ ...creds, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = signInSchema.safeParse(creds);

    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors);
    } else {
      setErrors({});

      try{
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
          method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: 'include',
            body: JSON.stringify(creds)
        })

        if(!response.ok){
          const errorData = await response.json()
          showTost('error', errorData.error)
          return
        }
        const data = await response.json()
        showTost('success', data.message)

        dispatch(setUser(data.user))
        navigate('/')
      }catch(error){
        showTost('error', error.message)
      }
    
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[500px]">
        <h1 className="text-center text-2xl mb-5">Existing User Login Here</h1>
        <Link className="flex gap-2 items-center justify-center">
          <FaGoogle />
          <span>Continue with google</span>
        </Link>
        <p className="text-center mb-5 mt-3">or</p>
        <Card>
          <form
            onSubmit={handleSubmit}
            action="#"
            className="flex flex-col gap-4"
          >
            <Input
              type={"text"}
              placeholder={"Email Id"}
              onChange={handleChange}
              value={creds.email}
              name={"email"}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <Input
              type={"password"}
              placeholder={"Password"}
              value={creds.password}
              name={"password"}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <div className="flex flex-col gap-2 items-center">
              <Button className={"bg-blue-500 text-white w-full"}>
                Sign In
              </Button>
              <p>
                Don't have and account{" "}
                <Link to={"/signup"} className="text-blue-500 underline">
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
