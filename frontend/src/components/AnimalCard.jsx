function AnimalCard({
  name,
  type,
  age,
  status,
  image,
  onDetails,
  onLogin,
  showDetailsButton = true,
  showActions = true,
}) {
  const isLoggedIn = !!localStorage.getItem("token");

  const translateType = (type) => {
    if (type === "dog") return "Pas";
    if (type === "cat") return "Mačka";
    return type;
  };

  const translateStatus = (status) => {
    if (status === "available") return "Dostupan";
    if (status === "adopted") return "Udomljen";
    if (status === "pending") return "Na čekanju";

    return status;
  };

  return (
    <div style={styles.card}>
      <img
        src={
          image?.startsWith("/uploads")
            ? `http://localhost:5000${image}`
            : image
        }
        alt={name}
        style={styles.image}
      />

      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>

        {type && <p>{translateType(type)}</p>}

        {age && <p>{age}</p>}

        {status && (
          <span
            style={{
              color:
                status === "adopted"
                  ? "green"
                  : "orange",
              fontWeight: "bold",
            }}
          >
            {translateStatus(status)}
          </span>
        )}

        {showActions && (
          <>
            {showDetailsButton && (
              <button
                style={styles.button}
                onClick={onDetails}
              >
                Detalji
              </button>
            )}

            {status === "available" ? (
              isLoggedIn ? (
                <button
                  style={styles.button}
                  onClick={onDetails}
                >
                  ❤️ Udomi životinju
                </button>
              ) : (
                <button
                  style={styles.loginButton}
                  onClick={onLogin}
                >
                  Prijavi se za udomljavanje
                </button>
              )
            ) : (
              <p style={styles.adoptedText}>
                🏡 Ova životinja je već udomljena.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    borderRadius: "12px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    margin: "10px",
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
  },

  info: {
    padding: "10px",
  },

  name: {
    margin: "0 0 10px 0",
  },

  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer",
    width: "100%",
  },

  loginButton: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#ff914d",
    color: "white",
    cursor: "pointer",
    width: "100%",
  },

  adoptedText: {
    marginTop: "10px",
    textAlign: "center",
    color: "#2e8b57",
    fontWeight: "bold",
    fontSize: "14px",
  },
};

export default AnimalCard;