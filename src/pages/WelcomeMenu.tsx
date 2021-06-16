import React from "react";
import { useHistory } from "react-router";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import { LavaButton, PenguinButton } from "../atomic-design/molecules";
import Page from "../atomic-design/templates/Page";
import { useTransitionContext } from "../contexts/TransitionContext";

export default function MainMenu() {
  const { startTransition } = useTransitionContext();
  const history = useHistory();
  return (
    <Page transition="animate-fade-in" color="bg-primary">
      <Text
        text="virtual galapagos"
        color="text-white"
        type="title"
        size="lg"
      />
      <div className="flex mt-16 w-full md:w-4/5 p-5 xl:w-3/5 2xl:w-2/5 items-center justify-center">
        <div className="flex flex-col h-full justify-between">
          <PenguinButton
            className="my-5 xl:my-8"
            size="lg"
            onClick={() => history.push(`/login`)}
          >
            <Text text="Login" color="text-white" />
          </PenguinButton>
          <Button
            className="my-5 xl:my-8"
            size="lg"
            onClick={() => history.push(`/sign_up`)}
          >
            <Text text="Sign Up" color="text-white" />
          </Button>
          <LavaButton
            className="my-5 xl:my-8"
            size="lg"
            onClick={() => startTransition(`/introduction`)}
          >
            <Text text="Continue As Guest" color="text-white" />
          </LavaButton>
        </div>
        <span
          aria-hidden={true}
          className="h-11/12 w-2 bg-accent-primary ml-5 mr-16"
        />
        <div className="bg-white relative rounded-xl border-8 border-accent-primary h-10/12 w-full max-w-sm lg:max-w-md">
          <StaticAnimal
            species="booby head"
            className="absolute top-0 w-20 h-auto left-1/2 transform -translate-x-1/2 -translate-y-18"
          />
          <div className="w-full h-full p-2 lg:p-10 text-center">
            <Text
              color="text-secondary-dark"
              text="Welcome to the Virtual Galapagos! To save your progress please sign
            up! To continue where you left off, please sign in!"
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
