export interface FixedButtonTypes {
  type?: "save" | "new" | "edit";
  callback?: () => void;
  noBorder?: boolean;
}

export interface FixedButtonStyledTypes {
  noBorder: boolean;
}
