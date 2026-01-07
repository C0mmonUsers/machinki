import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          Machinki
        </h1>

        <nav className="flex gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink to="/cars" className="text-gray-600 hover:text-blue-600">
            Cars
          </NavLink>

          <NavLink to="/contacts" className="text-gray-600 hover:text-blue-600">
            Contacts
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
