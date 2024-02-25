/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Inkswitch from "./Inkswitch";
import Menubody from "./Menubody";
import { View } from "@aws-amplify/ui-react";
export default function Flashinginks(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="184px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Flashinginks")}
      {...rest}
    >
      <Inkswitch
        width="200px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="136px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "thirdink")}
      ></Inkswitch>
      <Inkswitch
        width="200px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="88px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "secondink")}
      ></Inkswitch>
      <Inkswitch
        width="200px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="40px"
        left="0px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "firstink")}
      ></Inkswitch>
      <Menubody
        width="242px"
        height="186px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-1px"
        left="-1px"
        border="1px SOLID rgba(0,0,0,0.25)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "menu-body")}
      ></Menubody>
    </View>
  );
}
