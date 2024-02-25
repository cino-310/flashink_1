/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Optionfieldmodeeraser from "./Optionfieldmodeeraser";
import Optionfieldmodepen from "./Optionfieldmodepen";
import Optionfieldmodetext from "./Optionfieldmodetext";
import Optionfieldmode from "./Optionfieldmode";
import Optionfieldsize from "./Optionfieldsize";
import Optionfieldink from "./Optionfieldink";
import Menubody from "./Menubody";
import { View } from "@aws-amplify/ui-react";
export default function Currentink(props) {
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
      {...getOverrideProps(overrides, "Currentink")}
      {...rest}
    >
      <Optionfieldmodeeraser
        width="200px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="136px"
        left="0px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "option-field/mode/eraser")}
      ></Optionfieldmodeeraser>
      <Optionfieldmodepen
        width="200px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="136px"
        left="0px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "option-field/mode/pen")}
      ></Optionfieldmodepen>
      <Optionfieldmodetext
        width="200px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="136px"
        left="0px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "option-field/mode/text")}
      ></Optionfieldmodetext>
      <Optionfieldmode
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
        {...getOverrideProps(overrides, "option-field/mode")}
      ></Optionfieldmode>
      <Optionfieldsize
        width="200px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="88px"
        left="0px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "option-field/size")}
      ></Optionfieldsize>
      <Optionfieldink
        width="200px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="40px"
        left="0px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "option-field/ink")}
      ></Optionfieldink>
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
