import { useState } from 'react';
import { Navbar, Center, Tooltip, UnstyledButton, createStyles, Stack, rem } from '@mantine/core';
import {
  IconHome2,
  IconGauge,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconCalendarStats,
  IconUser,
  IconSettings,
  IconLogout,
  IconSwitchHorizontal,
} from '@tabler/icons-react';
import { MantineLogo } from '@mantine/ds';
import { useNavigate } from 'react-router-dom'


const useStyles = createStyles((theme) => ({
  link: {
    width: rem(50),
    height: rem(50),
    borderRadius: theme.radius.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.blue[0],
    },
  },

  // active: {
  //   '&, &:hover': {
  //     backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
  //     color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
  //   },
  // },
}));

// interface NavbarLinkProps {
//   icon: React.FC<any>;
//   label: string;
//   active?: boolean;
//   onClick?(): void;
// }

function NavbarLink({ icon: Icon, label, active, onClick }) {

 
  const { classes, cx } = useStyles();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton onClick={onClick} className={cx(classes.link, { [classes.active]: active })}>
        <Icon size="1.2rem" stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: 'Home' },
//   { icon: IconGauge, label: 'Dashboard' },
//   { icon: IconDeviceDesktopAnalytics, label: 'Analytics' },
//   { icon: IconCalendarStats, label: 'Releases' },
  { icon: IconUser, label: 'Manage Organizations' },
//   { icon: IconFingerprint, label: 'Security' },
  { icon: IconSettings, label: 'Settings' },
];

export function NavbarMinimal() {
    const navigate = useNavigate();
  const [active, setActive] = useState(2);

  function changePage(link) {
     if(link.label == 'Home') {
        navigate('/home');
     }
     if(link.label == 'Manage Organizations') {
        navigate('/manage-orgs');
     }
     if(link.label == 'Settings') {
        navigate('/settings');
     }

  }

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => changePage(link)}
    />
  ));

  return (
    <div style={{float: "left", marginTop: '71px'}}>
    <Navbar height={750} width={{ base: 80 }} p="md">
      <Center>
        <MantineLogo type="mark" size={30} />
      </Center>
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}>
          {links}
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <NavbarLink icon={IconSwitchHorizontal} label="Change account" onClick={() => navigate('/')}/>
          <NavbarLink icon={IconLogout} label="Logout" onClick={() => navigate('/')}/>
        </Stack>
      </Navbar.Section>
    </Navbar>
    </div>
  );
}