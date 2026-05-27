import styles from "./SkeletonCard.module.css"

export default function SkeletonCard() {
  return (
    <div className={styles.card}>

      {/* Avatar + title lines */}
      <div className={styles.header}>
        <div className={styles.avatar} />
        <div className={styles.headerLines}>
          <div className={`${styles.bar} ${styles.barLong}`} />
          <div className={`${styles.bar} ${styles.barMedium}`} />
        </div>
      </div>

      {/* Content lines */}
      <div className={styles.content}>
        <div className={`${styles.bar} ${styles.barFull}`} />
        <div className={`${styles.bar} ${styles.barFull}`} />
        <div className={`${styles.bar} ${styles.barShort}`} />
      </div>

    </div>
  )
}
