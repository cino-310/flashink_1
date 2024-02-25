/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Toolbartitle(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="80px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      boxShadow="4px 0px 4px rgba(0.5529412031173706, 0.5960784554481506, 0.6392157077789307, 1)"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(62,117,178,1)"
      {...getOverrideProps(overrides, "Toolbartitle")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="500"
        color="rgba(255,255,255,1)"
        lineHeight="29.045454025268555px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="24px"
        left="19px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Toolbar"
        {...getOverrideProps(overrides, "Toolbar")}
      ></Text>
    </View>
  );
}
