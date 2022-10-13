import Link from 'next/link'
import styles from './sidebar.module.css'

function Sidebar() {
  return (
    <nav className={styles.nav}>

      <img
        src="https://avatars.githubusercontent.com/u/54373473?v=4"
        alt="Foto de Antonio S"
        className={styles.img}
      />

      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  )
}

export { Sidebar }