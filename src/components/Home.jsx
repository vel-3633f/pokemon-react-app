import { useState } from "react";
import Slider from "./Slider";
import ImgList from "./ImgList";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios";
import logo from "../../public/img/logo.png";

const Home = () => {
  const initialURL = "https://pokeapi.co/api/v2/pokemon";

  const [urls, setUrls] = useState([initialURL]);

  const loader = (
    <div className="mx-auto w-24 animate-spin" key={0}>
      <img src={logo} alt="logo" />
    </div>
  );

  //項目を読み込むときのコールバック
  const loadMore = (page) => {
    console.log(page);
    getNextUrl(urls[urls.length - 1]);
  };

  const getNextUrl = async (url) => {
    try {
      const res = await axios.get(url);
      console.log(res.data.next);
      setUrls([...urls, res.data.next]);
    } catch (e) {
      console.log(e, "エラー！！");
    }
  };

  return (
    <>
      <h1 className="self-center text-3xl font-semibold whitespace-nowrap">
        PICK UP
      </h1>
      <Slider />
      <InfiniteScroll loadMore={loadMore} hasMore={true} loader={loader}>
        {urls.map((url, index) => (
          <ImgList url={url} key={index} />
        ))}
      </InfiniteScroll>
    </>
  );
};

export default Home;
