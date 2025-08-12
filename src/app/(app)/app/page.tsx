export default function DashboardPage() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <div className="card p-6">
        <div className="subtle">Collection Value</div>
        <div className="h2 mt-2">$0</div>
        <div className="subtle mt-1">+0% today</div>
      </div>
      <div className="card p-6">
        <div className="subtle">Items</div>
        <div className="h2 mt-2">0</div>
      </div>
      <div className="card p-6">
        <div className="subtle">Watchlist Alerts</div>
        <div className="h2 mt-2">0</div>
      </div>
      <div className="card p-6 md:col-span-3">
        <div className="h3">Recent activity</div>
        <div className="subtle mt-2">Your latest adds, sales, and price moves will show here.</div>
      </div>
    </div>
  )
}
