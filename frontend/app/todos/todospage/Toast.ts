// toastFunctions.js

"use client ";
import { toast } from "@/components/ui/use-toast";

export const handleToast = () => {
  toast("Event has been created", {
    description: "Sunday, December 03, 2023 at 9:00 AM",
    action: {
      label: "Undo",
      onClick: () => console.log("Undo"),
    },
  });
};
