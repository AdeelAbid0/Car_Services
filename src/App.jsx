import { ConfigProvider, Spin } from "antd";
import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import "./index.css";

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-screen">
    <Spin size="large" />
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#9A85FF",
            borderRadius: 6,
            fontFamily: "DM Sans, sans-serif",
          },
          components: {
            Input: {
              // paddingBlock: 12,
              paddingInline: 16,
              borderRadius: 12,
              controlHeight: 44,
              hoverBorderColor: "#6E44FF",
              activeBorderColor: "#6E44FF",
              activeShadow: "0px 0px 0px 4px #DBEAFE",
              colorError: "#EF4444",
              colorErrorBg: "#EF4444",
              colorErrorBorder: "#EF4444  ",
              colorErrorText: "#EF4444  ",
              errorActiveShadow: "0px 0px 0px 4px #EF444422",
              errorHoverShadow: "0px 0px 0px 4px black",
            },
            Button: {
              controlHeight: 44,
              controlHeightSM: 40,
              borderRadius: 99,
              borderRadiusSM: 99,
              colorPrimaryText: "white",
              paddingInline: 16,
              paddingInlineSM: 16,
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
              colorLinkActive: "#9A85FF",
              colorBgContainerDisabled: "#D7D7D7",
              colorTextDisabled: "#9A85FF",
            },
            Select: {
              paddingBlock: 5,
              paddingInline: 16,
              borderRadius: 12,
              colorText: "#262626",
              colorBorder: "#E5E5E5",
              hoverBorderColor: "#6E44FF",
              activeBorderColor: "#6E44FF",
              controlHeight: 44,
              activeShadow: "0px 0px 0px 4px #DBEAFE",
              colorTextPlaceholder: "#878787",
              multipleItemHeight: 32,
              multipleItemBg: "#F3F1FD",
              multipleItemBorderColor: "#F3F1FD",
            },

            Table: {
              headerBg: "#FAFAFA",
              headerColor: "#878787",
              headerBorderRadius: 12,
              borderColor: "#F5F5F5",
              colorBgContainer: "#FAFAFA",
              rowHoverBg: "#F3F3F3",
              colorText: "#262626",
              fontSize: 14,
            },
          },
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          <div className="flex w-full h-screen justify-center">
            <div className="flex w-full h-full">
              <Layout />
            </div>
          </div>
        </Suspense>
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
