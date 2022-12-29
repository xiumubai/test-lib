import { FC } from "react";
interface IProps {}

// DOM渲染和查询
export const DomQuery: FC<IProps> = ({}) => {
  return (
    <div>
      <div>test1</div>
      <div>test2</div>
      <button role="tab">button</button>
      <button aria-pressed>aria-button</button>
      <div aria-label="test_note">1234</div>

      <label>
        testLabel
        <input />
      </label>
      
      <input placeholder="a query by placeholder" />

      <input defaultValue="a query by value" readOnly />

      <img alt="a query by alt" />

      <span title="a query by title" />

      <div data-testid="a not so good query"></div>
    </div>
  );
};
