/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Notecanvas(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="736px"
      height="880px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Notecanvas")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="500"
        color="rgba(0,0,0,1)"
        lineHeight="48.409088134765625px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="61px"
        left="37px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="this is a note."
        {...getOverrideProps(overrides, "text")}
      ></Text>
    </View>
  );
}
