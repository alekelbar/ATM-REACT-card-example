export const CardContent = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "start",
      }}
    >
      <h3 style={{ fontWeight: 700, color: "black", margin: 0 }}>
        HTML & CSS foundations
      </h3>
      <p style={{ color: "hsl(0, 0%, 42%)", textAlign: "start" }}>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </div>
  );
};
