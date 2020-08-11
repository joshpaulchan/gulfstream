import Head from 'next/head'
import styles from '../styles/Home.module.css'

const BookmarkListCell = ({ bookmark }) => {
  return (
    <div>{bookmark.name}</div>
  )
}

const BookmarkList = ({ bookmarks }) => {
  return (
    <div className={styles.bookMarkList}>
      {bookmarks.map(bookmark => <BookmarkListCell bookmark={bookmark} />)}
    </div>
  )
}

const BookmarkPreview = ({ bookmark }) => {
  return (
    <div className={styles.preview}>
      <h1>{bookmark.id} - {bookmark.name}</h1>
      <pre>{bookmark.code}</pre>
      <div>
        <button>Copy As Bookmarklet</button>
      </div>
    </div>
  )
}

export default Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gulfstream</title>
      </Head>
      <BookmarkList />
      <BookmarkPreview />
    </div>
  )
}
