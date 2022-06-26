import React, { useState, useEffect } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


import { ROUTES } from '../../utils/constants'
import logo from '../../assets/logo.svg'
import { IconButton } from '@material-ui/core';


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.5em'
    }
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down('md')]: {
      height: '7em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em'
    }
  },
  tabContainer: {
    marginLeft: 'auto',
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: '25px',
    height: '45px',
    ...theme.typography.estimate,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }

  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIconContainer: {
    marginLeft: 'auto',
      '&:hover': {
        backgroundColor: 'transparent'
      }
  },
  drawerIcon: {
    height: '50px',
    width: '50px'
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: 'white',
    opacity: 0.7
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  drawerItemSelected: {
    '& .MuiListItemText-root': {
      opacity: 1
    }
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  }
}))


export default function Header(props) {
  const { selectedTab, setSelectedTab, selectedServicesIndex, setSelectedServicesIndex } = props
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)

  // Media Queries
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);



  const handleChange = (e, newValue) => {
    setSelectedTab(newValue)
  }
  const handleClick = e => {
    setAnchorEl(e.currentTarget)
    setOpenMenu(true)
  }
  const handleClose = e => {
    setAnchorEl(null)
    setOpenMenu(false)
  }
  const handleMenuItemClick = (e, i) => {
    setAnchorEl(null)
    setOpenMenu(false)
    setSelectedServicesIndex(i)
  }
  const menuOptions = [
    {
      name: 'Services',
      link: '/services',
      activeIndex: 1,
      selectedIndex: 0
    },
    {
      name: 'Custom Software Development',
      link: '/customsoftware',
      activeIndex: 1,
      selectedIndex: 1
    },
    {
      name: 'iOS/Android App Development',
      link: '/mobileapps',
      activeIndex: 1,
      selectedIndex: 2
    },
    {
      name: 'Website Development',
      link: '/websites',
      activeIndex: 1,
      selectedIndex: 3
    },
  ]

  const routes = [
    {
      name: "Home",
      link: '/',
      activeIndex: 0
    },
    {
      name: "Services",
      link: '/services',
      activeIndex: 1,
      ariaOwns: anchorEl ? "simple-menu" : undefined,
      ariaPopup: anchorEl ? "true" : undefined,
      mouseOver: (e) => handleClick(e)
    },
    {
      name: "The Revolution",
      link: '/revolution',
      activeIndex: 2
    },
    {
      name: "About Us",
      link: '/about',
      activeIndex: 3
    },
    {
      name: "Contact Us",
      link: '/contact',
      activeIndex: 4
    },
  ]
  useEffect(() => {
    [...menuOptions, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (selectedTab !== route.activeIndex) {
            setSelectedTab(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== selectedServicesIndex) {
              setSelectedServicesIndex(route.selectedIndex)
            }
          }
          break;
        case '/estimate':
          setSelectedTab(5)
          break;
        default:
          break;
      }
    })
  }, [selectedTab, menuOptions, selectedServicesIndex, routes])

  const tabs = (
    <>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >
        {routes.map((route, index) => (
          <Tab
            key={`${route}${index}`}
            className={classes.tab}
            component={Link}
            to={route.link}
            label={route.name}
            aria-owns={route.ariaOwns}
            aria-haspopup={route.ariaPopup}
            onMouseOver={route.mouseOver}
          />
        ))}
      </Tabs>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link} to='/estimate'
        onClick={() => setSelectedTab(5)}>
        Free Estimate
            </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        classes={{ paper: classes.menu }}
        MenuListProps={{ onMouseLeave: handleClose }}
        elevation={0}
        keepMounted
        style={{ zIndex: 1302 }}
      >
        {menuOptions.map((option, i) => (
          <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{ root: classes.menuItem }}
            onClick={(e) => {
              handleMenuItemClick(e, i)
              setSelectedTab(1)
              handleClose()
            }}
            selected={i === selectedServicesIndex && selectedTab === 1}
          >
            {option.name}
          </MenuItem>
        ))}
      </Menu>
    </>
  )

  const drawer = (
    <>
      <SwipeableDrawer
        disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              key={`${route}${index}`}
              component={Link}
              to={route.link}
              divider
              button
              selected={selectedTab === route.activeIndex}
              classes={{ selected: classes.drawerItem }}
              onClick={() => {
                setOpenDrawer(false)
                setSelectedTab(route.activeIndex)
              }}
            >
              <ListItemText
                disableTypography
                className={classes.drawerItem}
              >
                {route.name}
              </ListItemText>
            </ListItem>
          ))}
          <ListItem
            component={Link}
            to='/estimate'
            divider
            button
            selected={selectedTab === 5}
            classes={{ root: classes.drawerItemEstimate, selected: classes.drawerItemSelected }}
            onClick={() => {
              setOpenDrawer(false)
              setSelectedTab(5)
            }}
          >
            <ListItemText
              className={classes.drawerItem}
              disableTypography
            >
              Free Estimate
            </ListItemText>
          </ListItem>
        </List>
      </SwipeableDrawer>
      <IconButton
        className={classes.drawerIconContainer}
        onClick={() => setOpenDrawer(!openDrawer)}
        disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </>
  )

  return (
    <>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => setSelectedTab(0)}
            >
              <img alt="company logo" className={classes.logo} src={logo} />
            </Button>
            {mdDown ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </>
  )
}
