import { CardImage } from "./CardImage";
import { PrimaryButton } from "../PrimaryButton";
import { CardPublishDate } from "./CardPublishDate";
import { CardContent } from "./CardContent";
import { UserSign } from "../UserSign";

export const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
        padding: "20px",
        width: "90%",
        maxWidth: "320px",
        borderRadius: "12px",
        
        backgroundColor: "hsl(0, 0%, 100%)",
        gap: "10px",
      }}
    >
      <CardImage />
      <PrimaryButton />
      <CardPublishDate />
      <CardContent />
      <UserSign />
    </div>
  );
};
