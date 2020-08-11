import { BookmarkDetail } from "components/BookmarkDetail"
import styles from "../styles/Home.module.css"

export const BookmarkCreator = ({ bookmark, onCreate }) => {
  return <BookmarkDetail bookmark={bookmark} />
}
export default BookmarkCreator
