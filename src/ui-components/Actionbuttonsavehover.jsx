/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Actionbuttonbackdefault from "./Actionbuttonbackdefault";
import { Text, View } from "@aws-amplify/ui-react";
export default function Actionbuttonsavehover(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="76px"
      height="72px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Actionbuttonsavehover")}
      {...rest}
    >
      <Actionbuttonbackdefault
        width="72px"
        height="72px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="calc(50% - 36px - 0px)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "action-button-back/default")}
      ></Actionbuttonbackdefault>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24.204544067382812px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="33.33%"
        bottom="33.33%"
        left="calc(50% - 22px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="save"
        {...getOverrideProps(overrides, "save")}
      ></Text>
    </View>
  );
}
