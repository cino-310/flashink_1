/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { InkswitchProps } from "./Inkswitch";
import { MenubodyProps } from "./Menubody";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FlashinginksOverridesProps = {
    Flashinginks?: PrimitiveOverrideProps<ViewProps>;
    thirdink?: InkswitchProps;
    secondink?: InkswitchProps;
    firstink?: InkswitchProps;
    "menu-body"?: MenubodyProps;
} & EscapeHatchProps;
export declare type FlashinginksProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FlashinginksOverridesProps | undefined | null;
}>;
export default function Flashinginks(props: FlashinginksProps): React.ReactElement;
