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
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />

      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>

        {type && <p>{type}</p>}
        {age && <p>{age}</p>}

        {status && (
          <span
            style={{
              color: status === "Udomljen" ? "green" : "orange",
              fontWeight: "bold",
            }}
          >
            {status}
          </span>
        )}

        {showActions && (
          <>
            {showDetailsButton && (
              <button style={styles.button} onClick={onDetails}>
                Detalji
              </button>
            )}

            {status && status !== "Udomljen" ? (
              <button style={styles.loginButton} onClick={onLogin}>
                Prijavi se za udomljavanje
              </button>
            ) : status ? (
              <p style={styles.adoptedText}>
                🏡 Ova životinja je već udomljena.
              </p>
            ) : null}
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