import React from "react";
import { useHistory } from "react-router";
import { StaticAnimal, Text } from "../atomic-design/atoms";
import Button from "../atomic-design/atoms/Button/Button";
import { LavaButton, PenguinButton } from "../atomic-design/molecules";
import Page from "../atomic-design/templates/Page";
import { useTransitionContext } from "../contexts/TransitionContext";
import useCanvas from "../test/useCanvas";
import { drawCanvasBackgroundImage } from "../utils";

// [TODO] gotta refactor the canvas animation and background if we plan to use
// the same cartoony island anywhere else
export default function WelcomeMenu() {
  const { startTransition } = useTransitionContext();
  const history = useHistory();

  const backgroundRef = useCanvas(
    (ctx: CanvasRenderingContext2D) =>
      drawCanvasBackgroundImage(ctx, "/images/island_cartoon.jpg"),
    { isFullScreen: true }
  );
  const cloudImage = new window.Image();
  cloudImage.src = "/images/cloud.png";

  const cloudImage2 = new window.Image();
  cloudImage2.src = "/images/cloud2.png";

  const skyRef = useCanvas(
    (ctx: CanvasRenderingContext2D, frameCount: number) => {
      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      if (cloudImage.complete && cloudImage.naturalHeight !== 0) {
        ctx.drawImage(
          cloudImage,
          (frameCount % (ctx.canvas.width + cloudImage.width)) -
            cloudImage.width,
          10
        );
        ctx.drawImage(
          cloudImage,
          (((frameCount % ctx.canvas.width) + 0.9 * ctx.canvas.width) %
            (ctx.canvas.width + cloudImage.width)) -
            cloudImage.width,
          100
        );
      }
      if (cloudImage2.complete && cloudImage2.naturalHeight !== 0) {
        ctx.drawImage(
          cloudImage2,
          (((frameCount % ctx.canvas.width) + 0.3 * ctx.canvas.width) %
            (ctx.canvas.width + cloudImage2.width)) -
            cloudImage2.width,
          50
        );
        ctx.drawImage(
          cloudImage2,
          (((frameCount % ctx.canvas.width) + 0.7 * ctx.canvas.width) %
            (ctx.canvas.width + cloudImage2.width)) -
            cloudImage2.width,
          50
        );
      }
    },
    { isFullScreen: true, animate: true }
  );
  return (
    <Page transition="animate-fade-in" color="bg-primary">
      <canvas
        ref={backgroundRef}
        className="h-full w-full fixed left-0 top-0"
      />
      <canvas ref={skyRef} className="fixed w-full h-full left-0 top-10 z-20" />

      <div className="relative z-40">
        <Text
          text="virtual galapagos"
          color="text-white"
          type="title"
          size="lg"
        />
      </div>

      <div className="flex mt-32 w-full md:w-4/5 p-5 xl:w-3/5 2xl:w-2/5 items-center justify-center">
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
          className="h-3/4 w-2 bg-accent-primary ml-5 mr-16 z-40"
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
        <StaticAnimal
          species="turtle"
          className="fixed w-60 right-0 h-auto top-1/2 transform -translate-y-1/2 translate-x-1/2 -rotate-30 -scale-x-100"
        />
        <StaticAnimal
          species="sea lion"
          className="fixed w-60 left-1/3 h-auto transform translate-y-1/2 bottom-0 "
        />
      </div>
    </Page>
  );
}
