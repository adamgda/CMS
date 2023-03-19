import { ElementTitleTypes } from "../../Molecules/Element/Components/ElementTitle/ElementTitle.types";

export interface SectionTypes extends ElementTitleTypes {
  children: JSX.Element;
  title: string;
  titleComponent?: JSX.Element;
}
