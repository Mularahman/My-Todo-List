import { BarIcon } from "../ui/icon";

interface ToggleButtonProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const ButtonToggle = ({ toggleSidebar }: ToggleButtonProps) => {
  return (
    <button
      className=" bg-orange-500 bg-opacity-40 rounded-lg hover:bg-orange-500 "
      onClick={toggleSidebar}
    >
      <BarIcon />
    </button>
  );
};
export default ButtonToggle;
