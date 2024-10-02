import { ReactNode } from "react";
import { Layout, Menu } from "antd";

const { Header, Content, Footer } = Layout;

const items = [
  { key: "home", label: "HOME" },
  { key: "about-us", label: "ABOUT US" },
  { key: "our-team", label: "OUR TEAM" },
  { key: "marketplace", label: "MARKETPLACE" },
  { key: "roadmap", label: "ROADMAP" },
  { key: "whitepaper", label: "WHITEPAPER" },
];

interface IProps {
  children?: ReactNode;
}

const BasicLayout = (props: IProps) => {
  const { children } = props;

  return (
    <Layout
      style={{
        minHeight: "100vh",
        backgroundColor: `red`,
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          background: "transparent",
        }}
      >
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>{children}</Content>
      <Footer style={{ textAlign: "center" }}>
        ©2023 Tyme - Edit. All Rights reserved. 
      </Footer>
    </Layout>
  );
};

export default BasicLayout;
