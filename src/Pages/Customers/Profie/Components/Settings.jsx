import { Switch } from "antd";
import ArrowRight from "../../../../assets/svg/arrow-left.svg?react";

const Settings = () => {
  const settingsSections = [
    {
      title: "Notifications",
      items: [
        { label: "Enable Notifications", type: "switch" },
        { label: "Payment and invoice alerts", type: "switch" },
        { label: "Review reminders", type: "switch" },
        { label: "Promotions and offers", type: "switch" },
      ],
    },
    {
      title: "About",
      items: [
        { label: "Terms and Conditions" },
        { label: "Privacy Policy" },
        { label: "Company Info" },
        { label: "Refund Policy" },
      ],
    },
    {
      title: "Help and Support",
      items: [
        { label: "Help Center" },
        { label: "Report an Issue" },
        { label: "Contact Support" },
        { label: "Refund Policy" },
      ],
    },
  ];

  const renderItem = (item) => (
    <div
      key={item.label}
      className="flex items-center justify-between w-full px-4 h-10 bg-[#FAFAFA] rounded-lg cursor-pointer hover:bg-white"
    >
      <p className="text-[#262626] text-sm font-medium">{item.label}</p>
      {item.type === "switch" ? (
        <Switch />
      ) : (
        <ArrowRight className="rotate-145 text-[#262626]" />
      )}
    </div>
  );

  return (
    <div className="flex flex-col gap-8 max-w-[35%]">
      {settingsSections.map((section) => (
        <div key={section.title} className="flex flex-col gap-2">
          <h1 className="text-xs text-[#737373] font-medium">
            {section.title}
          </h1>
          {section.items.map(renderItem)}
        </div>
      ))}
    </div>
  );
};

export default Settings;
