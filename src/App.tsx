import './App.css';
import Controller from "./pages/controller/Controller";
import { Amplify } from 'aws-amplify';
import awsmobile from "./aws-exports";
import { AWSIoTProvider } from '@aws-amplify/pubsub';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsmobile);

// Plug AWS IoT Provider into Amplify
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: 'us-west-2',
    aws_pubsub_endpoint:
      'wss://att0irule14xs-ats.iot.us-west-2.amazonaws.com/mqtt'
  })
);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) =>
        <Controller signOut={signOut} user={user} />
      }
    </Authenticator>
  )
}

export default App;
