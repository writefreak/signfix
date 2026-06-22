import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/faqs" },
      { label: "Testimonials", href: "/testimonials" },
      { label: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/about-us" },
      { label: "Services", href: "/shop" },
      { label: "Gallery", href: "/gallery" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Return Policy", href: "/return-and-refund-policy" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Delivery Terms", href: "/delivery-terms" },
    ],
  },
];

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 13.5h2.5l1-4H14V7.5c0-1.03 0-2 2-2h1.5V2.14C17.17 2.1 15.95 2 14.66 2 11.97 2 10 3.66 10 6.7V9.5H7v4h3V22h4v-8.5z" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-3.96 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.68-2.91V8.48z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Instagram",
    icon: InstagramIcon,
    href: "https://instagram.com/signfix_ng",
  },
  {
    label: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/signfixng",
  },
  {
    label: "LinkedIn",
    icon: LinkedinIcon,
    href: "https://www.linkedin.com/company/signfix-industrial-limited/",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          {/* Brand / contact column */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5">
              <a href="#top" className="h-9 md:h-12">
                <img
                  src="/signfix-dark.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
              </a>
            </div>

            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+2349033366660"
                className="flex items-center gap-2.5 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
              >
                <Phone
                  className="h-3.5 w-3.5 shrink-0 text-neutral-500"
                  strokeWidth={2}
                />
                +234-903-336-6660
              </a>
              <a
                href="mailto:support@signfix.ng"
                className="flex items-center gap-2.5 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
              >
                <Mail
                  className="h-3.5 w-3.5 shrink-0 text-neutral-500"
                  strokeWidth={2}
                />
                support@signfix.ng
              </a>

              <a
                href="mailto:info@signfix.ng"
                className="flex items-center gap-2.5 text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
              >
                <Mail
                  className="h-3.5 w-3.5 shrink-0 text-neutral-500"
                  strokeWidth={2}
                />
                info@signfix.ng
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              {SOCIALS.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-colors duration-200 hover:bg-neutral-100 hover:text-neutral-900"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title} className="flex flex-col gap-4">
              <h3 className="font-display text-sm font-bold tracking-tight text-neutral-900">
                {column.title}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-500 transition-colors duration-200 hover:text-neutral-900"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-200">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row lg:px-8">
          <p className="font-sans text-xs text-neutral-400">
            © {new Date().getFullYear()} Signfix Industrial Limited. Lagos,
            Nigeria.
          </p>
        </div>
      </div>
    </footer>
  );
}
