import React from "react";
import Card from "../utils/Card";
import { FaUserTie } from "react-icons/fa";
import Input from "../component/Input";
import Textarea from "../component/Textarea";
import Button from "../utils/Button";

export default function Profile() {
  return (
    <Card className={"w-[80%] mx-auto mt-16"}>
      <div className="flex justify-center">
        <FaUserTie className="text-6xl" />
      </div>
      <form action="" className="flex flex-col gap-5 mt-12">
        <Input
          type={"text"}
          placeholder={"Name"}
          name={"name"}
        />
        <Input
          type={"text"}
          placeholder={"Email"}
          name={"email"}
        />
        <Textarea />
        <Input
          type={"password"}
          placeholder={"Password"}
          name={"password"}
        />
        <Button className={'bg-blue-500 text-white text-xl'}> Update Profile </Button>
      </form>
    </Card>
  );
}
