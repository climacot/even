import { Logo } from "@/components/logo";

const Header = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-8">
      <Logo />
      <div>{children}</div>
    </div>
  );
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <div className="overflow-hidden">{children}</div>;
};

const Footer = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="p-8 h-screen grid gap-6"
      style={{ gridTemplateRows: "auto 1fr auto" }}
    >
      {children}
    </div>
  );
};

Layout.Header = Header;
Layout.Body = Body;
Layout.Footer = Footer;

export { Layout };
