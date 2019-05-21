import React from "react";
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaSkype,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

// import Style from "../style/ContactItem";
import { ContactsGrid } from "../style/Grid";
import { ContactIcon, ContactText } from "../style/ContactStyles";

interface Window {
  open: (arg0: any) => void;
}

const chooseIcon = (icon: string) => {
  const iconTag = `component-contact-${icon.toLowerCase()}`;
  switch (icon) {
    case "FaGithubAlt":
      return <FaGithubAlt data-test={iconTag} />;
    case "FaLinkedinIn":
      return <FaLinkedinIn data-test={iconTag} />;
    case "FaSkype":
      return <FaSkype data-test={iconTag} />;
    case "FaInstagram":
      return <FaInstagram data-test={iconTag} />;
    case "FaWhatsapp":
      return <FaWhatsapp data-test={iconTag} />;
    default:
      return <MdEmail data-test={iconTag} />;
  }
};

const handleClick = (mode: string, url: string) => {
  if (mode.includes("mail")) {
    const messageDetails = {
      email: url,
      subj: "From your web-site",
      body: "Hi Dmitry,"
    };
    const sendMessage = `mailto:${messageDetails.email}?subject=${
      messageDetails.subj
    }&body=${messageDetails.body}`;
    // open default mail client
    window.location.href = sendMessage;
  } else {
    window.open(url, "_blank");
  }
};

const ContactItem = (ContactProps: {
  contact: { icon: string; description: string; link: string };
}) => {
  if (ContactProps.contact) {
    const icon = chooseIcon(ContactProps.contact.icon);
    return (
      <ContactsGrid
        onClick={() =>
          handleClick(ContactProps.contact.icon, ContactProps.contact.link)
        }
        data-test="component-contact"
      >
        <ContactIcon>{icon}</ContactIcon>
        <ContactText data-test="component-contact-description">
          {ContactProps.contact.description}
        </ContactText>
      </ContactsGrid>
    );
  } else {
    return null;
  }
};

export default ContactItem;
