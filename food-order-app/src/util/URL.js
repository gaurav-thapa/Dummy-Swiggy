let CORS_PROXY_URL = "https://thingproxy.freeboard.io/fetch/";
CORS_PROXY_URL='';
export const IMAGE_URL = "https://media-assets.swiggy.com/swiggy/image/upload/";
export const TOP_RESTAURANTS =
  CORS_PROXY_URL +
  "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const getRestaurantDataURL = (id) => {
  return (
    CORS_PROXY_URL +
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
    id +
    "&catalog_qa=undefined&submitAction=ENTER"
  );
};
