"use client"

import { motion } from "framer-motion";

const ContactPage = () => {
    return (
        <div>
            <motion.div
                    className="h-screen w-screen fixed bg-black rounded-b-[100px] z-40"
                    animate={{ height: "0vh" }}
                    exit={{ height: "140vh" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                />
        <h1>Contact Page</h1>
        </div>
    );
}

export default ContactPage