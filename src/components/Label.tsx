import "./label.css";

export interface Props {
  /**
   * Value to be shown in label
   */
  label: string;
  /**
   * How large should the label be?
   */
  size: "normal" | "h1" | "h2" | "h3";
  /**
   * Aspect of the label
   */
  color?: "primary" | "secondary" | "tertiary";
  /**
   * Capitalize content
   */
  allCaps?: boolean;
  /**
   * What font color to use
   */
  fontColor?: string;
}
export const Label = ({
  label = "No label",
  size = "normal",
  color = "primary",
  allCaps = false,
  fontColor,
}: Props) => {
  return (
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
