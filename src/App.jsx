import { ConfigProvider } from "antd";
import Layout from "./Layout/Layout";
import "./index.css";
const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9A85FF",
          borderRadius: 6,
          fontFamily: "Inter, sans-serif",
        },
        components: {
          Input: {
            paddingBlock: 12,
            paddingInline: 16,
            hoverBorderColor: "#6E44FF",
            activeBorderColor: "#6E44FF",
            activeShadow: "0px 0px 0px 4px #DBEAFE",
            // inputFontSize: 16,
          },
          Button: {
            controlHeight: 44,
            borderRadius: 99,
            colorPrimaryText: "white",
            paddingInline: 16,
            // paddingBlock: 10,
            // paddingInlineSM: 12,

            defaultBg: "#F3F1FD",
            defaultColor: "#000000",
            defaultBorderColor: "transparent",

            defaultHoverBg: "#F3F1FDaa",
            defaultHoverColor: "#9A85FF",
            defaultHoverBorderColor: "transparent",

            defaultActiveBg: "#F3F1FD",
            defaultActiveColor: "#9A85FF",
            defaultActiveBorderColor: "transparent",

            colorLink: "#9A85FF",
            colorLinkHover: "#8E81F5aa",

            colorBgContainerDisabled: "#D7D7D7",
            colorTextDisabled: "#9A85FF",
          },
        },
      }}
    >
      <div className="flex w-full h-screen justify-center">
        <div className="flex w-full h-full">
          <Layout />
        </div>
      </div>
    </ConfigProvider>
  );
};

export default App;
