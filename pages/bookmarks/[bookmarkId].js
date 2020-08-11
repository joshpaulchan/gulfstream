import Head from "next/head"
import { useRouter } from "next/router"
import { useState } from "react"
import BookmarkDetail from "../../components/BookmarkDetail"
import BookmarkEmptyDetail from "../../components/BookmarkEmptyDetail"
import BookmarkList from "../../components/BookmarkList"
import styles from "../../styles/Home.module.css"

export const Detail = () => {
  const router = useRouter()
  const { bookmarkId } = router.query

  const [bookmarks, setBookmarks] = useState([
    {
      id: 1,
      name: "copy page name",
      code:
        "navigator.clipboard.writeText(document.querySelector('h1').textContent)",
    },
    { id: 2, name: "alert hi", code: "alert('hi')" },
    { id: 3, name: "alert bye", code: "alert('bye')" },
  ])
  const selected = bookmarks.find((bookmark) => bookmark.id == bookmarkId)

  return (
    <div className={styles.container}>
      <Head>
        <title>Gulfstream</title>
      </Head>
      <BookmarkList bookmarks={bookmarks} />
      {selected ? (
        <BookmarkDetail bookmark={selected} />
      ) : (
        <BookmarkEmptyDetail />
      )}
    </div>
  )
}

export default Detail
