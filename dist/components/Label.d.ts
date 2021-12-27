/// <reference types="react" />
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
export declare const Label: ({ label, size, color, allCaps, fontColor, }: Props) => JSX.Element;
