/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Texticon from "./Texticon";
import { View } from "@aws-amplify/ui-react";
export default function Modeinputtext(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(0,0,0,0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,253,255,1)"
      {...getOverrideProps(overrides, "Modeinputtext")}
      {...rest}
    >
      <Texticon
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4px"
        left="12px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "text-icon")}
      ></Texticon>
    </View>
  );
}
