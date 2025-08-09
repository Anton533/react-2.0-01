import css from './Profile.module.css';

function Profile({ name, tag, location, image, stats }) {
  return (
    <article className={css.card}>
      {' '}
      <div className={css.top}>
        <img className={css.img} src={image} alt="User avatar" />{' '}
        <div className={css.data}>
          <h3 className={css.dataItem}>{name}</h3>
          <p className={css.dataItem}>{tag}</p>
          <p className={css.dataItem}>{location}</p>{' '}
        </div>
      </div>{' '}
      <ul className={css.bottom}>
        {' '}
        <li className={css.bottomItem}>
          <p>Followers</p> <p>{stats.followers}</p>{' '}
        </li>{' '}
        <li className={css.bottomItem}>
          <p>Views</p> <p>{stats.views}</p>{' '}
        </li>{' '}
        <li className={css.bottomItem}>
          <p>Likes</p> <p>{stats.likes}</p>{' '}
        </li>{' '}
      </ul>
    </article>
  );
}

export default Profile;
