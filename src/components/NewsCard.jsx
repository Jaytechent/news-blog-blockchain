import React from "react";
import { Card } from "antd";

const { Meta } = Card;

const NewsCard = ({
  image,
  link,
  publishedAt,
  title,
  shortLink,
  sourceName,
}) => {
  // Function to convert publishedAt to hours ago or just now
  const getTimeAgo = (publishedAt) => {
    const now = new Date();
    const publishedDate = new Date(publishedAt);
    const timeDifference = now - publishedDate;
    const hoursAgo = Math.round(timeDifference / (1000 * 60 * 60));

    if (hoursAgo < 1) {
      return "Just now";
    } else {
      return `${hoursAgo} hours ago`;
    }
  };

  return (
    <div>
      <Card
        hoverable
        cover={
          <img
            className="h-32"
            alt="pictures"
            src={
              image === ""
                ? "https://th.bing.com/th?id=OIP.A2Lxh1T5NhSa6NOZhFxybAAAAA&w=226&h=267&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                : image
            }
          />
        }
      >
        <Meta title={title} description={shortLink} />
        <p className=" font-semibold text-red-600">
          {" "}
          {getTimeAgo(publishedAt)}
        </p>

        <p>{sourceName}</p>
        <button>
          <a
            className="no-underline"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            READ MORE
          </a>
        </button>
      </Card>
    </div>
  );
};

export default NewsCard;
