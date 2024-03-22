
function Sidebar() {
    return (
        <aside className="sidebar">
          <nav className="sticky top-20 right-0 z-15">
            <ul className="flex flex-col items-end">
              <li className="mb-2"><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">GitHub</a></li>
              <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white">LinkedIn</a></li>
            </ul>
          </nav>
        </aside>
      );
}

export default Sidebar
