function Alert({ message, variant = "info" }) {
  const styles = {
    info: { background: "#e0f2fe", borderLeft: "4px solid #0284c7" },
    success: { background: "#dcfce7", borderLeft: "4px solid #16a34a" },
    warning: { background: "#fef9c3", borderLeft: "4px solid #ca8a04" },
    error: { background: "#fee2e2", borderLeft: "4px solid #dc2626" },
  }
  return (
    <div style={{ padding: "0.75rem", ...styles[variant] }}>
      {message}
    </div>
  )
}

export default Alert