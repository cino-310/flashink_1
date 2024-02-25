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
export declare type ActionbuttonsettinghoverOverridesProps = {
    Actionbuttonsettinghover?: PrimitiveOverrideProps<ViewProps>;
    "action-button-back/hover"?: ActionbuttonbackhoverProps;
    setting?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ActionbuttonsettinghoverProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ActionbuttonsettinghoverOverridesProps | undefined | null;
}>;
export default function Actionbuttonsettinghover(props: ActionbuttonsettinghoverProps): React.ReactElement;
