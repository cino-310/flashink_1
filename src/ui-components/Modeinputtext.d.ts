/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TexticonProps } from "./Texticon";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ModeinputtextOverridesProps = {
    Modeinputtext?: PrimitiveOverrideProps<ViewProps>;
    "text-icon"?: TexticonProps;
} & EscapeHatchProps;
export declare type ModeinputtextProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: ModeinputtextOverridesProps | undefined | null;
}>;
export default function Modeinputtext(props: ModeinputtextProps): React.ReactElement;
