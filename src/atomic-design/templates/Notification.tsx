import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useNotificationContext } from "../../contexts/NotificationContext";
import { AnimationVideo, Image, Text } from "../atoms";

export interface NotificationProps {
  scope?: "quiz" | "speech";
}

export default function Notification({ scope }: NotificationProps) {
  const { notifications } = useNotificationContext();

  const notification = notifications.find((not: any) => not.scope === scope);

  const classes = classNames(
    "rounded-xl px-10 py-5",
    "transform -translate-x-1/2 -translate-y-1/2",
    "fixed z-40 w-3/4 h-1/2 max-w-xl top-1/4 left-1/2",
    "flex flex-col items-center justify-center",
    "text-xl overflow-hidden select-none animate-fade-in",
    {
      "max-h-40":
        scope === "speech" && !notification?.image && !notification?.video,
      "max-h-96":
        scope === "speech" && (notification?.image || notification?.video),
      "bg-quiz bg-contain bg-no-repeat": scope === "quiz",
      "bg-accent-primary": scope === "speech",
    }
  );

  return notification ? (
    <div className={classes}>
      {notification.image && (
        <Image src={notification.image} coverType="contain" />
      )}
      {notification.video && <AnimationVideo src={notification.video} />}
      {notification.text && <Text text={notification.text} />}
    </div>
  ) : null;
}
