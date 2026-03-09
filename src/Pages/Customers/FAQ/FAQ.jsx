import { useState } from "react";
import AddIcon from "../../../assets/svg/add.svg?react";
import Send from "../../../assets/svg/send.svg?react";
import InputText from "../../../ui/InputText/InputText";
import { useFormik } from "formik";
const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const formik = useFormik({
    initialValues: {
      question: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide comprehensive car services including oil changes, tire rotations, brake services, engine diagnostics, and more to keep your vehicle running smoothly.",
    },
    {
      question: "How do I book a service?",
      answer:
        "You can book a service through our website or mobile app by selecting your preferred service, date, and time. You'll receive a confirmation once your booking is confirmed.",
    },
    {
      question: "What are your working hours?",
      answer:
        "We're open Monday to Saturday from 9:00 AM to 8:00 PM. Our service center is closed on Sundays and public holidays.",
    },
    {
      question: "Do you offer emergency services?",
      answer:
        "Yes, we provide 24/7 emergency towing and roadside assistance. Call our emergency hotline for immediate assistance.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit/debit cards, mobile payments, and cash. We also offer flexible payment plans for major repairs.",
    },
    {
      question: "How often should I service my car?",
      answer:
        "We recommend a basic service every 6 months or 5,000 miles, whichever comes first. However, this may vary based on your vehicle's make and model.",
    },
  ];

  return (
    <div className="flex flex-col w-full items-center h-full overflow-auto py-16">
      <div className="flex w-[72%]">
        <div className="flex-1">
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold! text-foreground leading-11">
              Frequently Asked Questions
            </h1>
            <p className="text-[16px] font-normal text-muted-foreground leading-6 mb-11">
              Got questions? We've compiled answers to common queries to help
              you get started and book services confidently.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`
                    bg-background border border-[#E5E5E5] rounded-[26px] 
                    transition-all duration-300 overflow-hidden
                    ${activeIndex === index ? "border-primary" : ""}
                  `}
                >
                  <div
                    className="flex w-full justify-between items-center cursor-pointer"
                    onClick={() => toggleQuestion(index)}
                  >
                    <h1 className="px-6 py-4 text-foreground font-medium">
                      {faq.question}
                    </h1>
                    <span
                      className={`
                        flex justify-center items-center w-11 h-11 rounded-full m-1
                        transition-transform duration-300 bg-white
                        ${activeIndex === index ? "rotate-45" : ""}
                        `}
                    >
                      <AddIcon />
                    </span>
                  </div>
                  <div
                    className={`
                      px-6 overflow-hidden transition-all duration-300
                      ${activeIndex === index ? "max-h-40 pb-6" : "max-h-0"}
                    `}
                  >
                    <p className="text-muted-foreground leading-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center pl-16">
          <img
            src="/Images/FAQ.png"
            alt="FAQ Illustration"
            className="max-w-full h-auto"
          />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-[72%] mt-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-primary font-bold! text-2xl!">
            Have a Question?
          </h1>
          <p className="text-muted-foreground font-normal! text-sm!">
            You can ask anything you want to know
          </p>
        </div>
        <InputText
          type="text"
          name="question"
          value={formik.values.question}
          formik={formik}
          placeholder="Ask your question"
          suffixIcon={
            <div className="flex absolute right-0.5 items-center bg-primary rounded-full justify-center w-10 h-10 ml-7!">
              <Send className="w-5 h-5 text-blue" />
            </div>
          }
        />
      </div>
    </div>
  );
};

export default FAQ;
