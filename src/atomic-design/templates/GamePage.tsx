import React from "react";
import { useHistory } from "react-router";
import Button from "../atoms/Button/Button";
import Compass from "../atoms/Compass/Compass";
import Backpack from "../organisms/Backpack/Backpack";
import Page, { PageProps } from "./Page";

export default function GamePage({ children, ...rest }: PageProps) {
  const history = useHistory();
  return (
    <Page {...rest}>
      <div className="fixed w-20 h-20 z-40 top-5 left-5">
        <Button
          variant="icon"
          aria-label="Back to menu"
          onClick={() => history.push("/main_menu")}
        >
          <Compass isAnimating={false} />
        </Button>
      </div>

      <div className="fixed w-20 h-20 z-40 top-5 right-5">
        <Backpack />
      </div>
      {children}
    </Page>
  );
}
