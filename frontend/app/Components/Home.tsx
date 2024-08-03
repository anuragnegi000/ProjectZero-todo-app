"use client";
import "./_Home.scss";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { CrossIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/toggle-dark-theme";
import { motion } from "framer-motion";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  // To stop scrolling when the hamburger menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <div className="outer-container">
      <div className="inner-container m-4 mb-14">
        <div className="navbar logo flex flex-row justify-between">
          <div className="">
            <h2 className="text-purple-700 text-2xl md:text-4xl font-bold">
              TODO
            </h2>
          </div>

          <div className="hidden  group-hover:text-pink-600  md:flex flex-row  text-2xl md:text-2xl  gap-4 ">
            <button>
              <Link href="/todos">Home</Link>
            </button>
            <button>Work</button>
            <button>About</button>
            <button>Contact</button>
            <button>Blog</button>
          </div>

          <div className="buttons-users hidden md:flex flex-row gap-x-4">
            <Button className="button-sign-in">
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button className="button-sign-up">
              <Link href="/sign-up">Sign Up</Link>
            </Button>
            <ModeToggle />
          </div>
          <div className="flex md:hidden overflow-hidden">
            {!isOpen && <Menu onClick={toggle} />}
            {isOpen && <X onClick={toggle} />}
          </div>
        </div>

        {/* Mobile Navbar */}
        <motion.div
          className={`mobile-navbar ${isOpen ? "open" : ""}`}
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
        >
          <div className="close-btn" onClick={() => setIsOpen(false)}>
            ×
          </div>
          <SignedOut>
            <button>
              <Link href="/sign-in">Sign In</Link>
            </button>
            <button className="button-sign-in">
              <Link href="/sign-up">Sign Up</Link>
            </button>
          </SignedOut>
          <SignedIn>
            <div className="  flex  flex-col  text-5xl font-bold   gap-4 ">
              <button>Home</button>
              <button>Work</button>
              <button>About</button>
              <button>Contact</button>
              <button>Blog</button>
            </div>
          </SignedIn>
        </motion.div>

        {/* Hero section */}
        <Hero />

        {/* Task Input */}
      </div>
    </div>
  );
};

export default Home;
