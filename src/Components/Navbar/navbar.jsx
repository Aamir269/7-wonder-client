import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/context.auth';

function Navbar(){
    const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

    return(
        <div>
            <div>
                <Link to="/">
                    <button>Home</button>
                </Link>
            </div>
            <div>
                <h2>Welcome to 7 Wonders of the World Explorer!</h2>
            </div>
            {isLoggedIn ? (
                    <div>
                        <button onClick={logOutUser}>Logout</button>
                        <p>{user && user.name}</p>
                    </div>
                ) :
                (
                    <div>
                        <Link to="/signup"><button>Signup</button></Link>
                        <Link to="/login"><button>Login</button></Link>
                    </div>
                )
            }
        </div>
    );
}

export default Navbar;