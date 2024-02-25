/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { DeletebuttondefaultProps } from "./Deletebuttondefault";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteitemdefaultOverridesProps = {
    Noteitemdefault?: PrimitiveOverrideProps<ViewProps>;
    "last updated"?: PrimitiveOverrideProps<TextProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    "delete-button/default"?: DeletebuttondefaultProps;
} & EscapeHatchProps;
export declare type NoteitemdefaultProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NoteitemdefaultOverridesProps | undefined | null;
}>;
export default function Noteitemdefault(props: NoteitemdefaultProps): React.ReactElement;
