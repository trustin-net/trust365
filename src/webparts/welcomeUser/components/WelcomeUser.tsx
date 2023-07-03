import * as React from 'react';
//import styles from './WelcomeUser.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export type WelcomeUserProps = { welcomeMessage?: string; userDisplayName: string; }

const WelcomeUser: React.FC<WelcomeUserProps> = ({ welcomeMessage = "Welcome, ", userDisplayName }) => {
  return <section className="shadow p-4 rounded border border-primary-500/50 text-xl text-center bg-primary-50">{escape(welcomeMessage)}
    <span className="font-bold text-primary-700">
      {escape(userDisplayName)}
    </span>
  </section>
}

export default WelcomeUser;
