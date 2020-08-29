import Header from "@/layouts/header";
import SideNavLinks from "@/layouts/side-nav-links";
import Footer from "@/layouts/footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow w-full max-w-screen-xl mx-auto px-6 pt-16">
          <div className="grid grid-cols-2">
            <div className="bg-gray-300">
              <SideNavLinks />
            </div>
            <div className="bg-blue-300">{children}</div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
