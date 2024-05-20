const styles = {
  wrapper: 'flex w-full items-center justify-center pt-16 lg:pt-20',
  container: 'space-y-10',
  heroTitle: 'xl:pr-40 text-6xl font-bold',
  heroParagraph: 'xl:pr-40',
  heroCta: 'flex items-center space-x-10',
  mintButton:
    'rounded-xl border border-gray-100 bg-transparent px-8 py-4 font-semibold text-gray-100 transition-all hover:bg-gray-100 hover:text-[#1d1d1d]',
}

const Hero = () => {

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.heroTitle}>Azuki Collection</h1>
        <p className={styles.heroParagraph}>
        The story goes that long ago, in a land shrouded in darkness and chaos, a powerful shogun sought to conquer and subjugate all who stood in his way. However, a secret society of warriors and ninjas, known as the Azuki, rose from the shadows to oppose his tyrannical rule. Trained in the arts of stealth, combat, and mysticism, the Azuki fought tirelessly to protect the innocent and preserve the balance of their world. <br></br> <br></br>Each ninja within the collection represents a different aspect of this ancient society, from the fierce and unyielding samurai to the silent and deadly assassins.          
        </p>
        <div className={styles.heroCta}>
        </div>
      </div>
    </main>
  )
}

export default Hero
