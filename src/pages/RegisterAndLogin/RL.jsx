import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

const RegisterLogin = () => {
  const [isRegister, setIsRegister] = useState(true);

  const handleToggleForm = () => {
    setIsRegister((prevIsRegister) => !prevIsRegister);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="container mx-auto mb-10 mt-10" data-aos="zoom-in-down"  >
      <h1 className="text-3xl font-semibold mb-4">
        {isRegister ? "Register" : "Login"}
      </h1>
      <div className="bg-white p-5 rounded-lg">
        <form onSubmit={handleSubmit}>
          {isRegister && (
            <div className="mb-4">
              <Input type="text" color="blue" label="Full Name" required />
            </div>
          )}
          <div className="mb-4">
            <Input type="email" color="blue" label="Email" required />
          </div>
          <div className="mb-4">
            <Input type="password" color="blue" required label="Password" />
          </div>
          <Button
            type="submit"
            color="blue"
            buttonType="filled"
            size="lg"
            rounded={false}
            block
          >
            {isRegister ? "Register" : "Login"}
          </Button>
        </form>
        <p className="mt-4">
          {isRegister
            ? "Already have an account? "
            : "Don't have an account yet? "}
          <Button
            color="blue"
            buttonType="link"
            size="lg"
            onClick={handleToggleForm}
          >
            {isRegister ? "Login" : "Register"}
          </Button>
        </p>
      </div>
    </div>
  );
};

export default RegisterLogin;
