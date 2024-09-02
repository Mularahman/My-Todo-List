import Link from "next/link";
const Navbar = () => {
    return (
        <nav className="pt-8">
            <ul className="space-y-4">
                <li>
                    <Link href="/dashboard/overview">
                        <div className="flex items-center justify-start group hover:text-orange-600">
                            <span>
                                <svg className="text-orange-500 p-2 group-hover:text-orange-600" fill="CurrentColor" width={45} height={45} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" /></svg>
                            </span>
                            <div className="text-orange-500 group-hover:text-orange-600">Add Task</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/overview">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                                <svg className="text-white p-2 group-hover:text-orange-500" fill="CurrentColor" width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                            </span>
                            <div className="text-white group-hover:text-orange-500">Search</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/overview">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                                <svg className="text-white p-2 group-hover:text-orange-500" fill="CurrentColor" width={40} height={40}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-92.1c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32L121 32zm0 64l270 0 48 192-51.2 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L73 288 121 96z" /></svg>
                            </span>
                            <div className="text-white group-hover:text-orange-500">Inbox</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/settings">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                                <svg className="text-white p-2 group-hover:text-orange-500" fill="CurrentColor" width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm80 64c-8.8 0-16 7.2-16 16l0 96c0 8.8 7.2 16 16 16l96 0c8.8 0 16-7.2 16-16l0-96c0-8.8-7.2-16-16-16l-96 0z" /></svg>
                            </span>
                            <div className="text-white group-hover:text-orange-500">Today</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/settings">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                                <svg className="text-white p-2 group-hover:text-orange-500" fill="CurrentColor" width={40} height={40}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" /></svg>
                            </span>
                            <div className="text-white group-hover:text-orange-500">Upcoming</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/settings">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                                <svg className="text-white p-2 group-hover:text-orange-500" fill="CurrentColor" width={40} height={40}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32l432 0c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9 320 448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6l0-79.1L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z" /></svg>
                            </span>
                            <div className="text-white group-hover:text-orange-500">Filters & Labels</div>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link href="/dashboard/profile">
                        <div className="flex items-center justify-start group hover:text-orange-500">
                            <span>
                                <svg className="text-white p-2 group-hover:text-orange-500" fill="CurrentColor" width={40} height={40} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" /></svg>
                        </span>
                        <div className="text-white group-hover:text-orange-500">Completed</div>
                        </div>
                    </Link>
                </li>
            </ul>
        </nav>
    );
} 
export default Navbar;