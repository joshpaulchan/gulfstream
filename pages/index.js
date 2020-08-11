import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

const BookmarkListCell = ({ bookmark, onClickBookmark }) => {
  return (
    <div onClick={() => onClickBookmark(bookmark)}>{bookmark.name}</div>
  )
}

const BookmarkList = ({ bookmarks, onClickBookmark }) => {
  return (
    <div className={styles.bookMarkList}>
      {bookmarks.map(bookmark => <BookmarkListCell key={bookmark.id} bookmark={bookmark} onClickBookmark={onClickBookmark} />)}
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

const EmptyPreview = ({ bookmark }) => {
  return (
    <div className={styles.preview}>
      Select a bookmark from the list.
    </div>
  )
}

export const Home = () => {
  const [bookmarks, setBookmarks] = useState([
    { id: 1, name: "copy page name", code: "navigator.clipboard.writeText(document.querySelector('h1').textContent)" },
    { id: 2, name: "alert hi", code: "alert('hi')" },
    { id: 3, name: "alert bye", code: "alert('bye')" },
  ])
  
  const [selected, select] = useState(null)
  const selectBookmark = (bookmark) => selected && select.id != bookmark.id && select(bookmark)

  return (
    <div className={styles.container}>
      <Head>
        <title>Gulfstream</title>
      </Head>
      <BookmarkList bookmarks={bookmarks} onClickBookmark={selectBookmark} />
      {selected ? <BookmarkPreview bookmark={selected}/> : <EmptyPreview />}
    </div>
  )
}

export default Home