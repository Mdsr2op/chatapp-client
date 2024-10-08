import React from "react";
import { transformImage } from "../../lib/features";
import { FileOpen as FileOpenIcon } from "@mui/icons-material";

const RenderAttachment = ( file, url ) => {
  console.log(file)
  switch (file) {
    case "video":
      return <video src={url} preload="none" controls width={"200px"} />;
    case "image":
      return (
        <img
          src={transformImage(url, 200)}
          alt="Image attachment"
          width={"200px"}
          height={"150px"}
          style={{
            objectFit: "contain",
          }}
        />
      );
    case "audio":
      return <audio src={url} preload="none" controls />;
    default:
      return <FileOpenIcon />
  }
};

export default RenderAttachment;
