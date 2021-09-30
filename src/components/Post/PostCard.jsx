import Grid from "@material-ui/core/Grid";
import { BsUpload } from "react-icons/bs";
import { MdFavoriteBorder } from "react-icons/md";
import { RiChat1Line } from "react-icons/ri";
import { FiRepeat } from "react-icons/fi";
import { GoVerified } from "react-icons/go";
import styles from "./PostCard.module.css";

export function PostCard({
  displayName,
  username,
  verified,
  text,
  image,
  likes,
  reply,
  time_posted,
  retweet,
}) {
  return (
    <Grid container className={styles.post}>
      <Grid item sm={2} md={2}>
        <img src={image} alt={displayName} />
      </Grid>
      <Grid item xs={10} sm={10} md={10} ls={10} xl={10}>
        <Grid item xs={12} sm={12} md={12} ls={12} xl={12}>
          <h3>
            {displayName}
            <span className={styles.post__headerSpecial}>
              {verified && <GoVerified className={styles.post__badge} />} @
              {username} · {time_posted}h
            </span>
          </h3>
        </Grid>
        <Grid item>
          <p>{text}</p>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          md={12}
          ls={12}
          xl={12}
          className={styles.post__footer}
          alignItems="center"
        >
          <Grid item xs={3} sm={3} md={3} ls={3} xl={3}>
            <RiChat1Line fontSize="large" /> <span>{retweet}</span>
          </Grid>
          <Grid item xs={3} sm={3} md={3} ls={3} xl={3}>
            <FiRepeat />
            <span>{reply}</span>
          </Grid>
          <Grid item xs={3} sm={3} md={3} ls={3} xl={3}>
            <MdFavoriteBorder fontSize="large" />
            {likes}
          </Grid>
          <Grid item xs={3} sm={3} md={3} ls={3} xl={3}>
            <BsUpload fontSize="large" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
