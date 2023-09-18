import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    angular,
    ionic,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    travel,
    util,
    jobit,
    tripguide,
    retete,
    restaurant,
    threejs,
  } from "../assets";
  

  export const exploreWorlds = [
    {
      id: 'world-1',
      // imgUrl: '/planet-01.png',
      imgUrl: '/p01.png',
      title: 'Luxury Hotel',
    },
    {
      id: 'world-2',
   
      imgUrl: '/p02.png',
      title: 'Car rental',
    },
    {
      id: 'world-3',
      // imgUrl: '/planet-03.png',
      imgUrl: '/p03.png',
      title: 'Sport App',
    },
    {
      id: 'world-4',
      // imgUrl: '/planet-04.png',
      imgUrl: '/p04.png',
      title: 'Blog personal',
    },
    {
      id: 'world-5',
      // imgUrl: '/planet-05.png',
      imgUrl: '/p05.png',
      title: 'Real Estate app',
    },
  ];
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    // {
    //   title: "Web Developer",
    //   icon: web,
    // },
    {
      title: "Angular Developer",
      icon: mobile,
    },
    {
      title: "Ionic Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "angular",
      icon: angular,
    },
    {
      name: "ionic",
      icon: ionic,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Travel App",
      description:
        "Web-based platform that allows users to search  and manage travel destination, providing a convenient and efficient solution to book a destination.",
      tags: [
        {
          name: "ionic",
          color: "blue-text-gradient",
        },
        {
          name: "angular",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image: travel,
      source_code_link: "https://github.com/",
    },
    {
      name: "Utility app",
      description:
        "Web application  that fulfill the functional needs of the user by completing routine tasks that otherwise would have required physical methods for completion. ",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "ionic",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: util,
      source_code_link: "https://github.com/",
    },
    {
      name: "Recipies Guide",
      description:
        "A comprehensive guide that allows users to see recipies,ingredients.Allow user to calculate and analyze nutrotion informations.",
      tags: [
        {
          name: "ionic",
          color: "blue-text-gradient",
        },
        {
          name: "angular",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: retete,
      source_code_link: "https://github.com/",
    },
    {
      name: "Restaurant App",
      description:
        "A  Food Delivery App with Customer App & Admin Panel in the Same App. The Customer part enables users to search and choose  what to eat from the nearby restaurants.   ",
      tags: [
        {
          name: "ionic",
          color: "blue-text-gradient",
        },
        {
          name: "angular",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
      ],
      image:restaurant,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };