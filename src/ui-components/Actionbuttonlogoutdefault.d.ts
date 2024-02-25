/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActionbuttonbackdefaultProps } from "./Actionbuttonbackdefault";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionbuttonlogoutdefaultOverridesProps = {
    Actionbuttonlogoutdefault?: PrimitiveOverrideProps<ViewProps>;
    "action-button-back/default"?: ActionbuttonbackdefaultProps;
    logout?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ActionbuttonlogoutdefaultProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ActionbuttonlogoutdefaultOverridesProps | undefined | null;
}>;
export default function Actionbuttonlogoutdefault(props: ActionbuttonlogoutdefaultProps): React.ReactElement;
