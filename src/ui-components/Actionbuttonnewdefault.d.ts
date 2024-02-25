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
export declare type ActionbuttonnewdefaultOverridesProps = {
    Actionbuttonnewdefault?: PrimitiveOverrideProps<ViewProps>;
    "action-button-back/default"?: ActionbuttonbackdefaultProps;
    new?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ActionbuttonnewdefaultProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ActionbuttonnewdefaultOverridesProps | undefined | null;
}>;
export default function Actionbuttonnewdefault(props: ActionbuttonnewdefaultProps): React.ReactElement;
