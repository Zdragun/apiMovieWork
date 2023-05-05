export const searchFilter = (text,{masterData,setDataMovie,setSearch}) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemDataOverview = item.overview ? item.overview.toUpperCase() : ''.toUpperCase();
        const itemDataTitle = item.original_title ? item.original_title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemDataOverview.includes(textData) || itemDataTitle.includes(textData);
      });
      setDataMovie(newData);
      setSearch(text)
    }
    else {
      setDataMovie(masterData);
      setSearch(text);
    }
  }