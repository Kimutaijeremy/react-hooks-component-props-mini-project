// src/components/Article.js
import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  // Generate emoji indicators based on minutes
  const getReadingTimeEmoji = (minutes) => {
    if (minutes < 30) {
      const coffeeCount = Math.ceil(minutes / 5);
      return "☕️".repeat(coffeeCount);
    } else {
      const bentoCount = Math.ceil(minutes / 10);
      return "🍱".repeat(bentoCount);
    }
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <small>
        {getReadingTimeEmoji(minutes)} {minutes} min read
      </small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;