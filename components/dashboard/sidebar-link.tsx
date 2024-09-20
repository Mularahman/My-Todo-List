"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SidebarLink = ({ href, label, icon }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <div
        className={`flex items-center justify-start group hover:text-orange-500 p-1 rounded-xl ${
          isActive
            ? "bg-orange-500 bg-opacity-50 group hover:text-gray-300 hover:bg-opacity-50 hover:bg-gray-300"
            : ""
        }`}
      >
        <span className="mr-2 group-hover:text-orange-500">{icon}</span>
        <div className="text-white group-hover:text-orange-500">{label}</div>
      </div>
    </Link>
  );
};

export default SidebarLink;
