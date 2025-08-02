import css from './Profile.module.css';

function Profile() {
  return (
    <article className={css.card}>
      {' '}
      <div className={css.top}>
        <img className={css.img} src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png" alt="User avatar" />{' '}
        <div className={css.data}>
          <h3 className={css.dataItem}>Petra Marica</h3> <p className={css.dataItem}>@pmarica</p>{' '}
          <p className={css.dataItem}>Salvador, Brasil</p>{' '}
        </div>
      </div>{' '}
      <ul className={css.bottom}>
        {' '}
        <li className={css.bottomItem}>
          <p>Followers</p> <p>1000</p>{' '}
        </li>{' '}
        <li className={css.dataItem}>
          <p>Views</p> <p>2000</p>{' '}
        </li>{' '}
        <li className={css.dataItem}>
          <p>Likes</p> <p>3000</p>{' '}
        </li>{' '}
      </ul>
    </article>
  );
}

export default Profile;
