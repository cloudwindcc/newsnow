export function Footer() {
  return (
    <>
      <a href={`${Homepage}/blob/main/LICENSE`} target="_blank">kang.ink</a>
      <span>
        <span>雲風博客 © 2024 By </span>
        <a href={Author.url} target="_blank">
          {Author.name}
        </a>
      </span>
    </>
  )
}
