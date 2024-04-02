import { ElementTitleTypes } from "@atom/Element/ElementTitle/ElementTitle.types";

export interface SectionTypes extends ElementTitleTypes {
  children: JSX.Element;
  title: string;
  titleComponent?: JSX.Element;
  mobileAutoWidth?: boolean | undefined;
}
