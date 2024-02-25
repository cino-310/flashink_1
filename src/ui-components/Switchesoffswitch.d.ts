/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SwitchesoffswitchOverridesProps = {
    Switchesoffswitch?: PrimitiveOverrideProps<ViewProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    switch?: PrimitiveOverrideProps<ViewProps>;
    track?: PrimitiveOverrideProps<ViewProps>;
    thumb?: PrimitiveOverrideProps<ViewProps>;
} & EscapeHatchProps;
export declare type SwitchesoffswitchProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: SwitchesoffswitchOverridesProps | undefined | null;
}>;
export default function Switchesoffswitch(props: SwitchesoffswitchProps): React.ReactElement;
