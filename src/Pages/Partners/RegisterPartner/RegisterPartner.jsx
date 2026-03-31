import { lazy, Suspense, useState } from "react";
import AuthCardPartner from "../../../components/AuthCardPartner";
import PartnerIcon from "../../../assets/svg/partner.svg?react";
import UserIcon from "../../../assets/svg/user.svg?react";
import EmailIcon from "../../../assets/svg/mail-placeholder.svg?react";
import LocationPlaceholder from "../../../assets/svg/location-placeholder.svg?react";
import EditIcon from "../../../assets/svg/edit.svg?react";
import UploadIcon from "../../../assets/svg/upload-cloud.svg?react";
import TickCircleIcon from "../../../assets/svg/tick-circle.svg?react";
import InputTextArea from "../../../components/ui/InputTextArea";
import UploadImage from "../../../components/UploadImage";
import InputText from "../../../components/ui/InputText";
const FinalScreen = lazy(() => import("./components/FinalScreen"));

const RegisterPartner = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [finalScreen, setFinalScreen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    businessName: "",
    location: "",
    services: [],
    description: "",
    images: [],
  });

  const servicesList = [
    { id: 1, name: "Engine Oil" },
    { id: 2, name: "Brake Service" },
    { id: 3, name: "Tire Replacement" },
    { id: 4, name: "Battery Service" },
    { id: 5, name: "Oil Filter" },
    { id: 6, name: "Air Filter" },
  ];

  // Get selected service names for email
  const getSelectedServices = () => {
    return formData.services
      .map((id) => servicesList.find((service) => service.id === id)?.name)
      .filter((name) => name)
      .join(", ");
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Prepare the data for Web3Forms
      const submitData = new FormData();
      submitData.append("access_key", "bf13d757-c021-4049-aab5-608c3b82355a");
      submitData.append("fullName", formData.fullName);
      submitData.append("email", formData.email);
      submitData.append("phone", formData.phone);
      submitData.append("businessName", formData.businessName);
      submitData.append("location", formData.location);
      submitData.append("services", getSelectedServices());
      submitData.append("description", formData.description);
      submitData.append("images", formData.images.length.toString());

      // Add subject for better email organization
      submitData.append(
        "subject",
        `New Partner Registration: ${formData.businessName}`,
      );
      setLoading(true);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          businessName: "",
          location: "",
          services: [],
          description: "",
          images: [],
        });
        setCurrentStep(1);
        setLoading(false);
        setFinalScreen(true);
      } else {
        alert("Failed to submit registration. Please try again.");
        console.error("Submission error:", result);
        setLoading(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(
        "Something went wrong. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
      setLoading(false);
    }
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit the form on the last step
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => {
      const isSelected = prev.services.includes(serviceId);
      if (isSelected) {
        return {
          ...prev,
          services: prev.services.filter((id) => id !== serviceId),
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, serviceId],
        };
      }
    });
  };

  const handleUpload = (uploadedImages) => {
    setFormData((prev) => ({
      ...prev,
      images: uploadedImages,
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col gap-2 mt-9">
            <InputText
              label={"Full name"}
              placeholder={"Enter full name"}
              prefixIcon={<UserIcon />}
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              required
            />
            <InputText
              label={"Email"}
              placeholder={"Enter email"}
              prefixIcon={<EmailIcon />}
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              required
            />
            <InputText
              label={"Phone"}
              placeholder={"Enter phone"}
              prefixIcon={<EmailIcon />}
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              required
            />
          </div>
        );

      case 2:
        return (
          <div className="flex flex-col gap-2 mt-9">
            <InputText
              label={"Business Name"}
              placeholder={"Enter business name"}
              prefixIcon={<UserIcon />}
              value={formData.businessName}
              onChange={(e) =>
                handleInputChange("businessName", e.target.value)
              }
              required
            />
            <InputText
              label={"Location"}
              placeholder={"Enter location"}
              prefixIcon={<LocationPlaceholder />}
              value={formData.location}
              onChange={(e) => handleInputChange("location", e.target.value)}
              required
            />
            <div className="flex flex-col gap-2">
              <p className="flex w-full justify-start text-foreground font-semibold text-[16px] leading-6">
                Map pin selection
              </p>
              <div className="flex w-full rounded-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26582.945925006887!2d73.14608095274605!3d33.60872299289165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfec0851d92db3%3A0x66f28b1327836ee2!2sGulberg%20Greens%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1767599039578!5m2!1sen!2s"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full rounded-2xl max-h-27.5"
                ></iframe>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="flex flex-col gap-2 mt-9">
            <div className="grid grid-cols-1 gap-3">
              {servicesList.map((service) => (
                <div
                  key={service.id}
                  className={`flex justify-between p-4 rounded-xl border cursor-pointer transition-all ${
                    formData.services.includes(service.id)
                      ? "border-primary bg-primary-hover"
                      : "border-border bg-white"
                  }`}
                  onClick={() => handleServiceToggle(service.id)}
                >
                  <span className="text-[16px] leading-5 text-foreground font-medium">
                    {service.name}
                  </span>
                  {formData.services.includes(service.id) && <TickCircleIcon />}
                </div>
              ))}
            </div>
            <div>
              <InputText
                label={"other"}
                placeholder={"Other service name"}
                prefixIcon={<EditIcon />}
                onChange={(e) =>
                  handleInputChange("otherService", e.target.value)
                }
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="flex flex-col gap-2 mt-9">
            <div>
              <UploadImage
                svg={<UploadIcon />}
                title={"Upload"}
                description={"Images must be in JPEG or PNG - 10mb max"}
                handleUpload={handleUpload}
              />
            </div>
            <div>
              <InputTextArea
                placeholder={"Write description"}
                prefix={<EditIcon />}
                rows={4}
                value={formData.description}
                onChange={(e) =>
                  handleInputChange("description", e.target.value)
                }
                required
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getStepTitle = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="flex w-full justify-center gap-2.5">
            <h1 className="font-bold!">Join as Partner</h1>
            <PartnerIcon />
          </div>
        );
      case 2:
        return "Your Business";
      case 3:
        return "Services";
      case 4:
        return "Gallery";
      default:
        return "";
    }
  };

  const getStepDescription = () => {
    switch (currentStep) {
      case 1:
        return "Let's get to know you first";
      case 2:
        return "Where is your business located?";
      case 3:
        return "What services do you offer?";
      case 4:
        return "Add Your Service Images";
      default:
        return "";
    }
  };

  return (
    <div className="flex w-full h-screen bg-background">
      {finalScreen ? (
        <Suspense
          fallback={
            <div className="flex w-full h-full justify-center items-center">
              Loading...
            </div>
          }
        >
          <FinalScreen loading={loading} />
        </Suspense>
      ) : (
        <AuthCardPartner
          title={getStepTitle()}
          description={getStepDescription()}
          currentStep={currentStep}
          totalSteps={4}
          onNext={handleNext}
          onBack={handleBack}
          isSubmitting={isSubmitting}
          loading={loading}
        >
          {renderStepContent()}
        </AuthCardPartner>
      )}
    </div>
  );
};

export default RegisterPartner;
