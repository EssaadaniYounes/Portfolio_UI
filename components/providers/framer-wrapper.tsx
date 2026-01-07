'use client';

import { fadeDown } from "@/lib/motion";
import { motion } from "framer-motion";
export default function FramerWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <motion.section
        variants={fadeDown as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-24"
    >
        {children}
    </motion.section>
}