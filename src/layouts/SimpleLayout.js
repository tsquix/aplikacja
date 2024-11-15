export default function SimpleLayout({ children }) {
  return (
    <div>
      <nav>
        <ul>
          <li>Laboratorium 1</li>
          <li>Laboratorium 2</li>
          <li>Laboratorium 3</li>
          <li>Laboratorium 4</li>
        </ul>
      </nav>
      <div>{children}</div>
    </div>
  );
}
