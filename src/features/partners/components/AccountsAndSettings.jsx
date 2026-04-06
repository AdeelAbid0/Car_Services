import { Switch } from "antd";
import ArrowRight from "../../../assets/svg/arrow-left.svg?react";

const AccountsAndSettings = () => {
  const settingsSections = [
    {
      title: "Notifications",
      items: [
        { label: "Enable Notifications", type: "switch" },
        { label: "Payment and invoice alerts", type: "switch" },
        { label: "Review reminders", type: "switch" },
        { label: "Promotions and offers", type: "switch" }
      ]
    },
    {
      title: "Account",
      items: [
        { label: "Deactivate account", type: "text" },
        { label: "Contact support", type: "arrow" }
      ]
    }
  ];

  const renderItem = item => {
    const isDeactivateAccount = item.label.toLowerCase().includes("deactivate");

    return (
      <div
        key={item.label}
        className="flex items-center justify-between w-full px-4 h-10 rounded-lg cursor-pointer bg-muted-background hover:bg-white"
        onClick={() => {
          if (isDeactivateAccount) {
            console.log("Deactivate account clicked");
          }
        }}
      >
        <p
          className={`text-sm font-medium ${
            isDeactivateAccount ? "text-danger" : "text-foreground"
          }`}
        >
          {item.label}
        </p>

        {item.type === "switch" ? (
          <Switch />
        ) : item.type === "arrow" ? (
          <ArrowRight className="rotate-145 text-foreground" />
        ) : (
          ""
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8 max-w-[35%]">
      {settingsSections.map(section => (
        <div key={section.title} className="flex flex-col gap-2">
          <h1 className="text-xs text-muted-foreground font-medium">
            {section.title}
          </h1>
          {section.items.map(renderItem)}
        </div>
      ))}
    </div>
  );
};

export default AccountsAndSettings;
