/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ajay's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ajay Mashapari's Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ajay Kumar Mashapari",
  logo_name: "Ajay Mashapari",
  nickname: "AJ",
  subTitle:
    "I excel in data storytelling, transforming complex datasets into clear, actionable insights through advanced visualization and statistical techniques. With experience in collaborative, cross-functional environments, I effectively bridge technical analysis and decision-making, ensuring insights are accessible to all stakeholders.",
  resumeLink:
    "https://drive.google.com/file/d/1XuAT86Zt01VJ3hTBcV_DTn5D05aAWYbh/view?usp=drive_link",
  portfolio_repository: "https://github.com/ajaykumarmashapari/masterPortfolio",
  githubProfile: "https://github.com/ajaykumarmashapari",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/AJAYKUMARMASHAPARI",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ajaykumarmashapari/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:amashapari@hawk.iit.edu",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Data Analytics & Business Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Transforming complex datasets into actionable insights for strategic decision-making.",
        "⚡ Building dynamic Power BI & Tableau dashboards for data-driven decision-making.",
        "⚡ Developing ETL workflows using Pentaho, SQL, and API integrations for seamless data processing.",
        "⚡ Designing scalable data marts and data warehouses for optimized reporting and analytics.",
        "⚡ Expertise in Python & R for statistical modeling, machine learning, and data automation.",
        "⚡ Conducting KPI analysis and building operational reports to enhance business performance.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { backgroundColor: "#3776AB", color: "#FFD43B" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { backgroundColor: "#276DC3", color: "#FFFFFF" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { backgroundColor: "#F2C811", color: "#000000" },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: { backgroundColor: "#E97627", color: "#FFFFFF" },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: { backgroundColor: "#217346", color: "#FFFFFF" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { backgroundColor: "#4479A1", color: "#FFFFFF" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { backgroundColor: "#336791", color: "#FFFFFF" },
        },
        {
          skillName: "Dremio",
          fontAwesomeClassname: "simple-icons:dremio",
          style: { backgroundColor: "#0098DA", color: "#FFFFFF" },
        },
      ],
    },
    {
      title: "Software & Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing modern web applications using React.js and JavaScript.",
        "⚡ Building scalable and interactive user interfaces for data visualization.",
        "⚡ Implementing efficient front-end architectures for better performance and user experience.",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: { color: "#E34F26" },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "simple-icons:css3",
          style: { color: "#1572B6" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { backgroundColor: "#000000", color: "#F7DF1E" },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#F1502F" },
        },
      ],
    },
    {
      title: "Cloud & Database Management",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architecting cloud-based solutions on AWS and Azure.",
        "⚡ Managing relational & NoSQL databases for high-performance applications.",
        "⚡ Deploying and maintaining data lakehouses using ADLS Gen2 & Dremio.",
        "⚡ Automating infrastructure provisioning and monitoring using cloud tools.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0089D6" },
        },
        {
          skillName: "ADLS Gen2",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: { color: "#0078D4" },
        },
        {
          skillName: "ServiceNow",
          fontAwesomeClassname: "fa-solid fa-cogs",
          style: { color: "#5EBC67" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: { color: "#326CE5" },
        },
      ],
    },
    {
      title: "Leadership & Project Management",
      fileName: "LeadershipImg",
      skills: [
        "⚡ Student Success Coach: Guiding and mentoring students for academic excellence.",
        "⚡ VP of Engagement: Organizing university-wide events and fostering student leadership.",
        "⚡ TEDx Operations Head: Managing large-scale event logistics and speaker coordination.",
        "⚡ Cross-functional Team Collaboration: Working with data, engineering, and business teams.",
      ],
      softwareSkills: [
        {
          skillName: "Confluence",
          fontAwesomeClassname: "simple-icons:confluence",
          style: { color: "#172B4D" },
        },
        {
          skillName: "Trello",
          fontAwesomeClassname: "simple-icons:trello",
          style: { color: "#0079BF" },
        },
        {
          skillName: "Jira",
          fontAwesomeClassname: "simple-icons:jira",
          style: { color: "#0052CC" },
        },
        {
          skillName: "Slack",
          fontAwesomeClassname: "simple-icons:slack",
          style: { color: "#4A154B" },
        },
      ],
    },
  ],
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/donard803/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/donard803",
    },
  ],
};

// Education Page

const degrees = {
  degrees: [
    {
      title: "Mahatma Gandhi Institute of Technology(M.G.I.T)",
      subtitle: "B.Tech. in Computer Science and Engineering",
      logo_path: "mgit_logo.png",
      alt_name: "M.G.I.T",
      duration: "2016 - 2020",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
      ],
      website_link: "https://mgit.ac.in/",
    },
    {
      title: "Illinois Institute of Technology",
      subtitle: "M.S. in Information Technology and Management",
      logo_path: "iit_logo.png",
      alt_name: "IITC",
      duration: "2024 - 2026",
      descriptions: [
        "⚡ Course Work: Programming for Data Analytics using R, Data Mining and Machine Learning, Data Warehousing, Big Data, Advance topics in Data Manegement",
        "⚡ As a Student Success Coach at Illinois Institute of Technology Chicago, I guide and mentor 20 undergraduate students, supporting their academic and personal development.",
        "⚡ Elected as Vice President - Engagement in the Student Government Association elections, I focused on fostering student involvement and building a vibrant campus community through strategic initiatives and events.",
      ],
      website_link: "https://www.iit.edu/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I’m a driven professional with hands-on experience in data analytics, business intelligence, and student mentoring. My journey started as a Programmer Analyst at Cognizant, where I developed Power BI dashboards that boosted sales revenue by 25% and created efficient workflows to save time and resources. Now, as a Student Success Coach at Chicago Difference, I guide students toward academic success while fostering collaboration and growth.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Student Success Coach",
          company: "Chicago Difference, Illinois Institute of Technology",
          company_url: "https://www.linkedin.com/company/muffito-inc/about/",
          logo_path: "chicago_difference.jpg",
          duration: "Oct 2024 - Present",
          location: "Chicago, Illinois",
          description:
            "Guided 20 undergraduate students in academic planning, organized workshops and study groups, and collaborated with faculty to deliver personalized support, improving performance and retention at Chicago Difference.",
          color: "#FFFFFF",
        },
        {
          title: "Programmer Analyst",
          company: "Cognizant Tecghnology Solutions",
          company_url: "https://www.cognizant.com/us/en",
          logo_path: "cognizant_logo.jpg",
          duration: "Oct 2020 - Jun 2023",
          location: "Hyderabad, Telangana",
          description:
            "Designed and developed interactive Power BI dashboards and strategic reports, leveraging SQL to optimize data integration and streamline processes, which led to a 25% increase in sales revenue and an additional $120K in annual growth at Cognizant.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Programmer Analyst Trainee",
          company: "Cognizant Technology Solutions",
          company_url: "https://www.cognizant.com/us/en",
          logo_path: "cognizant_logo.jpg",
          duration: "Jan 2020 - May 2020",
          location: "Hyderabad, Telangana",
          description:
            "During my internship at Cognizant Technology Solutions, I worked with a team of five to manage databases, ensuring they ran smoothly and securely. I also helped validate and move over 2,000 data records and documents from Confluence to ServiceNow, making workflows 30% faster and improving team operations.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer",
          company: "evergreen climate innovations",
          company_url: "https://evergreeninno.org/",
          logo_path: "evergreen_logo.png",
          duration: "Sep 17 2024",
          location: "Chicago, Illinois",
          description:
            "Volunteered at Evergreen Co-Invest Climate 2024, managing registration, stage setup, guiding startup founders to their seats, and coordinating presentation schedules.",
          color: "#4285F4",
        },
        {
          title: "Business Relations Strategist",
          company: "Carrier Services IIT",
          company_url: "https://www.iit.edu/career-services",
          logo_path: "carrierservies_logo.png",
          duration: "Sep 2024",
          location: "Chicago, Illinois",
          description:
            "As a Business Relations Strategist, I assisted recruiters in setting up their tables, managed registration, and guided students to connect with recruiters effectively during the event.",
          color: "#D83B01",
        },
        {
          title: "Volunteer",
          company: "RSA Conference 2024",
          company_url: "https://www.iit.edu/",
          logo_path: "iit_logo.png",
          duration: "NOv 22 2024",
          location: "Chicago, Illinois",
          description:
            "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city.",
          color: "#000000",
        },
        {
          title: "Vice President - Engagement",
          company: "Student Government Association",
          company_url:
            "https://sites.google.com/iit.edu/sga/committees/engagement?authuser=0",
          logo_path: "SGA_logo.png",
          duration: "Apr 2024 - Present",
          location: "Chicago, Illinois",
          description:
            "As Vice President of Engagement, I organized campus-wide events, strengthened student-administration communication, and fostered inclusivity through innovative engagement initiatives, enhancing the overall student experience.",
          color: "#0C9D58",
        },
        {
          title: "Operations Head",
          company: "TedxIllinoisTech",
          company_url: "https://www.ted.com/tedx/events/59836",
          logo_path: "IITC_Tedx.png",
          duration: "Oct 2024 - Dec 2024",
          location: "Chicago, Illinois",
          description:
            "As Operations Head for TEDx Illinois Tech, I managed event logistics, coordinated with speakers and volunteers, and ensured the smooth execution of all operations to deliver a successful and impactful event.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const projects = {
  data: [
    {
      id: "hospital-readmission-analysis",
      name: "Hospital Readmission Analysis",
      createdAt: "2024-02-05T00:00:00Z",
      description:
        "A machine learning model to predict patient readmissions based on historical hospital data.",
      url:
        "https://github.com/ajaykumarmashapari/hospital-readmission-analysis",
    },
    {
      id: "linkedin-data-pipeline",
      name: "LinkedIn Data Pipeline",
      createdAt: "2023-12-15T00:00:00Z",
      description:
        "Built an ETL pipeline to process LinkedIn data using MySQL, Pentaho, and Power BI.",
      url: "https://github.com/ajaykumarmashapari/linkedin-data-warehousing",
    },
    {
      id: "powerbi-sales-dashboard",
      name: "Power BI Sales Dashboard",
      createdAt: "2023-10-10T00:00:00Z",
      description:
        "Developed a sales performance dashboard using Power BI, increasing business insights efficiency by 40%.",
      url: "https://github.com/ajaykumarmashapari/powerbi-sales-dashboard",
    },
    {
      id: "big-data-processing",
      name: "Big Data Processing with AWS",
      createdAt: "2023-08-20T00:00:00Z",
      description:
        "Processed large datasets on AWS using S3, Glue, and Athena for real-time analytics.",
      url: "https://github.com/ajaykumarmashapari/big-data-processing",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Ajay.jpeg",
    description:
      "I’m always open to new opportunities, collaborations, and meaningful conversations. Whether it's about work, mentorship, or just a friendly chat, feel free to reach out!",
  },

  personalSection: {
    title: "Personal Life",
    description:
      "Outside of work, I enjoy playing cricket, Badminton and practicing the guitar. I value deep connections, meaningful conversations, and learning from every experience life offers.",
  },

  addressSection: {
    title: "Address",
    subtitle: "401 E 32nd St, Chicago, Illinois, USA 60616",
    locality: "Lake Meadows",
    country: "USA",
    region: "Illinois",
    postalCode: "60616",
    streetAddress: "401 E 32nd St",
    location_map_link: "https://maps.app.goo.gl/WsvECVXtxPz9XXMs6",
  },

  phoneSection: {
    title: "email",
    subtitle: "amashapari@hawk.iit.edu", // Add your phone number if needed
  },
};
export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  projects,
  contactPageData,
};
