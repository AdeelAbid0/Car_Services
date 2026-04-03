import { useState } from "react";
import { Checkbox } from "antd";
import CommonDrawer from "../../../components/ui/Drawer";
import InputTextArea from "../../../components/ui/InputTextArea";

const RemovePartnerDrawer = ({ setRejectDrawer }) => {
  const [selectedReasons, setSelectedReasons] = useState([]);
  const reasons = [
    {
      id: 1,
      title: "Incomplete function",
      description:
        "Required details or fields are missing or not properly filled.",
    },
    {
      id: 2,
      title: "Invalid or Unclear Documents",
      description:
        "Uploaded documents are unclear, expired, or do not match the provided details.",
    },
    {
      id: 3,
      title: "Business Verification Failed",
      description:
        "We were unable to verify the business registration or workshop details.",
    },
    {
      id: 4,
      title: "Service Quality Concerns",
      description:
        "The listed services or experience do not meet platform quality standards.",
    },
    {
      id: 5,
      title: "Session Expired",
      description: "Your session has timed out. Please log in again.",
    },
    {
      id: 6,
      title: "Service Area Not Supported",
      description:
        "Service pricing is too high or does not match market expectations.",
    },
    {
      id: 7,
      title: "Pricing Misaligned with Standards",
      description: "Your changes have been saved successfully.",
    },
  ];
  console.log(selectedReasons);
  return (
    <div>
      <CommonDrawer
        title={"Reason"}
        open={true}
        onClose={() => setRejectDrawer(false)}
        footerButtonPrimaryLabel="Confirm Removal"
        footerButtonPrimaryClick={() => {}}
        childrenPadding={false}
      >
        <div className="flex flex-col gap-4 w-full relative">
          <div className="flex flex-col gap-6 absolute top-0 left-0 w-full">
            <div className="flex flex-col gap-6 w-full bg-muted-danger px-5 py-2.5">
              <p className="text-danger font-medium! text-sm leading-4.5!">
                Please select the reason for rejecting this partner. This
                message will be shared with the partner to help them improve and
                reapply.
              </p>
            </div>

            <div className="flex flex-col gap-2 px-5 mb-4">
              {reasons?.map((r) => {
                return (
                  <div className="flex justify-start items-start p-3 gap-3 bg-muted-background rounded-lg">
                    <Checkbox
                      id={r.id}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setSelectedReasons([...selectedReasons, r.id]);
                        } else {
                          setSelectedReasons(
                            selectedReasons.filter((id) => id !== r.id),
                          );
                        }
                      }}
                    />
                    <div className="flex flex-col gap-1">
                      <h1 className="text-foreground text-sm font-medium!">
                        {r.title}
                      </h1>
                      <p className="text-muted-foreground font-normal text-xs">
                        {r.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="px-5 mb-4">
              <InputTextArea
                placeholder={"Additional Notes (Optional)"}
                // prefix={<EditIcon />}
                rows={4}
                className={"bg-muted-background!"}
              />
            </div>
          </div>
        </div>
      </CommonDrawer>
    </div>
  );
};

export default RemovePartnerDrawer;
