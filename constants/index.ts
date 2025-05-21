export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2025-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2025-03-14T15:30:00Z",
  },
];

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const generator = {
  name: "interview_prep_mock",
  nodes: [
    {
      name: "start",
      type: "conversation",
      isStart: true,
      metadata: {
        position: {
          x: 0,
          y: 0
        }
      },
      prompt: "Greet the user and help them create a new AI Interviewer.",
      voice: {
        model: "aura-2",
        voiceId: "helena",
        provider: "deepgram"
      },
      variableExtractionPlan: {
        output: [
          {
            title: "level",
            description: "The job experience level. - string - you can add enum values to make sure the data stays consistent",
            type: "string",
            enum: [
              "entry",
              "mid",
              "senior"
            ]
          },
          {
            title: "amount",
            description: "How many questions would you like to generate? ",
            type: "number",
            enum: []
          },
          {
            title: "techstack",
            description: "A list of technologies to cover during the job interview. For example, React, Next.js, Express.js, Node and so on…",
            type: "string",
            enum: []
          },
          {
            title: "role",
            description: "What role should would you like to train for? For example Frontend, Backend, Fullstack, Design, UX? ",
            type: "string",
            enum: []
          },
          {
            title: "type",
            description: "What type of the interview should it be? ",
            type: "string",
            enum: [
              "behavioural",
              "technical",
              "mixed"
            ]
          }
        ]
      },
      messagePlan: {
        firstMessage: ""
      }
    },
    {
      name: "conversation_1747781119006",
      type: "conversation",
      metadata: {
        position: {
          x: -0.24001685159279873,
          y: 328.8856612247125
        }
      },
      prompt: "Say that the Interview will be generated shortly.",
      voice: {
        provider: "deepgram",
        voiceId: "thalia",
        model: "aura-2"
      }
    },
    {
      name: "apiRequest_1747781206347",
      type: "apiRequest",
      metadata: {
        position: {
          x: -0.14578266145269936,
          y: 547.2191305704621
        }
      },
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate`,
      headers: {
        type: "object",
        properties: {}
      },
      body: {
        type: "object",
        properties: {
          role: {
            type: "string",
            description: "",
            value: "{{ role }}"
          },
          level: {
            type: "string",
            description: "",
            value: "{{ level }}"
          },
          type: {
            type: "string",
            description: "",
            value: "{{ type }}"
          },
          userid: {
            type: "string",
            description: "",
            value: "{{ userid }}"
          },
          techstack: {
            type: "string",
            description: "",
            value: "{{ techstack }}"
          },
          amount: {
            type: "number",
            description: "",
            value: "{{ amount }}"
          }
        }
      },
      output: {
        type: "object",
        properties: {}
      },
      mode: "blocking",
      hooks: []
    },
    {
      name: "conversation_1747781286871",
      type: "conversation",
      metadata: {
        position: {
          x: 0.0798446922220819,
          y: 824.882022556659
        }
      },
      prompt: "Thank the user for the conversation and inform them that the interview has been generated successfully.",
      voice: {
        provider: "deepgram",
        voiceId: "thalia",
        model: "aura-2"
      }
    },
    {
      name: "hangup_1747783626876",
      type: "hangup",
      metadata: {
        position: {
          x: 93.39293450230429,
          y: 1028.9238792037806
        }
      }
    }
  ],
  edges: [
    {
      from: "start",
      to: "conversation_1747781119006",
      condition: {
        type: "ai",
        prompt: "If user provided all the required variables."
      }
    },
    {
      from: "conversation_1747781119006",
      to: "apiRequest_1747781206347",
      condition: {
        type: "ai",
        prompt: ""
      }
    },
    {
      from: "apiRequest_1747781206347",
      to: "conversation_1747781286871",
      condition: {
        type: "ai",
        prompt: ""
      }
    },
    {
      from: "conversation_1747781286871",
      to: "hangup_1747783626876",
      condition: {
        type: "ai",
        prompt: ""
      }
    }
  ]
}