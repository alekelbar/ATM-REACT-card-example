import imageCard from "./../../assets/images/illustration-article.svg";

export const CardImage = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <img
        src={imageCard}
        alt="image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "12px",
        }}
      />
    </div>
  );
};
