import { useState } from "react";
import { navigation } from "../data/siteContent";

function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav
        style={{
          width: "100%",
          maxWidth: "1512px",
          height: "92px",
          background: "#ffffff",
          borderBottom: "1px solid #e5e5e5",
          position: "relative",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <div
          className="hidden lg:block"
          style={{
            position: "absolute",
            left: "115px",
            top: "12px",
            width: "72px",
            height: "67px",
          }}
        >
          <img
            src="/logo.png"
            alt="Mediora Clinic Logo"
            style={{ width: "72px", height: "67px", objectFit: "contain" }}
          />
        </div>

        <span
          className="hidden lg:block"
          style={{
            position: "absolute",
            left: "194px",
            top: "28px",
            fontFamily: "Raleway, sans-serif",
            fontWeight: 800,
            fontSize: "30px",
            color: "#000000",
            lineHeight: 1,
            whiteSpace: "nowrap",
          }}
        >
          Mediora Clinic
        </span>

        <div
          className="hidden lg:flex"
          style={{
            position: "absolute",
            left: "700px",
            top: "23px",
            height: "40px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: "50px",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {navigation.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setActive(item.label)}
                  style={{
                    fontFamily: "Kanit, sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    color: active === item.label ? "#2563eb" : "#000000",
                    textDecoration: "none",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    transition: "color 0.15s",
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#appointment"
            onClick={() => setActive("")}
            style={{
              marginLeft: "50px",
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "18px",
              color: "#ffffff",
              background: "#2563eb",
              border: "none",
              borderRadius: "6px",
              padding: "0 20px",
              height: "40px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              whiteSpace: "nowrap",
              lineHeight: 1,
              textDecoration: "none",
              transition: "background 0.15s",
            }}
            onMouseEnter={(event) => {
              event.currentTarget.style.background = "#1d4ed8";
            }}
            onMouseLeave={(event) => {
              event.currentTarget.style.background = "#2563eb";
            }}
          >
            Call Now
          </a>
        </div>

        <div className="flex h-full items-center justify-between px-4 lg:hidden">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Mediora Clinic Logo"
              className="h-10 w-10 object-contain sm:h-12 sm:w-12"
            />
            <span
              style={{
                fontFamily: "Raleway, sans-serif",
                fontWeight: 800,
                fontSize: "19px",
                color: "#000000",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              Mediora Clinic
            </span>
          </a>

          <a
            href="#appointment"
            style={{
              fontFamily: "Manrope, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              color: "#ffffff",
              background: "#2563eb",
              borderRadius: "6px",
              padding: "9px 11px",
              lineHeight: 1,
              textDecoration: "none",
            }}
          >
            Call Now
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
