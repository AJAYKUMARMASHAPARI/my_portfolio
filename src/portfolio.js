/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashutosh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Ajay Kumar Mashapari",
  logo_name: "Ajay Mashapari",
  nickname: "Aj",
  subTitle:
    "I excel in data storytelling, transforming complex datasets into clear, actionable insights through advanced visualization and statistical techniques. With experience in collaborative, cross-functional environments, I effectively bridge technical analysis and decision-making, ensuring insights are accessible to all stakeholders.",
  resumeLink:
    "https://drive.google.com/file/d/1XuAT86Zt01VJ3hTBcV_DTn5D05aAWYbh/view?usp=drive_link",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
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
      title: "Data Analytics and Business Intelligence",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Leveraging extensive experience in Business Intelligence and Data Analytics, proficient in transforming raw data into actionable insights to support strategic decision-making.",

        "⚡ Expertise in building interactive Power BI dashboards and crafting visually compelling reports, contributing to a 25% increase in sales revenue through data-driven marketing optimization.",

        "⚡ Skilled in ETL processes using Pentaho, MySQL, and API integrations, ensuring data consistency and integrity across complex systems.",

        "⚡ Proven ability to design and implement data models and warehouses, enhancing data accessibility and supporting seamless integration with BI tools.",

        "⚡ Adept in analyzing Key Performance Indicators (KPIs), streamlining operational workflows, and delivering insights that led to an annual revenue increment of $120K.",

        "⚡ Strong programming background in Python, R, and SQL, combined with advanced statistical techniques to deliver predictive models with 95% accuracy.",

        "⚡ Hands-on experience in cloud platforms (AWS, Azure) and data visualization tools (Power BI, Tableau), ensuring scalable solutions for diverse business use cases.",

        "⚡ Collaborative leader with experience as VP of Engagement and Operations Lead, driving impactful academic and community initiatives through data-driven planning and execution.",

        "⚡ Enthusiastic about combining technical expertise with leadership skills to create scalable, sustainable, and innovative solutions that deliver measurable impact.",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "i-logos:tableau",
          style: {
            backgroundColor: "black",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "python",
          fontAwesomeClassname: "fa-brands fa-python",
          style: {
            backgroundColor: "#3776AB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Front-End Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },

        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },

        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proficient in architecting scalable and reliable cloud infrastructures using AWS and Azure, tailored to meet diverse business needs.",

        "⚡ Expertise in integrating cloud storage solutions like ADLS Gen2, enabling real-time data analytics and seamless BI workflows.",

        "⚡ Skilled in deploying cloud-native applications with serverless architectures and microservices for optimized performance.",

        "⚡ Adept at implementing CI/CD pipelines and automating infrastructure provisioning to enhance efficiency and delivery speed.",

        "⚡ Focused on cloud security best practices and cost optimization, ensuring secure and cost-effective cloud operations.",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
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
      logo_path: "iit_logo.svg",
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
          color: "#9b1578",
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
          logo_path: "iit_logo.svg",
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
            "https://elevate.iit.edu/organizations/student-government/",
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

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Ajay.jpeg",
    description:
      "Ajay Kumar Mashapari, a state-level cricketer and beginner guitarist, thrives on collaboration and creativity. He values meaningful connections, whether on the field, in a team, or among friends.",
  },
  blogSection: {},
  addressSection: {
    title: "Address",
    subtitle: "401 E 32nd St, CHICAGO, ILLINOIS, USA 60616",
    locality: "LAKE MEADOWS",
    country: "USA",
    region: "Illinois",
    postalCode: "60616",
    streetAddress: "401 E 32nd St",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/WsvECVXtxPz9XXMs6",
  },
  phoneSection: {
    title: "",
    subtitle: "",
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
  publicationsHeader,
  publications,
  contactPageData,
};
