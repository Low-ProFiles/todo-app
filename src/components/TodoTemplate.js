// 화면을 가운데에 정렬하고 앱 타이틀을 보여준다.
// children으로 내부 JSX를 props로 받아 와서 렌더링해준다.

import React from "react";
import './TodoTemplate.scss';

const TodoTemplate= ({children}) =>{
    return (
    <div className="TodoTemplate">
        <div className="app-title">일정 관리</div>
        <div className="content">{children}</div>
    </div>);
};

export default TodoTemplate;