import React from "react";
import Image from "next/image";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-6 grid gap-10 py-12 sm:mx-10 md:grid-cols-[1.2fr_0.8fr] xl:mx-24">
        <aside>
          <div className="flex items-center gap-3">
            <Image
              src="/images/ical_logo.png"
              alt="Ical logo"
              className="rounded-xl"
              width={48}
              height={48}
            />
            <div>
              <p className="text-lg font-semibold">CalDev</p>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                iOS • AI • Web
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-slate-400">
            Building digital products with strong UX, data-driven decisions, and
            practical AI applications.
          </p>
          <p className="mt-6 text-xs text-slate-500">© {year} CalDev</p>
        </aside>
        <nav>
          <h6 className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
            Social
          </h6>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/heical-chandra/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2-2.2 4.1-2.2 4.4 0 5.2 2.9 5.2 6.7V24h-5v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.2V24h-5V8z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/CalDev-id"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.42 7.86 10.96.57.1.78-.25.78-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.55-3.88-1.55-.53-1.35-1.29-1.71-1.29-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.76.41-1.26.75-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.4-5.25 5.68.42.36.8 1.08.8 2.19 0 1.58-.01 2.86-.01 3.25 0 .31.2.67.79.56 4.56-1.54 7.85-5.86 7.85-10.96C23.5 5.74 18.27.5 12 .5z" />
              </svg>
              GitHub
            </a>
            <a
              href="https://www.instagram.com/ical.dev"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-slate-400 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4zm0 7.6a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8zm6-7.9a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0zM20 3.5H4A2.5 2.5 0 0 0 1.5 6v12A2.5 2.5 0 0 0 4 20.5h16A2.5 2.5 0 0 0 22.5 18V6A2.5 2.5 0 0 0 20 3.5zm.7 14.5a1.8 1.8 0 0 1-1.8 1.8H5.1A1.8 1.8 0 0 1 3.3 18V6a1.8 1.8 0 0 1 1.8-1.8h13.8A1.8 1.8 0 0 1 20.7 6z" />
              </svg>
              Instagram
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
