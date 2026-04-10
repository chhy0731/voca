import {Link} from "react-router-dom";

export default function Header(){
    return <div className='header'>
        <h1>
            <Link to="/">영단어</Link>
        </h1>
        <div className='menu'>
            <a href="/create_word" className='link'>
                단어추가
            </a>
            <a href="/create_day" className='link'>
                day 추가
            </a>
        </div>
    </div>
}