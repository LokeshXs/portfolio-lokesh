import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Lokesh Singh",
  initials: "LS",
  // url: "https://dillion.io",
  location: "Rajasthan, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a software engineer and I love building things for users. Very active on Twitter.",
  summary:
    "Hello! I am a full-stack software developer with over two years of experience.[I have worked on several exciting projects](/#projects), with my most recent being [Hello Pet Dreams](https://hellopetdreams.com/). I hold a Bachelor of Science in Computer Science from BITS Pilani. Additionally, I am a member of the [100XDevs Community](https://app.100xdevs.com/), where I help people learn to code and resolve bugs.",
  avatarUrl: "/me.jpg",
  skills: [
    "React.js",
    "Next.js",
    "Expo",
    "React Native",
    "JavaScript",
    "Typescript",
    "Node.js",
    "Prisma",
    "Postgres",
    "Mongo DB",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "https://hashnode.com/@Lokesh1129", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "lokesh1129ece@gmail.com",
    tel: "+91-9499424869",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/LokeshXs",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/lokeshsingh1129/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/singh_loke28577",
        icon: Icons.x,

        navbar: true,
      },
      PeerList: {
        name: "PeerList",
        url: "https://peerlist.io/lokeshs",
        icon: Icons.peerlist,
        navbar: true,
      },
    },
  },

  work: [
    // {
    //   company: "HCL Technologies",
    //   href: "https://www.hcltech.com/",
    //   badges: [],
    //   location: "Remote",
    //   title: "Software Engineer",
    //   logoUrl: "/job/hcl.png",
    //   start: "Sep 2021",
    //   end: "Present",
    //   description:
    //     "",
    // },
    {
      company: "Anupaat Nivesh",
      badges: [],
      href: "https://anupaatnivesh.com/",
      location: "Remote",
      title: "Frontend Engineer Intern",
      logoUrl: "/job/anupaat.png",
      start: "Mar 2023",
      end: "Aug 2023",
      description: "",
    },
    {
      company: "Tailor Talk",
      href: "https://tailortalk.ai/",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer Intern",
      logoUrl: "/job/tailortalk.png",
      start: "Dec 2023",
      end: "Jan 2024",
      description: "",
    },
    {
      company: "Huellas Labs",
      href: "https://www.huellaslabs.com/",
      badges: [],
      location: "Remote",
      title: "Frontend Engineer",
      logoUrl: "/job/huellas.svg",
      start: "Mar 2024",
      end: "May 2025",
      description: "",
    },
  ],
  education: [
    {
      school: "BITS Pilani",
      href: "https://www.bits-pilani.ac.in/",
      degree: "Bsc. Computer Science",
      logoUrl: "/edu/bits.png",
      start: "2021",
      end: "2025",
    },
  ],
  projects: [
    {
          title: "Hello Pet Dreams",
      href: "https://hellopetdreams.com/",
      dates: "May 2025 -June 2025",
      active: true,
      description:
        "Hello Pet Dreams is a a fun and creative platform that transforms your pet's photo into stunning AI-generated portraits in styles like king, ninja, rockstar, and many more — because pets deserve their moment to shine too! ",
      technologies: [
        "Next.js",
        "Typescript",
        "AWS S3",
        "AWS Cloudfront",
        "Firebase Serverless Functions",
        "Clerk",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Webhooks",
      ],
      links: [
        {
          type: "Website",
          href: "https://hellopetdreams.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/hellopetdreams.mp4",  
    },
    {
      title: "1BeatClub",
      href: "https://www.1beatclub.com/",
      dates: "Oct 2024 -Nov 2024",
      active: true,
      description:
        "1BeatClub is a collaborative music platform. Where you can Create a music room, invite friends, add song links, and vote for the songs you love. No interruptions, just seamless music tailored to everyone's vibe—perfect for parties, gyms, and beyond!",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "WebSockets",
        "Google APIs",
        "Next Auth",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.1beatclub.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/1beatclub.mp4",
    },
    {
      title: "ContriCreator",
      href: "https://contricreator.space/",
      dates: "Dec 2024 -Mar 2025",
      active: true,
      description:
        "ContriCreator is your all-in-one AI platform for creators that help you create, analyze, and grow faster. Design thumbnails, extract insights, and streamline your creative workflow—powered by GPT, Gemini, and more.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "AWS S3",
        "Gemini APIs",
        "ChatGPT APIs",
        "Google APIs",
        "Next Auth",
        "LemonSqueezy",
        "Webhooks",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://contricreator.space/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/contricreator.mp4",
    },
    {
      title: "Anuppat Nivesh",
      href: "https://anupaat-nivesh-revamp.vercel.app/",
      dates: "Aug 2024 - Aug 2024",
      active: true,
      description:
        "I developed a professional and dynamic website for an investment consultancy. This website serves as a platform for the business to showcase its services, build credibility, and connect with potential clients.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://anupaat-nivesh-revamp.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/LokeshXs/anupaat-nivesh-revamp",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/anupaatnivesh.mp4",
    },
    // {
    //   title: "Chat Application",
    //   href: "https://chat-app-personal-project.ashwacreations.com/",
    //   dates: "June 2024 - July 2024",
    //   active: true,
    //   description:
    //     "I built a fully functional real-time chat application using the MERN stack. This application enables users to connect seamlessly and communicate in real-time, ensuring an engaging and interactive user experience.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Next-Auth",
    //     "Node.js",
    //     "Websockets",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Shadcn UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://chat-app-personal-project.ashwacreations.com/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/LokeshXs/chat-app-next.js.git",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "/projects/chatapp.mp4",
    // },
    // {
    //   title: "Time Syncer",
    //   href: "https://time-syncer.vercel.app/",
    //   dates: "Feb 2024 - Feb 2024",
    //   active: true,
    //   description:
    //     "A web application that allows users to view the current time across multiple regions worldwide. Built with the MERN stack, this application provides an intuitive interface and accurate time updates for various time zones.",
    //   technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://time-syncer.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/LokeshXs/TimeSyncer",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "/projects/timesyncer.mp4",
    // },
    // {
    //   title: "Aashiyana Ave",
    //   href: "https://aashiyanaave.netlify.app/",
    //   dates: "Jan 2024 - Mar 2024",
    //   active: true,
    //   description:
    //     "Developed a feature-rich web application for listing properties for sale. This platform provides a seamless experience for property owners to showcase their listings and for potential buyers to browse and inquire about properties.",
    //   technologies: [
    //     "React.js",
    //     "Javascript",
    //     "CSS Modules",
    //     "MUI",
    //     "Node.js",
    //     "Mongo DB",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://aashiyanaave.netlify.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "/projects/aashiyana.mp4",
    // },
    {
      title: "GD Invest",
      href: "https://gd-invest.vercel.app/",
      dates: "May 2023 - June 2023",
      active: true,
      description:
        "I designed and developed a professional web application for an investment consultancy. This platform is tailored to showcase the company’s expertise and services while providing an engaging and user-friendly experience for potential clients.",
       technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind css",
        "Shadcn",
        "Motion.dev",
      ],
      links: [
        {
          type: "Website",
          href: "https://gd-invest.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/gdinvest.mp4",
    },
    // {
    //   title: "Acid Dyes Website",
    //   href: "https://shubham-industries.vercel.app/",
    //   dates: "Jan 2025 - Feb 2025",
    //   active: true,
    //   description:
    //     "Partnered with Shubham Industries to design and develop a modern, responsive website that reflects their commitment to quality and innovation. The goal was to create a strong digital presence that effectively communicates their brand values, product range, and global credibility.",
    //   technologies: [
    //     "Next.js",
    //     "TypeScript",
    //     "Tailwind css",
    //     "Shadcn",
    //     "Motion.dev",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://shubham-industries.vercel.app/",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "/projects/shubhamIndustries.mp4",
    // },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} ;
