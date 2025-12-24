import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Lokesh Singh",
  initials: "LS",
  url: "https://lokesh-singh.vercel.app",
  location: "Rajasthan, India",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "I am a software engineer and I love building things for users. Very active on Twitter.",
  summary:
    "Hello! I am a full-stack software developer with over 4 years of experience.[I have worked on several exciting projects](/#projects), with my most recent being [Hello Pet Dreams](https://hellopetdreams.com/). I hold a Bachelor of Science in Computer Science from BITS Pilani. Additionally, I am a member of the [100XDevs Community](https://app.100xdevs.com/), where I help people learn to code and resolve bugs.",
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
        url: "https://x.com/ShipItLokesh",
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
    // {
    //   company: "Anupaat Nivesh",
    //   badges: [],
    //   href: "https://anupaatnivesh.com/",
    //   location: "Remote",
    //   title: "Frontend Engineer Intern",
    //   logoUrl: "/job/anupaat.png",
    //   start: "Mar 2023",
    //   end: "Aug 2023",
    //   description: "",
    // },
    // {
    //   company: "Tailor Talk",
    //   href: "https://tailortalk.ai/",
    //   badges: [],
    //   location: "Remote",
    //   title: "Frontend Engineer Intern",
    //   logoUrl: "/job/tailortalk.png",
    //   start: "Dec 2023",
    //   end: "Jan 2024",
    //   description: "",
    // },
    // {
    //   company: "Huellas Labs",
    //   href: "https://www.huellaslabs.com/",
    //   badges: [],
    //   location: "Remote",
    //   title: "Frontend Engineer",
    //   logoUrl: "/job/huellas.svg",
    //   start: "Mar 2020",
    //   end: "May 2021",
    //   description: "",
    // },
    {
      company: "HCL Technologies",
      href: "https://www.hcltech.com/",
      badges: [],
      location: "Hybrid",
      title: "Full-Stack Engineer",
      logoUrl: "/job/HCLTech.png",
      start: "Sep 2021",
      end: "Present",
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
      title: "1BeatClub V2",
      href: "https://www.1beatclub.in/",
      dates: "Aug 2025 -Oct 2025",
      active: true,
      detailsPath: "/project/1beatclub",
      description:
        "1Beatclub lets groups create shared music rooms where everyone can add and upvote songs to decide what plays next. The redesigned version focuses on simplicity — with a cleaner interface, seamless real-time syncing, and smarter interactions that make discovering and enjoying music together effortless.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "WebSockets",
        "Google APIs",
        "AWS",
        "Clerk",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.1beatclub.in/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/LokeshXs/1BeatClub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/twwu6y24i/1Beatclub.mp4?updatedAt=1761312776096",
      achievement: ["🏆 #10 on PH", "🧑‍🦰 150+ Users"],
      images: [
        "/projects/1beatclub/img1.png",
        "/projects/1beatclub/img2.png",
        "/projects/1beatclub/img3.png",
        "/projects/1beatclub/img4.png",
        "/projects/1beatclub/img5.png",
        "/projects/1beatclub/img6.png",
        "/projects/1beatclub/img7.png",
        "/projects/1beatclub/img8.png",
        "/projects/1beatclub/img9.png",
        "/projects/1beatclub/img10.png",
        "/projects/1beatclub/img11.png",
      ],
    },
    {
      title: "Hello Pet Dreams",
      href: "https://hellopetdreams.com/",
      dates: "May 2025 -June 2025",
      detailsPath: "/project/hellopetdreams",
      active: true,
      description:
        "Hello Pet Dreams is a a fun and creative platform that transforms your pet's photo into stunning AI-generated portraits in styles like king, ninja, rockstar, and many more. ",
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
      achievement: ["🏆 #5 on PH", "🧑‍🦰 300+ Users"],
      images: [
        "/projects/hellopetdreams/img1.png",
        "/projects/hellopetdreams/img2.png",
        "/projects/hellopetdreams/img3.png",
        "/projects/hellopetdreams/img4.png",
        "/projects/hellopetdreams/img5.png",
        "/projects/hellopetdreams/img6.png",
        "/projects/hellopetdreams/img7.png",
        "/projects/hellopetdreams/img8.png",
      ],
    },
    {
      title: "Urlbit",
      href: "https://urlbit.vercel.app/",
      dates: "Sep 2025 - Oct 2025",
      active: true,
      detailsPath: "/project/urlbit",
      description:
        "Urlbit is a fast, secure, and user-friendly URL shortener designed to help users create, manage, and track shortened links effortlessly. Built with a focus on performance and simplicity, it provides  analytics for every shortened link — including total clicks and timestamps.",
      technologies: [
        "Next.js",
        "Typescript",
        "Go-Lang",
        "Gin",
        "AWS",
        "Clerk",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://urlbit.space/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/LokeshXs/urlbit_url-shortener",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/urlbit.mp4",
      achievement: [],
      images: [
        "/projects/urlbit/img1.png",
        "/projects/urlbit/img2.png",
        "/projects/urlbit/img3.png",
        "/projects/urlbit/img4.png",
        "/projects/urlbit/img5.png",
      ],
    },
    {
      title: "Modern Portfolio Template",
      href: "https://minimal-portfolio-template-by-lokesh.vercel.app/",
      dates: "Aug 2025 -Aug 2025",
      active: true,
      description:
        "A sleek and minimal portfolio template built with Next.js and Tailwind CSS. Features smooth motion animations, responsive layouts, and clean UI — perfect for developers and designers looking to showcase their work in style.",
      technologies: [
        "Next.js",
        "Typescript",
        "Tailwind css",
        "Motion",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://minimal-portfolio-template-by-lokesh.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Github",
          href: "https://github.com/LokeshXs/Minimal-Portfolio-Template",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://ik.imagekit.io/twwu6y24i/Lokesh's%20portfolio%20video.mp4?updatedAt=1761401521618",
      achievement: [],
      images: [
        "/projects/1beatclub/img1.png",
        "/projects/1beatclub/img2.png",
        "/projects/1beatclub/img3.png",
        "/projects/1beatclub/img4.png",
        "/projects/1beatclub/img5.png",
        "/projects/1beatclub/img6.png",
        "/projects/1beatclub/img7.png",
        "/projects/1beatclub/img8.png",
        "/projects/1beatclub/img9.png",
        "/projects/1beatclub/img10.png",
        "/projects/1beatclub/img11.png",
      ],
    },
    {
      title: "Film Stash",
      href: "https://film-stash.vercel.app/",
      dates: "July 2025 -July 2025",
      active: true,
      description:
        "FilmStash is a modern movie exploration app that lets users discover, save, and organize their favorite movies to watch later — all in one place. Designed with a clean, intuitive interface, the app makes it easy to browse trending films, and build a personal watchlist that’s always just a tap away. ",
      technologies: [
        "React Native",
        "Expo",
        "Nativewind",
        "Typescript",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://film-stash.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/filmstash.mp4",
      achievement: [],
    },
    {
      title: "1BeatClub",
      href: "https://www.v1.1beatclub.com/",
      dates: "Oct 2024 -Nov 2024",
      detailsPath: "/project/v1_1beatclub",
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
          href: "https://www.v1.1beatclub.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/projects/1beatclub.mp4",
      achievement: ["🏆 #10 on PH", "🧑‍🦰 150+ Users"],
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
      achievement: [],
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
      achievement: [],
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
      achievement: [],
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

  testimonials: [
    {
      content:
        "Lokesh successfully developed our product website and console application. Throughout this period, he demonstrated strong ownership, sincerity, and a genuine willingness to learn and contribute",
      name: "Shiva Verma",
      designation: "(Founder - Tailor Talk)",
      profileImg: "/testimonial/shiva.webp",
    },
    {
      content:
        "Working with Lokesh was a good Experience. Was impressed by the designs and website that he created for us. I just brought my ideas and he handled the rest. Nice work!!!",
      name: "Gagandeep Goyal",
      designation: "(CTO - GDInvest)",
      profileImg: "/testimonial/gagan.jpg",
    },
    {
      content:
        "Lokesh has developed a website for my online agency and exceeded all expectations. He demonstrated remarkable professionalism, technical proficiency, and exemplary communication skills. Lokesh's exceptional talent, efficiency, and commitment to customer satisfaction make him an invaluable asset to our team.",
      name: "Aleksandrs",
      designation: "(Founder - Webta)",
      profileImg: "/testimonial/alek.jpg",
    },
    {
      content:
        "Thanks to Lokesh, our investment consultancy now has a sleek and professional website that perfectly captures our services. He exceeded our expectations with their expertise and attention to detail.",
      name: "Akash Garg",
      designation: "(Founder - Anupaat Nivesh)",
      profileImg: "/testimonial/akash.webp",
    },
    {
      content:
        "As a Frontend Engineer at HuellasLabs, Lokesh consistently delivered high-quality, client-focused solutions. His ability to quickly adapt to project requirements and build seamless user interfaces made him a valuable contributor to our service delivery",
      name: "Jaydeep Kumar",
      designation: "(Co-Founder - Huellas Labs)",
      profileImg: "/testimonial/jaydeep.jpg",
    },
  ],
};
