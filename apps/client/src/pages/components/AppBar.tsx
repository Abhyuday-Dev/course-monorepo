import React from "react";
import { Button, Typography } from "@mui/material";
import { useSession, signOut } from "next-auth/react";
import Link from 'next/link';

const AppBar = () => {
  const { data: session, status } = useSession();
  const userLoading = status === "loading";

  if (userLoading) {
    return <></>;
  }

  let name=null;

  if (session) {
    name=session.user.email[0].toUpperCase();

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          backgroundColor: "#5624d0",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h4" color="white" fontWeight="bold">
            Learnify
          </Typography>
        </div>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Button
            style={{
              marginRight: "10px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
            size="medium"
            variant="contained"
            component={Link}
            href="/addCourse"
          >
            Add Course
          </Button>
          <Button
            style={{
              marginRight: "10px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
            size="medium"
            variant="contained"
            component={Link}
            href="/courses"
          >
            Courses
          </Button>
          <Typography
            color="white"
            backgroundColor="black"
            fontSize="25px"
            width="40px"
            height="40px"
            padding="0rem 0.3rem"
            textAlign="center"
            borderRadius="50%"
            marginRight="15px"
          >
            {name}
          </Typography>
          <Button
            style={{
              marginRight: "10px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
            size="medium"
            variant="contained"
            onClick={() => signOut({ callbackUrl: '/' })}
          >
            Logout
          </Button>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 1.5rem",
          backgroundColor: "#5624d0",
          alignItems: "center",
        }}
      >
        <div>
          <Typography variant="h4" color="white" fontWeight="bold">
            Learnify
          </Typography>
        </div>
        <div>
          <Button
            style={{
              marginRight: "10px",
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
            size="medium"
            variant="contained"
            component={Link}
            href="/signup"
          >
            Sign up
          </Button>
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              fontWeight: "bold",
            }}
            size="medium"
            variant="contained"
            component={Link}
            href="/signin"
          >
            Sign In
          </Button>
        </div>
      </div>
    );
  }
};

export default AppBar;
