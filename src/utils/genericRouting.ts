import Router from "next/router";

export const pushHandler = (route: string) => {
  Router.push(route);
};
