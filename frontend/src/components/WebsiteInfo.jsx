import {
  createStyles,
  Text,
  Title,
  TextInput,
  Button,
  Image,
  rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: "inline-block",
    width: "90%",
    alignItems: "center",
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.colors.gray[3]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
      padding: theme.spacing.xl,
    },
  },

  body: {
    paddingRight: `calc(${theme.spacing.xl} * 4)`,

    [theme.fn.smallerThan("sm")]: {
      paddingRight: 0,
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
    fontSize: "40px",
  },

  controls: {
    display: "flex",
    marginTop: theme.spacing.xl,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

export function WebsiteInfo() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.body}>
        <Title className={classes.title}>Welcome to Budget Mania!</Title>
        <Text fw={500} fz="lg" mb={5}>
          Please create an account if this is your first time. If this isn't
          your first time, welcome back!
        </Text>
        <Text fz="sm" c="dimmed">
          Budget Mania is an app where you can manage all of your organizations
          all in one place. Here you can track your expenses and handle your
          budget of all your organizations, as well as view other organizations
          and see what they're up to! Many organizations will include a way to
          send them money if you align with the spirit of their organization, or
          if you are simply feeling generous! Enjoy our totally free
          application!
        </Text>
      </div>
    </div>
  );
}
