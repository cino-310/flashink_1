/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ModeinputeraserProps } from "./Modeinputeraser";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OptionfieldmodeeraserOverridesProps = {
    Optionfieldmodeeraser?: PrimitiveOverrideProps<ViewProps>;
    "mode-input/eraser"?: ModeinputeraserProps;
} & EscapeHatchProps;
export declare type OptionfieldmodeeraserProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: OptionfieldmodeeraserOverridesProps | undefined | null;
}>;
export default function Optionfieldmodeeraser(props: OptionfieldmodeeraserProps): React.ReactElement;
