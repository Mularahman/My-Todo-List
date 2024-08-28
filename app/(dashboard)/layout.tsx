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
    return <main id="auth-layout">{children}</main>;
};

export default Layout;
