import React from "react";
import ContactForm from "../components/ContactForm";
import "../styles/Contact.css";
import { useTheme } from "../context/ThemeProvider";

const Contact = () => {
  const { theme } = useTheme();
  const callIcon = (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <rect width={24} height={24} fill="none" />{" "}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.14089 4.4021C2.34025 2.92963 3.63956 2 4.99004 2H7.55848C8.84977 2 9.99619 2.82629 10.4045 4.05132L11.454 7.19963C11.905 8.55283 11.1086 10.0036 9.72482 10.3496C9.38646 10.4342 9.26975 10.8555 9.51637 11.1022L12.8978 14.4836C13.1445 14.7303 13.5658 14.6135 13.6504 14.2752C13.9964 12.8914 15.4472 12.095 16.8004 12.546L19.9487 13.5955C21.1737 14.0038 22 15.1502 22 16.4415V19.01C22 20.3604 21.0704 21.6598 19.5979 21.8591C18.9114 21.9521 18.211 22 17.5 22C8.93959 22 2 15.0604 2 6.5C2 5.78898 2.04794 5.08863 2.14089 4.4021Z"
        />{" "}
        <path d="M21.7071 3.70711C22.0976 3.31658 22.0976 2.68342 21.7071 2.29289C21.3166 1.90237 20.6834 1.90237 20.2929 2.29289L16 6.58579V5C16 4.44772 15.5523 4 15 4C14.4477 4 14 4.44772 14 5V8.5C14 9.32843 14.6716 10 15.5 10H19C19.5523 10 20 9.55228 20 9C20 8.44772 19.5523 8 19 8H17.4142L21.7071 3.70711Z" />{" "}
      </g>
    </svg>
  );

  const emailIcon = (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth={0} />
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="style=fill">
          {" "}
          <g id="email">
            {" "}
            <path
              id="Subtract"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7 2.75C5.38503 2.75 3.92465 3.15363 2.86466 4.1379C1.79462 5.13152 1.25 6.60705 1.25 8.5V15.5C1.25 17.393 1.79462 18.8685 2.86466 19.8621C3.92465 20.8464 5.38503 21.25 7 21.25H17C18.615 21.25 20.0754 20.8464 21.1353 19.8621C22.2054 18.8685 22.75 17.393 22.75 15.5V8.5C22.75 6.60705 22.2054 5.13152 21.1353 4.1379C20.0754 3.15363 18.615 2.75 17 2.75H7ZM19.2285 8.3623C19.5562 8.10904 19.6166 7.63802 19.3633 7.31026C19.1101 6.98249 18.6391 6.9221 18.3113 7.17537L12.7642 11.4616C12.3141 11.8095 11.6858 11.8095 11.2356 11.4616L5.6886 7.17537C5.36083 6.9221 4.88982 6.98249 4.63655 7.31026C4.38328 7.63802 4.44367 8.10904 4.77144 8.3623L10.3185 12.6486C11.3089 13.4138 12.691 13.4138 13.6814 12.6486L19.2285 8.3623Z"
            />{" "}
          </g>{" "}
        </g>{" "}
      </g>
    </svg>
  );

  return (
    <section
      id="Contact"
      className="contact-container | bg-accent padding-inline"
    >
      <div class="contact-wrapper">
        <div class="contact-title">
          <p className="uppercase fs-secondary-subheading fw-semi-bold text-footer">
            Get in touch
          </p>
          <h2 className="fs-secondary-heading fw-bold text-footer">Contact</h2>
        </div>
        <div class="contact-content">
          <ContactForm />
          <article className="map-container">
            <div
              id="google-maps-canvas"
              style={{ height: "100%", width: "100%", maxWidth: "100%" }}
            >
              <iframe
                title="location"
                style={{ height: "100%", width: "100%", border: 0 }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.119528737977!2d80.25809017572307!3d12.964202515039096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d39301a3f6d%3A0xd1d1dc5139c5f097!2s163%2C%204th%20Link%20Rd%2C%20Palkalai%20Nagar%2C%20Palavakkam%2C%20Chennai%2C%20Tamil%20Nadu%20600041%2C%20India!5e0!3m2!1sen!2sca!4v1726065157062!5m2!1sen!2sca"
              />
            </div>
            <div
              class={`contact-info ${
                theme === "light" && "contact-info-light"
              }`}
            >
              <article>
                <a className="icon-text" href="mailto: mohamedsaqib1996@gmail.com">
                  <h3>{emailIcon}</h3>
                  <p className="text-footer fs-secondary-subheading fw-semi-bold ">
                    mohamedsaqib1996@gmail.com
                  </p>
                </a>
              </article>
              <article>
                <a className="icon-text" href="tel:+12508842465">
                  <h3>{callIcon}</h3>
                  <p className="text-footer fs-secondary-subheading fw-semi-bold ">
                    +91 (729) 918-4226
                  </p>
                </a>
              </article>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
