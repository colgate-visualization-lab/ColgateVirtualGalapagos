import React from "react";
import Page from "../atomic-design/templates/Page";
import Image from "../atomic-design/atoms/Image/Image";
import penguinImage from "../assets/images/penguin.png";
import { Text } from "../atomic-design/atoms";

export default function NotFoundPage() {
  return (
    <Page color="bg-primary">
      <div className="w-40 lg:w-50">
        <Image src={penguinImage} alt="penguin" />
      </div>
      <Text
        type="title"
        size="lg"
        value="under construction"
        color="text-dark"
      />
    </Page>
  );
}
