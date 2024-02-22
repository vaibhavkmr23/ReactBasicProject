export default function TabButton({children, onSelect, isSelected}) {

  console.log("TabButton Component rendered")
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>{children}</button>
    </li>
  );
}

// children prop is an inbuilt props given to render a value or a jsx element between the component tab
