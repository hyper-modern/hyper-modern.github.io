function Button({ onClick, className = "", children }) {
  return (
    <button
      className={`border border-gray-300 rounded-md p-1 px-1.5 mt-3 ${className}`}
      onClick={onClick}
    >
      {children}
    </button >
  )
}
export default Button
