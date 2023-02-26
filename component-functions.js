import { apiUrl, requestHeader } from "./base-url";

async function navbar_fetch() {
   const data=await fetch(apiUrl()+"view/course", requestHeader());
   const nav_data=await data.json();
   return nav_data.result;
}

export { navbar_fetch };