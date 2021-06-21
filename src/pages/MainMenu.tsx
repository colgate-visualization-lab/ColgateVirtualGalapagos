import React from "react";
import Button from "../atomic-design/atoms/Button/Button";
import Page from "../atomic-design/templates/Page";
import { useTransitionContext } from "../contexts/TransitionContext";
import { toTitleCase } from "../utils";

const menuOptions = ["tutorial", "introduction", "mysteries"];

export default function MainMenu() {
  const { startTransition } = useTransitionContext();
  return (
    <Page transition="animate-fade-in" color="bg-primary-dark">
      <div className="flex flex-col h-52 justify-between">
        {menuOptions.map((option) => (
          <Button
            key={option}
            variant="primary"
            size="lg"
            label={option}
            onClick={() => startTransition(`/${option}`)}
          >
            {toTitleCase(option, "_", " ")}
          </Button>
        ))}
      </div>
    </Page>
  );
}
