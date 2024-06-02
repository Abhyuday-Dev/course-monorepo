import  { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { signIn } from "next-auth/react";

export function Signup(props: {
  onClick: (name: string, email: string, password: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

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
            Sign up and start learning
          </Typography>
          <TextField
            onChange={(e) => {
              setName(e.target.value);
            }}
            fullWidth={true}
            label="Full Name"
            variant="outlined"
            style={{ marginBottom: "14px" }}
          />
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            fullWidth={true}
            label="Email"
            variant="outlined"
            style={{ marginBottom: "14px" }}
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            fullWidth={true}
            label="Password"
            variant="outlined"
            style={{ marginBottom: "20px" }}
          />
          <Button
            style={{ backgroundColor: "#a435f0" }}
            size={"large"}
            variant="contained"
            fontWeight="bold"
            onClick={async () => {
              props.onClick(name, email, password);
            }}
          >
            Sign Up
          </Button>
          <Button
            style={{ backgroundColor: "#4285F4", color: "#fff", marginTop: "14px" }}
            size={"large"}
            variant="contained"
            fontWeight="bold"
            onClick={() => signIn('google', { callbackUrl: '/' })}
          >
            Sign Up with Google
          </Button>
          <Typography fontSize="11px" textAlign="center" margin="10px">
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </Typography>
          <hr />
          <Typography fontSize="14px" textAlign="center" margin="15px">
            Already have an account?{" "}
            {/* <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ color: "#5624d0", fontWeight: "bold" }}>
                Log In
              </span>
            </Link> */}
          </Typography>
        </div>
      </Card>
    </div>
  );
}
