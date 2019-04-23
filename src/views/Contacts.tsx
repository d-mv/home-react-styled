import React from "react";

import {
  FaGithubAlt,
  FaLinkedinIn,
  FaSkype,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import Content from "../style/Content";
import { ContactsGrid } from "../style/Grid";
import {
  ContactIcons,
  ContactTexts,
  ContactIcon,
  ContactText
} from "../style/ContactStyles";

interface Window {
  open: (arg0: any) => void
}

const handleClickGitHub = () => {
  const url = "https://github.com/d-mv";
  window.open(url, "_blank");
};
const handleClickLinkedIn = () => {
  const url = "https://www.linkedin.com/in/dmitry-melnikov-pm/";
  window.open(url, "_blank");
};
const handleClickSkype = () => {
  window.location.href = "skype:dmitry.melnikov?chat";
};
const handleClickInstagram = () => {
  const url = "https://www.instagram.com/melnikov_dm/";
  window.open(url, "_blank");
};
const handleClickMail = () => {
  const messageDetails = {
    email: "d.dash.mv@gmail.com",
    subj: "From your web-site",
    body: "Hi Dmitry,"
  };
  // from url
  const sendMessage = `mailto:${messageDetails.email}?subject=${
    messageDetails.subj
  }&body=${messageDetails.body}`;
  // open default mail client
  window.location.href = sendMessage;
};
const handleClickWhatsApp = () => {
  const url = "https://wa.me/972586297491";
  window.open(url, "_blank");
};

 const Contacts = ()=> {
  return (
    <Content id="content">
      <ContactsGrid id="grid">
        <ContactIcons>
          <ContactIcon>
            <FaGithubAlt onClick={handleClickGitHub} />
          </ContactIcon>
          <ContactIcon>
            <FaLinkedinIn onClick={handleClickLinkedIn} />
          </ContactIcon>
          <ContactIcon>
            <FaSkype onClick={handleClickSkype} />
          </ContactIcon>
          <ContactIcon>
            <FaInstagram onClick={handleClickInstagram} />
          </ContactIcon>
          <ContactIcon>
            <MdEmail onClick={handleClickMail} />
          </ContactIcon>
          <ContactIcon>
            <FaWhatsapp onClick={handleClickWhatsApp} />
          </ContactIcon>
        </ContactIcons>
        <ContactTexts>
          <ContactText onClick={handleClickGitHub}>
            GitHub repositories for projects
          </ContactText>
          <ContactText onClick={handleClickLinkedIn}>LinkedIn page</ContactText>
          <ContactText onClick={handleClickSkype}>Skype</ContactText>
          <ContactText onClick={handleClickInstagram}>
            Instagram account
          </ContactText>
          <ContactText onClick={handleClickMail}>Mail</ContactText>
          <ContactText onClick={handleClickWhatsApp}>WhatsApp</ContactText>
        </ContactTexts>
      </ContactsGrid>
    </Content>
  );
}

export default Contacts
