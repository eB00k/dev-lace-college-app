import React from "react";
import SectionTitle from "../title/SectionTitle";

const reasons = [
  {
    keywords: ["Affordable Education in English"],
    description:
      "Our College of Engineering offers lower tuition rates compared to four-year universities, making education more accessible and reducing student debt. Tuition rates are 4,000 USD: Access to the licensed tailored curriculums, courses & specialization tracks of Coursera.org and personal laptop which student gets upon admission.",
  },
  {
    keywords: ["Small Class Sizes"],
    description:
      "Smaller class sizes at our college allow for more personalized attention from instructors, fostering a better learning environment and stronger student-teacher relationships. 40 students per cohort.",
  },
  {
    keywords: ["Hands-On Learning"],
    description:
      "College of Engineering emphasizes practical, hands-on learning experiences in their engineering programs, providing students with valuable real-world skills. Each curriculum supports multiple tracks of specialization. Details: a. Software Engineering: Front-end, Back-end, Full-stack, Mobile App development. b. Cybersecurity: Security Engineering, DevOps, DevSecOps. c. IT & Entrepreneurship: Business Analytics and Data Science, Project Management, Digital Marketing. d. STEAM Pedagogy: Informatics, Physics, Biology, Chemistry, Mathematics.",
  },
  {
    keywords: ["Focused Programs"],
    description:
      "Our College of Engineering offers focused, career-oriented programs that are designed to meet the needs of the local and global job market, ensuring that students gain relevant skills for immediate employment. Our College of Engineering offers four programs: Software Engineering, Cyber Security, IT & Entrepreneurship, STEAM Pedagogy.",
  },
  {
    keywords: ["Flexible Scheduling"],
    description:
      "With options for part-time, self-study session and online classes, our college offers flexible scheduling to accommodate working students or those with other commitments.",
  },
  {
    keywords: ["Transfer Opportunities"],
    description:
      "Our college has articulation agreements with four-year universities, making it easier for students to transfer credits and continue their education at a bachelor’s level.",
  },
  {
    keywords: ["Industry Connections"],
    description:
      "Our college has strong ties with local and international industries and businesses, providing students with networking opportunities, internships, and job placement assistance. Details: Students will be offered to take one of two elective courses beside English: German or Japanese. Upon successful mastery of B1-level language proficiency in one of the languages and GPA sufficiency we guarantee job positions in Germany or Japan respectively.",
  },
  {
    keywords: ["Supportive Environment"],
    description:
      "Our LA College of Engineering offers a supportive and inclusive environment with resources such as tutoring, counseling, and career services to help students succeed.",
  },
  {
    keywords: ["Diverse Student Body"],
    description:
      "The diverse student population at our college enriches the learning experience by bringing a variety of perspectives and backgrounds to the classroom.",
  },
  {
    keywords: ["Community Engagement"],
    description:
      "Being smaller and more localized, our LA College of Engineering encourages students to engage with the community through service learning, local/global contests, hackathons, projects, and collaborations, enhancing both personal and professional development. Studying at a College of Engineering can provide a strong foundation in engineering principles while offering numerous advantages that cater to diverse needs and goals.",
  },
];

function Reason({ keywords, description }) {
  return (
    <div className="flex mb-6">
      <div className="w-1/4 p-4 bg-gray-100 rounded-md">
        <ul>
          {keywords.map((keyword, index) => (
            <li key={index} className="font-bold text-gray-700">
              {keyword}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 p-4 bg-white rounded-md shadow-md">
        <p>{description}</p>
      </div>
    </div>
  );
}

function Reasons() {
  return (
    <div className="px-6 py-12">
      <div className="container mx-auto">
        <SectionTitle>10 Reasons to Study at L.A.C.E.</SectionTitle>
        {reasons.map((reason, index) => (
          <Reason
            key={index}
            keywords={reason.keywords}
            description={reason.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Reasons;
