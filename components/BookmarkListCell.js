import Link from "next/link"

export const BookmarkListCell = ({ bookmark }) => {
  return (
    <Link href="/bookmarks/[bookmarkId]" as={`/bookmarks/${bookmark.id}`}>
      <div>{bookmark.name}</div>
    </Link>
  )
}

export default BookmarkListCell
