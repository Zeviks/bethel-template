import { type SchemaTypeDefinition } from "sanity";

import leaders from "./schemas/leaders";
import ministries from "./schemas/ministries";
import hero from "./schemas/hero";
import about from "./schemas/about";
import yearlyTheme from "./schemas/yearlyTheme";
import ministriesPageImg from "./schemas/ministriesPageImg";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [leaders, ministries, hero, about, yearlyTheme, ministriesPageImg],
};
