import * as Icons from "./icons"
import { forwardRef } from "react";
import { ColorCodeType, COLOR_CODE, IconSizeType } from "@/src/const/style";
import { DivWrapper } from "./style";

const iconNames = Object.keys(Icons) as Array<keyof typeof Icons>;
export const iconNamesToCamelCase = iconNames.map((name) =>
`${name.slice(0, 1).toLowerCase()}${name.slice(1)}` as Uncapitalize<keyof typeof Icons>);

export type IconTypeName = typeof iconNamesToCamelCase[number];

export type IconProps = {
  /** アイコンネーム */
  name: IconTypeName;
  /** アイコンカラー */
  color?: ColorCodeType;
  /** アイコンサイズ */
  size?: IconSizeType;
} & JSX.IntrinsicElements["div"];

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ name, size = "M", color = "WHITE", ...props},
  ref) => {
    const config = {
      role: "img" as const,
      color: COLOR_CODE[color],
    };

    return (
      <DivWrapper ref={ref} size={size} {...props}>
        {name === "logo" && (<Icons.Logo aria-label={name} {...config} />)}
      </DivWrapper>
    )
  }
)

Icon.displayName = "Icon";