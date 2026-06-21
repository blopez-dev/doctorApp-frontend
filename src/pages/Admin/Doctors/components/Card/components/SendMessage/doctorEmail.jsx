import React from 'react';
import { Drawer, Form, Input, Button } from 'antd';
import FormEmail from './style';

const validateMessages = {
  // eslint-disable-next-line no-template-curly-in-string
  required: '${label} is required!',
  types: {
    // eslint-disable-next-line no-template-curly-in-string
    email: '${label} is not a valid email!',
    // eslint-disable-next-line no-template-curly-in-string
    number: '${label} is not a valid number!'
  },
  number: {
    // eslint-disable-next-line no-template-curly-in-string
    range: '${label} must be between ${min} and ${max}'
  }
};

const DoctorEmail = ({ visible, onClose, title }) => (
  <>
    <Drawer
      width={480}
      visible={visible}
      onClose={onClose}
      placement="right"
      title={title}
    >
      <FormEmail>
        <Form name="nest-messages" validateMessages={validateMessages}>
          <Form.Item
            name={['user', 'name']}
            label="De:"
            rules={[
              {
                required: true
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name={['user', 'Asunto']} label="Asunto">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="button" htmlType="submit">
              Enviar
            </Button>
          </Form.Item>
        </Form>
      </FormEmail>
    </Drawer>
  </>
);
export default DoctorEmail;
