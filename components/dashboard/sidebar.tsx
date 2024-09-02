import Link from "next/link";
import { AddIcon, CalenderIcon, CompletedIcon, DayIcon, FilterIcon, InboxIcon, SearchIcon } from "../ui/icon";
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
                    <Link href="/dashboard/#">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                                <SearchIcon />
                            </span>
                            <div className="text-white group-hover:text-orange-500">Search</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/inbox">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                               <InboxIcon />
                            </span>
                            <div className="text-white group-hover:text-orange-500">Inbox</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/today">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                               <DayIcon />
                            </span>
                            <div className="text-white group-hover:text-orange-500">Today</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/upcoming">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                                <CalenderIcon />
                            </span>
                            <div className="text-white group-hover:text-orange-500">Upcoming</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/filters-labels">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                                <FilterIcon />
                            </span>
                            <div className="text-white group-hover:text-orange-500">Filters & Labels</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/complated">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <CompletedIcon />
                        <div className="text-white group-hover:text-orange-500">Completed</div>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
} 
export default Sidebar;