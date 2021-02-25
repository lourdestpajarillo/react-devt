/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Lourdes Tupas",
  title: "Hello World! This is Lourdes",
  subTitle: emoji(
    "I'm a seasoned backend developer and starting my journey in the world of full stack development. I am hoping to enhance my skills in this field just as I've mastered the art of backend development."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dTZONFPti_VZzFnw4F8KIaG-IOs45ueQ/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/lourdestpajarillo",
  linkedin: "https://www.linkedin.com/in/lourdestupas/",
  gmail: "lourdes.tupas@gmail.com",
  // facebook: "https://www.facebook.com/",
  // instagram: 'https://www.instagram.com/2dittp/',
  // twitter: 'https://twitter.com/davidrakosi_',
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Western Governors University",
      logo: require("./assets/images/wguLogo.png"),
      subHeader: "Master of Science in Data Analytics",
      duration: "May 2020 - Present",
      desc: "In the process of completing my degree in data analytics, hoping to get a bite of AI/ML tech space.",
      descBullets: [
        "Statistics",
        "Analytics",
        "Visualization",
        "Data, DATA, data"
      ]
    },
    {
      schoolName: "Keller Graduate School of Management | DeVry University",
      logo: require("./assets/images/devryLogo.png"),
      subHeader: "Master of Business Administration",
      duration: "May 2015 - July 2017",
      desc:
        "Keller's MBA degree program equips its graduate students with essential management courses that build their skills critical to success in the world of business.",
      descBullets: [
        "Leadership and Management",
        "Finance and Accounting",
        "Economics",
        "Project Management"
      ]
    },
    {
      schoolName: "University of the Philippines",
      logo: require("./assets/images/upLogo.png"),
      subHeader: "Bachelor of Science in Computer Engineering",
      duration: "June 1997 - April 2003",
      desc:
        "Architect, design, and build a computer from teh ground. Specialized in digital signal processing particularly the speech signal and utilized technology in order to provide real-world solutions to speech problems, e.g., text-to-speech synthesis.",
      descBullets: [
        "Engineering",
        "Assembly Programming",
        "Computer Architecture",
        "Electronic Signal Analysis",
        "Digital Signal Processing (DSP)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend",
      progressPercentage: "95%"
    },
    {
      Stack: "Programming",
      progressPercentage: "95%"
    },
    {
      Stack: "Frontend / Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: true // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Mod2 Inc.",
      companylogo: require("./assets/images/mod2Logo.jpg"),
      date: "June 2014 – Present",
      desc:
        "Manage project-based features and enhancements to an office automation software for companies in textile and garment industries. Roles include design and implementation of project-based features, management of tasks of a team usually composed of 1-2 developers, and exploration of textile/garment industy's business workflow in order to provide business solutions or process improvement thru the Mod2 application.",
      descBullets: [
        "Delphi 2006/XE7, MySQL, Objective-C",
        "API Integration: AWS S3, Shopify, FedEx, UPS, PayTrace, Authorize.ne, Teamviewer, BeProduct, Apple Push Notifications (APNs), etc.",
        "Jira, BitBucket, Git, TortoiseSVN",
        "Microsoft RDP Virtualization using virtual channels"
      ]
    },
    {
      role: "Software Engineer",
      company: "Cargo Community Network Pte Ltd (Singapore)",
      companylogo: require("./assets/images/ccnLogo.png"),
      date: "December 2008 – June 2014",
      desc:
        "Design and develop web-based solutions for companies in the air cargo industry",
      descBullets: [
        "C# .NET, ASP .NET, MS SQL Server",
        "Celoxis, Microsoft TFS, MS SSRS, MS SSAS"
        ]
    },
    {
      role: "Software Development Engineer",
      company: "E.Mation Technologies Pte Ltd (Singapore)",
      companylogo: require("./assets/images/emationLogo.png"),
      date: "May 2007 – November 2008",
      desc:
        "Developed customizations to ERP solutions focusing on customer-specific requirements and requests",
      descBullets: [
        "Intuitive ERP, Kingdee ERP",
        "Visual Basic .NET, Classic ASP, ASP .NET"
      ]
    },
    {
      role: "Software Development Manager",
      company: "Cubepoint, Inc (Philippines)",
      companylogo: require("./assets/images/cubepointLogo.jpg"),
      date: "September 2003 – May 2007",
      desc:
        "Managed and developed Windows-based applications for companies in the warehouse and logistics industries.",
      descBullets: [
        "Visual Basic 6, MS Access"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "drakosi99", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "fa"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements 🏆 "),
  subtitle:
    "Certifications and Awards - not much, but trying to build more",

  achievementsCards: [
    {
      title: "SAS 9.4 Base Programming",
      subtitle:
        "Certified SAS 9.4 Base Programming Specialist",
      image: require("./assets/images/SAS_certified.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://www.youracclaim.com/badges/9acea936-cf32-4d96-ba8e-ca6570dd78af"
        }
      ]
    },
    {
      title: "LCCI English for Business Level 2",
      subtitle:
        "Country gold awardee (Singapore) of the LCCI English for Business examination in 2011",
      image: require("./assets/images/Logo_LCCI_colour_1.png"),
      footerLink: [
        {
          name: "Certification",
          url:
            "https://qualifications.pearson.com/en/qualifications/lcci/english-language/english-for-business.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url:
        "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open to everyone. Just don't spam =)",
  number: "(310) 871 5629",
  email_address: "lourdes.tupas@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "davidrakosi_", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
