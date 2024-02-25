/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Colorinput from "./Colorinput";
import Switchesonswitch from "./Switchesonswitch";
import Switchesoffswitch from "./Switchesoffswitch";
import { View } from "@aws-amplify/ui-react";
export default function Inkswitch(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="200px"
      height="40px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Inkswitch")}
      {...rest}
    >
      <Colorinput
        width="48px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 16px - 0px)"
        left="124px"
        border="1px SOLID rgba(0,0,0,0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,253,255,1)"
        {...getOverrideProps(overrides, "color-input")}
      ></Colorinput>
      <Switchesonswitch
        width="88px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 16px - 0px)"
        left="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "switches/on-switch")}
      ></Switchesonswitch>
      <Switchesoffswitch
        width="88px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="calc(50% - 16px - 0px)"
        left="16px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "switches/off-switch")}
      ></Switchesoffswitch>
    </View>
  );
}
