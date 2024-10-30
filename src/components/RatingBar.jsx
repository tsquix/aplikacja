export default function RatingBar({ rate }) {
  const totalStars = 10; // Total number of stars
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    stars.push(
      <span key={i} className={i < rate ? "filled" : "empty"}>
        ★
      </span>
    );
  }

  return <div className="rating-bar">{stars}</div>;
}
