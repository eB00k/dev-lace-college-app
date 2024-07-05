// // import React, { useState } from "react";
// // import { useTranslation } from "react-i18next";

// // const AccordionItem = ({ title, content }) => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const toggleAccordion = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <div
// //       className={`accordion py-8 border-b border-solid border-slate-200 ${isOpen ? "active" : ""}`}
// //     >
// //       <button
// //         className={`accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-slate-600 w-full transition duration-500 hover:text-main ${isOpen ? "accordion-active:font-medium accordion-active:text-main" : ""}`}
// //         onClick={toggleAccordion}
// //         aria-controls={`basic-collapse-${title}`}
// //       >
// //         <h5>{title}</h5>
// //         <svg
// //           className={`text-slate-900 transition duration-500 group-hover:text-main ${isOpen ? "accordion-active:rotate-180" : ""}`}
// //           width="22"
// //           height="22"
// //           viewBox="0 0 22 22"
// //           fill="none"
// //           xmlns="http://www.w3.org/2000/svg"
// //         >
// //           <path
// //             d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
// //             stroke="currentColor"
// //             strokeWidth="1.6"
// //             strokeLinecap="round"
// //             strokeLinejoin="round"
// //           ></path>
// //         </svg>
// //       </button>
// //       <div
// //         id={`basic-collapse-${title}`}
// //         className={`accordion-content w-full px-0 overflow-hidden pr-4 ${isOpen ? "active" : ""}`}
// //         style={{ maxHeight: isOpen ? "100px" : "0" }}
// //         aria-labelledby={`basic-heading-${title}`}
// //       >
// //         <p className="text-base text-slate-500 font-normal">{content}</p>
// //       </div>
// //     </div>
// //   );
// // };

// // const FAQ = () => {
// //   const { t } = useTranslation();

// //   const faqs = [
// //     {
// //       title: t("home.faq.programsOffered.title"),
// //       content: t("home.faq.programsOffered.content"),
// //     },
// //     {
// //       title: t("home.faq.careerOpportunities.title"),
// //       content: t("home.faq.careerOpportunities.content"),
// //     },
// //     {
// //       title: t("home.faq.studyDuration.title"),
// //       content: t("home.faq.studyDuration.content"),
// //     },
// //     {
// //       title: t("home.faq.internationalJobOpportunities.title"),
// //       content: t("home.faq.internationalJobOpportunities.content"),
// //     },
// //     {
// //       title: t("home.faq.admissionRequirements.title"),
// //       content: t("home.faq.admissionRequirements.content"),
// //     },
// //   ];

// //   return (
// //     <div className="page py-14 sm:py-20 px-4 sm:px-6 md:px-8 text-slate-900">
// //       <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row max-lg:max-w-2xl mx-auto max-w-full">
// //         <div className="lg:max-w-3xl">
// //           <div className="mb-6 lg:mb-16">
// //             <h2 className="page-title">{t("home.faq.title")}</h2>
// //           </div>
// //           <div className="accordion-group" data-accordion="default-accordion">
// //             {faqs.map((faq, index) => (
// //               <AccordionItem
// //                 key={index}
// //                 title={faq.title}
// //                 content={faq.content}
// //               />
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default FAQ;
// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

// const AccordionItem = ({ title, content }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleAccordion = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div
//       className={`accordion py-8 border-b border-solid border-slate-200 ${isOpen ? "active" : ""}`}
//     >
//       <button
//         className={`accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-slate-600 w-full transition duration-500 hover:text-main ${isOpen ? "accordion-active:font-medium accordion-active:text-main" : ""}`}
//         onClick={toggleAccordion}
//         aria-controls={`basic-collapse-${title}`}
//       >
//         <h5>{title}</h5>
//         <svg
//           className={`text-slate-900 transition duration-500 group-hover:text-main ${isOpen ? "accordion-active:rotate-180" : ""}`}
//           width="22"
//           height="22"
//           viewBox="0 0 22 22"
//           fill="none"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
//             stroke="currentColor"
//             strokeWidth="1.6"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           ></path>
//         </svg>
//       </button>
//       <div
//         id={`basic-collapse-${title}`}
//         className={`accordion-content w-full px-0 overflow-hidden pr-4 ${isOpen ? "active" : ""}`}
//         style={{ maxHeight: isOpen ? "100px" : "0" }}
//         aria-labelledby={`basic-heading-${title}`}
//       >
//         <p className="text-base text-slate-500 font-normal">{content}</p>
//       </div>
//     </div>
//   );
// };

// const FAQ = () => {
//   const { t } = useTranslation();

//   const faqs = [
//     {
//       title: t("faq.programsOffered.title"),
//       content: t("faq.programsOffered.content", { returnObjects: true }).map(
//         (item) => <li key={item}>{item}</li>
//       ),
//     },
//     {
//       title: t("faq.careerOpportunities.title"),
//       content: t("faq.careerOpportunities.content", {
//         returnObjects: true,
//       }).map((item) => <li key={item}>{item}</li>),
//     },
//     {
//       title: t("faq.studyDuration.title"),
//       content: t("faq.studyDuration.content", { returnObjects: true }).map(
//         (item) => <li key={item}>{item}</li>
//       ),
//     },
//     {
//       title: t("faq.internationalJobOpportunities.title"),
//       content: t("faq.internationalJobOpportunities.content"),
//     },
//     {
//       title: t("faq.admissionRequirements.title"),
//       content: t("faq.admissionRequirements.content", {
//         returnObjects: true,
//       }).map((item) => <li key={item}>{item}</li>),
//     },
//   ];

//   return (
//     <div className="page py-14 sm:py-20 px-4 sm:px-6 md:px-8 text-slate-900">
//       <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row max-lg:max-w-2xl mx-auto max-w-full">
//         <div className="lg:max-w-3xl">
//           <div className="mb-6 lg:mb-16">
//             <h2 className="page-title">{t("faq.title")}</h2>
//           </div>
//           <div className="accordion-group" data-accordion="default-accordion">
//             {faqs.map((faq, index) => (
//               <AccordionItem
//                 key={index}
//                 title={faq.title}
//                 content={faq.content}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FAQ;
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`accordion py-8 border-b border-solid border-slate-200 ${isOpen ? "active" : ""}`}
    >
      <button
        className={`accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-slate-600 w-full transition duration-500 hover:text-main ${isOpen ? "accordion-active:font-medium accordion-active:text-main" : ""}`}
        onClick={toggleAccordion}
        aria-controls={`basic-collapse-${title}`}
      >
        <h5>{title}</h5>
        <svg
          className={`text-slate-900 transition duration-500 group-hover:text-main ${isOpen ? "accordion-active:rotate-180" : ""}`}
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div
        id={`basic-collapse-${title}`}
        className={`accordion-content w-full px-0 overflow-hidden pr-4 ${isOpen ? "active" : ""}`}
        style={{ maxHeight: isOpen ? "100px" : "0" }}
        aria-labelledby={`basic-heading-${title}`}
      >
        {Array.isArray(content) ? (
          <ul className="text-base text-slate-500 font-normal list-disc">
            {content.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-base text-slate-500 font-normal">{content}</p>
        )}
      </div>
    </div>
  );
};

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      title: t("home.faq.programsOffered.title"),
      content: t("home.faq.programsOffered.content", { returnObjects: true }),
    },
    {
      title: t("home.faq.careerOpportunities.title"),
      content: t("home.faq.careerOpportunities.content", {
        returnObjects: true,
      }),
    },
    {
      title: t("home.faq.studyDuration.title"),
      content: t("home.faq.studyDuration.content", { returnObjects: true }),
    },
    {
      title: t("home.faq.internationalJobOpportunities.title"),
      content: t("home.faq.internationalJobOpportunities.content"),
    },
    {
      title: t("home.faq.admissionRequirements.title"),
      content: t("home.faq.admissionRequirements.content", {
        returnObjects: true,
      }),
    },
  ];

  return (
    <div className="page py-14 sm:py-20 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row max-lg:max-w-2xl mx-auto max-w-full">
        <div className="lg:max-w-3xl">
          <div className="mb-6 lg:mb-16">
            <h2 className="page-title">{t("home.faq.title")}</h2>
          </div>
          <div className="accordion-group" data-accordion="default-accordion">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                title={faq.title}
                content={faq.content}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
