import Header from "@/layouts/header";
import SideNav from "@/layouts/side-nav";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="w-full max-w-screen-xl mx-auto px-6 pt-16">
        <div className="flex">
          <SideNav />
        </div>
        {children}
      </div>
    </div>
  );
}
