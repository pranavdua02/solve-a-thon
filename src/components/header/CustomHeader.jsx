import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import "@fontsource/poppins";
import { useNavigate } from "react-router-dom";
// import { useLazyLogoutUserQuery } from "../../store/UserApi";

import logo from "../../assets/logo.png";
import CustomButton from "../button/CustomButton";
import "./header.css"

const CustomHeader = () => {
  const navigate = useNavigate();
  // const [logoutUser, { isLoading }] = useLazyLogoutUserQuery();

  const navigateToPage = (dest) => {
    if (dest === "Home") navigate("/");
    if (dest === "Plannings") navigate("/workoutplans");
  };

  const handleLogout = async () => {
    // await logoutUser();
    navigate("/start");
  };

  // if (isLoading) return <div>Loading...</div>;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        fontFamily: "'Poppins', sans-serif",
        boxShadow: 2,
      }}
    >
      <Toolbar
        className="toolHeader"
        sx={{
          justifyContent: "space-between",
        }}
      >
        <div className="navTabs">
        <img
          src={logo}
          alt="workout"
          className="logo"
          onClick={() => navigate("/")}
        />

          {["Destination", "Plannings", "Inspiration"].map((tab) => (
            <ButtonBase
              key={tab}
              sx={{
                padding: "8px 16px",
                borderRadius: "8px",
                transition: "all 0.3s ease",
                typography: "h7",
                fontWeight: "700",
                color: "black",
                "&:hover": {
                  color: "#263cff"
                },
                "&:active": {
                  opacity: 0.5,
                  transform: "scale(0.98)",
                },
              }}
              onClick={() => navigateToPage(tab)}
            >
              <Typography variant="h6">{tab}</Typography>
            </ButtonBase>
          ))}
        </div>

        <CustomButton
          sx={{
            backgroundColor: "#263cff",
            width: "100px",
            fontWeight: "600"
          }}
          onClick={() => handleLogout()}
        >
          Start
        </CustomButton>
      </Toolbar>
    </AppBar>
  );
};

export default CustomHeader;