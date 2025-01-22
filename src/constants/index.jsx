import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiPython } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandFigma } from "react-icons/tb";
import { RiGithubFill } from "react-icons/ri";
import {SiCanva} from 'react-icons/si'
import { BsWordpress } from "react-icons/bs";

import bob from '../assets/bob-home.png'
import sumz from '../assets/sumz-home.png'
import bobProto from '../assets/bob-proto-show.png'
import sailer from '../assets/sailer.png'

import bobLogo from '../assets/bob-logo1.png'
import kagsLogo from '../assets/kags-logo1.png'

import dad from '../assets/profile-pictures/dad.png'
import bro from '../assets/profile-pictures/bro.png'
import mom from '../assets/profile-pictures/woman.png'



export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#award" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Reeve Aranha",
  info: "Designer, Developer and Digital Marketer | MBA, MSc Computer Science",
};

export const ABOUT = {
  text1:
    "I create dynamic, full-stack websites and applications that blend creativity, functionality, and efficiency",
};

import kagsSS from '../assets/kagsSS.png'
import pitstopSS from '../assets/pitstopSS.png'

export const PROJECTS = [
  {
    title: "AI-negotiator in E-commerce - SAILER",
    subtitle: "A modern e-commerce platform that automates negotiation using AI and advanced algorithms.",
    image: sailer,
    link: 'https://sailer-hazel.vercel.app'
  },
  {
    title: "Responsive landing page - KAGS Consultants Ltd",
    subtitle:
      "A mobile-responsive, modern landing page built with React, TailwindCSS and EmailJs.",
    image: kagsSS,
    link: 'https://kagsconsultants.co.uk'
  },
  {
    title: "E-commerce platform - Buy Or Barter UK Ltd",
    subtitle: "A full-stack, mobile responsive platform built with Wordpress and Elementor",
    image: bob,
    link: 'https://buyorbarter.co.uk'
  },
  {
    title: "Redesigned landing page - Pitstop Hand Car Wash Ltd",
    subtitle:
      "A redesigned website using React, TailwindCSS, EmailJs and Google API.",
    image: pitstopSS,
    link: 'https://cute-horse-fc46a0.netlify.app/'
  },
  {
    title: "OpenAI-based text summarizer for online articles",
    subtitle: "An AI based summarizer built with React, Redux Toolkit, TailwindCSS and OpenAI API",
    image: sumz,
    link: 'https://66bcfb44450da3ffd965c45f--papaya-sable-73ef31.netlify.app/'
  },
  {
    title: "Figma Prototype for native mobile app",
    subtitle: "Medium to high fidelity prototype for e-commerce app built with Figma and iOS UI Kit",
    image: bobProto,
    link: 'https://www.figma.com/proto/nJZi3ODYii3BQisZHvlJKe/BuyOrBarter?node-id=68-6&t=CUpGOl5IFm3y4v6l-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=68%3A6&show-proto-sidebar=1'
  }
];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <DiPython className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Python",
    experience: "1+ year",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: "1+ year",
  },
  {
    icon: <TbBrandFigma className="text-4xl lg:text-6xl text-orange-600" />,
    name: "Figma",
    experience: "2+ years"
  },
  {
    icon: <RiGithubFill className="text-4xl lg:text-6xl text-white" />,
    name: "GitHub",
    experience: "2.5+ years"
  },
  {
    icon: <SiCanva className="text-4xl lg:text-6xl text-teal-400" />,
    name: "Canva",
    experience: "1.5+ years"
  },
  {
    icon: <BsWordpress className="text-4xl lg:text-6xl text-blue-600" />,
    name: "Wordpress",

  }
];

export const TESTIMONIALS = [
  {
    name: "Mom",
    title: "Director of Operations - Home, Culinary Master,  Mother",
    quote: '"Be a good boy love you son."',
    image: mom,
    attribute: '<a href="https://www.flaticon.com/free-icons/person" title="person icons">Person icons created by Freepik - Flaticon</a>'
  },
  {
    name: "Dad",
    title: "Head of Logistics - Home, Reports to Mom, Father",
    quote: '"Hi son, do well."',
    image: dad,
    attribute: '<a href="https://www.flaticon.com/free-icons/person" title="person icons">Person icons created by Freepik - Flaticon</a>'
  },
  {
    name: "Bro",
    title: "Order Fulfillment Specialist - Home, Listens to Reeve, Younger Sibling",
    quote:
      '"You got this bro!"',
    image: bro,
    attribute: '<a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>'
  },
];

export const TESTIMONIALS2 = [
  {
    name: "BuyOrBarter UK Ltd",
    title: "Lead Business Developer",
    quote: '"Reeve has played a major role in helping us accomplish our goals for this platform. He went out of his way to suggest and implement modern design principles and practices and has been very reliable throughout."',
    image: bobLogo
  },
  {
    name: "KAGS Consultants UK Ltd",
    title: "Head of Consulting, Partner",
    quote: '"All we had to do was tell him what we imagined our site to look like and gave him some examples, he came up with a few versions and we picked the one we liked best. Thorough professional, recommended."',
    image: kagsLogo
  }
]

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.facebook.com/profile.php?id=100095080845421",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/reevearanha/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/ReeveJA",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://linkedin.com/in/reeve-aranha-3b2148322",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
