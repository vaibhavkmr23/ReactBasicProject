export default function TabButton({children, onSelect}) {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}

// children prop is an inbuilt props given to render a value or a jsx element between the component tab
