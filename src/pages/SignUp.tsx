import Page from "../atomic-design/templates/Page";
import React, { useState } from "react";
import Button from "../atomic-design/atoms/Button/Button";
import { useTransitionContext } from "../contexts/TransitionContext";
import { Text } from "../atomic-design/atoms";
import { Character } from "../atomic-design/organisms";

const signupQuestion =
  "Hello there! Let's keep track of our future progress. First, fill in the blank...";

function SignUp({ onSend }: { onSend: Function }) {
  const { startTransition } = useTransitionContext();

  function handleInputChange(keyValuePair: any) {
    console.log(keyValuePair);
  }

  return (
    <Page
      transition="animate-fade-in"
      specialcolor="bg-gradient-to-b from-sky-500 via-cyan-400 to-cyan-200"
    >
      <div className="fixed top-10">
        <Text
          text="Sign Up for the Adventure!"
          color="text-dark"
          type="heading"
          size="lg"
        />
      </div>
      <div className="flex mt-32 w-full md:w-4/5 p-5 xl:w-3/5 2xl:w-2/5 items-center justify-center">
        <div className="fixed left-0 bottom-1/3">
            <Character
              speech={signupQuestion}
              name="alberto"
              speechPosition="right"
              speechColor="bg-white"
                
            />
        </div>
        {/* 
        Use <<>> where you want an input field, and pass all fields as 'speechFields' array. 
        Each string in speechFields has to be of the form variableName:inputType
        as shown below. 
        For e.g. "email:text" means you'll have a text field with name="email"

        The name matters because on any changes in the input field handleInputChange
        will be called, and the argument passed in (keyValuePair above in declaration)
        will be of the form { email: s@s.com }
        */}

        <div className="fixed right-0 bottom-0">
          <div className="w-full h-full p-2 lg:p-10 flex flex-col justify-between items-center text-center  ">
            <Character
              speech="My first name is <<>> My last name is <<>> My email is <<>> My password will be <<>>"
              name="adriana"
              speechPosition="left"
              speechColor="bg-white"
              speechFields={["first:text","last:text","email:text", "password:password"]}
              onInputChange={handleInputChange}
            />
            <Button
              size="lg"
              variant="wooden"
              onClick={() => startTransition("/Introduction")}
            >
              <Text text="Create Account" color="text-dark" />
            </Button>
            <Button
              onClick={() => startTransition("/login")}
              variant="secondary"
              size="sm"
            >
              <Text
                text="Already have an account?"
                type="body"
                color="text-dark"
                size="sm"
              />
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default SignUp;
