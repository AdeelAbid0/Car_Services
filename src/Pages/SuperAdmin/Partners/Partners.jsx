import InputText from "../../../ui/InputText";
import SearchIcon from "../../../assets/svg/search-normal.svg?react";
import AddIcon from "../../../assets/svg/add.svg?react";
import { lazy, Suspense, useState } from "react";
import Button from "../../../ui/Button";
import Segment from "../../../components/Segment";
import AddPartnerDrawer from "./Components/AddPartnerDrawer/AddPartnerDrawer";
import PartnerDetails from "./Components/PartnerDetails/PartnerDetails";
import RemovePartnerDrawer from "./Components/RemovePartnerDrawer/RemovePartnerDrawer";
const AddedByAdmin = lazy(
  () => import("./Components/AddedByAdmin/AddedByAdmin"),
);
const AddedByPartners = lazy(
  () => import("./Components/AddedByPartners/AddedByPartners"),
);

const Partners = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [addPartnerDrawer, setAddPartnerDrawer] = useState(false);
  const [viewPartnerDetail, setViewPartnerDetail] = useState(false);
  const [rejectDrawer, setRejectDrawer] = useState(false);

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
              onClick={() => setAddPartnerDrawer(true)}
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
              {activeTab === 1 ? (
                <AddedByPartners
                  viewPartnerDetail={viewPartnerDetail}
                  setViewPartnerDetail={setViewPartnerDetail}
                />
              ) : (
                <AddedByAdmin
                  viewPartnerDetail={viewPartnerDetail}
                  setViewPartnerDetail={setViewPartnerDetail}
                />
              )}
            </Suspense>
          </div>
        </div>
      </div>
      <AddPartnerDrawer
        addPartnerDrawer={addPartnerDrawer}
        setAddPartnerDrawer={setAddPartnerDrawer}
      />
      {viewPartnerDetail && (
        <PartnerDetails
          viewPartnerDetail={viewPartnerDetail}
          setViewPartnerDetail={setViewPartnerDetail}
          rejectDrawer={rejectDrawer}
          setRejectDrawer={setRejectDrawer}
        />
      )}
      {rejectDrawer && (
        <RemovePartnerDrawer setRejectDrawer={setRejectDrawer} />
      )}
    </>
  );
};

export default Partners;
