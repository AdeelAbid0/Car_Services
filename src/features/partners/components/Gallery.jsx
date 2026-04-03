import UploadImage from "../../../shared/components/common/UploadImage";
import UploadIcon from "../../../assets/svg/upload-cloud.svg?react";
import InputTextArea from "../../../shared/components/ui/InputTextArea";
import Button from "../../../shared/components/ui/Button";
import EditIcon from "../../../assets/svg/edit-2.svg?react";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-4 max-w-[50%]">
      <div className="flex flex-col gap-2 mt-8">
        <UploadImage
          svg={<UploadIcon />}
          title={"Upload"}
          description={"Images must be in JPEG or PNG - 10mb max"}
          onFileSelect={""}
        />
        <InputTextArea placeholder={"description"} rows={5} />
        <Button
          type={"primary"}
          label={"Edit"}
          prefixIcon={<EditIcon className="stroke-white!" />}
          className={"mt-4!"}
        />
      </div>
    </div>
  );
};

export default Gallery;
