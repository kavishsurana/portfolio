"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Chat-Room",
    desc: "A real-time, bidirectional and event based web chat application made using NodeJs and Socket.io. Users can join different rooms and can chat and share locations amongst users.",
    img: "/chatroom.jpg",
    link: "https://chat-app-3sl8.onrender.com",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "gmailAutoResponder",
    desc: "Node.js-based web application engineered to automate email responses. Timely replies to incoming emails (intervals of 45 to 120 seconds) are allowed, and an organized inbox is maintained while away.",
    img: "/gmailAutoResponder.jpg",
    link: "https://github.com/kavishsurana/gmailAutoResponder",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "PayTM",
    desc: "Created and applied various webpages using React.js. Also integrated zod for data validation, and styled each components using Tailwind CSS. Developed a money transfer feature allowing users to send money securely, Integrated express-session for transaction handling, following ACID properties of DBMS. Established user authentication using JWT middleware.",
    img: "/paytm.jpg",
    link: "https://github.com/kavishsurana/payTM",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Expense Tracker ",
    desc: "Full-stack web application designed to assist users in managing their finances by efficiently tracking and categorizing their expenses.Transactions are added , deleted and stored in a database with the help of MongoDB and mongoose .",
    img: "/expense-tracker.jpg",
    link: "https://github.com/kavishsurana/expense-tracker",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-2 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                    <Image src={item.img} alt="" target="_blank" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:p-4 lg:text-lg bg-white text-gray-600 font-semibold m-2 rounded">See Demo</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Any Openings?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Full-stack Developer | Problem solving |
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
          <div>
              LeetCode Profile: 
              <Link href="https://leetcode.com/kavish02/" target="_blank">
                  <span className="text-blue"> Click Here</span>
              </Link>
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;