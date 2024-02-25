/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import Actionbuttonbackhover from "./Actionbuttonbackhover";
import { Text, View } from "@aws-amplify/ui-react";
export default function Actionbuttonsettinghover(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="72px"
      height="72px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Actionbuttonsettinghover")}
      {...rest}
    >
      <Actionbuttonbackhover
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
        {...getOverrideProps(overrides, "action-button-back/hover")}
      ></Actionbuttonbackhover>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="24.204544067382812px"
        textAlign="left"
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
        left="calc(50% - 33px - 0px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="setting"
        {...getOverrideProps(overrides, "setting")}
      ></Text>
    </View>
  );
}
