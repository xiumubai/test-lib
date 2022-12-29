// ./src/components/DomEvent.tsx
import { FC } from "react";

interface IProps {
  onClick: () => void;
}

// 《7 | User-event: 怎么对 Dom 组件绑定事件进行模拟触发？》
export const DomEvent: FC<IProps> = ({ onClick }) => {
  return (
    <div role="note" onClick={onClick}>
       动我一下试试
    </div>
  );
};