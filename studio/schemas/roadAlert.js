import { MdAnnouncement } from "react-icons/md";

export default {
  name: "roadAlert",
  title: "Road Alert",
  type: "document",
  icon: MdAnnouncement,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "blockContent",
      title: "Block Content",
      type: "blockContent"
    }
  ]
};
