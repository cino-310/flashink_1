/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ModeinputtextProps } from "./Modeinputtext";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OptionfieldmodetextOverridesProps = {
    Optionfieldmodetext?: PrimitiveOverrideProps<ViewProps>;
    "mode-input/text"?: ModeinputtextProps;
} & EscapeHatchProps;
export declare type OptionfieldmodetextProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: OptionfieldmodetextOverridesProps | undefined | null;
}>;
export default function Optionfieldmodetext(props: OptionfieldmodetextProps): React.ReactElement;
