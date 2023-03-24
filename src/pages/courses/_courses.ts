import beginnerCourse from "../../assets/beginner_course.jpg";

export const courses = [
  {
    title: "Flutter for Beginners",
    slug: "flutter-for-beginners",
    tagline: "Learn Flutter from scratch and build your first app",
    description:
      "This course is for beginners who want to learn Flutter and build their first app." +
      " You will learn the basics of Flutter and Dart and build a simple app that you can " +
      "share with your friends and family. Sign up now and get started!",
    price: {
      original: 149.95,
      discount: 74.95,
    },
    image: {
      src: beginnerCourse.src,
      alt: "Flutter for Beginners",
    },
    chapters: {
      "Chapter 1": [
        "Flutter Fundamentals",
        "Dart Fundamentals",
        "Null Safety",
        "Widgets",
        "Navigation",
        "User Input",
        "Shortcuts",
      ],
      "Chapter 2": ["Firebase", "Firebase Auth", "Icon Launcher"],
      "Chapter 3": ["Firebase Firestore", "Advanced Widgets"],
      "Chapter 4": ["Local Storage", "Shared Preferences"],
    },
    checkout:
      "https://sso.teachable.com/secure/1086263/checkout/4306355/flutter-for-beginners",
  },
];
