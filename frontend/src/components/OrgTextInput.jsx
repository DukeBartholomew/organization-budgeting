import { useState } from "react";
import axios from "axios";
import { TextInput, createStyles, rem } from "@mantine/core";
import { useNavigate } from "react-router-dom";


const url = "http://localhost:8000";
const useStyles = createStyles((theme, { floating }) => ({
  root: {
    position: "relative",
    width: "50%",
  },

  label: {
    position: "absolute",
    zIndex: 2,
    top: rem(7),
    left: theme.spacing.sm,
    pointerEvents: "none",
    color: floating
      ? theme.colorScheme === "dark"
        ? theme.white
        : theme.black
      : theme.colorScheme === "dark"
      ? theme.colors.dark[3]
      : theme.colors.gray[5],
    transition: "transform 150ms ease, color 150ms ease, font-size 150ms ease",
    transform: floating
      ? `translate(-${theme.spacing.sm}, ${rem(-28)})`
      : "none",
    fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
    fontWeight: floating ? 500 : 400,
  },

  required: {
    transition: "opacity 150ms ease",
    opacity: floating ? 1 : 0,
  },

  input: {
    "&::placeholder": {
      transition: "color 150ms ease",
      color: !floating ? "transparent" : undefined,
    },
  },
}));


const sendOrg = (org) => {
    axios
      .post(url + "/orgs", org)
      .then((res) => {
        alert(JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

export function OrgTextInput() {
  const navigate = useNavigate();
    
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const { classes } = useStyles({
    floating: value.trim().length !== 0 || focused,
  });

  return <>
    <TextInput
      label="New Organization Name"
      placeholder="Ex: ACME, Scott's Tots, Red Apple"
      required
      classNames={classes}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      mt="md"
      autoComplete="nope"
    />

    <button type='button'
            onClick={ () => {
                sendOrg({
                  value,
                });
                navigate('/home');
              }}>Add</button>
    </>
}
