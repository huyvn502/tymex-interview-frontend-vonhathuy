import { MockMethod } from "vite-plugin-mock";
import themes from "./entities/themes";
import tiers from "./entities/tiers";
import products from "./entities/products";
import products_highlight from "./entities/products_highlight";

const mockData: MockMethod[] = [
  {
    url: "/api/themes",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: themes,
      };
    },
  },
  {
    url: "/api/tiers",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: tiers,
      };
    },
  },
  {
    url: "/api/products",
    method: "get",
    response: () => {
      return {
        code: 200,
        data: products,
      };
    },
  },
  {
    url: "/api/products/highlight",
    method: "get",

    response: () => {
      return {
        code: 200,
        data: products_highlight,
      };
    },
  },
];

export default mockData;
