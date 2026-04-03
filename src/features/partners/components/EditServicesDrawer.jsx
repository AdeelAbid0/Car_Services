import CommonDrawer from "../../../shared/components/ui/Drawer";
import CommonSelect from "../../../shared/components/ui/Select";
import InputText from "../../../shared/components/ui/InputText";

const EditServicesDrawer = ({ editServiceDrawer, setEditServiceDrawer }) => {
  return (
    <div className="w-full">
      <CommonDrawer
        open={editServiceDrawer}
        onClose={() => setEditServiceDrawer(false)}
        title={"Edit Service"}
        footerButtonPrimaryLabel={"Save changes"}
      >
        <div className="flex flex-col gap-3">
          <div className="flex w-full ">
            <CommonSelect
              label={"Services"}
              defaultValue={[]}
              placeholder={"Select service"}
              mode="multiple"
            />
          </div>
          <div className="flex w-full ">
            <CommonSelect
              label={"Category"}
              defaultValue={[]}
              placeholder={"Select category"}
            />
          </div>
          <div className="flex w-full ">
            <CommonSelect
              label={"Duration"}
              defaultValue={[]}
              placeholder={"Select service"}
            />
          </div>
          <div className="flex w-full ">
            <InputText label={"Price"} placeholder={"Select service"} />
          </div>
          <div className="flex w-full ">
            <CommonSelect
              label={"Status"}
              defaultValue={[]}
              placeholder={"Select service"}
            />
          </div>
        </div>
      </CommonDrawer>
    </div>
  );
};

export default EditServicesDrawer;
