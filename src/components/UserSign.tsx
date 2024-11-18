import imageAvatar from "./../assets/images/image-avatar.webp";

export const UserSign = () => {
  console.log("imageAvatar", imageAvatar);

  return (
    <div
      style={{
        display: "flex",
        maxHeight: "50px",
        width: "100%",
        justifyContent: "start",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          height: "50px",
          maxHeight: "50px",
          width: "50px",
          borderRadius: "50%",
        }}
      >
        <img
          src={imageAvatar}
          alt="user"
          style={{
            maxHeight: "100%",
            borderRadius: "50%",
          }}
        />
      </div>
      <div>
        <p
          style={{
            fontWeight: 700,
            color: "black",
          }}
        >
          Greg Hooper
        </p>
      </div>
    </div>
  );
};
