export default function AdminDashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 border rounded">Orders</div>
        <div className="p-4 border rounded">Messages</div>
        <div className="p-4 border rounded">Users</div>
      </div>
    </div>
  );
}