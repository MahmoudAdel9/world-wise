import { useNavigate } from "react-router-dom";
import Button from "./Button";

function BackButton() {
  const navigate = useNavigate();
  return (
    <Button
      type="back"
      onClick={(e) => {
        navigate(-1);
        e.preventDefault();
      }}
    >
      &larr; Back
    </Button>
  );
}

export default BackButton;
