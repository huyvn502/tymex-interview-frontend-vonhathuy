import theme from "@/themes";
import { ConfigProvider } from "antd";
import { PropsWithChildren } from "react";

export const ColorContextProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
