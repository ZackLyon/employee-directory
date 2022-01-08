import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useEffect } from 'react/cjs/react.development';
import { useUser } from '../../context/UserContext.jsx';
import {
  createProfile,
  getProfile,
  updateProfile,
} from '../../services/profiles.js';

export default function CreateProfile() {
  const location = useLocation();
  const history = useHistory();
  const { user } = useUser();
  const { email } = user;
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [bio, setBio] = useState('');
  const isCreate = location.pathname === '/profile/create';

  useEffect(() => {
    if (!isCreate) {
      const receiveProfile = async () => {
        const profile = await getProfile();
        setName(profile.name);
        setBirthday(profile.birthday);
        setBio(profile.bio);
      };

      receiveProfile();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isCreate) {
      await createProfile({
        name,
        email,
        bio,
        birthday,
      });
    } else {
      await updateProfile({
        name,
        email,
        bio,
        birthday,
      });
    }
    history.replace('/profile');
  };

  return (
    <div>
      {isCreate && <h1>Please create an account</h1>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={({ target }) => setName(target.value)}
        />

        <label>Email</label>
        <input value={email} disabled></input>

        <label htmlFor="birthday">Birthday</label>
        <input
          type="date"
          name="birthday"
          value={birthday}
          onChange={({ target }) => setBirthday(target.value)}
        />

        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          value={bio}
          onChange={({ target }) => setBio(target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
