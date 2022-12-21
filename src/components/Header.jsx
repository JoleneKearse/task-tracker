import Button from "./Button"

const Header = ({ onAdd }) => {
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      <Button
        onClick={onAdd}
        color="green"
        text="Add"
      />
    </header>
  )
}

export default Header