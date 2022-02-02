import type { IconSizeType } from "@/src/const/style";
import { ICON_SIZE } from "@/src/const/style";
import styled from "@emotion/styled";

export const DivWrapper = styled.div<{ size: IconSizeType }>`
  display: flex;
  > svg {
    ${({ size }) => ICON_SIZE[size]};
  }
`;