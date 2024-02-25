/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { MessagebodyProps } from "./Messagebody";
import { MessagelabelProps } from "./Messagelabel";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MessagewarningOverridesProps = {
    Messagewarning?: PrimitiveOverrideProps<ViewProps>;
    "message-body"?: MessagebodyProps;
    "message-label"?: MessagelabelProps;
} & EscapeHatchProps;
export declare type MessagewarningProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: MessagewarningOverridesProps | undefined | null;
}>;
export default function Messagewarning(props: MessagewarningProps): React.ReactElement;
