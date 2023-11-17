import { AmplifyUser } from '@aws-amplify/ui';
import { UseAuthenticator } from '@aws-amplify/ui-react-core';

type SignOut = UseAuthenticator['signOut'];

export interface SignoutProps {
  signOut?: SignOut,
  user?: AmplifyUser,
}

export const Signout = (props: SignoutProps) => {
  return (
    <div className="flex width-full place-items-right flex-grow">
      <p className="flex-grow my-auto">Logged in as: {props.user?.username}</p>
      <button onClick={() => props.signOut?.()}>Sign Out</button>
    </div>
  );
}

export default Signout;
