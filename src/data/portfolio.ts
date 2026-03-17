export const DATA = {
  basics: {
    name: "Raffay Hassan",
    initials: "RH",
    title: "Computer Systems Engineer",
    subtitle: "Autonomous Systems · Sensor Fusion · Digital Twins",
    summary:
      "Motivated Computer Systems Engineering student with expertise in C++, Python, and modern software development. Proficient in Agile methodologies (XP, CI/CD) and object-oriented design. Experienced in embedded systems, low-code platforms, and cloud integration. Strong in leadership, teamwork, and rapid problem-solving.",
    location: "London, United Kingdom",
    email: "raffayhassan772@gmail.com",
    phone: "07404039865",
    linkedin: "https://www.linkedin.com/in/raffay-hassan",
    blog: "https://raffayhassan772.wixsite.com/autonomous-systems",
  },

  achievements: [
    {
      icon: "🏆",
      title: "WorldSkills UK 2025",
      sub: "National Qualifier — Industrial Electronics",
      type: "Competition",
    },
    {
      icon: "🥇",
      title: "Siemens Showcase 2025",
      sub: "Shortlisted — Connected Curriculum Industrial Showcase",
      type: "Award",
    },
    {
      icon: "🎓",
      title: "First-Class Honours",
      sub: "BEng Computer Systems Engineering · Middlesex University London",
      type: "Academic",
    },
  ],

  experience: [
    {
      title: "Final Year Research Project",
      org: "Middlesex University London",
      year: "2025–2026",
      tags: [
        "Python", "C++", "Jetson Orin Nano", "Raspberry Pi 5",
        "LD06 LiDAR", "BGT60TR13C Radar", "YOLOv8n", "Arduino R4 WiFi",
        "PyQt5", "OpenCV", "PyTorch CUDA",
      ],
      bullets: [
        "Designed and built a Sensor-Driven Digital Twin Framework for Collision Prevention in Autonomous Systems — the digital twin is an internal world model (not CARLA) that continuously updates with obstacle positions, distances, velocities, and TTC risk values",
        "Implemented multi-sensor fusion: LD06 LiDAR (±20° FOV, asymmetric persistence filter 3↑/4↓, minimum-points-per-zone threshold), BGT60TR13C 60 GHz radar (MTI clutter suppression at 0.92 memory coeff, 16 dB CFAR, nearest-neighbour tracker, approach confirmation gate), and YOLOv8n camera cross-validation",
        "Built distributed edge architecture: Jetson Orin Nano handles vision, LiDAR, fusion and GUI; Raspberry Pi 5 runs full radar FFT pipeline (Range → Doppler → Angle) and streams JSON tracks via UDP port 9576",
        "Achieved ~9.5 FPS real-time fusion GUI with 4-thread architecture (PyQt5 + pyqtgraph); health monitoring bar with ONLINE / DEGRADED / OFFLINE states per sensor",
        "Phase 1: CARLA simulation baseline — YOLOv8n, LiDAR+radar TTC fusion, emergency braking, Town04 scenarios, adverse weather testing",
        "Phase 2: Physical RC car deployment — Arduino Uno R4 WiFi as 5V motor control bridge (ESC pin 9, steering servo pin 10, UDP port 5005); reactive obstacle avoidance navigation",
      ],
    },
    {
      title: "Research Intern",
      org: "London Digital Twin Research Centre",
      year: "2024–2025",
      tags: ["Python", "AV Datasets", "Sensor Calibration", "Perception Benchmarking"],
      bullets: [
        "Contributed to autonomous driving datasets and perception benchmarking pipelines",
        "Worked on sensor calibration tools for LiDAR and camera systems",
        "Supported research in AV perception evaluation frameworks",
      ],
    },
    {
      title: "IoT Indoor Air Quality Monitor",
      org: "Siemens Connected Curriculum Showcase",
      year: "2025",
      tags: ["ESP8266", "C++", "DHT22", "SGP30", "Mendix", "Siemens Insights Hub", "OAuth2", "Cloud APIs"],
      bullets: [
        "Developed IoT monitoring system using ESP8266, DHT22, and SGP30 sensors for real-time indoor air quality measurement",
        "Integrated cloud storage and Mendix low-code platform for real-time dashboards and automated alerts",
        "Implemented OAuth2 authentication for Siemens Insights Hub data pipeline",
        "Shortlisted for Siemens Connected Curriculum Industrial Showcase 2025",
      ],
    },
    {
      title: "FPGA Design & Development",
      org: "University Project",
      year: "2024",
      tags: ["VHDL", "Xilinx Vivado", "Digital Logic", "Circuit Optimisation"],
      bullets: [
        "Designed and developed FPGA circuits using Xilinx Vivado with focus on digital logic design",
        "Implemented circuit optimisation techniques for performance improvement",
      ],
    },
    {
      title: "Signal Processing",
      org: "University Project",
      year: "2024",
      tags: ["MATLAB", "Data Filtering", "Signal Analysis", "Transformation"],
      bullets: [
        "Performed signal processing tasks using MATLAB including data filtering, transformation, and analysis",
      ],
    },
    {
      title: "Arduino Projects Developer",
      org: "University Project",
      year: "2023",
      tags: ["Arduino", "C++", "Python", "GitHub", "Real-Time Systems"],
      bullets: [
        "Developed multiple hardware-software integrated mini projects using Arduino with Python and C++",
        "Utilised GitHub for version control and cross-team collaboration",
        "Gained hands-on experience with real-time embedded systems integration",
      ],
    },
    {
      title: "Mechanical Design & CAD Modelling",
      org: "University Project",
      year: "2023",
      tags: ["SolidWorks", "3D Modelling", "CAD", "Technical Drawings"],
      bullets: [
        "Used SolidWorks to create 3D models, simulations, and technical drawings for product designs",
        "Optimised designs for manufacturability, improving overall project efficiency",
      ],
    },
  ],

  skills: {
    Languages: ["C++", "Python", "VHDL", "Unreal Engine 5 (C++ & Blueprint)"],
    "Embedded & Hardware": [
      "Arduino", "Jetson Orin Nano", "Raspberry Pi 5",
      "ESP8266", "FPGA (Xilinx Vivado)", "Altium Designer",
    ],
    "AI & Perception": [
      "YOLOv8", "Sensor Fusion", "LiDAR Processing",
      "mmWave Radar (FMCW)", "OpenCV", "PyTorch (CUDA)",
    ],
    "Tools & Platforms": [
      "MATLAB", "SolidWorks", "Multisim",
      "Code Composer Studio", "Mendix", "Siemens Insights Hub",
    ],
    Cybersecurity: ["Ethical Hacking", "Vulnerability Analysis", "System Protection"],
    "Cloud & Dev": ["Cloud Computing", "REST APIs", "OAuth2", "GitHub", "Agile / CI/CD"],
  },

  education: {
    degree: "BEng Computer Systems Engineering",
    institution: "Middlesex University London",
    location: "The Burroughs, London NW4 4BT",
    graduation: "Expected 2026",
    grade: "First-Class (Year 2)",
    coursework: [
      "Software Engineering", "Digital Systems", "Machine Learning",
      "Cybersecurity", "Signal Processing", "Programming Paradigms", "Cloud Computing",
    ],
  },

  courses: [
    "Intermediate Ethical Hacking & Cybersecurity (Udemy, in progress)",
    "Unreal Engine 5 Game Development — C++ & Blueprint (Udemy, in progress)",
  ],

  interests: ["AI", "Cybersecurity", "Cloud Computing", "Software Engineering", "Game Development"],
  languages: ["English", "Urdu"],
};
