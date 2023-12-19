import { Marketing } from "(@components/Marketing/utils)";

export const getComponentById = (id) => {
  const item = Marketing.find((item) => item.id === id);
  return item;
};
