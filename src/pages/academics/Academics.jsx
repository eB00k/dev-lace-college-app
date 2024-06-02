import React from "react";

const programs = [
  {
    name: "Software Engineering",
    description:
      "The Software Engineering Program is dedicated to advancing the discipline of software development through comprehensive educational programs, research, and collaboration with industry. Focused on the application of engineering principles to the design, development, and implementation of software, the program offers both theoretical and practical training. Students learn about various software development methodologies, project management, and effective team collaboration, preparing them to tackle complex software challenges in a dynamic technological landscape.",
    jobRoles: [
      "Software Developer",
      "DevOps Engineer",
      "Quality Assurance Analyst",
      "Mobile Application Developer",
      "User Interface Designer",
      "Project Manager",
      "Scrum Master",
      "Embedded Systems Engineer",
    ],
  },
  {
    name: "Cyber Security",
    description:
      "The Cybersecurity Program provides rigorous training and research opportunities in the field of information security. Addressing the increasing threats in the digital world, the program's curriculum covers areas such as network security, ethical hacking, cryptography, and data protection. Through hands-on labs and real-world projects, students are equipped with the skills needed to design, implement, and manage secure systems and to anticipate and mitigate potential security breaches, thus preparing them for high-demand roles in both public and private sectors.",
    jobRoles: [
      "Information Security Analyst",
      "Penetration Tester",
      "Cybersecurity Consultant",
      "Network Security Engineer",
      "Security Operations Center (SOC) Analyst",
      "Cryptographer",
      "Forensic Computer Analyst",
      "Vulnerability Assessor",
      "Compliance and Controls Analyst",
    ],
  },
  {
    name: "IT & Entrepreneurship",
    description:
      "The IT & Entrepreneurship Program bridges the gap between advanced technological skills and innovative business strategies. This program focuses on leveraging technology for business growth, covering topics such as digital transformation, tech startups, and venture capital. It encourages students to develop entrepreneurial thinking alongside strong IT skills, fostering the creation of new ventures and innovations in the tech industry. The curriculum is designed to empower students to launch and manage technology-driven businesses effectively.",
    jobRoles: [
      "Project Manager",
      "IT Project Manager",
      "SCRUM Master",
      "Technology Entrepreneur",
      "IT Consultant",
      "Digital Marketing Specialist",
      "Business Analyst",
      "Product Manager",
      "Startup Founder",
      "E-commerce Manager",
    ],
  },
  {
    name: "STEM Pedagogy",
    description:
      "The STEM Pedagogy program focuses on the education and training of future educators in the fields of science, technology, engineering, and mathematics. This program emphasizes the development of effective teaching strategies, curriculum design, and the integration of technology into education. By combining educational theory with practical teaching experiences, the program aims to prepare educators who can inspire and engage the next generation of scientists and engineers, enhancing the overall quality of STEM education.",
    jobRoles: [
      "STEM Teacher",
      "Science Educator",
      "Curriculum Developer",
      "Educational Technologist",
      "Mathematics Curriculum Specialist",
      "Engineering Educator",
      "Instructional Coordinator",
      "Educational Consultant",
      "STEM Program Director",
    ],
  },
];

const reasons = [
  {
    keywords: "Affordable Education in English",
    description:
      "Our College of Engineering offers lower tuition rates compared to four-year universities, making education more accessible and reducing student debt. Tuition rates are 4,000 USD: Access to the licensed tailored curriculums, courses & specialization tracks of Coursera.org and personal laptop which student gets upon admission.",
  },
  {
    keywords: "Small Class Sizes",
    description:
      "Smaller class sizes at our college allow for more personalized attention from instructors, fostering a better learning environment and stronger student-teacher relationships. 40 students per cohort.",
  },
  {
    keywords: "Hands-On Learning",
    description: (
      <div>
        College of Engineering emphasizes practical, hands-on learning
        experiences in their engineering programs, providing students with
        valuable real-world skills. Each curriculum supports multiple tracks of
        specialization.
        <ul className="list-disc ml-5 mt-2">
          <li>
            Software Engineering: Front-end, Back-end, Full-stack, Mobile App
            development.
          </li>
          <li>Cybersecurity: Security Engineering, DevOps, DevSecOps.</li>
          <li>
            IT & Entrepreneurship: Business Analytics and Data Science, Project
            Management, Digital Marketing.
          </li>
          <li>
            STEAM Pedagogy: Informatics, Physics, Biology, Chemistry,
            Mathematics.
          </li>
        </ul>
      </div>
    ),
  },
  {
    keywords: "Focused Programs",
    description:
      "Our College of Engineering offers focused, career-oriented programs that are designed to meet the needs of the local and global job market, ensuring that students gain relevant skills for immediate employment. Our College of Engineering offers four programs: Software Engineering, Cyber Security, IT & Entrepreneurship, STEAM Pedagogy.",
  },
  {
    keywords: "Flexible Scheduling",
    description:
      "With options for part-time, self-study session and online classes, our college offers flexible scheduling to accommodate working students or those with other commitments.",
  },
  {
    keywords: "Transfer Opportunities",
    description:
      "Our college has articulation agreements with four-year universities, making it easier for students to transfer credits and continue their education at a bachelor’s level.",
  },
  {
    keywords: "Industry Connections",
    description: (
      <div>
        Our college has strong ties with local and international industries and
        businesses, providing students with networking opportunities,
        internships, and job placement assistance.
        <ul className="list-disc ml-5 mt-2">
          <li>
            Students will be offered to take one of two elective courses beside
            English: German or Japanese.
          </li>
          <li>
            Upon successful mastery of B1-level language proficiency in one of
            the languages and GPA sufficiency, we guarantee job positions in
            Germany or Japan respectively.
          </li>
        </ul>
      </div>
    ),
  },
  {
    keywords: "Supportive Environment",
    description:
      "Our LA College of Engineering offers a supportive and inclusive environment with resources such as tutoring, counseling, and career services to help students succeed.",
  },
  {
    keywords: "Diverse Student Body",
    description:
      "The diverse student population at our college enriches the learning experience by bringing a variety of perspectives and backgrounds to the classroom.",
  },
  {
    keywords: "Community Engagement",
    description:
      "Being smaller and more localized, our LA College of Engineering encourages students to engage with the community through service learning, local/global contests, hackathons, projects, and collaborations, enhancing both personal and professional development. Studying at a College of Engineering can provide a strong foundation in engineering principles while offering numerous advantages that cater to diverse needs and goals.",
  },
];

function Academics() {
  return (
    <div className="page-style">
      <div className="container mx-auto text-slate-700">
        <h2 className="page-title">Programs</h2>
        {programs.map((program) => (
          <div key={program.name} className="mb-6">
            <h3 className="page-subtitle">{program.name}</h3>
            <p className="page-paragraph">{program.description}</p>
            <h4 className="page-subtitle text-lg font-medium">
              Potential job roles for graduates:
            </h4>
            <ul className="list-disc ml-5">
              {program.jobRoles.map((role, index) => (
                <li key={index} className="mb-2">
                  {role}
                </li>
              ))}
            </ul>
          </div>
        ))}

        <h2 className="page-title pt-12">
          Ten Reasons to Study at LA College of Engineering
        </h2>
        <div className="grid gap-4">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col p-4 border rounded-lg">
              <div className="page-subtitle">
                {reason.keywords}
              </div>
              <div>
                {typeof reason.description === "string"
                  ? reason.description
                  : reason.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Academics;
