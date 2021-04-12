import { MdContacts } from "react-icons/md";

export default {
  name: "contact",
  title: "Contact",
  type: "document",
  icon: MdContacts,
  liveEdit: false,
  // You probably want to uncomment the next line once you've made the pages documents in the Studio. This will remove the pages document type from the create-menus.
  // __experimental_actions: ['update', 'publish', /* 'create', 'delete' */],
  fields: [
    {
      name: "address",
      title: "Address",
      type: "string"
    },
    {
      name: "email",
      title: "Email",
      type: "string"
    },
    {
      name: "telephone",
      title: "Telephone",
      type: "string"
    },
    {
      name: "fax",
      title: "Fax",
      type: "string"
    }
  ]
};
