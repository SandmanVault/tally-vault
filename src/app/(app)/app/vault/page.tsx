export default function VaultPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="h2">Your Vault</h2>
        <button className="rounded-xl bg-primary text-white px-4 py-2">Add figure</button>
      </div>
      <div className="card p-6">
        <p className="subtle">No items yet. Add your first figure to start tracking value.</p>
      </div>
    </div>
  )
}
