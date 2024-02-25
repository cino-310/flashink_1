/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActionbuttonbackhoverProps } from "./Actionbuttonbackhover";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionbuttonnewhoverOverridesProps = {
    Actionbuttonnewhover?: PrimitiveOverrideProps<ViewProps>;
    "action-button-back/hover"?: ActionbuttonbackhoverProps;
    new?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ActionbuttonnewhoverProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ActionbuttonnewhoverOverridesProps | undefined | null;
}>;
export default function Actionbuttonnewhover(props: ActionbuttonnewhoverProps): React.ReactElement;
