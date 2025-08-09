import css from './Friend.module.css';

function Friend({ name, avatar, isOnline }) {
  return (
    <article className={css.card}>
      <img className={css.img} src={avatar} alt="User avatar" />
      <div className={css.data}>
        <h3 className={css.dataItem}>{name}</h3>
      </div>
      <p className={isOnline ? css.online : css.offline}>{isOnline ? 'Online' : 'Offline'}</p>
    </article>
  );
}

export default Friend;
