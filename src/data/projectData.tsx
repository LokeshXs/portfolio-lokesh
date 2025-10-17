export const PROJECT_KEY_CHALLENGES = [
  { 
    name:"Hello Pet Dreams",
    slug: "hellopetdreams",
    website:"https://hellopetdreams.com/",
    summary:<span><b>Hello Pet Dreams is an AI-powered web platform</b> that transforms pet photos into stunning, themed digital portraits. Built using Next.js, Tailwind CSS, and Firebase Cloud Functions, the app allows users to upload their pet’s image, choose from a wide range of creative styles, and instantly generate high-quality artwork. Launched on Product Hunt, <b>Hello Pet Dreams achieved #5 Product of the Day,</b> gaining strong user traction and community appreciation for its design, innovation, and emotional appeal.</span>,

    challengesAndSolutions: [
      {
        label: "Vercel Edge function Timeout on Image Generation",
        challenge:
          "Vercel’s Edge Functions (on the Hobby plan) have a strict 60-second timeout limit, but AI image generation often exceeded that duration, causing failed requests.",
        solution: (
          <span className=" text-muted-foreground">
            Moved the image generation logic to a dedicated Cloud Function
            (Firebase Cloud Functions), allowing longer execution times and
            better reliability for queued image tasks. I decided to use Firebase
            Cloud Functions instead of upgrading to Vercel’s Pro plan, as it’s
            more cost-effective for the initial stage — offering a free tier{" "}
            <b>
              (up to 2M invocations/month) and only $0.40 per million
              thereafter.
            </b>{" "}
            For future scalability, I’ve also implemented a server action to
            handle image generation via Vercel Edge Functions.
          </span>
        ),
      },
      {
        label:
          "Improved slow gallery updates by using React’s useOptimistic hook for instant UI feedback.",
        challenge:
          "When a user successfully generated an image, they had the option to add it to the public gallery. This triggered a server action that took time to complete, causing a noticeable delay and making the UI feel sluggish while the request was processing.",
        solution: (
          <span className=" text-muted-foreground">
            To improve the user experience, I implemented React’s{" "}
            <b>useOptimistic</b> hook, which allows the UI to update instantly
            while the network request runs in the background. This made the
            interaction feel smooth and responsive, giving users immediate
            feedback without waiting for the server response.
          </span>
        ),
      },
           {
        label:
          "Implemented AWS S3 with CloudFront for efficient, scalable, and cost-effective image storage.",
          
        challenge: "I needed a reliable and affordable way to store user-generated images. After exploring Cloudinary and ImageKit, I found their free tiers too limited and paid plans costly.",
        solution: (
          <span className=" text-muted-foreground">
            I chose <b>AWS S3</b> for scalable object storage and integrated it by generating <b>pre-signed URLs</b> for secure uploads. <b>I also optimized image delivery using AWS CloudFront</b>, a CDN that caches images globally for faster access and lower costs. This helped me gain hands-on experience with cloud storage similar to large-scale tech setups.
          </span>
        ),
      },
         {
        label:
          "Integrated real-time updates using webhooks for user signup, payments, and image generation status.",
        challenge:
          "I faced challenges integrating real-time updates between different services. Since I used Clerk for authentication, I needed a way to automatically update my database when a new user signed up. Similar issues arose while handling payment confirmations and updating image generation status once the cloud function completed.",
        solution: (
          <span className=" text-muted-foreground">
            I implemented <b>webhooks</b>, which are public endpoints that allow external services to send data to my application. I created three webhook endpoints — for Clerk user signup, payment status updates, and cloud function image generation updates — ensuring seamless data synchronization across the system.
          </span>
        ),
      },
        {
        label:
          "Shifted from Redux to Zustand for cleaner, faster, and simpler state management.",
        challenge:
          "I had previously used Redux for state management, but for this project, I decided to explore Zustand to simplify the setup and reduce boilerplate. Initially, understanding its store structure and how to persist and share state across components felt different compared to Redux’s reducer-based approach.",
        solution: (
          <span className=" text-muted-foreground">
           I went through the official docs and experimented with smaller stores before integrating Zustand into the main project. Eventually, I learned how to manage global states (like user credits, selected styles, and UI modals) efficiently using Zustand’s minimal API — achieving cleaner, faster, and more maintainable code than Redux.
          </span>
        ),
      },
    ],
  },
];
