/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ColorinputProps } from "./Colorinput";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OptionfieldinkOverridesProps = {
    Optionfieldink?: PrimitiveOverrideProps<ViewProps>;
    "color-input"?: ColorinputProps;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type OptionfieldinkProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: OptionfieldinkOverridesProps | undefined | null;
}>;
export default function Optionfieldink(props: OptionfieldinkProps): React.ReactElement;
