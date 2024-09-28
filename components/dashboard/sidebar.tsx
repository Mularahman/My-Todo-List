import Link from "next/link";
import {
  AddIcon,
  CalenderIcon,
  CompletedIcon,
  DayIcon,
  FilterIcon,
  InboxIcon,
  NotificationIcon,
  SearchIcon,
} from "../ui/icon";
import SidebarLink from "./sidebar-link";
import AvatarSidebar from "./avatar";
const Sidebar = () => {
  return (
    <nav className="">
      <div className="flex px-2 items-center justify-between mb-6  ">
        <div className="flex items-center justify-center gap-4">
          <AvatarSidebar />
          <span className="text-white">Nama</span>
        </div>

        <div className="cursor-pointer">
          <NotificationIcon />
        </div>
      </div>
      <ul className="space-y-4">
        <li>
          <Link href="/dashboard/#">
            <div className="flex items-center justify-start group hover:text-orange-600">
              <span>
                <AddIcon />
              </span>
              <div className="text-orange-500 group-hover:text-orange-600">
                Add Task
              </div>
            </div>
          </Link>
        </li>
        <li>
          <SidebarLink href="/dashboard" label="Search" icon={<SearchIcon />} />
        </li>
        <li>
          <SidebarLink href="/inbox" label="Inbox" icon={<InboxIcon />} />
        </li>
        <li>
          <SidebarLink href="/today" label="Today" icon={<DayIcon />} />
        </li>
        <li>
          <SidebarLink
            href="/upcoming"
            label="Upcoming"
            icon={<CalenderIcon />}
          />
        </li>
        <li>
          <SidebarLink
            href="/filters-labels"
            label="Filters & Labels"
            icon={<FilterIcon />}
          />
        </li>
        <li>
          <SidebarLink
            href="/completed"
            label="Completed"
            icon={<CompletedIcon />}
          />
        </li>
      </ul>
    </nav>
  );
};
export default Sidebar;
