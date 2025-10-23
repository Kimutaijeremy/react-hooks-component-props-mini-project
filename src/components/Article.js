import React from "react";

// Helper function for the Bonus Feature
function calculateReadingTime(minutes) {
  const roundedMinutes = Math.ceil(minutes);

  if (roundedMinutes < 30) {
    // Less than 30 minutes: Coffee Cup (☕️) for every 5 minutes
    const cups = Math.ceil(roundedMinutes / 5);
    const emoji = "☕️".repeat(cups);
    return `${emoji} ${roundedMinutes} min read`;
  } else {
    // 30 minutes or more: Bento Box (🍱) for every 10 minutes
    const boxes = Math.ceil(roundedMinutes / 10);
    const emoji = "🍱".repeat(boxes);
    return `${emoji} ${roundedMinutes} min read`;
  }
}

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const readingTime = calculateReadingTime(minutes);

  return (
    <article>
      <h3>{title}</h3>
      <small>
        {date} &bull; {readingTime}
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;