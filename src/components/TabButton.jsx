export default function TabButton(props) {
  let handleClick = () => {
    console.log("Hello");
  };
  return (
    <li>
      <button onClick={handleClick}>{props.children}</button>
    </li>
  );
}

// children prop is an inbuilt props given to render a value or a jsx element between the component tab
