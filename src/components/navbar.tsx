export const Navbar = () => {
  return (
    <header className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 md:h-16 px-6 md:px-20 py-8 md:py-0 border-b-neutral-200 border-b-[1px] w-full bg-neutral-100 z-50">
      <img
        src="/roteirizando-logo.svg"
        alt="Roteirizando"
        className="h-[28px]"
      />
      <nav className="w-full md:w-auto">
        <ul className="flex flex-row items-center justify-around gap-6 md:gap-10 w-full">
          <Li>
            <Anchor href="/">Home</Anchor>
          </Li>
          <Li>
            <Anchor href="/#itineraries">Roteiros</Anchor>
          </Li>
          <Li>
            <Anchor href="/#newsletter">Newsletter</Anchor>
          </Li>
        </ul>
      </nav>
    </header>
  );
};

const Li = (props: { children: React.ReactNode }) => {
  return (
    <li className="flex-1 flex-wrap basis-28 flex items-center justify-center">
      {props.children}
    </li>
  );
};

const Anchor = (props: { children: React.ReactNode; href: string }) => {
  return (
    <a
      className="hover:opacity-60 transition-opacity duration-200 text-sm font-sans font-medium text-neutral-700"
      href={props.href}
    >
      {props.children}
    </a>
  );
};
