import PartnerCard from "../../../shared/components/common/PartnerCard";

const AddedByPartners = ({ viewPartnerDetail, setViewPartnerDetail }) => {
  return (
    <div className="flex w-full flex-wrap gap-6">
      <PartnerCard
        profileImage={"/Images/hero-image.png"}
        tag={"Recommended"}
        shopName={"Added by partner"}
        status={"Available Now  "}
        location={"H-8 Sector, Islamabad"}
        distance={"2.8 km away"}
        services={"Leather Conditioning"}
        price={"3000"}
        rating={5}
        onCLick={() => {
          setViewPartnerDetail(true);
        }}
      />
    </div>
  );
};

export default AddedByPartners;
