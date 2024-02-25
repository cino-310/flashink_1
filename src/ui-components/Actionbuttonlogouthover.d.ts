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
export declare type ActionbuttonlogouthoverOverridesProps = {
    Actionbuttonlogouthover?: PrimitiveOverrideProps<ViewProps>;
    "action-button-back/hover"?: ActionbuttonbackhoverProps;
    logout?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ActionbuttonlogouthoverProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ActionbuttonlogouthoverOverridesProps | undefined | null;
}>;
export default function Actionbuttonlogouthover(props: ActionbuttonlogouthoverProps): React.ReactElement;
