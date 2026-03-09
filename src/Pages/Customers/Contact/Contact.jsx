import ChatUsIcon from "../../../assets/svg/chat-us.svg?react";
import CallUsIcon from "../../../assets/svg/call-us.svg?react";
import VisitUsIcon from "../../../assets/svg/visit-us.svg?react";
import UserIcon from "../../../assets/svg/user.svg?react";
import MailIcon from "../../../assets/svg/mail-placeholder.svg?react";
import ContactSendIcon from "../../../assets/svg/contact-send.svg?react";
import ContactHeartIcon from "../../../assets/svg/contact-heart.svg?react";
import ContactBg from "../../../assets/Images/contact-bg.svg?react";
import InputText from "../../../ui/InputText/InputText";
import InputTextArea from "../../../ui/InputTextArea/InputTextArea";
import Button from "../../../ui/Button/Button";

const Contact = () => {
  return (
    <div className="flex flex-col w-full items-center h-full overflow-auto py-11 relative z-10 overflow-x-hidden">
      <div className="flex flex-col gap-16 w-[72%]">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold! text-foreground leading-11">
            Contact us
          </h1>
          <p className="text-[16px] font-normal text-muted-foreground leading-6 mb-11">
            Get in touch with us. We’re here to assist you.
          </p>
        </div>
        <div className="flex w-full bg-white! rounded-[20px] px-9 pt-16 pb-14 gap-11 relative z-10">
          <div className="flex flex-col w-full">
            <p className="font-normal text-sm! text-muted-foreground leading-6">
              We’ll answer within 24 hours, stay tuned and stay connected with
              FIXnGo.
            </p>
            <div className="flex w-full flex-wrap gap-3 mt-7">
              <div className="flex w-full gap-3">
                <div className="flex h-auto min-w-56.5 w-full flex-col p-4 bg-background rounded-2xl pb-14">
                  <ChatUsIcon />
                  <h1 className="pt-6! text-foreground font-medium! text-[19px]!">
                    Chat with us
                  </h1>
                  <p className="text-muted-foreground font-normal! text-[13px]! leading-5 pt-2.5">
                    Our friendly team is here to help
                  </p>
                  <p className="text-muted-foreground font-medium! text-[13px]! leading-5">
                    team@fixngo.com
                  </p>
                </div>
                <div className="flex h-auto min-w-56.5 w-full flex-col p-4 bg-background rounded-2xl pb-14">
                  <CallUsIcon />
                  <h1 className="pt-6! text-foreground font-medium! text-[19px]!">
                    Call us
                  </h1>
                  <p className="text-muted-foreground font-normal! text-[13px]! leading-5">
                    Toll free call
                  </p>
                  <p className="text-muted-foreground font-medium! text-[13px]! leading-5">
                    727-362-3617
                  </p>
                </div>
              </div>
              <div className="flex h-auto min-w-56.5 w-full flex-col p-4 bg-background rounded-2xl pb-14">
                <VisitUsIcon />
                <h1 className="pt-6! text-foreground font-medium! text-[19px]!">
                  Visit us
                </h1>
                <p className="text-muted-foreground font-normal! text-[13px]! leading-5">
                  Come and say hello at our office
                </p>
                <p className="text-muted-foreground font-medium! text-[13px]! leading-5">
                  team@fixngo.com
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex flex-col w-full gap-3">
              <InputText
                label="Name"
                placeholder="Enter name"
                prefixIcon={<UserIcon />}
                name="name"
                // formik={formik}
                className="w-full bg-background!"
              />
              <InputText
                label="Email"
                placeholder="Enter email"
                prefixIcon={<MailIcon />}
                name="email"
                // formik={formik}
                className="w-full bg-background!"
              />
              <InputTextArea
                placeholder={"Type your message here"}
                rows={12}
                className={"bg-background!"}
              />
              <Button type={"primary"} label={"Send message"} />
            </div>
          </div>
          <div className="flex shrink-0 justify-center items-center w-18.75 h-18.75 rounded-full bg-white border-8 border-[#F5F5F5] absolute -top-5 -left-8">
            <ContactSendIcon />
          </div>
          <div className="flex shrink-0 justify-center items-center w-18.75 h-18.75 rounded-full bg-white border-8 border-[#F5F5F5] absolute -bottom-5 -right-8">
            <ContactHeartIcon />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-between z-0 top-[70%] translate-y-[-50%]">
          <div className="ml-0">
            <ContactBg />
          </div>
          <div className="mr-0">
            <ContactBg />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
