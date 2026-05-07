import React from "react";
import { Config, Data, Metadata } from "../../types";

export const renderContext = React.createContext<{
  config: Config;
  data: Data;
  metadata: Metadata;
}>({
  config: { components: {} },
  data: { root: {}, content: [] },
  metadata: {},
});
