import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";
import { ROUTES } from "../../../../constants/routes";

const FinalScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-full justify-center items-center bg-white">
      <div className="flex flex-col gap-4 w-full h-full items-center justify-center max-w-119">
        <img
          src="/Images/success-registration.png"
          alt="Success Registration"
        />
        <h1 className="text-2xl mt-5! max-w-75 text-center font-bold! text-foreground">
          Registration Submitted Successfully
        </h1>
        <p className="text-center text-sm leading-6 mt-4! text-muted-foreground">
          Your service station registration has been sent to our admin team for
          review. You will receive an email once your account is approved.
        </p>
        <Button
          type={"primary"}
          onClick={() => {
            navigate(ROUTES.HOME);
          }}
          size="lg"
          label="Go to Home screen"
        />
      </div>
    </div>
  );
};

export default FinalScreen;
