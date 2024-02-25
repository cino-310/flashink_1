/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon } from "@aws-amplify/ui-react";
export default function Texticon(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M2.17245 5.91297C1.94278 6.5337 1.07768 6.45476 0.954844 5.80186L0.012166 0.791278C-0.0693487 0.358006 0.27007 -0.0358778 0.691784 0.00260454L1.93377 0.115938L20.9051 0.115938L20.9051 0.221899L23.3082 0.00261166C23.7299 -0.0358707 24.0693 0.358014 23.9878 0.791285L23.0452 5.80186C22.9223 6.45477 22.0572 6.53371 21.8275 5.91297L20.9051 3.41989L20.9051 3.43317L13.9082 3.43317L13.9082 24L10.7278 24L10.7278 3.43317L3.08996 3.43317L2.17245 5.91297Z",
          fill: "rgba(40,79,106,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "Texticon")}
      {...rest}
    ></Icon>
  );
}
