import Page from "../atomic-design/templates/Page";
import React, { useState } from "react";
import Button from "../atomic-design/atoms/Button/Button";
import { useTransitionContext } from "../contexts/TransitionContext";
import { Text } from "../atomic-design/atoms";
import { Character } from "../atomic-design/organisms";
import TextBox from "../atomic-design/atoms/TextBox/TextBox";

const Form = () => (
  <div className="w-full">
    <div className="flex w-full">
      <Text className="w-1/2 text-left" color="text-dark" text="First name:" />
      <TextBox className="w-1/2" />
    </div>
    <div className="flex">
      <Text className="w-6/12 text-left" color="text-dark" text="Last name:" />
      <TextBox className="w-6/12" />
    </div>
    <div className="flex">
      <Text className="w-6/12 text-left" color="text-dark" text="Email:" />
      <TextBox className="w-6/12" />
    </div>
    <div className="flex">
      <Text className="w-6/12 text-left" color="text-dark" text="Password:" />
      <TextBox className="w-6/12" />
    </div>
  </div>
);

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
            speech="Hello there! Let's keep track of our future progress. First, fill in the blanks..."
            name="alberto"
            speechPosition="right"
            speechColor="bg-white"
          />
        </div>
        <div className="fixed right-0 bottom-0">
          <div className="w-full h-full p-2 lg:p-10 flex flex-col justify-between items-center text-center  ">
            <Character
              speech={<Form />}
              name="adriana"
              speechPosition="left"
              speechColor="bg-white"
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
