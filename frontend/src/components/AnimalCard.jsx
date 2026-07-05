function AnimalCard({ name, type, age, status, image, onDetails, showDetailsButton = true }) {
  return (
    <div style={styles.card}>
      <img src={image} alt={name} style={styles.image} />

      <div style={styles.info}>
        <h3 style={styles.name}>{name}</h3>
        <p>{type}</p>
        <p>{age}</p>

        <span
          style={{
            color: status === "Udomljen" ? "green" : "orange",
            fontWeight: "bold"
          }}
        >
          {status}
        </span>
  {showDetailsButton && (
          <button style={styles.button} onClick={onDetails}>
            Detalji
          </button>
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
    backgroundColor: "#fff"
  },

  image: {
    width: "100%",
    height: "160px",
    objectFit: "cover"
  },

  info: {
    padding: "10px"
  },

  name: {
    margin: "0 0 10px 0"
  },

  button: {
    marginTop: "10px",
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer"
  }
};

export default AnimalCard;