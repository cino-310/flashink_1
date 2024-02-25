/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { SwitchesoffswitchProps } from "./Switchesoffswitch";
import { ColorinputProps } from "./Colorinput";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SwitchfieldoffOverridesProps = {
    Switchfieldoff?: PrimitiveOverrideProps<FlexProps>;
    "switches/off-switch"?: SwitchesoffswitchProps;
    "color-input"?: ColorinputProps;
} & EscapeHatchProps;
export declare type SwitchfieldoffProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SwitchfieldoffOverridesProps | undefined | null;
}>;
export default function Switchfieldoff(props: SwitchfieldoffProps): React.ReactElement;
