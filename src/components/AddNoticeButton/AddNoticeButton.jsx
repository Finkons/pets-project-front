import { useState } from "react";
import { notifyWarning } from "helpers/toastNotifications";
import { Div, Label, Button } from "./AddNoticeButton.styled";

export default function AddNoticeButton() {
  const [expanded, setExpanded] = useState(false);
  const [isLoggedIn] = useState(false);

  const handleModalToggle = () => {
    if (!isLoggedIn) return notifyWarning("You need to log in to perform this action");
    setExpanded(!expanded);
  };
  return (
    <Div>
      <Label>Add pet</Label>
      <Button type="button" onClick={handleModalToggle}>
        +
      </Button>
    </Div>
  );
}
