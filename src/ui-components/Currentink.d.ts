/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { OptionfieldmodeeraserProps } from "./Optionfieldmodeeraser";
import { OptionfieldmodepenProps } from "./Optionfieldmodepen";
import { OptionfieldmodetextProps } from "./Optionfieldmodetext";
import { OptionfieldmodeProps } from "./Optionfieldmode";
import { OptionfieldsizeProps } from "./Optionfieldsize";
import { OptionfieldinkProps } from "./Optionfieldink";
import { MenubodyProps } from "./Menubody";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CurrentinkOverridesProps = {
    Currentink?: PrimitiveOverrideProps<ViewProps>;
    "option-field/mode/eraser"?: OptionfieldmodeeraserProps;
    "option-field/mode/pen"?: OptionfieldmodepenProps;
    "option-field/mode/text"?: OptionfieldmodetextProps;
    "option-field/mode"?: OptionfieldmodeProps;
    "option-field/size"?: OptionfieldsizeProps;
    "option-field/ink"?: OptionfieldinkProps;
    "menu-body"?: MenubodyProps;
} & EscapeHatchProps;
export declare type CurrentinkProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: CurrentinkOverridesProps | undefined | null;
}>;
export default function Currentink(props: CurrentinkProps): React.ReactElement;
