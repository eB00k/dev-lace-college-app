import React from "react";
import CustomList from "../list/CustomList";
import SectionTitle from "../title/SectionTitle";

const admissionProcessSteps = [
  {
    text: "Explore Our Programs: Visit our website to explore the various programs we offer. Determine which program aligns with your career goals and interests.",
  },
  {
    text: "Prepare Your Documents: Gather all necessary documents, including your academic transcripts, letters of recommendation, personal statement, and resume.",
  },
  {
    text: "Complete the Online Application: Fill out the online application form on our website. Ensure all fields are completed accurately.",
  },
  {
    text: "Pay the Application Fee: Submit the application fee through our secure online payment system. Fee waivers are available for eligible students.",
  },
  {
    text: "Submit Your Application: Review your application thoroughly before submitting. You will receive a confirmation email once your application is successfully submitted.",
  },
  {
    text: "Interview (if applicable): Some programs may require an interview. If selected, you will be contacted to schedule an interview with the admissions committee.",
  },
  {
    text: "Await Decision: Admissions decisions are typically made within 4-6 weeks after the application deadline. You will be notified via email.",
  },
  {
    text: "Accept Offer: If admitted, follow the instructions in your acceptance letter to confirm your enrollment and submit any additional required documents.",
  },
  {
    text: "Prepare for Enrollment: Complete any pre-enrollment requirements such as orientation, housing arrangements, and financial aid processing.",
  },
];

const requirementsContent = `
1. **Academic Qualifications**: 
   - High school diploma or equivalent for undergraduate programs.
   - Bachelor’s degree from an accredited institution for graduate programs.
   
2. **Transcripts**: 
   - Official transcripts from all previously attended institutions. Transcripts must be sent directly from the issuing institution to our admissions office.

3. **Standardized Test Scores**: 
   - SAT or ACT scores for undergraduate applicants (optional for some programs).
   - GRE or GMAT scores for graduate applicants (waivers available for qualified candidates).

4. **Letters of Recommendation**: 
   - Two to three letters of recommendation from teachers, professors, or professionals who can attest to your qualifications and potential.

5. **Personal Statement**: 
   - A personal statement or essay detailing your academic interests, career goals, and reasons for applying to our institution.

6. **Resume or Curriculum Vitae (CV)**: 
   - An up-to-date resume or CV highlighting your academic achievements, work experience, and extracurricular activities.

7. **English Proficiency**: 
   - TOEFL or IELTS scores for non-native English speakers. Minimum required scores are available on our website.

8. **Portfolio (if applicable)**: 
   - Applicants to programs in the arts or design may be required to submit a portfolio of their work.

9. **Interview (if applicable)**: 
   - Some programs may require an interview as part of the admissions process. You will be notified if this is required.
`;

const admissionsSections = [
  { title: "Admission Process", content: admissionProcessSteps },
  //   { title: "Requirements", content: requirementsContent },
  // Add other sections here
];

const Section = ({ title, content }) => (
  <div className="mb-6">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p>{content}</p>
  </div>
);

const Admissions = () => (
  <div className="w-full">
    {admissionsSections.map((section, index) => (
      <div
        key={index}
        className="flex flex-col gap-2 justify-center items-center"
      >
        <SectionTitle className="">{section.title}</SectionTitle>
        {section.title === "Admission Process" ? (
          <CustomList list={section.content} />
        ) : (
          <Section title={section.title} content={section.content} />
        )}
      </div>
    ))}
  </div>
);

export default Admissions;
