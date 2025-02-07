import React, { Children } from "react";
import { Button } from "@mui/material";

const CustomButton = ({
    type = "button",
    children,
    sx = {},
    onClick
}) => {
    return (
        <Button type={type} onClick={onClick} variant="contained" sx={{
            backgroundColor: "#263cff",
            width: "150px",
            // fontFamily: "'Poppins', sans-serif",
            borderRadius: "50px",
            ...sx,
        }}>{children}</Button>
    );
}

export default CustomButton;