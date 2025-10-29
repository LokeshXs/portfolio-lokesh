export const PROJECT_KEY_CHALLENGES = [
  {
    name: "Hello Pet Dreams",
    slug: "hellopetdreams",
    website: "https://hellopetdreams.com/",
    summary: (
      <span>
        <b>Hello Pet Dreams is an AI-powered web platform</b> that transforms
        pet photos into stunning, themed digital portraits. Built using Next.js,
        Tailwind CSS, and Firebase Cloud Functions, the app allows users to
        upload their pet’s image, choose from a wide range of creative styles,
        and instantly generate high-quality artwork. Launched on Product Hunt,{" "}
        <b>Hello Pet Dreams achieved #5 Product of the Day,</b> gaining strong
        user traction and community appreciation for its design, innovation, and
        emotional appeal.
      </span>
    ),

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

        challenge:
          "I needed a reliable and affordable way to store user-generated images. After exploring Cloudinary and ImageKit, I found their free tiers too limited and paid plans costly.",
        solution: (
          <span className=" text-muted-foreground">
            I chose <b>AWS S3</b> for scalable object storage and integrated it
            by generating <b>pre-signed URLs</b> for secure uploads.{" "}
            <b>I also optimized image delivery using AWS CloudFront</b>, a CDN
            that caches images globally for faster access and lower costs. This
            helped me gain hands-on experience with cloud storage similar to
            large-scale tech setups.
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
            I implemented <b>webhooks</b>, which are public endpoints that allow
            external services to send data to my application. I created three
            webhook endpoints — for Clerk user signup, payment status updates,
            and cloud function image generation updates — ensuring seamless data
            synchronization across the system.
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
            I went through the official docs and experimented with smaller
            stores before integrating Zustand into the main project. Eventually,
            I learned how to manage global states (like user credits, selected
            styles, and UI modals) efficiently using Zustand’s minimal API —
            achieving cleaner, faster, and more maintainable code than Redux.
          </span>
        ),
      },
    ],
  },

  {
    name: "1Beatclub",
    slug: "1beatclub",
    website: "https://1beatclub.com/",
    summary: (
      <span>
        <b>1BeatClub</b> is a real-time music collaboration platform that lets
        users create clubs, add songs, and vote together to decide what plays
        next — making group listening fun and interactive. Built with{" "}
        <b>WebSockets</b> for instant sync and an optimized global state system,
        it ensures seamless live updates across all members.
      </span>
    ),

    challengesAndSolutions: [
      {
        label:
          "Implementing Real-Time Communication for Voting and Song Updates",
        challenge:
          "I faced a challenge in enabling real-time communication between club owners and members to display live voting feedback and next song updates without overloading the server. Since this feature was core to the user experience, relying on traditional polling (refetching every few seconds) would have resulted in unnecessary network overhead and slower updates.",
        solution: (
          <span className=" text-muted-foreground">
            I implemented <b>WebSockets</b>, the standard protocol for real-time
            communication. Using the ws library, I built the logic from
            scratch—creating rooms, managing per-user connections, and ensuring
            that events were emitted only to relevant users. This approach
            provided low-latency updates and efficient state management.
          </span>
        ),
      },
      {
        label: "Fixing Infinite Re-Fetching Issue in React Query Integration",
        challenge:
          "While implementing a React Query function to fetch the clubs created by a user, I encountered an issue where the query kept re-fetching every few seconds. The problem occurred because I used the WebSocket client instance as part of the queryKey. Since the WebSocket emitted new events continuously, the key changed frequently, triggering infinite re-fetching",
        solution: (
          <span className=" text-muted-foreground">
            I stabilized the query by using a static query key and removing the
            WebSocket client reference from it. Additionally,{" "}
            <b>
              I disabled refetchOnWindowFocus to prevent unnecessary re-fetches
              when the user switched tabs
            </b>
            . I retained a conditional check to ensure data is fetched only
            after the WebSocket connection is established, resulting in
            efficient and stable data fetching.
          </span>
        ),
      },
      {
        label: "Improving WebSocket Connection Stability on Tab Inactivity",

        challenge:
          "I noticed that when switching browser tabs, the WebSocket connection would drop after a period of inactivity, even though a ping-pong mechanism was implemented. This caused critical failures in the application, as real-time updates and communication were lost once the connection closed.",
        solution: (
          <span className=" text-muted-foreground">
            I enhanced the connection persistence by implementing a reconnection
            strategy. Using browser event listener <b>Visibilitystate</b>, I
            detected when a tab regained focus and{" "}
            <b>
              automatically re-established the WebSocket connection without
              requiring a full page reload
            </b>
            . Additionally, I ensured consistent heartbeat pings to prevent idle
            timeouts, resulting in a more stable and resilient real-time
            experience.
          </span>
        ),
      },
      {
        label: "Enhancing Voting System with Optimistic UI and Real-Time Sync",
        challenge:
          "Initially, I handled the voting feature by toggling between “upvote” and “downvote” actions through direct server calls. However, this caused delays and occasional inconsistencies between the client and server state, as database updates weren’t reflected instantly on the frontend.",
        solution: (
          <span className=" text-muted-foreground">
            I redesigned the voting logic to{" "}
            <b>implement optimistic UI updates</b>, allowing instant feedback to
            the user before the server confirmed the change. I then integrated
            WebSocket communication with server actions to synchronize the state
            in real time, ensuring a smooth, responsive, and reliable voting
            experience across all clients.
          </span>
        ),
      },
      {
        label: "Maintaining Consistent Song Order and Vote Synchronization",
        challenge:
          "I faced a challenge in keeping the song list consistent in both order and vote count across all members. Randomized ordering after page reloads or updates created confusion and degraded the overall user experience.",
        solution: (
          <span className=" text-muted-foreground">
            I implemented a client-side sorting mechanism that reorders the
            songs dynamically whenever a song is added, upvoted, downvoted, or
            removed. The sorting logic prioritizes songs by vote count, followed
            by alphabetical order (for ties), and finally by the timestamp of
            when the song was added. This approach ensured predictable,
            synchronized, and user-friendly song ordering in real time.
          </span>
        ),
      },
    ],
  },
  {
    name: "Urlbit",
    slug: "urlbit",
    website: "https://urlbit.vercel.app/",
    summary: (
      <span>
        <b>URLBit</b> is a fast, secure, and user-friendly URL shortener designed to help users create, manage, and track shortened links effortlessly. Built with a focus on performance and simplicity, it provides analytics for every shortened link — including total clicks and timestamps.
      </span>
    ),

    challengesAndSolutions: [
      {
        label:
          "Managing Environment Variables in Go",
        challenge:
          "Unlike Node.js, Go does not provide a built-in way to access environment variables using process.env. This made it challenging to manage configuration values securely and consistently across different environments.",
        solution: (
          <span className=" text-muted-foreground">
            I integrated the <b>godotenv</b> package, a standard library for handling environment variables in Go. By loading the .env file and accessing variables through the <b>os.Getenv()</b> method, I was able to efficiently manage configuration data while keeping sensitive information secure and separated from the codebase.
          </span>
        ),
      },
      {
        label: "Implementing Authentication and User Authorization with Clerk in Go",
        challenge:
          "While integrating Clerk for authentication, I needed a reliable way to retrieve and parse JWT tokens on the backend to identify the user’s ID and fetch data from protected routes. Initially, it was unclear how to securely access and verify the token within Go’s backend environment.",
        solution: (
          <span className=" text-muted-foreground">
          After researching <b>Clerk’s Go SDK</b>, I implemented their official library to validate and parse JWT tokens. Using the documentation, I successfully extracted user information and created a custom middleware to authenticate requests and block unauthorized access, ensuring secure endpoint protection.
          </span>
        ),
      },
      {
        label: "Integrating and Optimizing PostgreSQL Database in Go",

        challenge:
          "I faced a challenge integrating a database with my Go application to store and manage user data efficiently. Unlike frameworks in other languages, Go requires explicit handling of database connections, making setup and query execution slightly complex initially.",
        solution: (
          <span className=" text-muted-foreground">
        I integrated <b>PostgreSQL</b> using its official <b>Go driver</b> and the built-in <b>database/sql</b> package to perform CRUD operations. Additionally, I implemented a connection pool manager to configure maximum open and idle connections, optimizing database performance and preventing overload under heavy request loads.
          </span>
        ),
      },
      {
        label: "Implementing Efficient Pagination for User URLs",
        challenge:
          "I faced a challenge while implementing pagination to fetch user URLs in manageable chunks instead of retrieving all data at once. The main difficulty was ensuring that pagination occurred at the database level, as fetching all records first and then slicing them in the backend would defeat the purpose of optimization.",
        solution: (
          <span className=" text-muted-foreground">
          I utilized <b>PostgreSQL’s OFFSET and LIMIT clauses in SQL queries to retrieve only the required subset of data per request.</b> This approach allowed efficient data retrieval, reduced memory usage, and significantly improved API response times by sending only the necessary records to the client.
          </span>
        ),
      },
      {
        label: "Handling Race Conditions in Rate Limiting Logic",
        challenge:
          "While implementing rate limiting on the endpoint responsible for generating short URLs, I encountered a concurrency issue. Since the Gin framework spawns multiple goroutines to handle requests, simultaneous updates to a shared map (used for tracking request counts per user) caused race conditions, leading to inconsistent data and potential memory crashes.",
        solution: (
          <span className=" text-muted-foreground">
          I resolved this issue by using the <b>sync.Mutex feature from Go’s standard library to synchronize access to the shared map</b>. By locking the critical section during updates, I ensured that only <b>one goroutine could modify the data at a time</b>, effectively preventing race conditions and ensuring thread-safe rate limiting.
          </span>
        ),
      },
    ],
  },
];
