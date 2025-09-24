import {useNavigate,Link} from 'react-router-dom';
export default function HomePage(){
    const navigate = useNavigate();
    return (
        <div className="App">
            <header className="App-header">
                <h1 className="App-title">
                    Codeforces Handle Tracker
                </h1>
                <p className="App-intro">
                    Keep track of your friends Codeforces Ratings and Max ratings
                </p>
            </header>
        </div>
    )
}