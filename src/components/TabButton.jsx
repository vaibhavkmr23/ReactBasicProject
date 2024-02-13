export default function TabButton(props) {
  return (
    <li>
      <button>{props.children}</button>
    </li>
  );
}

// children prop is an inbuilt props given to render a value or a jsx element between the component tab
