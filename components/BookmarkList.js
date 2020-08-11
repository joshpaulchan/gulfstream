import styles from "../styles/Home.module.css"
import BookmarkListCell from "./BookmarkListCell"

export const BookmarkList = ({ bookmarks, onClickBookmark }) => {
  return (
    <div className={styles.bookMarkList}>
      {bookmarks.map((bookmark) => (
        <BookmarkListCell
          key={bookmark.id}
          bookmark={bookmark}
          onClickBookmark={onClickBookmark}
        />
      ))}
    </div>
  )
}

export default BookmarkList
