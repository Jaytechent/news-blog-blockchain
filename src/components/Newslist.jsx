import React, { useState, useEffect } from "react";
import axios from "axios";
import { HomeFilled, HomeOutlined } from "@ant-design/icons";
import { baseurl } from "../utils/helper";
import NewsCard from "./NewsCard";
import { Spin } from "antd";

function NewsList({ category }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY;

  const getNews = async () => {
    const options = {
      method: "GET",
      url: `${baseurl}`, // Include the path here
      params: {
        category: category,
        language: "en",
        country: "us",
        sort: "top",
        page: "1",
        limit: "21",
      },
      headers: {
        "X-RapidAPI-Key": NEWS_API_KEY,
        "X-RapidAPI-Host": "newsi-api.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.get(`${baseurl}/category`, options);
      // console.log(response.data);

      setData(response.data); // Assuming the API response is an object
      console.log(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  if (loading) {
    return (
      <section
        style={{
          display: "grid",
          placeItems: "center",
          height: "100vh",
        }}
      >
        <Spin size="large">
          <div className="content" />
        </Spin>
      </section>
    );
  }

  return (
    <>
      <div className="flex place-content-center gap-2 font-extrabold ">
        <p className=" font-sans text-purple-950 "></p>
      </div>
      <section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((item) => (
            <div key={item._id}>
              {/* Content for each NewsCard in a separate column */}
              <NewsCard {...item} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default NewsList;
