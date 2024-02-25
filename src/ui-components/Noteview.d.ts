/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NotecanvasProps } from "./Notecanvas";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteviewOverridesProps = {
    Noteview?: PrimitiveOverrideProps<ViewProps>;
    "note-canvas"?: NotecanvasProps;
} & EscapeHatchProps;
export declare type NoteviewProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: NoteviewOverridesProps | undefined | null;
}>;
export default function Noteview(props: NoteviewProps): React.ReactElement;
