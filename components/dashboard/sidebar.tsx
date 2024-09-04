import Link from "next/link";
import { AddIcon, CalenderIcon, CompletedIcon, DayIcon, FilterIcon, InboxIcon, SearchIcon } from "../ui/icon";
import SidebarLink from "./sidebar-link";
const Sidebar = () => {
    return (
        <nav className="pt-8">
            <ul className="space-y-4">
                <li>
                    <Link href="/dashboard/#">
                        <div className="flex items-center justify-start group hover:text-orange-600">
                            <span>
                                <AddIcon />
                            </span>
                            <div className="text-orange-500 group-hover:text-orange-600">Add Task</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <SidebarLink href="/dashboard" label="Search" icon={<SearchIcon />} />
                </li>
                <li>
                    <SidebarLink href="/dashboard/inbox" label="Inbox" icon={<InboxIcon />} />
                </li>
                <li>
                    <SidebarLink href="/dashboard/today" label="Today" icon={<DayIcon />} />
                </li>
                <li>
                    <SidebarLink href="/dashboard/upcoming" label="Upcoming" icon={<CalenderIcon />} />
                </li>
                <li>
                    <SidebarLink href="/dashboard/filters-labels" label="Filters & Labels" icon={<FilterIcon />} />
                </li>
                <li>
                    <SidebarLink href="/dashboard/completed" label="Completed" icon={<CompletedIcon />} />
                </li>
            </ul>
        </nav>
    );
} 
export default Sidebar;