function Footer() {
  return (
    <footer className="relative h-auto min-h-[205px] w-full bg-[#d9d9d9] px-6 py-8 lg:h-[205px] lg:px-0 lg:py-0">
      <div className="mx-auto flex max-w-[1512px] flex-col items-center gap-7 lg:relative lg:h-full">
        <div className="flex items-center justify-center lg:absolute lg:left-[612px] lg:top-[38px] lg:h-[67px] lg:w-[288px] lg:justify-start">
          <img
            src="/logo.png"
            alt="Mediora Clinic logo"
            className="h-[67px] w-[72px] object-cover"
          />
          <p className="ml-[7px] font-['Raleway',sans-serif] text-[30px] font-extrabold leading-none tracking-normal text-black">
            Mediora Clinic
          </p>
        </div>

        <p className="font-['Raleway',sans-serif] text-[18px] font-normal leading-none tracking-normal text-black lg:absolute lg:left-[159px] lg:top-[137px] lg:h-[27px] lg:w-[266px]">
          @2026 powered by SpriteEra
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-8 font-['Raleway',sans-serif] text-[18px] font-normal leading-none tracking-normal text-black lg:absolute lg:left-[578px] lg:top-[137px] lg:h-[21px] lg:w-[356px] lg:gap-[80px]">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms &amp; Conditions</a>
        </nav>

        <div className="flex items-center gap-[17px] lg:absolute lg:left-[1150px] lg:top-[133px] lg:h-[30px]">
          <span className="mr-[9px] font-['Raleway',sans-serif] text-[18px] font-normal leading-none tracking-normal text-black">
            Follow Us:
          </span>
          <SocialFacebook />
          <SocialInstagram />
          <SocialYoutube />
        </div>
      </div>
    </footer>
  );
}

function SocialFacebook() {
  return (
    <a href="#facebook" aria-label="Facebook" className="block h-[30px] w-[30px]">
      <svg viewBox="0 0 30 30" role="img" className="h-full w-full">
        <circle cx="15" cy="15" r="15" fill="#1877F2" />
        <path
          d="M17.6 9.7h2V6.3c-.4 0-1.7-.1-3.2-.1-3.2 0-5.4 1.9-5.4 5.5v3H7.7v3.8H11V30h4.1V18.5h3.4l.6-3.8h-4v-2.6c0-1.1.3-2.4 2.5-2.4Z"
          fill="#fff"
        />
      </svg>
    </a>
  );
}

function SocialInstagram() {
  return (
    <a href="#instagram" aria-label="Instagram" className="block h-[30px] w-[30px]">
      <svg viewBox="0 0 30 30" role="img" className="h-full w-full">
        <defs>
          <linearGradient id="instagramGradient" x1="4" x2="26" y1="27" y2="3">
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset="0.28" stopColor="#FA7E1E" />
            <stop offset="0.52" stopColor="#D62976" />
            <stop offset="0.74" stopColor="#962FBF" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>
        <rect width="30" height="30" rx="8" fill="url(#instagramGradient)" />
        <rect
          x="7.2"
          y="7.2"
          width="15.6"
          height="15.6"
          rx="4.7"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
        />
        <circle cx="15" cy="15" r="4" fill="none" stroke="#fff" strokeWidth="2" />
        <circle cx="20.3" cy="9.8" r="1.4" fill="#fff" />
      </svg>
    </a>
  );
}

function SocialYoutube() {
  return (
    <a href="#youtube" aria-label="YouTube" className="block h-[30px] w-[30px]">
      <svg viewBox="0 0 30 30" role="img" className="h-full w-full">
        <rect x="2" y="6.5" width="26" height="17" rx="5" fill="#FF0000" />
        <path d="M12.6 11.1v7.8L20 15l-7.4-3.9Z" fill="#fff" />
      </svg>
    </a>
  );
}

export default Footer;
