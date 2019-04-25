import React from "react";

import ContactsWrapper from "../components/ContactsWrapper";

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
    );
  } else {
    return <Content data-test="view-content-contacts-empty" />;
  }
};

export default Contacts;
