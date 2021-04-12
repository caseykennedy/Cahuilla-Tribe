import { MdDocument } from "react-icons/md";

export default {
  name: "roadsAndTransport",
  title: "Roads and Transport",
  type: "document",
  icon: MdDocument,
  fields: [
    {
      name: "lead",
      title: "Lead",
      type: "string"
    },
    {
      name: "blockContent",
      title: "Block Content",
      type: "blockContent"
    },
    {
      name: "alert",
      title: "Alert",
      type: "array",
      of: [{ type: "roadAlert" }]
    }
  ]
};
