// // thoda zada ts ho gya idhar
export enum SkillNames {
  PYTHON = "js",
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
    name: "js",
    label: "Python",
    shortDescription: "Primary language for data engineering, ML, and AI development. 🐍🚀",
    color: "#3776AB",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "SQL",
    shortDescription: "Standard query language to retrieve and manage relational data. 🗄️💡",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/SQL/SQL-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "Apache Hadoop",
    shortDescription: "Distributed framework for storing and processing massive datasets. 🐘⚡",
    color: "#FF7B00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "AWS",
    shortDescription: "Cloud platform — S3, Redshift, Glue, EMR for data engineering. ☁️🔧",
    color: "#FF9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "Tableau",
    shortDescription: "Data visualization tool for dashboards and BI reports. 📊✨",
    color: "#E97627",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg",
  },
  [SkillNames.VUE]: {
    id: 6,
    name: "vue",
    label: "TensorFlow",
    shortDescription: "Google's open-source deep learning framework for neural networks. 🧠🔥",
    color: "#FF6F00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vue/vue-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "Keras",
    shortDescription: "High-level neural network API running on top of TensorFlow. 🤖💫",
    color: "#D00000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Scikit-learn",
    shortDescription: "Python ML library for regression, classification, and clustering. 📐🔬",
    color: "#F7931E",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Matplotlib",
    shortDescription: "Python visualization library for charts, graphs, and plots. 📈🎨",
    color: "#11557C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "Power BI",
    shortDescription: "Microsoft BI tool for building interactive business dashboards. 📊💼",
    color: "#F2C811",
    icon: "https://cdn.simpleicons.org/powerbi",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "Microsoft Excel",
    shortDescription: "Spreadsheet software for data analysis, pivot tables, and reporting. 📋✅",
    color: "#217346",
    icon: "https://cdn.simpleicons.org/microsoftexcel",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "HTML",
    shortDescription: "Markup language used to structure content on web pages. 🌐🏗️",
    color: "#E34C26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "CSS",
    shortDescription: "Stylesheet language used to design and style web pages. 🎨💅",
    color: "#563D7C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "Pandas",
    shortDescription: "Python library for data cleaning, manipulation, and DataFrames. 🐼📊",
    color: "#150458",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.PRETTIER]: {
    id: 15,
    name: "prettier",
    label: "NumPy",
    shortDescription: "Numerical computing library for arrays and math operations in Python. 🔢⚡",
    color: "#4DABCF",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
  },
  [SkillNames.NPM]: {
    id: 16,
    name: "npm",
    label: "Docker",
    shortDescription: "Containerization platform to package and deploy apps consistently. 🐳🚢",
    color: "#2496ED",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 17,
    name: "firebase",
    label: "Git",
    shortDescription: "Version control system to track changes in source code. 🕵️‍♂️🔄",
    color: "#F1502F",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.WORDPRESS]: {
    id: 18,
    name: "wordpress",
    label: "GitHub",
    shortDescription: "Platform for hosting Git repositories and collaborating on projects. 🐙🤝",
    color: "#181717",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Oracle SQL",
    shortDescription: "Enterprise-level SQL for Oracle Database storage and querying. 🏛️🗄️",
    color: "#F80000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "OpenCV",
    shortDescription: "Computer vision library for image and video processing. 👁️📸",
    color: "#5C3EE8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  },
  [SkillNames.NGINX]: {
    id: 21,
    name: "nginx",
    label: "NLTK",
    shortDescription: "Python NLP library for tokenization, stemming, and text processing. 📝🔍",
    color: "#154F3C",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "SpaCy",
    shortDescription: "Advanced NLP library for fast, production-ready language processing. 🚀🧩",
    color: "#09A3D5",
    icon: "https://cdn.simpleicons.org/spacy",
  },
  [SkillNames.GCP]: {
    id: 23,
    name: "gcp",
    label: "Transformers",
    shortDescription: "Hugging Face library for BERT, GPT, T5 and transformer models. 🤗🧠",
    color: "#FFD21E",
    icon: "https://cdn.simpleicons.org/huggingface",
  },
  [SkillNames.VERCEL]: {
    id: 24,
    name: "vercel",
    label: "Linux",
    shortDescription: "OS for servers, cloud systems, and data engineering environments. 🐧⚙️",
    color: "#FCC624",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
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





