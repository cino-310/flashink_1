/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Notecanvas from "./Notecanvas";
import { View } from "@aws-amplify/ui-react";
export default function Noteview(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="800px"
      height="944px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,253,255,1)"
      {...getOverrideProps(overrides, "Noteview")}
      {...rest}
    >
      <Notecanvas
        width="736px"
        height="880px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="32px"
        left="32px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "note-canvas")}
      ></Notecanvas>
    </View>
  );
}
