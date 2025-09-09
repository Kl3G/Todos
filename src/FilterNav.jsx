import { NavLink } from "react-router-dom";
// 1. <Link> = 단순한 라우팅 이동.
// 2. <NavLink> = 이동 + 활성 여부에 따라 자동으로 스타일링 가능.
// NavLink의 style에 함수를 할당하면 렌더링될 때 자동으로 호출되며 객체를 인자로 넘기며,
// { isActive, isPending } 같은 객체를 인자로 받음.
// isActive의 값은 현재 URL과 to의 일치 여부에 따라 true/false로 결정됨.

const linkStyle = ({isActive}) => ({

    marginRight: 8,
    fontWeight: isActive ? "700" : "400",
});

export default function FilterNav({total}) {

    return (

        <nav style={{marginTop: 12, marginBottom: 12}}>
            <NavLink to="/" style={linkStyle}>전체</NavLink>
            <NavLink to="/active" style={linkStyle}>미완료</NavLink>
            <NavLink to="/completed" style={linkStyle}>완료</NavLink>
            <span>총 {total}개</span>
        </nav>
    );
}