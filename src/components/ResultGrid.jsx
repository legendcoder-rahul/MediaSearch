import { useDispatch, useSelector } from "react-redux";
import { fetchPhoto, fetchVideos, fetchGIF } from "../api/mediaApi";
import {
  setQuery,
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useEffect } from "react";

const ResultGrid = () => {
  const { query, activeTab, results, loading, console, error } = useSelector(
    (store) => store.search
  );
  const dispatch = useDispatch();

  useEffect(function () {
      if(!query) return <h1>Type Something</h1>
      const getData = async () => {
        try {
          dispatch(setLoading());
          let data = [];
          if (activeTab == "photos") {
            let response = await fetchPhoto(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "photo",
              title: item.alt_description,
              thumbnail: item.urls.small,
              src: item.urls.full,
            }));
          }
          if (activeTab == "videos") {
            let response = await fetchVideos(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "video",
              title: item.user.name || "video",
              thumbnail: item.image,
              src: item.video_files[0].link,
            }));
          }
          if (activeTab == "gif") {
            let response = await fetchGIF(query);
            data = response.results.map((item) => ({
              id: item.id,
              type: "gif",
              title: item.title || "GIF",
              thumbnail: item.media_formats.tilygif.url,
              src: item.media_formats.gif.url,
            }));
          }

          dispatch(setResults(data));
        } catch (error) {
          dispatch(setError(error.message))
        }
      };

      getData();
    },
    [query, activeTab]
  );
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading</h1>;

  return (
    <div>
      {results.map((item, idx) => {
        return <div key={idx}>
          <ResultGrid item={item}/>
        </div>
      })}
    </div>
  );
};

export default ResultGrid;
1;
