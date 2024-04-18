"use client"

import { motion } from "framer-motion";

const AboutPage = () => {
    return (
        <div>
            <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
            <h1>About Page</h1>
        </div>
    );
}

export default AboutPage