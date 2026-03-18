import InputText from "../../../ui/InputText/InputText";
import SearchIcon from "../../../assets/svg/search-normal.svg?react";
import AddIcon from "../../../assets/svg/add.svg?react";
import { lazy, Suspense, useState } from "react";
import Button from "../../../ui/Button/Button";
import AddServicesDrawer from "../../Partners/Manage_Services/Components/AddServicesDrawer";
import EditServicesDrawer from "../../Partners/Manage_Services/Components/EditServicesDrawer";
import Segment from "../../../Components/Segment/Segment";
const AddedByAdmin = lazy(
  () => import("./Components/AddedByAdmin/AddedByAdmin"),
);
const AddedByPartners = lazy(
  () => import("./Components/AddedByPartners/AddedByPartners"),
);

const Partners = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [addServiceDrawer, setAddServiceDrawer] = useState(false);
  const [editServiceDrawer, setEditServiceDrawer] = useState(false);

  const tabs = [
    {
      id: 1,
      label: "Added by Partners",
    },
    {
      id: 2,
      label: "Added by Admin",
    },
  ];

  return (
    <>
      <div className="flex w-full justify-center h-full overflow-auto">
        <div className="flex w-[72%] flex-col gap-6 h-full py-11">
          <div className="flex justify-between w-full">
            <h1 className="text-foreground text-2xl! font-bold!">Partners</h1>
            <Button
              type={"primary"}
              label={"Add New Partner"}
              prefixIcon={<AddIcon />}
              className={"rounded-lg! h-8!"}
              onClick={() => setAddServiceDrawer(true)}
            />
          </div>
          <div className="flex w-full justify-between items-end">
            <div className="flex w-fit shrink-0">
              <Segment
                tabs={tabs}
                defaultActiveTab={activeTab}
                onTabChange={setActiveTab}
              />
            </div>
            <div className="flex w-full max-w-75">
              <InputText placeholder={"Search"} prefixIcon={<SearchIcon />} />
            </div>
          </div>

          <div className="flex w-full flex-wrap gap-6">
            <Suspense
              fallback={
                <div className="w-full h-64 flex items-center justify-center mt-4">
                  Loading ...
                </div>
              }
            >
              {activeTab === 1 ? <AddedByPartners /> : <AddedByAdmin />}
            </Suspense>
          </div>
        </div>
      </div>
      <AddServicesDrawer
        addServiceDrawer={addServiceDrawer}
        setAddServiceDrawer={setAddServiceDrawer}
      />
      <EditServicesDrawer
        editServiceDrawer={editServiceDrawer}
        setEditServiceDrawer={setEditServiceDrawer}
      />
    </>
  );
};

export default Partners;
