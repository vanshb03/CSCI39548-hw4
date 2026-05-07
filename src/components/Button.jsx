function Button({ handleClick, text, variant = "primary" }) {
  return (
    <button
      type="button"
      className={`tracker-btn tracker-btn--${variant}`}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
