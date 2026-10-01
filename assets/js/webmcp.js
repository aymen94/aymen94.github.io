const modelContext = navigator.modelContext;

if (modelContext) {
  modelContext.registerTool({
    name: "get_profile",

    description:
      "Get the public professional profile of Aymen Naghmouchi, " +
      "including his role, location, professional summary, technical skills, " +
      "software engineering experience, open source contributions, projects, " +
      "certifications, education, languages, interests, and public profile links. " +
      "Use this tool when an AI agent needs factual information about Aymen's " +
      "professional background, technical expertise, projects, or open source work.",

    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    },

    execute: async () => ({
      identity: {
        name: "Aymen Naghmouchi",
        website: "https://aymen.xyz/",
        profession: "Software Engineer",
        currentRole: "Full Stack Software Engineer",
        location: {
          country: "Switzerland",
          region: "Ticino"
        }
      },

      professional: {
        summary:
          "Full Stack Software Engineer and open source contributor " +
          "with 7+ years of software engineering experience. Builds " +
          "production web applications, APIs, developer tools, enterprise " +
          "integrations and cloud based systems.",

        focus: [
          "Full stack software development",
          "Backend development",
          "Frontend development",
          "Web applications",
          "API development",
          "Cloud platforms",
          "Enterprise integrations",
          "Developer tooling",
          "Open source",
          "Automation"
        ],

        engineeringApproach: [
          "Performance oriented development",
          "Simple and maintainable architectures",
          "Practical use of abstractions",
          "Preference for lightweight solutions when appropriate",
          "API first development",
          "Automation",
          "Developer experience",
          "Open source collaboration"
        ],

        experienceYears: "7+"
      },

      skills: {
        languages: [
          "JavaScript",
          "TypeScript",
          "Python",
          "Java",
          "SQL",
          "HTML",
          "CSS"
        ],

        frontend: [
          "React",
          "Next.js",
          "Vite",
          "Web APIs",
          "Responsive Web Design",
          "SEO",
          "Progressive Web Applications"
        ],

        backend: [
          "Node.js",
          "REST APIs",
          "Spring Boot",
          "Express",
          "API development",
          "Microservices"
        ],

        databases: [
          "MongoDB",
          "MariaDB",
          "MySQL",
          "SQL databases"
        ],

        cloud: [
          "AWS",
          "Azure",
          "Cloud storage",
          "Serverless architectures",
          "API Gateway",
          "AWS Lambda",
          "Amazon S3",
          "Azure Synapse",
          "Azure Data Factory"
        ],

        enterprise: [
          "Salesforce",
          "NetSuite",
          "SuiteScript",
          "Boomi",
          "ERP integrations",
          "CRM integrations",
          "Enterprise APIs"
        ],

        devops: [
          "Git",
          "GitHub",
          "GitHub Actions",
          "Docker",
          "CI/CD",
          "Azure DevOps",
          "Linux"
        ],

        testing: [
          "Unit testing",
          "Integration testing",
          "End to end testing",
          "Playwright",
          "JUnit"
        ],

        architecture: [
          "REST architecture",
          "API design",
          "Cloud architecture",
          "Serverless architecture",
          "Event driven systems",
          "Frontend architecture",
          "Integration architecture"
        ]
      },

      openSource: [
        {
          project: "Node.js",
          role: "Website contributor and maintainer",
          description:
            "Contributes to the Node.js website ecosystem, documentation " +
            "and related projects.",
          url: "https://nodejs.org/"
        },

        {
          project: "nodejs.dev",
          role: "Former team member",
          period: "2019–2022",
          description:
            "Contributed to the Node.js website redesign, documentation " +
            "and internationalization.",
          url: "https://github.com/nodejs/nodejs.dev"
        },

        {
          project: "Jakarta EE",
          role: "Contributor",
          period: "2021–2022",
          description:
            "Contributed to Jakarta EE 10 and Jakarta Concurrency.",
          url: "https://jakarta.ee/"
        },

        {
          project: "Developers Italia",
          role: "Google Summer of Code contributor",
          year: 2019,
          description:
            "Worked on OpenAPI 3 support for io utils and related " +
            "open source projects.",
          url:
            "https://summerofcode.withgoogle.com/archive/2019/projects/6232664103714816"
        }
      ],

      openSourceMetrics: {
        pullRequestsReviewed: "600+",
        googleSummerOfCode: 2019,
        majorProjects: [
          "Node.js",
          "nodejs.dev",
          "Jakarta EE",
          "Developers Italia"
        ]
      },

      projects: [
        {
          name: "Magic Web Tools",
          technology: [
            "Next.js",
            "JavaScript",
            "Web APIs"
          ],
          description:
            "Browser based collection of developer and web utilities, " +
            "including PDF tools, converters, encoders and generators.",
          url: "https://magicwebtools.pages.dev"
        },

        {
          name: "DevBlog",
          technology: [
            "React",
            "Vite"
          ],
          description:
            "Markdown first developer blogging platform with tags, " +
            "dark mode, reading time and SEO ready output.",
          url: "https://github.com/aymen94/devblog"
        },

        {
          name: "AI on Chrome",
          technology: [
            "JavaScript",
            "Chrome AI",
            "Gemini Nano"
          ],
          description:
            "Browser based experiment using Chrome's built in AI " +
            "capabilities and on device Gemini Nano.",
          url: "https://aymen.xyz/AI on Chrome gemini nano/"
        },

        {
          name: "Spring Boot OpenAPI MongoDB",
          technology: [
            "Java",
            "Spring Boot",
            "MongoDB",
            "OpenAPI",
            "Docker",
            "JUnit"
          ],
          description:
            "Reference REST API project demonstrating OpenAPI, " +
            "MongoDB, testing and containerization.",
          url:
            "https://github.com/aymen94/springboot openapi mongodb"
        },

        {
          name: "MongoDB Alpine",
          technology: [
            "Docker",
            "Linux"
          ],
          description:
            "Lightweight MongoDB container image based on Alpine Linux.",
          url:
            "https://github.com/aymen94/mongodb alpine"
        },

        {
          name: "imgproxyclientjs",
          technology: [
            "TypeScript",
            "JavaScript"
          ],
          description:
            "JavaScript client library for generating imgproxy image URLs.",
          url:
            "https://github.com/aymen94/imgproxyclientjs"
        },

        {
          name: "3D Solar System",
          technology: [
            "JavaScript",
            "WebGL",
            "WebVR"
          ],
          description:
            "Interactive 3D visualization of the Solar System.",
          url:
            "https://aymen.xyz/3d solar system/"
        },

        {
          name: "Cryptovalue",
          technology: [
            "React",
            "JavaScript",
            "Cryptocurrency APIs"
          ],
          description:
            "Real time cryptocurrency price dashboard.",
          url:
            "https://github.com/aymen94/Cryptovalue React"
        }
      ],

      certifications: [
        {
          provider: "Boomi",
          year: 2025,
          certifications: [
            "Associate Administrator",
            "Associate Integration Developer",
            "Professional Integration Developer"
          ]
        },

        {
          provider: "Linux Foundation",
          year: 2025,
          certifications: [
            "DevOps & SRE",
            "GitHub for Open Standards Development",
            "Open Source Contribution in Finance",
            "Common Domain Model"
          ]
        }
      ],

      education: {
        googleSummerOfCode: {
          year: 2019,
          organization: "Developers Italia",
          project: "IO App / PagoPA",
          focus: [
            "OpenAPI 3",
            "io utils",
            "openapi codegen ts",
            "io functions"
          ]
        }
      },

      speaking: [
        {
          event: "DevFest 2019 GDG Campania",
          year: 2019,
          topic:
            "Automated web scraping and CI/CD with Azure DevOps"
        },

        {
          event: "FOSDEM",
          period: "2020–Present",
          description:
            "Regular attendee of the open source conference."
        }
      ],

      writing: [
        {
          title: "My Experience with GSoC 2019",
          year: 2019,
          url:
            "https://medium.com/@aymennaghmouchi/my experience about google summer of code 2019 d73907a5d55b"
        },

        {
          title: "How Blockchain Works",
          year: 2018,
          url:
            "https://medium.com/@aymennaghmouchi/how to work blockchain 2b8631052335"
        }
      ],

      languages: {
        italian: "Native",
        english: "Professional working proficiency",
        arabic: "Advanced"
      },

      publicProfiles: {
        website: "https://aymen.xyz/",
        github: "https://github.com/aymen94",
        linkedin: "https://www.linkedin.com/in/aymennaghmouchi/",
        stackOverflow:
          "https://stackoverflow.com/users/4671263/aymen",
        medium:
          "https://medium.com/@aymennaghmouchi",
        credly:
          "https://www.credly.com/users/aymen naghmouchi/"
      },

      interests: [
        "Web development",
        "Developer tools",
        "Open source",
        "Cloud computing",
        "Artificial intelligence",
        "Cryptocurrency",
        "3D web experiences",
        "Automation"
      ],

      portfolio: {
        sourceCode:
          "https://github.com/aymen94/aymen94.github.io",

        technology: [
          "HTML",
          "CSS",
          "JavaScript"
        ],

        frameworks: [],

        philosophy:
          "Prefer simple, fast and maintainable solutions. " +
          "Avoid unnecessary abstraction and framework layers when " +
          "plain web technologies provide a better solution."
      }
    })
  });
}