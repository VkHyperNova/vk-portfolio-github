export const projects = [
  {
    slug: "ikomix-ee",
    title: "ikomix.ee",
    description: "A custom WordPress website built for a commercial laundry service in Estonia.",
    longDescription:
      "ikomix.ee is a business website built for OÜ Ikomix, a laundry and cleaning service based in Valgjärve, South Estonia, serving hotels, spas, and hospitality businesses in the region. This was my first client website — built on WordPress with a fully custom theme, covering company info, services, pricing, and contact details.",
    tech: ["WordPress", "Bootstrap"],
    github: "https://github.com/VkHyperNova/ikomix",
    live: "https://www.ikomix.ee",
  },
  {
    slug: "ylkusaunake-ee",
    title: "ylkusaunake.ee",
    description: "A WordPress website built for a wood-heated sauna in Ülenurme.",
    longDescription:
      "ylkusaunake.ee was my second client website — built for a local wood-heated sauna in Ülenurme that accommodates up to 10 people. Built on WordPress with a custom theme, covering info, availability, and booking details. The site is currently offline as the owner has not renewed hosting.",
    tech: ["WordPress", "Bootstrap"],
    github: "https://github.com/VkHyperNova/ylkusaunake",
    live: "https://www.ylkusaunake.ee",
  },
  {
    slug: "vk-books",
    title: "VK-BOOKS",
    description: "A CLI tool for tracking your personal reading history.",
    longDescription:
      "VK-BOOKS is a command-line utility for logging and managing books you've read. Built in Go, it emphasizes straightforward data persistence, clean error handling, and a no-frills interface that stays out of your way.",
    tech: ["Go", "CLI", "File I/O"],
    os: {
      linux: "tested",
      windows: "unknown",
      macos: "unknown",
    },
    github: "https://github.com/VkHyperNova/VK-Books",
    screenshot: "test",
    live: "",
  },
  {
    slug: "vk-quotes",
    title: "VK-QUOTES",
    description: "A CLI tool for capturing and organizing quotes from books and the web.",
    longDescription:
      "VK-QUOTES is a command-line utility for saving quotes you come across while reading — whether from books or online. Built in Go, it keeps your collection organized and accessible straight from the terminal, with a focus on simplicity and reliable data persistence.",
    tech: ["Go", "CLI", "File I/O"],
    os: {
      linux: "tested",
      windows: "unknown",
      macos: "unknown",
    },
    github: "https://github.com/VkHyperNova/VK-Quotes",
    screenshot: "test",
    live: "",
  },
  {
    slug: "vk-finance",
    title: "VK-FINANCE",
    description: "A CLI tool for tracking and organizing personal finances.",
    longDescription:
      "VK-FINANCE is a command-line application built in Go for quickly logging and organizing personal financial data. It stores entries locally in a simple JSON-based file, with no external database or network dependency required. Designed to be fast, minimal, and fully offline, it's ideal for anyone who wants a no-frills way to track income and expenses directly from the terminal.",
    tech: ["Go", "CLI", "File I/O"],
    os: {
      linux: "tested",
      windows: "unknown",
      macos: "unknown",
    },
    github: "https://github.com/VkHyperNova/VK-FINANCE",
    screenshot: "test",
    live: "",
  },
  {
    slug: "vk-walking",
    title: "VK-WALKING",
    description: "A CLI tool for logging and tracking daily walking distance.",
    longDescription:
      "VK-WALKING is a command-line application built in Go for quickly logging and tracking personal walking data. Entries are stored locally in a simple file-based format, with no external database or network connection required, making it a fast and fully offline way to keep a personal walking log directly from the terminal.",
    tech: ["Go", "CLI", "File I/O"],
    os: {
      linux: "tested",
      windows: "unknown",
      macos: "unknown",
    },
    github: "https://github.com/VkHyperNova/vk-walking",
    screenshot: "test",
    live: "",
  },
  {
    slug: "pwm",
    title: "PWM",
    description: "A minimal CLI password manager built in Go.",
    longDescription:
      "PWM is a lightweight command-line tool for securely storing and retrieving credentials, built entirely in Go. The project was as much a learning exercise as a utility — a hands-on deep dive into core Go fundamentals like clean error handling, structured file I/O, and writing maintainable code without unnecessary abstraction or complexity.",
    tech: ["Go", "CLI", "File I/O"],
    os: {
      linux: "tested",
      windows: "unknown",
      macos: "unknown",
    },
    github: "https://github.com/VkHyperNova/PWM",
    screenshot: "test",
    live: "",
  },
  {
    slug: "vk-fasting",
    title: "VK-FASTING",
    description: "A CLI tool for tracking intermittent fasting windows.",
    longDescription:
      "VK-FASTING is a command-line application built in Go for logging and tracking fasting periods. It stores entries locally in a simple file-based format, with no external database or network connection required, making it a fast and fully offline way to keep track of fasting duration directly from the terminal.",
    tech: ["Go", "CLI", "File I/O"],
    os: {
      linux: "tested",
      windows: "unknown",
      macos: "unknown",
    },
    github: "https://github.com/VkHyperNova/vk-fasting",
    screenshot: "test",
    live: "",
  },
  {
    slug: "vk-time",
    title: "vk-time",
    description: "A CLI countdown timer with music, built for focus sessions and meditation.",
    longDescription:
      "vk-time is a command-line productivity tool built in Go that helps you stay focused on a task. It runs a countdown timer while playing music, keeps the computer awake by preventing it from going to sleep, and sounds an alarm when time is up. I use it for meditation sessions, but it works just as well as a general focus or Pomodoro-style timer.",
    tech: ["Go", "CLI", "File I/O"],
    os: {
      linux: "tested",
      windows: "unknown",
      macos: "unknown",
    },
    github: "https://github.com/VkHyperNova/vk-time",
    screenshot: "test",
    live: "",
  },
  {
    slug: "vk-weather",
    title: "vk-weather",
    description: "A CLI tool for checking current weather from the terminal.",
    longDescription:
      "vk-weather is a command-line application built in Go that fetches and displays current weather information directly in the terminal. It pulls live data from an online weather source, giving a quick, no-browser-needed way to check conditions on the go.",
    tech: ["Go", "CLI", "File I/O"],
    os: {
      linux: "tested",
      windows: "unknown",
      macos: "unknown",
    },
    github: "https://github.com/VkHyperNova/VK-Weather",
    screenshot: "test",
    live: "",
  },
  {
    slug: "vk-youtube-downloader",
    title: "vk-youtube-downloader",
    description: "A CLI tool for downloading audio from YouTube videos.",
    longDescription:
      "vk-youtube-downloader is a command-line application built in Go for downloading YouTube videos and extracting them as audio files. It offers a simple, no-frills way to grab music or audio content directly from the terminal, without needing a browser or third-party GUI app.",
    tech: ["Go", "CLI", "File I/O"],
    github: "https://github.com/VkHyperNova/vk-youtube-downloader",
    screenshot: "test",
    live: "",
  },
  {
    slug: "vks-ads-banners-remover",
    title: "VKS Annoying Ads and Banners Remover",
    description: "A lightweight Opera browser extension that automatically detects and removes intrusive ads, pop-ups, and banners for a cleaner, faster browsing experience.",
    longDescription:
      "VKS Annoying Ads and Banners Remover is a lightweight browser extension built for Opera that strips out intrusive ads, pop-up banners, and other visual clutter from web pages as you browse. Built with plain JavaScript, it works quietly in the background to keep pages clean and load faster, without the overhead of larger ad-blocking suites.\n\nNote: this project hasn't been updated in a few years, so it may not work as expected with current browser versions or modern ad formats. Feel free to explore the code, but use at your own risk.",
    tech: ["JavaScript"],
    github: "https://github.com/VkHyperNova/VKS-Annoying-Ads-and-Banners-Remover",
    live: "",
  },
  {
    slug: "youtube-skip-button-autoclicker",
    title: "YouTube Skip Button Autoclicker for Opera",
    description: "An Opera browser extension that automatically clicks the 'Skip Ad' button on YouTube as soon as it appears.",
    longDescription:
      "I built this extension after my ad blocker stopped working properly in Opera. Instead of manually clicking 'Skip Ad' every time a YouTube ad played, this extension detects the skip button and clicks it automatically as soon as it's available.\n\nNote: this project is old and hasn't been maintained, so it may not work with YouTube's current player or ad formats. Use at your own risk.",
    tech: ["JavaScript"],
    github: "https://github.com/VkHyperNova/Youtube-skip-button-autoclicker",
    live: "",
  },
  {
    slug: "delfi-banner-remover",
    title: "Delfi.ee Banner Remover for Opera",
    description: "An Opera browser extension that blocks intrusive banners on delfi.ee.",
    longDescription:
      "A small extension I built to remove annoying banner ads on delfi.ee, a news website. It works by detecting and hiding the banner elements automatically as the page loads.\n\nNote: this project is old and hasn't been maintained, so it may not work with the site's current layout. Use at your own risk.",
    tech: ["JavaScript"],
    github: "https://github.com/VkHyperNova/Delfi.ee-Banner-Remover-for-Opera",
    live: "",
  },
  {
    slug: "ahk-autofold-hwmonitor",
    title: "AHK Auto-Fold Script for HWMonitor",
    description: "An AutoHotkey script that automatically expands specific sections in HWMonitor on launch.",
    longDescription:
      "A simple AutoHotkey script I wrote to automate a repetitive task in HWMonitor. Instead of manually clicking to expand certain sections every time the program opens, this script does it automatically, saving a few clicks each launch.\n\nNote: this project hasn't been updated, so I'm not sure if it still works with the current version of HWMonitor. Use at your own risk.",
    tech: ["AutoHotkey"],
    github: "https://github.com/VkHyperNova/VK-AutoFold-HWMonitor",
    live: "",
  },
];