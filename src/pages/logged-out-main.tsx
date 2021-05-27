import React from "react";
import { Footer } from "../components/layout/footer/footer";
import { Header } from "../components/layout/header/header";
import { CustomerShowcase } from "../components/main/customer-showcase";
import { PeachBackground } from "../components/main/peach-background";
import { TeamChannels } from "../components/main/team-channels";

export const LoggedOutMainPage = () => {
  return (
    <div className="bg-skinColor">
      <Header isLoggedIn={false} />
      <main>
        <section className="pt-12">
          <PeachBackground loggedIn={false} />
        </section>
        <section>
          <TeamChannels />
        </section>
        <section className="bg-white">
          <CustomerShowcase />
        </section>
      </main>
      <Footer />
    </div>
  );
};
