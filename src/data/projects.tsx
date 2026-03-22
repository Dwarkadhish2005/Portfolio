import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <span style={{fontSize:'0.75rem',fontWeight:'bold'}}>PT</span>,
  },
  opencv: {
    title: "OpenCV",
    bg: "black",
    fg: "white",
    icon: <span style={{fontSize:'0.75rem',fontWeight:'bold'}}>CV</span>,
  },
  numpy: {
    title: "NumPy",
    bg: "black",
    fg: "white",
    icon: <span style={{fontSize:'0.75rem',fontWeight:'bold'}}>Np</span>,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <span style={{fontSize:'0.75rem',fontWeight:'bold'}}>TF</span>,
  },
  mediapipe: {
    title: "MediaPipe",
    bg: "black",
    fg: "white",
    icon: <span style={{fontSize:'0.75rem',fontWeight:'bold'}}>MP</span>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "psychologist-ai",
    category: "AI / Deep Learning / Multimodal",
    title: "Psychologist AI",
    src: "/assets/projects-screenshots/psychologist-ai/login.png",
    screenshots: ["login.png", "analytics.png", "therapist.png", "user-portal.png"],
    live: "https://github.com/Dwarkadhish2005",
    github: "https://github.com/Dwarkadhish2005",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.mediapipe,
      ],
      backend: [
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.tensorflow,
        PROJECT_SKILLS.numpy,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Psychologist AI – Multimodal Emotion &amp; Personality Analysis System
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Designed and developed a multimodal AI-based psychologist system that analyzes human emotions through facial expressions, voice signals, and textual sentiment to generate a holistic emotional assessment.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/psychologist-ai/login.png`,
              `${BASE_PATH}/psychologist-ai/analytics.png`,
              `${BASE_PATH}/psychologist-ai/therapist.png`,
              `${BASE_PATH}/psychologist-ai/user-portal.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Deep Learning Emotion Recognition</TypographyH3>
          <p className="font-mono mb-2">
            Implemented deep learning emotion recognition models in PyTorch, achieving ~72–78% accuracy for facial emotion detection using CNNs and ~68–75% accuracy for voice emotion recognition using LSTM/GRU architectures.
          </p>

          <TypographyH3 className="my-4 mt-8">Real-Time Vision &amp; Audio Pipelines</TypographyH3>
          <p className="font-mono mb-2">
            Built real-time computer vision and audio processing pipelines using OpenCV, MediaPipe, and librosa, integrating confidence-weighted multimodal fusion techniques to achieve ~80–85% overall accuracy.
          </p>

          <TypographyH3 className="my-4 mt-8">Persistent Psychological Profiling</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li className="font-mono">Maintains long-term user memory and tracks emotional timelines across sessions.</li>
            <li className="font-mono">Models personality traits and generates adaptive, therapy-inspired responses.</li>
            <li className="font-mono">Integrates Transformers and NLP for deep textual sentiment analysis.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, PyTorch, OpenCV, MediaPipe, Transformers, NLP, Deep Learning, Computer Vision.
          </p>
        </div>
      );
    },
  },
  {
    id: "face-recognition-attendance",
    category: "Computer Vision / Cloud",
    title: "Face Recognition Attendance System",
    src: "/assets/projects-screenshots/face-attendance/supabase-dashboard.png",
    screenshots: ["supabase-dashboard.png", "student-database.png", "storage-bucket.png"],
    live: "https://github.com/Dwarkadhish2005",
    github: "https://github.com/Dwarkadhish2005",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.numpy,
      ],
      backend: [
        PROJECT_SKILLS.supabase,
        PROJECT_SKILLS.postgres,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Real-Time Face Recognition Student Attendance System
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Architected a real-time face recognition attendance system using Python, OpenCV, and face_recognition, achieving ≈95% identification accuracy in live classroom environments under standard lighting conditions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/face-attendance/supabase-dashboard.png`,
              `${BASE_PATH}/face-attendance/student-database.png`,
              `${BASE_PATH}/face-attendance/storage-bucket.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">Cloud Backend</TypographyH3>
          <p className="font-mono mb-2">
            Constructed a Supabase (PostgreSQL + Storage) cloud backend to manage student data, images, and attendance logs with &lt;100 ms query response time and automated timestamp-based tracking.
          </p>

          <TypographyH3 className="my-4 mt-8">Recognition Pipeline</TypographyH3>
          <p className="font-mono mb-2">
            Orchestrated a facial recognition and matching pipeline with local serialization and cloud image storage, along with a 40-second anti-duplicate cooldown mechanism to ensure reliable attendance marking.
          </p>

          <TypographyH3 className="my-4 mt-8">Interactive UI</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li className="font-mono">Interactive computer vision interface using OpenCV and cvzone.</li>
            <li className="font-mono">Dynamically displays student data and system states in real time.</li>
            <li className="font-mono">Fully automated attendance workflow for live classroom environments.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, OpenCV, face_recognition, Supabase (PostgreSQL &amp; Storage), NumPy, Pickle.
          </p>
        </div>
      );
    },
  },
  {
    id: "intersection-motion-detection",
    category: "Computer Vision / Deep Learning",
    title: "Intersection Motion Detection & Object Tracking",
    src: "/assets/projects-screenshots/intersection-motion/tracking-view.png",
    screenshots: ["tracking-view.png", "terminal-output.png"],
    live: "https://github.com/Dwarkadhish2005",
    github: "https://github.com/Dwarkadhish2005",
    skills: {
      frontend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.opencv,
        PROJECT_SKILLS.numpy,
      ],
      backend: [
        PROJECT_SKILLS.tensorflow,
        PROJECT_SKILLS.pytorch,
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Intersection Motion Detection &amp; Object Tracking
          </TypographyP>
          <TypographyP className="font-mono mt-4">
            Created a deep learning-based landscape image classification system using transfer learning with EfficientNetV2-B0, categorizing images into 5 classes: Coast, Desert, Forest, Glacier, and Mountain. Combined with a real-time intersection motion detection and object tracking pipeline.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/intersection-motion/tracking-view.png`,
              `${BASE_PATH}/intersection-motion/terminal-output.png`,
            ]}
          />

          <TypographyH3 className="my-4 mt-8">EfficientNetV2-B0 Architecture</TypographyH3>
          <p className="font-mono mb-2">
            Applied an EfficientNetV2-B0 backbone pre-trained on ImageNet with a custom softmax classifier head, optimizing 128×128 input resolution for improved computational efficiency and faster convergence.
          </p>

          <TypographyH3 className="my-4 mt-8">Real-Time Object Tracking</TypographyH3>
          <p className="font-mono mb-2">
            Built a real-time vehicle detection and tracking pipeline using OpenCV BackgroundSubtractorMOG2, with multi-line intersection counting at 29 FPS — logging each car&apos;s timestamp and line crossing event.
          </p>

          <TypographyH3 className="my-4 mt-8">Data Pipeline &amp; Results</TypographyH3>
          <ul className="list-disc ml-6 space-y-2 mb-4">
            <li className="font-mono">Trained on 12,000 balanced images with a 20% validation split and batch size of 32 using image_dataset_from_directory.</li>
            <li className="font-mono">~93.4% training accuracy and ~86.2% validation accuracy, improving baseline by ~3.1% via fine-tuning.</li>
            <li className="font-mono">Automated preprocessing, validation monitoring, and hyperparameter optimization workflow.</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Python, OpenCV, NumPy, Pandas, TensorFlow/Keras, EfficientNetV2, cv2 BackgroundSubtractorMOG2, Video Processing.
          </p>
        </div>
      );
    },
  },
];
export default projects;

