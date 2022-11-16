import { useState } from "react";
import { notifyWarning } from "helpers/toastNotifications";
import { Div, Label, Button } from "./AddNoticeButton.styled";
import authSelectors from "redux/auth/authSelectors";
import { useSelector } from "react-redux";

export default function AddNoticeButton() {
  const [expanded, setExpanded] = useState(false);

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  const handleModalToggle = () => {
    if (!isLoggedIn) return notifyWarning("You need to log in to perform this action");
    setExpanded(!expanded);
    console.log("log in");
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
