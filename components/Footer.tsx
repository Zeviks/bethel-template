"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 pt-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="mb-6">
            <Link href="/" className="mb-3 inline-block">
              <Image
                src="/images/logo/bethel-footer.svg"
                alt="logo"
                className="w-full dark:hidden"
                width={50}
                height={50}
              />
            </Link>
            <p className="mb-6 text-base leading-relaxed text-dark/[75%]"></p>
          </div>

          <div className="mb-6">
            <h2 className="mb-5 text-lg font-bold text-black dark:text-white">
              Address
            </h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  400 S Veterans Blvd, Pharr, TX 78577
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  <p>(956) 787-1737</p>
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  bethelpharr.church@gmail.com
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-5 text-lg font-bold text-black dark:text-white">
              Useful Links
            </h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  Who We Are
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  Ministries
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  Give
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="mb-5 text-lg font-bold text-black dark:text-white">
              Social Media
            </h2>
            <ul>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="mb-3 inline-block text-sm font-medium text-body-color hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary/10 py-6">
        <div className="container">
          <p className="text-center text-sm text-body-color dark:text-white">
            Proudly designed &amp; built by{" "}
            <a
              href="https://natanaelpacheco.framer.website/"
              rel="nofollow noopener"
              className="text-primary hover:text-body-color"
            >
              Natanael Pacheco ⚡️
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
