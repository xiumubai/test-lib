import { FC, useEffect, useMemo, useState } from "react";

interface IProps {}

export const DomAsync :FC<IProps> = ({}) => {
  const [text, setText] = useState("");

  const hasDescription = useMemo(() => {
    return text !== "a demo for async test";
  }, [text]);

  useEffect(() => {
    setTimeout(() => {
      setText("a demo for async test");
    }, 500);
  }, []);

  return (
    <div>
      <div>{text}</div>
      {hasDescription && <div>加载中...</div>}
    </div>
  );
}