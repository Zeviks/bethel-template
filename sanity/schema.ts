import { type SchemaTypeDefinition } from "sanity";

import leaders from "./schemas/leaders";
import ministries from "./schemas/ministries";
import hero from "./schemas/hero";
import about from "./schemas/about";
import yearlyTheme from "./schemas/yearlyTheme";
import ministriesPageImg from "./schemas/ministriesPageImg";
import event from "./schemas/event";
import missions from "./schemas/missions";
import leadersHeading from "./schemas/leadersHeading";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    leaders,
    ministries,
    hero,
    about,
    yearlyTheme,
    ministriesPageImg,
    event,
    missions,
    leadersHeading,
  ],
};
