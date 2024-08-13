import { Menu } from "@mui/material";
import React from "react";

const FileMenu = ({ anchorE1 }) => {
  return (
    <Menu anchorEl={anchorE1}>
      <div
      style={{
        width: "10%rem"
      }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        corrupti, inventore consequatur vitae nihil quae neque fugit temporibus
        iusto reprehenderit facere totam porro tempora numquam, perferendis
        cupiditate? Vero, expedita repellendus?
      </div>
    </Menu>
  );
};

export default FileMenu;
