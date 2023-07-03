import * as React from 'react';
//import styles from './WelcomeUser.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export type WelcomeUserProps = { welcomeMessage?: string; userDisplayName: string; }

const WelcomeUser: React.FC<WelcomeUserProps> = ({ welcomeMessage = "Welcome, ", userDisplayName }) => {
  // background-image: linear-gradient(to right bottom, #1c5cbf, #008cee, #00b4e1, #00d499, #22eb12);
  return <section className="text-white text-center p-4 text-xl bg-gradient-to-r from-[#F1B083] from-10% via-[#E38D99] via-30% to-[#3E3FAF]">{escape(welcomeMessage)}
    <span className="font-bold">
      {escape(userDisplayName)}
    </span>
  </section>
}

export default WelcomeUser;
