import { Link } from 'react-router-dom';

export default function Confirm() {
  return (
    <div>
      <h1>Please check your email and confirm sign up.</h1>
      <Link to="/login">
        <button>Log In</button>
      </Link>
    </div>
  );
}
