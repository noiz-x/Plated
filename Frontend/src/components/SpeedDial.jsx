import {
    IconButton,
    SpeedDial,
    SpeedDialHandler,
    SpeedDialContent,
    SpeedDialAction,
    Typography,
  } from "@material-tailwind/react";
  import {
    PlusIcon,
  } from "@heroicons/react/24/outline";
import { CalendarDaysIcon, DocumentPlusIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// still a lil problem on z-index of speed dial
// also way to darken background when speed dial is hovered
   
function SpeedDialComp() {
  const [isOpen, setIsOpen] = useState(false);
  const labelProps = {
    variant: "small",
    color: "blue-gray",
    className:
      "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal text-white",
  };

  const navigate = useNavigate();
  
  return (
    <>
      {isOpen && (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30"
            onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className="fixed bottom-5 right-5 z-40"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <SpeedDial open={isOpen}>
          <SpeedDialHandler>
            <IconButton size="lg" className="rounded-full bg-blue-800">
              <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45 text-white" />
            </IconButton>
          </SpeedDialHandler>
          <SpeedDialContent>
            <SpeedDialAction className="relative bg-blue-800 hover:bg-blue-900" onClick={() => navigate("/recipes/new")}>
              <DocumentPlusIcon className="h-5 w-5 text-white" />
              <Typography {...labelProps}>Recipe</Typography>
            </SpeedDialAction>
            <SpeedDialAction className="relative bg-blue-800 hover:bg-blue-900">
              <CalendarDaysIcon className="h-5 w-5 text-white" />
              <Typography {...labelProps}>Plan</Typography>
            </SpeedDialAction>
            <SpeedDialAction className="relative bg-blue-800 hover:bg-blue-900">
              <ShoppingCartIcon className="h-5 w-5 text-white" />
              <Typography {...labelProps}>Grocery</Typography>
            </SpeedDialAction>
          </SpeedDialContent>
        </SpeedDial>
      </div>
    </>
  );
}

export default SpeedDialComp;