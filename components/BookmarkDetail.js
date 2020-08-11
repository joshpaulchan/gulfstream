import styles from '../styles/Home.module.css'

const copyToClipboard = (text) => navigator.clipboard.writeText(text)
const generateBookmarkletFromCode = (code) => `javascript:(function(){${code}})()`

const BookmarkDetail = ({ bookmark, onUpdate }) => {
  return (
    <div className={styles.preview}>
      <h1>{bookmark.id} - {bookmark.name}</h1>
      <pre>{bookmark.code}</pre>
      <div>
        <button onClick={() => copyToClipboard(generateBookmarkletFromCode(bookmark.code))}>Copy As Bookmarklet</button>
      </div>
    </div>
  )
}
export default BookmarkDetail