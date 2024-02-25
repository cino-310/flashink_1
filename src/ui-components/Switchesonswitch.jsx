/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Switchesonswitch(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="88px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Switchesonswitch")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="400"
        color="rgba(8,66,112,1)"
        lineHeight="30px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="0px"
        left="1px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="On"
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <View
        padding="0px 0px 0px 0px"
        width="48px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="4px"
        left="36px"
        transformOrigin="top left"
        transform="rotate(0deg)"
        {...getOverrideProps(overrides, "switch")}
      >
        <View
          width="48px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="0px"
          borderRadius="16px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(8,66,112,1)"
          {...getOverrideProps(overrides, "track")}
        ></View>
        <View
          width="21px"
          height="18.67px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="2.67px"
          left="24px"
          transformOrigin="top left"
          transform="rotate(0deg)"
          borderRadius="16px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "thumb")}
        ></View>
      </View>
    </View>
  );
}
