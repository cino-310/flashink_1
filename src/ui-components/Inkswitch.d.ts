/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ColorinputProps } from "./Colorinput";
import { SwitchesonswitchProps } from "./Switchesonswitch";
import { SwitchesoffswitchProps } from "./Switchesoffswitch";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type InkswitchOverridesProps = {
    Inkswitch?: PrimitiveOverrideProps<ViewProps>;
    "color-input"?: ColorinputProps;
    "switches/on-switch"?: SwitchesonswitchProps;
    "switches/off-switch"?: SwitchesoffswitchProps;
} & EscapeHatchProps;
export declare type InkswitchProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: InkswitchOverridesProps | undefined | null;
}>;
export default function Inkswitch(props: InkswitchProps): React.ReactElement;
