import { PeachBackground } from "./main/peach-background";


export const LoggedOutMainSection = () => {
  return (
    <main>
      <section className="pt-12">
        <PeachBackground loggedIn={false} />
      </section>
    </main>
  );
};
