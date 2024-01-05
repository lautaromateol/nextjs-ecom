import Link from "next/link";

const AdminNav = () => {
  return (
    <>
        <nav className="flex justify-center mb-3">
            <Link href='/dashboard/admin' className="nav-link">
                Admin
            </Link>
            <Link href='/dashboard/admin/product/create' className="nav-link">
                Create Product
            </Link>
            <Link href='/dashboard/admin/category' className="nav-link">
              Categories
            </Link>
            <Link href='/dashboard/admin/tag' className="nav-link">
              Tags
            </Link>
        </nav>
    </>
  )
}

export default AdminNav