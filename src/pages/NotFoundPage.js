import React from "react";
import Page from "../atomic-design/templates/Page";
import Image from "../atomic-design/atoms/Image";
import penguinImage from "../assets/images/penguin.png";
import Text from "../atomic-design/atoms/Text";

export default function NotFoundPage() {
  return (
    <Page color="viking">
      <div className="w-40 lg:w-50">
        <Image src={penguinImage} alt="penguin" />
      </div>
      <Text title size="lg">
        under construction
      </Text>
    </Page>
  );
}
