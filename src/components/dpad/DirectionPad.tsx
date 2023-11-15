import "./direction_pad.css"
import Arrow from "../arrow/Arrow";
import { useEffect } from "react";
import { Auth } from "aws-amplify";

export const DirectionPad = () => {
  useEffect(() => {
    Auth.currentCredentials().then((info) => {
      const cognitoIdentityId = info.identityId;
      console.log(cognitoIdentityId);
    });
  });
  return (
    <div className="arrow-container">
      <Arrow direction="up" id="arrow-up" />
      <Arrow direction="left" id="arrow-left" />
      <Arrow direction="right" id="arrow-right" />
      <Arrow direction="down" id="arrow-down" />
    </div>
  );
}

export default DirectionPad;
