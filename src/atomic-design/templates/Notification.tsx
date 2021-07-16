import React, { useEffect, useState } from "react";
import { useNotificationContext } from "../../contexts/NotificationContext";

export interface NotificationProps {
  scope?: "quiz" | "speech";
}

export default function Notification({ scope }: NotificationProps) {
  const { notifications } = useNotificationContext();

  const notification = notifications.find((not: any) => not.scope === scope);

  return notification ? (
    <div className="fixed text-xl px-10 py-5 select-none flex items-center justify-center w-3/4 h-1/2 transform rounded-xl -translate-x-1/2 -translate-y-1/2 z-40 max-w-xl max-h-80 bg-quiz bg-contain bg-no-repeat top-1/4 left-1/2 animate-fade-in">
      {notification?.content}
    </div>
  ) : null;
}
