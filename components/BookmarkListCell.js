export const BookmarkListCell = ({ bookmark, onClickBookmark }) => {
  return <div onClick={() => onClickBookmark(bookmark)}>{bookmark.name}</div>
}

export default BookmarkListCell
