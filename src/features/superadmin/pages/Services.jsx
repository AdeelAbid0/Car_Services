import InputText from "../../../shared/components/ui/InputText";
import SearchIcon from "../../../assets/svg/search-normal.svg?react";
import MoreIcon from "../../../assets/svg/more.svg?react";
import AddIcon from "../../../assets/svg/add.svg?react";
import DummyIcon from "../../../assets/svg/dummy.svg?react";
import EditIcon from "../../../assets/svg/edit-2.svg?react";
import DeleteIcon from "../../../assets/svg/delete.svg?react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../shared/components/ui/Button";
import { Dropdown } from "antd";
import Segment from "../../../shared/components/common/Segment";
import AddServicesDrawer from "../../partners/components/AddServicesDrawer";
import EditServicesDrawer from "../../partners/components/EditServicesDrawer";

const Services = () => {
  const navigate = useNavigate();
  const [serviceCategory, setServiceCategory] = useState(1);
  const [selectedService, setSelectedService] = useState();
  const [servicesData, setServicesData] = useState([]);
  const [activeTab, setActiveTab] = useState("admin");
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [addServiceDrawer, setAddServiceDrawer] = useState(false);
  const [editServiceDrawer, setEditServiceDrawer] = useState(false);
  const carServices = [
    {
      id: 1,
      name: "All",
      subServices: [
        { id: 1, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 2, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 3, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 4, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 5, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 6, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 7, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 8, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 9, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 10, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 11, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 12, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 13, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 14, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 15, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 16, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 17, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 18, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 19, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 20, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 21, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 22, name: "Tire Rotation", icon: <DummyIcon /> }
      ]
    },
    {
      id: 2,
      name: "Tire Rotation",
      subServices: [
        { id: 1, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 2, name: "Tire Rotation", icon: <DummyIcon /> },
        { id: 3, name: "Tire Rotation", icon: <DummyIcon /> }
      ]
    },
    {
      id: 3,
      name: "Brake Service",
      subServices: [
        { id: 1, name: "Brake Service", icon: <DummyIcon /> },
        { id: 2, name: "Brake Service", icon: <DummyIcon /> },
        { id: 3, name: "Brake Service", icon: <DummyIcon /> }
      ]
    },
    {
      id: 4,
      name: "Engine Diagnostics",
      subServices: [
        { id: 1, name: "Engine Diagnostics", icon: <DummyIcon /> },
        { id: 2, name: "Engine Diagnostics", icon: <DummyIcon /> },
        { id: 3, name: "Engine Diagnostics", icon: <DummyIcon /> }
      ]
    },
    {
      id: 5,
      name: "AC Service",
      subServices: [
        { id: 1, name: "AC Service", icon: <DummyIcon /> },
        { id: 2, name: "AC Service", icon: <DummyIcon /> },
        { id: 3, name: "AC Service", icon: <DummyIcon /> }
      ]
    },
    {
      id: 6,
      name: "AC Service",
      subServices: [
        { id: 1, name: "AC Service", icon: <DummyIcon /> },
        { id: 2, name: "AC Service", icon: <DummyIcon /> },
        { id: 3, name: "AC Service", icon: <DummyIcon /> }
      ]
    },
    {
      id: 7,
      name: "AC Service",
      subServices: [
        { id: 1, name: "AC Service", icon: <DummyIcon /> },
        { id: 2, name: "AC Service", icon: <DummyIcon /> },
        { id: 3, name: "AC Service", icon: <DummyIcon /> }
      ]
    }
  ];

  const items = [
    {
      key: "1",
      label: (
        <div className="flex w-full gap-3 justify-between items-center">
          <p className="text-xs font-normal! text-foreground">Edit</p>
          <EditIcon />
        </div>
      )
    },
    {
      key: "2",
      label: (
        <div className="flex w-full gap-3 justify-between items-center">
          <p className="text-xs font-normal! text-foreground">Delete</p>
          <DeleteIcon />
        </div>
      )
    }
  ];

  useEffect(() => {
    if (serviceCategory) {
      const service = carServices.find(s => s.id === serviceCategory);
      setServicesData(service?.subServices || []);
    }
  }, [serviceCategory]);
  const handleMenuClick = (e, serviceId) => {
    console.log("Menu item clicked:", e.key, "for service:", serviceId);
    setOpenDropdownId(null);
    if (e.key === "1") {
      setEditServiceDrawer(true);
    } else if (e.key === "2") {
      console.log("Delete service:", serviceId);
    }
  };

  const handleDropdownOpenChange = (open, serviceId) => {
    if (open) {
      setOpenDropdownId(serviceId);
    } else {
      setOpenDropdownId(null);
    }
  };

  const tabs = [
    {
      id: "admin",
      label: "Admin",
      component: <></>
    },
    {
      id: "partner",
      label: "Partners",
      component: <></>
    }
  ];

  return (
    <>
      <div className="flex w-full justify-center h-full overflow-auto">
        <div className="flex w-[72%] flex-col gap-6 h-full py-11">
          <div className="flex justify-between w-full">
            <h1 className="text-foreground text-2xl! font-bold!">Services</h1>

            <Button
              type={"primary"}
              label={"Add New Service"}
              prefixIcon={<AddIcon />}
              className={"rounded-lg! h-8!"}
              onClick={() => setAddServiceDrawer(true)}
            />
          </div>

          <div className="flex w-full justify-between">
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

          <div className="flex w-fit gap-6 border-b border-border">
            {carServices.map(service => (
              <div
                key={service.id}
                className={`pb-2  ${
                  serviceCategory === service?.id
                    ? "border-b-[1.5px] border-primary"
                    : ""
                }`}
                onClick={() => {
                  setServiceCategory(service?.id);
                }}
              >
                <h2 className="cursor-pointer text-muted-foreground text-sm font-medium">
                  {service.name}
                </h2>
              </div>
            ))}
          </div>

          <div className="flex w-full flex-wrap gap-6">
            {servicesData.map(service => (
              <div
                key={service.id}
                className={`relative flex flex-col gap-2 justify-center items-center rounded-xl w-38 h-30 cursor-pointer bg-muted-background hover:bg-white ${
                  selectedService === service?.id
                    ? "bg-white border border-primary"
                    : ""
                }`}
                onClick={() => {
                  setSelectedService(service?.id);
                }}
              >
                {service.icon}

                <p className="cursor-pointer text-muted-foreground text-sm font-medium leading-4">
                  {service.name}
                </p>

                <div className="absolute right-1 top-2">
                  <Dropdown
                    menu={{
                      items,

                      onClick: e => handleMenuClick(e, service.id)
                    }}
                    placement="bottomRight"
                    trigger={["click"]}
                    open={openDropdownId === service.id}
                    onOpenChange={open =>
                      handleDropdownOpenChange(open, service.id)
                    }
                    overlayStyle={{ zIndex: 1050 }}
                  >
                    <div
                      className="cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors"
                      onClick={e => {
                        e.stopPropagation();

                        handleDropdownOpenChange(
                          !(openDropdownId === service.id),

                          service.id
                        );
                      }}
                    >
                      <MoreIcon className="rotate-90" />
                    </div>
                  </Dropdown>
                </div>
              </div>
            ))}
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

export default Services;
