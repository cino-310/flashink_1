/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Messagebody from "./Messagebody";
import Messagelabel from "./Messagelabel";
import { View } from "@aws-amplify/ui-react";
export default function Messageerror(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="800px"
      height="160px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(245,188,188,1)"
      opacity="0.8999999761581421"
      {...getOverrideProps(overrides, "Messageerror")}
      {...rest}
    >
      <Messagebody
        width="720px"
        height="80px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="calc(50% - 40px - -24px)"
        left="calc(50% - 360px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "message-body")}
      ></Messagebody>
      <Messagelabel
        width="200px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="24px"
        left="40px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "message-label")}
      ></Messagelabel>
    </View>
  );
}
