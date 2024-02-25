/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
import { DeletebuttonhoverProps } from "./Deletebuttonhover";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteitemhoverOverridesProps = {
    Noteitemhover?: PrimitiveOverrideProps<ViewProps>;
    "last updated"?: PrimitiveOverrideProps<TextProps>;
    title?: PrimitiveOverrideProps<TextProps>;
    "delete-button/hover"?: DeletebuttonhoverProps;
} & EscapeHatchProps;
export declare type NoteitemhoverProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NoteitemhoverOverridesProps | undefined | null;
}>;
export default function Noteitemhover(props: NoteitemhoverProps): React.ReactElement;
