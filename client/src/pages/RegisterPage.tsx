import { Link } from 'react-router-dom';

export default function RegisterPage() {
  return (
    <div className='register'>
      <div className='register_content'>
        <form action=''></form>
        <Link to='/login'>Already have an account? Log in Here</Link>
      </div>
    </div>
  );
}
