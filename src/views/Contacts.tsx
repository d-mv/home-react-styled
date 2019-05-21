import React from "react";

import ContactsWrapper from "../components/ContactsWrapper";
// import ContactItem from "../components/ContactItem";

import Content from "../style/Content";

const Contacts = (Contacts: {
  data: { icon: string; description: string; link: string }[];
}) => {
  if (Contacts.data) {
    return (
      <Content data-test="view-content-contacts">
        <ContactsWrapper
          contacts={Contacts.data}
          data-test="component-contacts"
        />
      </Content>
      // <Content data-test="view-content-contacts">
      //   {Contacts.data.map(
      //     (contact: { icon: string; description: string; link: string }) => {
      //       return (
      //         <ContactItem
      //           key={contact.icon}
      //           contact={contact}
      //           data-test="component-contact"
      //         />
      //       );
      //     }
      //   )}
      // </Content>
    );
  } else {
    return <Content data-test="view-content-contacts-empty" />;
  }
};

export default Contacts;
