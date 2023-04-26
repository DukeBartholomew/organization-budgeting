import { useState } from "react";
import { useInterval } from "@mantine/hooks";
import { createStyles, Button, Progress } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const useStyles = createStyles((theme) => ({
  button: {
    position: "relative",
    transition: "background-color 150ms ease",
  },

  progress: {
    ...theme.fn.cover(-1),
    height: "auto",
    backgroundColor: "transparent",
    zIndex: 0,
  },

  label: {
    position: "relative",
    zIndex: 1,
  },
}));

export function ButtonCreateOrg() {
  const navigate = useNavigate();
  const { classes, theme } = useStyles();
  const [progress, setProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const interval = useInterval(
    () =>
      setProgress((current) => {
        if (current < 100) {
          return current + 1;
        }

        interval.stop();
        setLoaded(true);
        return 0;
      }),
    20
  );

  return (
    <Button
      w={500}
      className={classes.button}
      onClick={() => navigate("/create-org")}
      color={loaded ? "teal" : theme.primaryColor}
    >
      <div className={classes.label}>
        {progress !== 0
          ? "Creating..."
          : loaded
          ? "Organization Created"
          : "Create New Organization"}
      </div>
      {progress !== 0 && (
        <Progress
          value={progress}
          className={classes.progress}
          color={theme.fn.rgba(theme.colors[theme.primaryColor][2], 0.35)}
          radius="sm"
        />
      )}
    </Button>
  );
}
