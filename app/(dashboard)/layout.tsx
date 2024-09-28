import Navbar from "@/components/dashboard/navbar";
import Sidebar from "@/components/dashboard/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard My Todo List",
  description: "My Todo List",
  icons: {
    icon: "/app/favicon.ico",
  },
};

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <div
        id="dashboard-layout"
        className="grid min-h-screen w-full md:grid-cols-[260px_1fr] lg:grid-cols-[320px_1fr] bg-gray-900"
      >
        <div className="hidden  md:block p-8">
          <Sidebar />
        </div>

        <div className="flex flex-col">
          <Navbar />

          <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-gray-800">
            {children}
          </main>

          {/* <Toaster /> */}
        </div>
      </div>
    </>
  );
};

export default Layout;
