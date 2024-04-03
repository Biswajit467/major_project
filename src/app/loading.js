export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "blue",
        color: "white",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      {/* Add your loading icon or text here */}
      <p>Loading...</p>
    </div>
  );
}
