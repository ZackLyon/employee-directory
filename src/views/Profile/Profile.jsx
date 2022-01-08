import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProfile } from '../../services/profiles.js';
import birthdayMunger from '../../utils/birthdayMunger.js';
import style from './Profile.css';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState({
    name: '',
    bio: '',
    birthday: '',
    email: '',
  });

  useEffect(() => {
    const receiveProfile = async () => {
      const result = await getProfile();
      const formattedBday = birthdayMunger(result.birthday);
      const { name, bio, email } = result;
      setProfile({ name, bio, email, birthday: formattedBday });
    };

    receiveProfile();
    setLoading(false);
  }, []);

  return (
    <div className={style.profileView}>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={style.profileContainer}>
          <h1>{profile.name}</h1>
          <hr />
          <div>
            <span>Email:</span> {profile.email}
          </div>
          <div>
            <span>Birthday:</span> {profile.birthday}
          </div>
          <div>
            <span>Bio:</span> {profile.bio}
          </div>
          <Link to="/profile/edit">
            <button>Edit</button>
          </Link>
        </div>
      )}
    </div>
  );
}
