/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Fontinput from "./Fontinput";
import { Text, View } from "@aws-amplify/ui-react";
export default function Optionfieldsize(props) {
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
      {...getOverrideProps(overrides, "Optionfieldsize")}
      {...rest}
    >
      <Fontinput
        width="48px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4px"
        left="124px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        border="1px SOLID rgba(0,0,0,0.25)"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(250,253,255,1)"
        {...getOverrideProps(overrides, "font-input")}
      ></Fontinput>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(40,79,106,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="4px"
        left="19px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Size"
        {...getOverrideProps(overrides, "label")}
      ></Text>
    </View>
  );
}
