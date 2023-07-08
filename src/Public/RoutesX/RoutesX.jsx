import { useRoutes } from "react-router-dom";
import { Default, Magazin, Oplata } from "../Pages";

export const RoutesX = () => {
  const route = [
    {
      path: "/*",
      element: <Default />,
    },
    {
      path: "/Магазины",
      element: <Magazin />,
    },
    {
      path: "/Доставка_и_оплата",
      element: <Oplata />,
    },
  ];
  let result = useRoutes(route);
  return result;
};
