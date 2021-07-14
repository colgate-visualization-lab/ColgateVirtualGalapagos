import React from "react";
import Page from "../atomic-design/templates/Page";
import Image from "../atomic-design/atoms/Image/Image";
const penguinImage = "/images/penguin.png";
import { Text } from "../atomic-design/atoms";

export default function NotFoundPage() {
  return (
    <Page color="bg-primary">
      <div className="relative flex flex-col items-center justify-center top-20">
        <div className="w-40 lg:w-50">
          <Image src={penguinImage} alt="penguin" />
        </div>
        <Text type="title" size="lg" text="page not found" color="text-dark" />
      </div>
    </Page>
  );
}
