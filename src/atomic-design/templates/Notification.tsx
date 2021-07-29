import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { AnimationVideo, Image, Modal, Text } from "../atoms";
import { ModalProps } from "../atoms/Modal/Modal";

export interface NotificationProps {
  scope?: "quiz" | "speech" | "observation";
  useModal?: boolean;
}

export default function Notification({
  scope,
  useModal,
  ...rest
}: NotificationProps & ModalProps) {
  const { notifications } = useNotificationContext();

  const notification = notifications.find((not: any) => not.scope === scope);

  const classes = classNames(
    "rounded-xl px-10 py-5",
    "flex flex-col items-center justify-center",
    "text-xl overflow-hidden select-none ",
    {
      "fixed z-40 w-3/4 h-1/2 max-w-xl top-1/4 left-1/2 ": !useModal,
      "transform -translate-x-1/2 -translate-y-1/2 animate-fade-in": !useModal,
      "w-full h-full max-h-80 lg:max-h-96": useModal,
      "max-h-40":
        scope === "speech" && !notification?.image && !notification?.video,
      "max-h-96":
        scope === "speech" && (notification?.image || notification?.video),
      "bg-quiz bg-contain bg-no-repeat": scope === "quiz",
      "bg-accent-primary": scope === "speech",
    }
  );

  const content = notification && (
    <div className={classes}>
      {notification.image && (
        <Image src={notification.image} coverType="contain" />
      )}
      {notification.video && <AnimationVideo src={notification.video} />}
      {notification.text && <Text text={notification.text} />}
    </div>
  );

  return notification ? (
    useModal ? (
      <Modal {...rest}>{content} </Modal>
    ) : (
      content
    )
  ) : null;
}
