import StatisticLine from './StatisticLine'

function Statistics({ espresso, latte, coldBrew }) {
  const total = espresso + latte + coldBrew

  if (total === 0) {
    return <p className="empty">No coffee logged yet, go get a cup!</p>
  }

  const favoritePct = (n) => `${((n / total) * 100).toFixed(1)}%`
  const counts = { Espresso: espresso, Latte: latte, 'Cold Brew': coldBrew }
  const favorite = Object.keys(counts).reduce((a, b) =>
    counts[a] >= counts[b] ? a : b
  )

  return (
    <section className="stats">
      <h2>Stats</h2>
      <table>
        <tbody>
          <StatisticLine text="Espresso" value={espresso} />
          <StatisticLine text="Latte" value={latte} />
          <StatisticLine text="Cold Brew" value={coldBrew} />
          <StatisticLine text="Total cups" value={total} />
          <StatisticLine text="Espresso %" value={favoritePct(espresso)} />
          <StatisticLine text="Latte %" value={favoritePct(latte)} />
          <StatisticLine text="Cold Brew %" value={favoritePct(coldBrew)} />
          <StatisticLine text="Favorite drink" value={favorite} />
        </tbody>
      </table>
    </section>
  )
}

export default Statistics
