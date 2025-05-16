import React, { useState } from "react";
import { z } from "zod";
import Input from "../component/Input";
import Card from "../utils/Card";
import Button from "../utils/Button";
import { Link, useNavigate } from "react-router-dom";
import { showTost } from "../helpers/showToast";


const signUpSchema = z.object({
  name: z.string().min(2, "Name should be at least two characters long"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
});

export default function SignUp() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate()

  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const result = signUpSchema.safeParse(inputs);

    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setErrors(fieldErrors);
    } else {
      if (inputs.password !== inputs.confirmPassword) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          confirmPassword: "Passwords do not match",
        }));
        return;
      }
      setErrors({});

      try {
        const response = await fetch(
          `http://localhost:5000/api/auth/register`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(inputs),
          }
        );
        
        
        
        if (!response.ok) {
          const errorData = await response.json()
          showTost('error', errorData.message)
          throw new Error(errorData.error || "Registration failed")
        }
        
        const data = await response.json();
        
        showTost('success', data.message)
        

        navigate("/signin");
        setInputs({ name: "", email: "", password: "", confirmPassword: "" });
      } catch (error) {
        showTost('error', error.message)
      }
    }
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-[500px]">
        <h1 className="text-center text-2xl mb-5">Create your account</h1>
        <Card>
          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <Input
              type={"text"}
              placeholder={"Name"}
              name={"name"}
              value={inputs.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
            <Input
              type={"text"}
              placeholder={"Email Id"}
              name={"email"}
              value={inputs.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
            <Input
              type={"password"}
              placeholder={"Password"}
              name={"password"}
              value={inputs.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
            <Input
              type={"password"}
              placeholder={"confirm password"}
              name={"confirmPassword"}
              value={inputs.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}

            <div className="flex flex-col gap-2 items-center">
              <Button className={"bg-blue-500 text-white w-full"}>
                Sign Up
              </Button>
              <p>
                Already have an account{" "}
                <Link to={"/signin"} className="text-blue-500 underline">
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}
