import { useState } from "react";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);

  const PRIMARY_BLUE = "#5F9AD1";
  const WHATSAPP_URL = "https://wa.me/918688046036";

  function handleAppointmentSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const message = [
      "Hi, I would like to book an appointment.",
      `Name: ${formData.get("name")}`,
      `Age: ${formData.get("age")}`,
      `Date of birth: ${formData.get("dateOfBirth")}`,
      `Parent name: ${formData.get("parentName") || "Not provided"}`,
    ].join("\n");

    window.open(`${WHATSAPP_URL}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setAppointmentOpen(false);
  }

  return (
    <section
      className="
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#5F9AD1]
        text-white
      "
    >
      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================= */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="
          absolute
          top-[30%]
          h-[70%]
          w-full
          object-cover
          object-[80%_center]
          animate-[fadeIn_1.2s_ease-out_0.2s_both]

          md:inset-0
          md:h-full
          md:object-center
        "
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260710_141802_1d85412a-1df8-4993-8fc4-7400520bb1d1.mp4"
          type="video/mp4"
        />
      </video>

      {/* =========================================================
          MOBILE VIDEO GRADIENT
      ========================================================= */}

      <div
        className="
          absolute
          top-[30%]
          left-0
          z-[1]
          h-32
          w-full
          bg-gradient-to-b
          from-[#5F9AD1]
          to-transparent
          md:hidden
        "
      />

      {/* =========================================================
          HEADER / NAVIGATION
      ========================================================= */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-20
          flex
          items-center
          justify-between

          animate-[slideDown_0.7s_ease-out_0.1s_both]
        "
      >
        {/* ---------------------------------------------------------
            LOGO
        --------------------------------------------------------- */}

        <div className="flex items-center gap-2">
          {/* Custom Tooth / Pin SVG */}
          <svg
            width="32"
            height="36"
            viewBox="0 0 32 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[58px] w-[52px] md:h-[78px] md:w-[69px]"
          >
            <path
              d="M16 1C8.268 1 2 6.895 2 14.167C2 21.44 7.2 26.12 10.4 29.733C12.1 31.655 13.3 34 16 34C18.7 34 19.9 31.655 21.6 29.733C24.8 26.12 30 21.44 30 14.167C30 6.895 23.732 1 16 1Z"
              fill="white"
            />

            <path
              d="M16 7C11.582 7 8 10.134 8 14C8 17.866 11.582 21 16 21C20.418 21 24 17.866 24 14C24 10.134 20.418 7 16 7Z"
              fill={PRIMARY_BLUE}
            />
          </svg>

          {/* Logo Text */}
          <span className="flex flex-col items-start leading-tight text-sm font-medium tracking-tight md:text-base">
            <span className="text-lg font-bold text-[#FF5C00] md:text-4xl">
              Sarvee Smile
            </span>
            <span>Dental and Implant Care</span>
            <span>Konkapalli</span>
          </span>
        </div>

        {/* ---------------------------------------------------------
            DESKTOP NAVIGATION
        --------------------------------------------------------- */}

        <nav
          className="
            hidden
            items-center
            gap-8

            md:flex

            lg:gap-12
          "
        >
          {/* About */}
          <a
            href="#about"
            className="
              text-lg
              font-medium
              text-white
              transition-colors
            "
          >
            About
          </a>

          

          {/* Services */}
          <a
            href="#services"
            className="
              text-lg
              text-white/60
              transition-colors
              hover:text-white
            "
          >
            Services
          </a>

          {/* Blog */}
          <a
            href="#blog"
            className="
              text-lg
              text-white/60
              transition-colors
              hover:text-white
            "
          >
            Blog
          </a>
        </nav>

        {/* WhatsApp contact */}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp at +91 8688046036"
          title="WhatsApp: +91 8688046036"
          className="
            hidden
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-[#25D366]
            text-white
            transition-transform
            hover:scale-105
            md:flex
          "
        >
          <FaWhatsapp aria-hidden="true" size={60} />
        </a>

        {/* ---------------------------------------------------------
            MOBILE HAMBURGER BUTTON
        --------------------------------------------------------- */}

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            relative
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            bg-white/10
            backdrop-blur-sm

            md:hidden
          "
        >
          {/* Menu Icon */}
          <Menu
            size={25}
            strokeWidth={1.8}
            className={`
              absolute
              transition-all
              duration-300

              ${
                menuOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }
            `}
          />

          {/* X Icon */}
          <X
            size={25}
            strokeWidth={1.8}
            className={`
              absolute
              transition-all
              duration-300

              ${
                menuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              }
            `}
          />
        </button>
      </header>

      {/* =========================================================
          MAIN HERO CONTENT
      ========================================================= */}

      <main
        className="
          relative
          z-10
          mt-[78px]
          px-6
          text-center
          animate-[blurIn_0.9s_ease-out_0.3s_both]

          md:max-w-3xl
          md:px-8
          md:text-left

          lg:px-16
        "
      >
        {/* ---------------------------------------------------------
            MAIN HEADING
        --------------------------------------------------------- */}

        <h1
          className="
            text-[72px]
            font-normal
            leading-[0.9]
            tracking-tight
            text-white

            sm:text-6xl

            lg:text-[90px]

            xl:text-[100px]
            xl:leading-[0.85]
          "
        >
          {/* First Line */}
          Restore

          <br />

          {/* Second Line */}
          Your True

          <br />

          {/* Third Line + Avatars */}
          <span
            className="
              inline-flex
              items-end
              gap-4

              lg:gap-6
            "
          >
            <span>
              Smile
            </span>

            {/* -----------------------------------------------------
                AVATAR GROUP
                Hidden on mobile
            ----------------------------------------------------- */}

            <span
              className="
                mb-[0.1em]
                hidden
                -space-x-2

                md:inline-flex
              "
            >
              {/* Avatar 1 */}
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                alt="Dental patient"
                className="
                  h-10
                  w-10
                  rounded-full
                  border-2
                  border-[#5F9AD1]
                  object-cover

                  lg:h-14
                  lg:w-14
                "
              />

              {/* Avatar 2 */}
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
                alt="Dental patient"
                className="
                  h-10
                  w-10
                  rounded-full
                  border-2
                  border-[#5F9AD1]
                  object-cover

                  lg:h-14
                  lg:w-14
                "
              />

              {/* +2K Circle */}
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border-2
                  border-[#5F9AD1]
                  bg-white
                  text-xs
                  font-medium
                  text-[#3D8CD5]

                  lg:h-14
                  lg:w-14
                  lg:text-base
                "
              >
                +2k
              </span>
            </span>
          </span>
        </h1>

        {/* ---------------------------------------------------------
            DESCRIPTION
            Hidden on mobile
        --------------------------------------------------------- */}

        <p
          className="
            mt-5
            hidden
            max-w-md
            text-lg
            leading-tight

            md:block

            lg:mt-6
          "
        >
          <span className="text-white/60">
            Using{" "}
          </span>

          <span className="text-white">
            advanced technology
          </span>

          <span className="text-white/60">
            , we deliver comprehensive treatments for a healthy,{" "}
          </span>

          <span className="text-white">
            confident smile.
          </span>
        </p>
      </main>

      {/* =========================================================
          BOTTOM LEFT STAT + WOMAN
          Hidden on mobile
      ========================================================= */}

      <div
        className="
          absolute
          bottom-0
          left-4
          z-10
          hidden

          md:block

          lg:left-12

          animate-[slideUp_0.9s_ease-out_0.8s_both]
        "
      >
        {/* ---------------------------------------------------------
            98% STATISTIC
        --------------------------------------------------------- */}

        <div
          className="
            absolute
            left-3
            top-8
            z-20
            flex
            flex-col
            items-center

            lg:left-4
            lg:top-12
          "
        >
          <span
            className="
              text-2xl
              font-bold
              text-[#3D8CD5]

              lg:text-4xl
            "
          >
            98%
          </span>

          <span
            className="
              text-center
              text-xs
              font-medium
              text-[#3D8CD5]

              lg:text-sm
            "
          >
            loyal dental
            <br />
            patients
          </span>
        </div>

        {/* ---------------------------------------------------------
            SMILING WOMAN
        --------------------------------------------------------- */}

        <img
          src="https://soft-zoom-63098134.figma.site/_assets/v11/ecccf0c10f5c64505f8cb104b04c72aba0b85b0c.png?w=512"
          alt="Smiling dental patient"
          className="
            relative
            z-10
            w-52
            object-contain

            sm:w-64

            lg:w-80
          "
        />
      </div>

      {/* =========================================================
          MOBILE MENU OVERLAY
      ========================================================= */}

      <div
        className={`
          fixed
          inset-0
          z-50
          flex
          flex-col
          justify-between
            bg-[#5F9AD1]/95
          p-6
          backdrop-blur-md
          transition-all
          duration-500

          md:hidden

          ${
            menuOpen
              ? "visible opacity-100"
              : "invisible opacity-0"
          }
        `}
        style={{
          transitionTimingFunction:
            "cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        {/* ---------------------------------------------------------
            MOBILE CLOSE BUTTON
        --------------------------------------------------------- */}

        <button
          type="button"
          onClick={() => setMenuOpen(false)}
          className="
            absolute
            right-6
            top-6
          "
          aria-label="Close menu"
        >
          <X
            size={30}
            strokeWidth={1.8}
          />
        </button>

        {/* ---------------------------------------------------------
            MOBILE NAVIGATION
        --------------------------------------------------------- */}

        <nav
          className="
            mt-24
            flex
            flex-col
            gap-6
          "
        >
          {[
            "About",
            "Results",
            "Pricing",
            "Reviews",
            "Blog",
          ].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`
                text-3xl
                font-light
                text-white
                transition-all
                duration-500

                ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
              style={{
                transitionDelay: menuOpen
                  ? `${100 + index * 60}ms`
                  : "0ms",

                transitionTimingFunction:
                  "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile WhatsApp action */}

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with us on WhatsApp at +91 8688046036"
          onClick={() => setMenuOpen(false)}
          className={`
            flex
            w-fit
            items-center
            gap-3
            rounded-full
            bg-[#25D366]
            px-5
            py-3
            text-white
            transition-all
            duration-500

            ${
              menuOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-5 opacity-0"
            }
          `}
          style={{
            transitionDelay: menuOpen
              ? "400ms"
              : "0ms",

            transitionTimingFunction:
              "cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span className="text-lg font-medium">WhatsApp</span>
        </a>
      </div>

      <button
        type="button"
        onClick={() => setAppointmentOpen(true)}
        className="
          fixed
          bottom-5
          right-4
          z-40
          flex
          min-h-12
          items-center
          justify-center
          whitespace-nowrap
          rounded-full
          bg-[#FF5C00]
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          shadow-lg
          transition-transform
          hover:scale-105
          active:scale-95
          md:hidden
        "
      >
        Book your appointment
      </button>

      {appointmentOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 md:hidden"
          onClick={() => setAppointmentOpen(false)}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            className="w-full max-w-md rounded-xl border border-white/10 bg-[#111827] p-5 text-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 id="appointment-title" className="text-xl font-semibold">
                Book your appointment
              </h2>
              <button
                type="button"
                aria-label="Close appointment form"
                onClick={() => setAppointmentOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                <X size={22} />
              </button>
            </div>

            <form onSubmit={handleAppointmentSubmit} className="space-y-4">
              <label className="block space-y-1.5 text-sm text-white/80">
                <span>Name</span>
                <input
                  required
                  autoComplete="name"
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-white/15 bg-[#1F2937] px-3 py-2.5 text-base text-white outline-none focus:border-[#FF5C00]"
                />
              </label>

              <label className="block space-y-1.5 text-sm text-white/80">
                <span>Age</span>
                <input
                  required
                  min="0"
                  max="120"
                  name="age"
                  type="number"
                  className="w-full rounded-md border border-white/15 bg-[#1F2937] px-3 py-2.5 text-base text-white outline-none focus:border-[#FF5C00]"
                />
              </label>

              <label className="block space-y-1.5 text-sm text-white/80">
                <span>Date of birth</span>
                <input
                  required
                  name="dateOfBirth"
                  type="date"
                  className="w-full rounded-md border border-white/15 bg-[#1F2937] px-3 py-2.5 text-base text-white outline-none focus:border-[#FF5C00]"
                />
              </label>

               <label className="block space-y-1.5 text-sm text-white/80">
                <span>Mobile number</span>
                <input
                  required
                  name="mobileNumber"
                  type="tel"
                  className="w-full rounded-md border border-white/15 bg-[#1F2937] px-3 py-2.5 text-base text-white outline-none focus:border-[#FF5C00]"
                />
              </label>

               <label className="block space-y-1.5 text-sm text-white/80">
                <span>Email</span>
                <input
                  required
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-white/15 bg-[#1F2937] px-3 py-2.5 text-base text-white outline-none focus:border-[#FF5C00]"
                />
              </label>

              <label className="block space-y-1.5 text-sm text-white/80">
                <span>Parent name</span>
                <input
                  name="parentName"
                  type="text"
                  autoComplete="name"
                  className="w-full rounded-md border border-white/15 bg-[#1F2937] px-3 py-2.5 text-base text-white outline-none focus:border-[#FF5C00]"
                />
              </label>

              <button
                type="submit"
                className="w-full rounded-md bg-[#25D366] px-4 py-3 font-semibold text-white transition hover:bg-[#20BD5A]"
              >
                Continue to WhatsApp
              </button>
            </form>
          </section>
        </div>
      )}
    </section>
  );
}

export default HeroSection;