export default function TabButton({children, isSelected, ...props}) {

  console.log("TabButton Component rendered")
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>{children}</button>
    </li>
  );
}

// children prop is an inbuilt props given to render a value or a jsx element between the component tab
