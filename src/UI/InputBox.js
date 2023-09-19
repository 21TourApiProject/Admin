import { React, useState } from 'react';
import { Form, Button, InputGroup, FormGroup } from 'react-bootstrap';


const InputBox = props => {

  const [keyword, setKeyword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const handleChange = ({ target: { value } }) => setKeyword(value);

  return (
    <div >
      <div className="m-5">
        <Form onSubmit={props.pfunc}>
          <FormGroup>
            <InputGroup>

              <Form.Control
                value={keyword}
                onChange={handleChange}
                placeholder="검색어를 입력하시오"
              />
              <Button
                className=""
                variant="secondary"
                type="submit"
                disabled={disabled}
              >
                검색
              </Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </div>
    </div>
  );
};

export default InputBox;
