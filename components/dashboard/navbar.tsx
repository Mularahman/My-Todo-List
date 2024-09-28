import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Columns2 } from "lucide-react";
import { Button } from "../ui/button";
import Sidebar from "./sidebar";
import ViewNav from "./view";

const Navbar = () => {
  return (
    <header className="flex h-14 items-center gap-4 justify-between bg-gray-800 px-4 lg:h-[60px] lg:px-6 w-full">
      <div className="w-full">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="default"
              size="icon"
              className="bg-gray-800 shrink-0 hover:bg-gray-800  md:hidden"
            >
              <span className="sr-only">Toggle navigation menu</span>
              <span className="text-white hover:text-orange-500 text-2xl ">
                <Columns2 />
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="flex flex-col bg-gray-900 text-white md:hidden"
          >
            <nav className="grid gap-4 text-lg font-medium ">
              <Sidebar />
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <div className="w-full flex-1">
        <ViewNav />
      </div>
    </header>
  );
};

export default Navbar;
