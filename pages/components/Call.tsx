import Script from "next/script"
import styles from "@/styles/Call.module.css"
export default function Call(){
    return(
      <>
      <h1>Call</h1>
       <Script src="https://asset-tidycal.b-cdn.net//js/embed.js"/>
<div id="tidycal-embed" data-path="tayseer/30-minute-meeting"></div>
      </>  
    )
}