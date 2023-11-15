import { AmplifyUser } from "@aws-amplify/ui";
import { UseAuthenticator } from "@aws-amplify/ui-react-core";
import { useEffect } from 'react';
import { PubSub } from 'aws-amplify';

import { Signout } from "../../components/signout/Signout";
import { DirectionPad } from "../../components/dpad/DirectionPad";

type SignOut = UseAuthenticator["signOut"];

export interface ControllerProps {
  signOut?: SignOut;
  user?: AmplifyUser;
}

const Controller = (props: ControllerProps) => {
  useEffect(() => {
    PubSub.subscribe("i-will-never-publish-on-this-topic").subscribe({
      next: () => {},
      error: () => {},
    });
  }, []);

  return (
    <>
      <Signout signOut={props.signOut} user={props.user} />
      <DirectionPad />
    </>
  );
};

export default Controller;
