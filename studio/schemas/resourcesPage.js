import { MdDocument } from "react-icons/md";

export default {
  name: "resourcesPage",
  title: "Resources Page",
  type: "document",
  icon: MdDocument,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string"
    },
    {
      name: "heroFigure",
      title: "Hero Figure",
      type: "figure"
    },
    {
      name: "careersFigure",
      title: "Careers Figure",
      type: "figure"
    }
  ]
};
