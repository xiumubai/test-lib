import { FC } from "react";
import { Form } from '@douyinfe/semi-ui';
interface IProps {}

// DOM断言：页面元素的断言

export const DomExpect: FC<IProps> = ({}) => {
  return (
    <div>
      <div aria-label="empty_note"></div>
      <div 
        role="note" 
        style={{ display: "none" }}
        className="test hidden"
        aria-hidden>
        1234
      </div>
      <div role="note">1234</div>

      {/* form断言 */}
      {/* <form aria-label="form">
        <input
          type="text"
          name="username"
          disabled
          aria-disabled
          defaultValue="zhenmin"
        />
        <input type="number" name="age" defaultValue={23} required />
        <input
          type="radio"
          name="sex"
          value="man"
          defaultChecked
          aria-checked
        />
        <input type="radio" name="sex" value="woman" />
      </form> */}

      {/* 表单验证 */}
      <form aria-label="form">
        <input type="text" name="username" disabled aria-disabled defaultValue="zhenmin" aria-label="form_username" />
        <input type="number" name="age" defaultValue={23} required aria-label="form_age" />
        <input type="radio" name="sex" value="man" defaultChecked aria-checked aria-label="form_sex" />
        <input type="radio" name="sex" value="woman" aria-label="form_sex" />
      </form>
      {/* semi 表单验证 */}
      <Form initValues={{ username: 'zhenmin', age: 23, sex: 'man', hobby: 'code' }} aria-label="semi-form">
        <Form.Input field="username" disabled name="username" />
        <Form.InputNumber field="age" required name="age" />
        <Form.RadioGroup field="sex" name="sex">
          <Form.Radio value="man" />
          <Form.Radio value="woman" />
        </Form.RadioGroup>
        <Form.Select field="hobby" name="hobby">
          <Form.Select.Option value="code">code</Form.Select.Option>
          <Form.Select.Option value="read">read</Form.Select.Option>
        </Form.Select>
      </Form>
    </div>
  );
};