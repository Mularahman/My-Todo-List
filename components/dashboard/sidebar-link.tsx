import Link from 'next/link';
import { useRouter } from "next/router";

interface SidebarLinkProps {
    href: string;
    label: string;
    icon: React.ReactNode;
}

const SidebarLink = ({ href, label, icon } : SidebarLinkProps) => {
    const router = useRouter();
    const isActive = router.pathname === href;

    return (
        <Link href={href}>
            <div
                className={`flex items-center justify-start group hover:text-orange-500 p-2 rounded ${isActive ? 'bg-orange-500 bg-opacity-50' : ''
                    }`}
            >
                <span className="mr-2 group-hover:text-orange-500">
                    {icon}
                </span>
                <div className="text-white group-hover:text-orange-500">{label}</div>
            </div>
        </Link>
    );
};

export default SidebarLink;
