/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Fontinput(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="48px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      border="1px SOLID rgba(0,0,0,0.25)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(250,253,255,1)"
      {...getOverrideProps(overrides, "Fontinput")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="20px"
        fontWeight="400"
        color="rgba(40,79,106,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 12px - 0px)"
        left="calc(50% - 11.5px - -0.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="16"
        {...getOverrideProps(overrides, "Text Value")}
      ></Text>
    </View>
  );
}
