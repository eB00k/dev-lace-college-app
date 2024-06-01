// import React from "react";
// import SectionTitle from "../title/SectionTitle";
// import { BookText } from "lucide-react";

// const data = [
//   {
//     title: "Affordable Education in English",
//     description:
//       "Our College of Engineering offers lower tuition rates compared to four-year universities, making education more accessible and reducing student debt. Tuition rates are 4,000 USD: Access to the licensed tailored curriculums, courses & specialization tracks of Coursera.org and personal laptop which student gets upon admission.",
//   },
//   {
//     title: "Small Class Sizes",
//     description:
//       "Smaller class sizes at our college allow for more personalized attention from instructors, fostering a better learning environment and stronger student-teacher relationships. 40 students per cohort.",
//   },
//   {
//     title: "Hands-On Learning",
//     description:
//       "College of Engineering emphasizes practical, hands-on learning experiences in their engineering programs, providing students with valuable real-world skills. Each curriculum supports multiple tracks of specialization. ",
//   },
//   {
//     title: "Focused Programs",
//     description:
//       "Our College of Engineering offers focused, career-oriented programs that are designed to meet the needs of the local and global job market, ensuring that students gain relevant skills for immediate employment. Our College of Engineering offers four programs: Software Engineering, Cyber Security, IT & Entrepreneurship, STEAM  Pedagogy.",
//   },
//   {
//     title: "Flexible Scheduling",
//     description:
//       "With options for part-time, self-study session and online classes, our college offers flexible scheduling to accommodate working students or those with other commitments.",
//   },
//   {
//     title: "Transfer Opportunities",
//     description:
//       "Our college has articulation agreements with four-year universities, making it easier for students to transfer credits and continue their education at a bachelor’s level.",
//   },
//   {
//     title: "Industry Connections",
//     description:
//       "Our college has strong ties with local and international industries and businesses, providing students with networking opportunities, internships, and job placement assistance. ",
//   },
//   {
//     title: "Supportive Environment",
//     description:
//       "Our LA College of Engineering offers a supportive and inclusive environment with resources such as tutoring, counseling, and career services to help students succeed.",
//   },
//   {
//     title: "Diverse Student Body",
//     description:
//       "The diverse student population at our college enriches the learning experience by bringing a variety of perspectives and backgrounds to the classroom.",
//   },
//   {
//     title: "Community Engagement",
//     description:
//       "Being smaller and more localized, our LA College of Engineering encourages students to engage with the community through service learning, local/global contests, hackathons, projects, and collaborations, enhancing both personal and professional development",
//   },
// ];

// function ReasonsToStudy() {
//   return (
//     <div className="page max-w-[1200px] py-20 px-4 sm:px-6 md:px-8 text-slate-900">
//       <div className="grid gap-4 grid-cols-2 grid-rows-7 md:grid-cols-3 md:grid-rows-5">
//         <div className="col-start-1 flex justify-center items-center">
//           <SectionTitle className="text-6xl md:text-7xl m-0">
//             Why Our College?
//           </SectionTitle>
//         </div>
//         <div className="col-start-2 card-reasons">
//           <div className="flex flex-col justify-center items-center gap-3 p-6">
//             <h3 className="font-bold">Affordable Education in English</h3>
//             <p className="text-sm">
//               Our College of Engineering offers lower tuition rates compared to
//               four-year universities, making education more accessible and
//               reducing student debt. Tuition rates are 4,000 USD: Access to the
//               licensed tailored curriculums, courses & specialization tracks of
//               Coursera.org and personal laptop which student gets upon
//               admission.
//             </p>
//           </div>
//         </div>
//         <div className="col-start-1 row-start-2 col-span-2 md:col-start-3 md:row-start-1 md:col-span-1 card-reasons">
//           2
//         </div>
//         <div className="row-start-3 col-start-1 md:col-span-2 md:row-start-2 card-reasons">
//           3
//         </div>
//         <div className="col-start-2 row-start-3 md:col-start-3 md:row-start-2 card-reasons">
//           4
//         </div>
//         <div className="row-start-4 md:row-start-3 card-reasons">5</div>
//         <div className="row-start-4 md:row-start-3 card-reasons">6</div>
//         <div className="row-start-5 col-span-2 md:col-span-1 md:row-start-3 card-reasons">
//           7
//         </div>
//         <div className="row-start-6 md:row-start-4 card-reasons">8</div>
//         <div className="row-start-6 md:col-span-2 md:row-start-4 card-reasons">
//           9
//         </div>
//         <div className="row-start-7 md:row-start-5 card-reasons">10</div>
//       </div>
//     </div>
//   );
// }

// export default ReasonsToStudy;

import React from "react";
import SectionTitle from "../title/SectionTitle";
import { twMerge } from "tailwind-merge";
import Button from "../button/Button";
import { MoveDown } from "lucide-react";

const data = [
  {
    title: "Affordable Education in English",
    description:
      "Our College of Engineering offers lower tuition rates compared to four-year universities, making education more accessible and reducing student debt. Tuition rates are 4,000 USD: Access to the licensed tailored curriculums, courses & specialization tracks of Coursera.org and personal laptop which student gets upon admission.",
    className: "row-start-2 md:col-start-2 md:row-start-1",
  },
  {
    title: "Small Class Sizes",
    description:
      "Smaller class sizes at our college allow for more personalized attention from instructors, fostering a better learning environment and stronger student-teacher relationships. 40 students per cohort.",
    className:
      "row-start-3 md:col-start-1 md:row-start-2 md:col-span-2 lg:col-start-3 lg:row-start-1 lg:col-span-1",
  },
  {
    title: "Focused Programs",
    description:
      "Our College of Engineering offers focused, career-oriented programs that are designed to meet the needs of the local and global job market, ensuring that students gain relevant skills for immediate employment. Our College of Engineering offers four programs: Software Engineering, Cyber Security, IT & Entrepreneurship, STEAM  Pedagogy.",

    className:
      "row-start-4 md:row-start-3 md:col-start-1 lg:col-span-2 lg:row-start-2",
  },
  {
    title: "Hands-On Learning",
    description:
      "College of Engineering emphasizes practical, hands-on learning experiences in their engineering programs, providing students with valuable real-world skills. Each curriculum supports multiple tracks of specialization.",
    className:
      "row-start-5 md:col-start-2 md:row-start-3 lg:col-start-3 lg:row-start-2",
  },

  {
    title: "Flexible Scheduling",
    description:
      "With options for part-time, self-study session and online classes, our college offers flexible scheduling to accommodate working students or those with other commitments.",
    className: "row-start-6 md:row-start-4 lg:row-start-3",
  },
  {
    title: "Transfer Opportunities",
    description:
      "Our college has articulation agreements with four-year universities, making it easier for students to transfer credits and continue their education at a bachelor’s level.",
    className: "row-start-7 md:row-start-4 lg:row-start-3",
  },
  {
    title: "Industry Connections",
    description:
      "Our college has strong ties with local and international industries and businesses, providing students with networking opportunities, internships, and job placement assistance.",
    className:
      "row-start-8 md:row-start-5 md:col-span-2 lg:col-span-1 lg:row-start-3",
  },
  {
    title: "Supportive Environment",
    description:
      "Our LA College of Engineering offers a supportive and inclusive environment with resources such as tutoring, counseling, and career services to help students succeed.",
    className: "row-start-9 md:row-start-6 lg:row-start-4",
  },

  {
    title: "Community Engagement",
    description:
      "Being smaller and more localized, our LA College of Engineering encourages students to engage with the community through service learning, local/global contests, hackathons, projects, and collaborations, enhancing both personal and professional development. Studying at a College of Engineering can provide a strong foundation in engineering principles while offering numerous advantages that cater to diverse needs and goals.",

    className: "row-start-10 md:row-start-6 lg:col-span-2 lg:row-start-4",
  },
  {
    title: "Diverse Student Body",
    description:
      "The diverse student population at our college enriches the learning experience by bringing a variety of perspectives and backgrounds to the classroom.",
    className: "row-start-11 md:row-start-7 lg:row-start-5",
  },
];

function ReasonsToStudy() {
  return (
    <div className="page max-w-[1200px] py-20 px-4 sm:px-6 md:px-8 text-slate-900">
      <div className="grid gap-4 grid-cols-1 grid-rows-12 md:grid-cols-2 md:grid-rows-7 lg:grid-cols-3 lg:grid-rows-5">
        <div className="row-start-1 md:col-start-1 flex justify-center items-center">
          <SectionTitle className="text-6xl md:text-7xl m-0">
            Why Our College?
          </SectionTitle>
        </div>
        {data.map((item, index) => (
          <div
            key={index}
            className={twMerge(
              "card-reasons",
              item.className,
              "relative group/card-reasons"
            )}
          >
            <div className="absolute z-10 text-5xl rotate-12 text-main -top-3 -left-2 group-hover/card-reasons:rotate-0 transition-transform">
              {index + 1}
            </div>
            <div className="flex flex-col justify-center items-center gap-3 p-6 text-center max-w-[600px]">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}
        <div className="row-start-12 md:col-start-2 md:row-start-7 lg:col-start-2 lg:col-span-2 lg:row-start-5 flex flex-col items-center justify-center">
          <SectionTitle className="text-6xl mb-4">Ready to Apply?</SectionTitle>
          <p className="mb-8 text-base text-center">
            Take the next step towards your future at our College of
            Engineering. Contact us today to learn more about our programs and
            admission process.
          </p>
          <a href="#contact">
            <Button className="bg-blue-500 hover:bg-blue-600 transition-colors text-white rounded-lg flex text-base">
              <span> Contact Us</span> <MoveDown />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReasonsToStudy;
