/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Penicon(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="28px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 28 }}
      paths={[
        {
          d: "M16.4575 0L1.14593 19.6688L8.68844 22.8951L24 3.22634L16.4575 0Z",
          fill: "rgba(40,79,106,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M0 28L0.0591356 21.1876L8.01131 24.5529L0 28Z",
          fill: "rgba(40,79,106,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Penicon")}
      {...rest}
    ></Icon>
  );
}
