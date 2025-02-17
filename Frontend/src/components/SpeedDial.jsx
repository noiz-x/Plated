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
    HomeIcon,
    CogIcon,
    Square3Stack3DIcon,
  } from "@heroicons/react/24/outline";
import { CalendarDaysIcon, DocumentPlusIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
   
function SpeedDialComp() {
    const labelProps = {
      variant: "small",
      color: "blue-gray",
      className:
        "absolute top-2/4 -left-2/4 -translate-y-2/4 -translate-x-3/4 font-normal",
    };
   
    return (
        <div className="absolute bottom-5 right-5">
          <SpeedDial>
            <SpeedDialHandler>
              <IconButton size="lg" className="rounded-full bg-blue-800">
                <PlusIcon className="h-5 w-5 transition-transform group-hover:rotate-45 text-white" />
              </IconButton>
            </SpeedDialHandler>
            <SpeedDialContent>
              <SpeedDialAction className="relative bg-blue-800 hover:bg-blue-900">
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
    );
  }

export default SpeedDialComp;