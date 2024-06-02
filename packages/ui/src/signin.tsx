import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Card, Typography } from "@mui/material";
import { signIn } from "next-auth/react";

export function SignIn(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "8rem",
      }}
    >
      <Card
        variant="outlined"
        style={{ width: "450px", padding: "1rem", border: "none" }}
      >
        <div
          className="form"
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "1rem",
          }}
        >
          <Typography fontSize="15px" fontWeight="700" marginBottom="15px">
            Sign in to your account
          </Typography>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth
            label="Email"
            variant="outlined"
            style={{ marginBottom: "14px" }}
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth
            label="Password"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
          <Button
            style={{ backgroundColor: "#a435f0" }}
            size="large"
            variant="contained"
            fontWeight="bold"
            onClick={()=>{
                props.onClick(email,password);
            }}
          >
            Sign In
          </Button>
          <Typography fontSize="11px" textAlign="center" margin="10px">
            By signing in, you agree to our Terms of Use and Privacy Policy.
          </Typography>
          <hr />
          <Typography fontSize="14px" textAlign="center" margin="15px">
            Don't have an account?{" "}
            <a href="/signup" style={{ textDecoration: "none" }}>
              <span style={{ color: "#5624d0", fontWeight: "bold" }}>
                Sign Up
              </span>
            </a>
          </Typography>
          <Button
            style={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
              marginTop: "10px"
            }}
            size="large"
            variant="outlined"
            onClick={() => signIn('google')}
          >
            Sign In with Google
          </Button>
        </div>
      </Card>
    </div>
  );
}
