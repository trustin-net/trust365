import * as React from 'react';
//import styles from './WelcomeUser.module.scss';
//import { escape } from '@microsoft/sp-lodash-subset';

export type WelcomeUserProps = { userDisplayName: string; }

const WelcomeUser: React.FC<WelcomeUserProps> = ({ userDisplayName }) => {
  return <section>Welcome {userDisplayName}</section>
}

export default WelcomeUser;
