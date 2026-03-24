"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";

export function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    product: [
      { href: "/features", labelKey: "footer.features" },
      { href: "/pricing", labelKey: "footer.pricing" },
      { href: "/changelog", labelKey: "footer.changelog" },
      { href: "/docs", labelKey: "footer.docs" },
    ],
    resources: [
      { href: "/login", labelKey: "footer.login" },
      { href: "/signup", labelKey: "footer.signup" },
      { href: "/docs", labelKey: "footer.docs" },
      { href: "/features#integrations", labelKey: "footer.integrations" },
    ],
  };

  return (
    <footer className="bg-navy py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 min-[380px]:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-1 min-[380px]:col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal rounded-md flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-white"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 6h16M4 12h16M4 18h10" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">Flowdesk</span>
            </Link>
            <p className="text-gray-400 text-sm mb-6">{t("footer.desc")}</p>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {t("footer.product")}
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">
              {t("footer.resources")}
            </h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.resources.map((link) => (
                <li key={link.labelKey}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t("footer.copy")}</p>
        </div>
      </div>
    </footer>
  );
}
