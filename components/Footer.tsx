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
            {/* Contact Us */}
            <h2 className="mb-5 text-lg font-bold text-black dark:text-white">
              Contact Us
            </h2>
            <ul>
              <li>
                <a
                  href="https://www.google.com/maps/place/Bethel+Pharr.church/@26.1876599,-98.171044,17z/data=!4m15!1m8!3m7!1s0x8665a078a385996f:0x4a1df8408ffca182!2s400+S+Veterans+Blvd,+Pharr,+TX+78577!3b1!8m2!3d26.1876599!4d-98.171044!16s%2Fg%2F11hc2xk25v!3m5!1s0x8665a0785d494089:0xccdc46439ec7a970!8m2!3d26.1889005!4d-98.1685385!16s%2Fg%2F1tfr0w4t?entry=ttu"
                  target="_blank"
                  rel="noreferrer"
                  className="text-medium text-medium mb-3 inline-block font-medium text-dark transition-all hover:text-primary"
                >
                  400 S. Veterans Blvd, Pharr, TX 78577
                </a>
              </li>
              <li>
                <a
                  href="mailto:bethelpharr.church@gmail.com"
                  className="text-medium mb-3 inline-block font-medium text-dark transition-all hover:text-primary"
                >
                  bethelpharr.church@gmail.com
                </a>
              </li>
              <li>
                <p className="text-medium mb-3 inline-block font-medium text-dark transition-all ">
                  (956) 787-1737
                </p>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            {/* Useful Links */}
            <h2 className="mb-5 text-lg font-bold text-black dark:text-white">
              Useful Links
            </h2>
            <ul>
              <li>
                <a
                  href="/ministries"
                  className="mb-3 inline-block text-sm font-medium text-body-color transition-all hover:text-primary"
                >
                  Ministries
                </a>
              </li>
              <li>
                <a
                  href="/events"
                  className="mb-3 inline-block text-sm font-medium text-body-color transition-all hover:text-primary"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="https://pushpay.com/g/bethelpharr"
                  className="mb-3 inline-block text-sm font-medium text-body-color transition-all hover:text-primary"
                >
                  Give
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            {/* Social Media */}
            <h2 className="mb-5 text-lg font-bold text-black transition-all dark:text-white">
              Social Media
            </h2>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/bethelpharr/"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-3 inline-block text-sm font-medium text-body-color transition-all hover:text-primary"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/BethelPharr400"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-3 inline-block text-sm font-medium text-body-color transition-all hover:text-primary"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/user/BethelPharr400"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-3 inline-block text-sm font-medium text-body-color transition-all hover:text-primary"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/bethelpharr400/"
                  target="_blank"
                  rel="noreferrer"
                  className="mb-3 inline-block text-sm font-medium text-body-color transition-all hover:text-primary"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-primary/10 py-6">
        <div className="container flex flex-col items-center justify-evenly sm:flex-row">
          <p className="text-sm text-body-color dark:text-white">
            © 2023 Bethel Pharr. All rights reserved.
          </p>
          <p className="text-sm text-body-color dark:text-white">
            Proudly designed &amp; built by{" "}
            <a
              href="https://natanaelpacheco.framer.website/"
              rel="nofollow noopener"
              className="text-primary transition-all hover:font-semibold hover:text-dark"
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
