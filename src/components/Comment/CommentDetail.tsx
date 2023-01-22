import React, { useState, useContext } from "react";
import { Box } from "@mui/system";
import { Avatar, MenuItem, Typography } from "@mui/material";
import { IComment } from "../../interface";
import { historyCreateVideo } from "../../utils/historyCreate";
import DetailVideoButton from "../Button/DetailVideoButton";
import { ConTrolComment, DislikeIcon, LikeIcon } from "../icons";
import Menu from "@mui/material/Menu";
import { AuthContext } from "../../context/AuthProvider";

import FlagOutlinedIcon from "@mui/icons-material/FlagOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

interface ICommentDetailProps {
  comment: IComment;
  setCommentList: React.Dispatch<React.SetStateAction<IComment[]>>;
}

const CommentDetail = ({ comment, setCommentList }: ICommentDetailProps) => {
  const { user } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleOpenMenu = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setAnchorEl(e.currentTarget);
  };

  const handleDeleteComment = (idComment: string) => {
    setCommentList((prev) => prev.filter((item) => item.id != idComment));
  };

  return (
    <Box
      display={"flex"}
      alignItems={"flex-start"}
      justifyContent={"space-between"}
      marginY={"16px"}
      sx={{
        wordBreak: "break-word",
      }}
    >
      <Box display={"flex"}>
        <Avatar
          sx={{
            height: "40px",
            width: "40px",
          }}
          src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl}
        />
        <div
          style={{
            margin: "0 12px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            fontWeight={"600"}
            fontSize={"13px"}
            height={"100%"}
            marginBottom={"2px"}
          >
            {comment.snippet.topLevelComment.snippet.authorDisplayName}
            <span
              style={{
                fontWeight: "normal",
                fontSize: "12px",
                marginLeft: "5px",
                color: "#606060",
              }}
            >
              {historyCreateVideo(
                comment.snippet.topLevelComment.snippet.updatedAt
              )}
            </span>
          </Typography>
          <div
            dangerouslySetInnerHTML={{
              __html: comment.snippet.topLevelComment.snippet.textDisplay,
            }}
            style={{ fontSize: "14px" }}
            className="link"
          ></div>
          <Box display={"flex"} alignItems={"center"} marginTop={"4px"}>
            <DetailVideoButton
              style={{
                backgroundColor: "inherit",
                height: "32px",
                width: "32px",
                padding: "0",
                minWidth: "32px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <LikeIcon />
            </DetailVideoButton>
            <DetailVideoButton
              style={{
                backgroundColor: "inherit",
                height: "32px",
                width: "32px",
                padding: "0",
                minWidth: "32px",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <DislikeIcon />
            </DetailVideoButton>
            <DetailVideoButton
              style={{
                backgroundColor: "inherit",
                fontSize: "12px",
                fontWeight: "bold",
                height: "32px",
              }}
            >
              Phản hồi
            </DetailVideoButton>
          </Box>
        </div>
      </Box>
      <DetailVideoButton
        style={{
          borderRadius: "50%",
          width: "36px",
          padding: "0px",
          minWidth: "36px",
        }}
        handleClickBtn={handleOpenMenu}
      >
        <ConTrolComment />
      </DetailVideoButton>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClick={() => {
          setAnchorEl(null);
        }}
        sx={{
          borderRadius:'8px' ,
        }}
      >
        {user?.uid == comment.id ? (
          <>
            <MenuItem>
              <EditOutlinedIcon />
            <span style={{paddingLeft:'16px'}}>Chỉnh sửa</span>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleDeleteComment(comment.id || "");
              }}
            >
              <DeleteOutlinedIcon />
            <span style={{paddingLeft:'16px'}}>Xóa</span>
            </MenuItem>
          </>
        ) : (
          <MenuItem>
            <FlagOutlinedIcon />
            <span style={{paddingLeft:'16px'}}>Báo cáo</span>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};

export default CommentDetail;
