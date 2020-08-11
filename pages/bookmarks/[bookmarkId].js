export const Detail = ({ bookmarkId }) => {
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
  const selected = bookmarks.find((bookmark) => bookmark.id === bookmarkId)

  return (
    <div className={styles.container}>
      <Head>
        <title>Gulfstream</title>
      </Head>
      <BookmarkList bookmarks={bookmarks} onClickBookmark={selectBookmark} />
      {selected ? (
        <BookmarkDetail bookmark={selected} />
      ) : (
        <BookmarkEmptyDetail />
      )}
    </div>
  )
}

export default Detail
