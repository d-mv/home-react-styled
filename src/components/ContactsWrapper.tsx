import React from "react";
import ContactItem from "./ContactItem";

import Style from "../style/ContactsWrapper";

const ContactsWrapper = (ContactsProps: {
  contacts: Array<{ icon: string; description: string; link: string }>;
}) => {
  if (ContactsProps.contacts) {
    return (
      <Style data-test="component-contacts">
        {ContactsProps.contacts.map(
          (contact: { icon: string; description: string; link: string }) => {
            return (
              <ContactItem
                key={contact.icon}
                contact={contact}
                data-test="component-contact"
              />
            );
          }
        )}
      </Style>
    );
  } else {
    return null;
  }
};

export default ContactsWrapper;
