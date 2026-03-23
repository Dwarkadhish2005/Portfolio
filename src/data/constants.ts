// // thoda zada ts ho gya idhar
export enum SkillNames {
  PYTHON = "python",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  VUE = "vue",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  PRETTIER = "prettier",
  NPM = "npm",
  FIREBASE = "firebase",
  WORDPRESS = "wordpress",
  LINUX = "linux",
  DOCKER = "docker",
  NGINX = "nginx",
  AWS = "aws",
  GCP = "gcp",
  VERCEL = "vercel",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.PYTHON]: {
    id: 1,
    name: "python",
    label: "MediaPipe",
    shortDescription: "Framework for real-time hand, face, and pose detection using ML pipelines",
    color: "#00E0D1",
    icon: "https://cdn.simpleicons.org/mediapipe",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "SQL",
    shortDescription: "Language to store, manage, and query structured data in databases",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqldeveloper/sqldeveloper-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "Hadoop",
    shortDescription: "Big data framework for distributed storage (HDFS) and processing (MapReduce)",
    color: "#FF7B00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "AWS",
    shortDescription: "Cloud platform offering computing, storage, and ML services on demand",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "Tableau",
    shortDescription: "Data visualization tool for creating interactive dashboards",
    color: "#E97627",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aframe/aframe-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "TensorFlow",
    shortDescription: "Open-source deep learning framework by Google for building neural networks",
    color: "#FF6F00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Scikit-learn",
    shortDescription: "Python library for machine learning algorithms like regression, classification, clustering",
    color: "#F7931E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Keras",
    shortDescription: "High-level API for building and training deep learning models easily",
    color: "#D00000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Matplotlib",
    shortDescription: "Python library for creating static, animated, and interactive plots",
    color: "#11557C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Power BI",
    shortDescription: "Microsoft tool for business analytics and data visualization",
    color: "#F2C811",
    icon: "https://cdn.simpleicons.org/powerbi",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "Excel",
    shortDescription: "Spreadsheet software for data analysis, calculations, and reporting",
    color: "#217346",
    icon: "https://cdn.simpleicons.org/microsoftexcel",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "HTML",
    shortDescription: "Markup language for structuring web pages",
    color: "#E34C26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "CSS",
    shortDescription: "Styling language for designing and layout of web pages",
    color: "#563D7C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "NumPy",
    shortDescription: "Library for numerical computing with arrays and mathematical functions",
    color: "#4DABCF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "Pandas",
    shortDescription: "Data manipulation and analysis library using DataFrames",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "Docker",
    shortDescription: "Platform to build, ship, and run applications in containers",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Git",
    shortDescription: "Version control system to track code changes",
    color: "#F1502F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "GitHub",
    shortDescription: "Platform to host and collaborate on Git repositories",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux",
    shortDescription: "Open-source operating system used widely for servers and development",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "Oracle SQL",
    shortDescription: "SQL dialect used in Oracle databases for enterprise-level data management",
    color: "#F80000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "SpaCy",
    shortDescription: "NLP library for text processing like tokenization, NER, POS tagging",
    color: "#09A3D5",
    icon: "https://cdn.simpleicons.org/spacy",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "Python",
    shortDescription: "High-level programming language widely used in AI, ML, and development",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.GCP]: {
    id: 23,
    name: "gcp",
    label: "OpenCV",
    shortDescription: "Computer vision library for image and video processing",
    color: "#5C3EE8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "MediaPipe",
    shortDescription: "Framework for real-time perception tasks like gesture and pose detection",
    color: "#00E0D1",
    icon: "https://cdn.simpleicons.org/mediapipe",
  },
};


export type Certification = {
  id: number;
  date: string;
  title: string;
  issuer: string;
  description: string[];
  skills?: SkillNames[];
  link?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 1,
    date: "Sep 2025",
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services",
    description: [
      "Gained foundational knowledge of AWS cloud services, core infrastructure, and security best practices.",
      "Explored key AWS services including EC2, S3, RDS, Lambda, and IAM for building scalable cloud applications.",
    ],
    skills: [SkillNames.AWS],
    link: "https://drive.google.com/file/d/1pqv0eU02V_0h4R7lSReZ16Cphi2KS-8F/view",
  },
  {
    id: 2,
    date: "Aug 2025",
    title: "Oracle SQL Specialist",
    issuer: "Oracle",
    description: [
      "Mastered advanced SQL concepts including complex queries, joins, subqueries, and PL/SQL programming.",
      "Developed expertise in Oracle database management, performance tuning, and stored procedures.",
    ],
    skills: [SkillNames.POSTGRES],
    link: "https://drive.google.com/file/d/15AdgYJu2RSyPzK1RvSbvWqYtl1h1nOlY/view",
  },
  {
    id: 3,
    date: "Apr 2025",
    title: "Cloud Computing",
    issuer: "NPTEL",
    description: [
      "Learned foundational and advanced concepts of cloud infrastructure, virtualization, and distributed systems.",
      "Explored cloud service models (IaaS, PaaS, SaaS) and deployment strategies for scalable applications.",
    ],
    skills: [SkillNames.AWS, SkillNames.GCP, SkillNames.LINUX],
    link: "https://drive.google.com/file/d/1xquPPifOy5GcV0Dd0M5wj87g9SBYA5jX/view",
  },
  {
    id: 4,
    date: "Aug 2024",
    title: "Neural Networks and Deep Learning",
    issuer: "Coursera",
    description: [
      "Studied the mathematical foundations of neural networks, backpropagation, and gradient descent optimization.",
      "Built and trained deep learning models including CNNs and RNNs for image recognition and sequential data tasks.",
    ],
    skills: [],
    link: "https://drive.google.com/file/d/1t_O1LUSiNWvK2A7pXYRUCfEGP4dU7nsq/view",
  },
];
export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

export const ACADEMIC_JOURNEY = [
  {
    id: 1,
    title: "Bachelor of Technology - Computer Science and Engineering; CGPA: 8.86",
    issuer: "Lovely Professional University Phagwara, Punjab",
    date: "Aug ’23 – Jun ’27"
  },
  {
    id: 2,
    title: "Intermediate; Percentage: 81%",
    issuer: "Rajmata Jijau Shikshan Prasarak Mandal Pune, Maharashtra",
    date: "Apr ’22 – Mar ’23"
  },
  {
    id: 3,
    title: "Matriculation; Percentage: 83.3%",
    issuer: "St. Joseph Boys’ High School Pune, Maharashtra",
    date: "Apr ’20 – Mar ’21"
  }
];

export const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Top 4% on LeetCode (Knight Badge)",
    description: "Ranked in the top 4% on LeetCode, earning a Knight badge with a 1908 rating and solving 800+ problems.",
    date: "Feb ’26"
  },
  {
    id: 2,
    title: "Global Rank 9892 on CodeChef (1732 Rating)",
    description: "Achieved Global Rank of 9892 on CodeChef with 1732 rating in competitive programming contests.",
    date: "Nov ’25"
  },
  {
    id: 3,
    title: "5-Star Badge on HackerRank",
    description: "Earned a 5-star badge on HackerRank with 805 pts in Python & SQL and 670 pts in C++.",
    date: "Jan ’25"
  }
];






