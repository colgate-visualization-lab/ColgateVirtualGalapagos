import React from "react";
import { useHistory } from "react-router";
import Button from "../atomic-design/atoms/Button/Button";
import Page from "../atomic-design/templates/Page";
import { toTitleCase } from "../utils";

const menuOptions = ["login", "sign_up", "continue_as_guest"];

export default function MainMenu() {
  const history = useHistory();
  return (
    <Page transition="animate-fade-in" color="bg-primary-dark">
      <div className="flex flex-col h-52 justify-between">
        {menuOptions.map((option) => (
          <Button
            variant="secondary"
            onClick={() => history.push(`/${option}`)}
          >
            {toTitleCase(option, "_", " ")}
          </Button>
        ))}
      </div>
    </Page>
  );
}
