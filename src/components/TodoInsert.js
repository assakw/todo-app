import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      //submit 새로고침 방지
      e.preventDefault();
    },
    [onInsert, value],
  );

  // button에 사용가능 onSubmit 엔터 작동됨, onClick enter 작동 코드 추가 필요
  // const onClick = useCallback(() => {
  //   onInsert(value);
  //   setValue('');
  // }, [onInsert, value]);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />

      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
