/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FontinputOverridesProps = {
    Fontinput?: PrimitiveOverrideProps<ViewProps>;
    "Text Value"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FontinputProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: FontinputOverridesProps | undefined | null;
}>;
export default function Fontinput(props: FontinputProps): React.ReactElement;
