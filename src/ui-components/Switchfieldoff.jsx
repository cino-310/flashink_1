/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Switchesoffswitch from "./Switchesoffswitch";
import Colorinput from "./Colorinput";
import { Flex } from "@aws-amplify/ui-react";
export default function Switchfieldoff(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="200px"
      height="40px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="4px 0px 4px 0px"
      {...getOverrideProps(overrides, "Switchfieldoff")}
      {...rest}
    >
      <Switchesoffswitch
        width="88px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "switches/off-switch")}
      ></Switchesoffswitch>
      <Colorinput
        width="48px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,253,255,1)"
        {...getOverrideProps(overrides, "color-input")}
      ></Colorinput>
    </Flex>
  );
}
