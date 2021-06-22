import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  rootTreeView: {
    margin: theme.spacing(2),
    minWidth: "600px",
    paddingBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "1px",
      margin: theme.spacing(1),
    },
  },
  rootTreeItem: {
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      padding: "1px",
    },
  },
  menuItem: {
    padding: "5px",
    [theme.breakpoints.down("sm")]: {
      padding: "0px",
      margin: "0px",
    },
  },
}));

function MenuItemLink(props) {
  const { to, label } = props;
  const classes = useStyles();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <MenuItem
      className={classes.menuItem}
      component={renderLink}
      onClick={props.onClick}
    >
      {label}
    </MenuItem>
  );
}

export default function MenuPopper() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      <div>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-tree-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <MenuIcon />
        </IconButton>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center bottom" : "center top",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <TreeView
                    id="menu-tree-grow"
                    className={classes.rootTreeView}
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                  >
                    {/* Home section   */}
                    <MenuItemLink label="Home" to="/" onClick={handleClose} />
                    {/* About section   */}
                    <TreeItem nodeId="0" label="About">
                      <MenuItemLink
                        label="EDISON Community"
                        to="/edison-community"
                        onClick={handleClose}
                      />
                    </TreeItem>

                    {/* Tutorial section   */}
                    <TreeItem nodeId="1" label="Trainings">
                      {/* <MenuItemLink
                        label="All Trainings and Material"
                        to="/trainings-and-workshops"
                        onClick={handleClose}
                      /> */}
                      <MenuItemLink
                        label="Upcoming events"
                        to="/upcoming"
                        onClick={handleClose}
                      />
                      <TreeItem nodeId="2" label="2021">
                        <MenuItemLink
                          label="MATES ED2MIT DSAF Self-Study Course"
                          onClick={handleClose}
                          to="/tutorials-2021-mates-ed2mit-dsaf"
                        ></MenuItemLink>
                        <MenuItemLink
                          label="MATES ED2MIT DMG 16, 18, 23 February"
                          onClick={handleClose}
                          to="/tutorials-2021-mates-ed2mit-dmg-february"
                        />
                        <MenuItemLink
                          label="MATES ED2MIT BDIT4DA 20, 26, 28 January, 4 February"
                          onClick={handleClose}
                          to="/tutorials-2021-mates-ed2mit-bdit4da-january-february"
                        />
                      </TreeItem>
                      <TreeItem nodeId="3" label="2020">
                        <MenuItemLink
                          label="MATES ED2MIT BDIT4DA"
                          onClick={handleClose}
                          to="/tutorials-2020-mates-ed2mit-bdit4da"
                        />
                        <MenuItemLink
                          label="FAIR Competences for Higher Education Design Workshop 8, 9 October"
                          onClick={handleClose}
                          to="/workshops-2020-fair-competences-october"
                        />
                      </TreeItem>
                      <TreeItem nodeId="4" label="2019">
                        <MenuItemLink
                          label="BDIT4DA Tutorial HPCS2019"
                          to="/tutorials-2019-bdit4da-hpcs"
                          onClick={handleClose}
                        />
                        <MenuItemLink
                          label="EDSFr 4 Design Workshop 20 November"
                          onClick={handleClose}
                          to="/workshops-2019-edsf-release4-november"
                        />
                        <MenuItemLink
                          label="DTW2019 Data Teaching Workshop September, San Diego"
                          onClick={handleClose}
                          to="/workshops-2019-dtw-september-sandiego"
                        />
                        <MenuItemLink
                          label="EDSF Tutorial Summer 2019: Data Science Competence and Education"
                          to="/tutorials-2019-edsf-data-science-competence-and-education"
                          onClick={handleClose}
                        />
                      </TreeItem>
                      <TreeItem nodeId="5" label="2018">
                        <MenuItemLink
                          label="EDSFr3 Design Workshop 18, 19 July UvA"
                          onClick={handleClose}
                          to="/workshops-2018-edsf-release3-july-uva"
                        />
                        <MenuItemLink
                          label="EDSFr3 Design Workshop 18, 19 July Agenda"
                          onClick={handleClose}
                          to="/workshops-2018-edsf-release3-july-agenda"
                        />
                        <MenuItemLink
                          label="EDISON Workshop 31 May, Denmark"
                          onClick={handleClose}
                          to="/workshops-2018-edison-may-denmark"
                        />
                      </TreeItem>
                    </TreeItem>

                    <TreeItem nodeId="6" label="Resources">
                      <TreeItem
                        nodeId="7"
                        label="EDSF"
                      >
                        <MenuItemLink
                          label="Data Science Competence Framework"
                          to="/data-science-competence-framework-cf-ds"
                          onClick={handleClose}
                        />
                        <MenuItemLink
                          label="Data Science Body of Knowledge"
                          to="/data-science-body-knowledge-ds-bok"
                          onClick={handleClose}
                        />
                        <MenuItemLink
                          label="Data Science Model Curriculum"
                          to="/data-science-model-curriculum-mc-ds"
                          onClick={handleClose}
                        />
                        <MenuItemLink
                          label="Data Science Professional Profiles"
                          to="/data-science-professional-profiles-definition-dsp"
                          onClick={handleClose}
                        />
                      </TreeItem>

                      <TreeItem
                        nodeId="8"
                        label="MATES ED2MIT Training Courses"
                      >
                        <MenuItemLink
                          label="Introduction to Data Science & Analytics Foundations for the Maritime Sector"
                          to="/tutorials-2021-mates-ed2mit-dsaf"
                          onClick={handleClose}
                        />
                        <MenuItemLink
                          label="Industrial Data Spaces, Organisational Data Management & Governance for the Maritime Sector"
                          to="/tutorials-2021-mates-ed2mit-dmg-february"
                          onClick={handleClose}
                        />
                        <MenuItemLink
                          label="Big Data Infrastructure Technologies for Data Analytics"
                          to="/tutorials-2021-mates-ed2mit-bdit4da-january-february"
                          onClick={handleClose}
                        />
                        <MenuItemLink
                          label="Introduction to Big Data and Data Management for Maritime Industry"
                          to="/tutorials-2020-mates-ed2mit-bdit4da"
                          onClick={handleClose}
                        />
                      </TreeItem>

                      <TreeItem nodeId="9" label="Releases">
                        <MenuItemLink
                          label="All Releases"
                          onClick={handleClose}
                          to="/releases"
                        />
                        <TreeItem nodeId="10" label="Release 3">
                          <MenuItemLink
                            label="CF-DS"
                            onClick={handleClose}
                            to="/resources-edsf-release3-cfds"
                          />
                          <MenuItemLink
                            label="DS-BoK"
                            onClick={handleClose}
                            to="/resources-edsf-release3-dsbok"
                          />
                          <MenuItemLink
                            label="MC-DS"
                            onClick={handleClose}
                            to="/resources-edsf-release3-mcds"
                          />
                          <MenuItemLink
                            label="DSPP"
                            onClick={handleClose}
                            to="/resources-edsf-release3-dspp"
                          />
                        </TreeItem>
                        <TreeItem nodeId="11" label="Pre-Release 3">
                          <MenuItemLink
                            label="CF-DS"
                            onClick={handleClose}
                            to="/resources-edsf-prerelease3-cfds"
                          />
                          <MenuItemLink
                            label="DS-BoK"
                            onClick={handleClose}
                            to="/resources-edsf-prerelease3-dsbok"
                          />
                          <MenuItemLink
                            label="MC-DS"
                            onClick={handleClose}
                            to="/resources-edsf-prerelease3-mcds"
                          />
                          <MenuItemLink
                            label="DSPP"
                            onClick={handleClose}
                            to="/resources-edsf-prerelease3-dspp"
                          />
                        </TreeItem>
                        <TreeItem nodeId="12" label="Release 2">
                          <MenuItemLink
                            label="CF-DS"
                            onClick={handleClose}
                            to="/resources-edsf-release2-cfds"
                          />
                          <MenuItemLink
                            label="DS-BoK"
                            onClick={handleClose}
                            to="/resources-edsf-release2-dsbok"
                          />
                          <MenuItemLink
                            label="MC-DS"
                            onClick={handleClose}
                            to="/resources-edsf-release2-mcds"
                          />
                          <MenuItemLink
                            label="DSPP"
                            onClick={handleClose}
                            to="/resources-edsf-release2-dspp"
                          />
                        </TreeItem>
                      </TreeItem>
                      <MenuItemLink
                        label="Data Stewardship Professional and FAIR Competence Framework"
                        onClick={handleClose}
                        to="/data-stewardship-professional-and-fair-competence-framework"
                      ></MenuItemLink>
                      <MenuItemLink
                        label="Curricula Design"
                        onClick={handleClose}
                        to="/curricula-design"
                      />
                      <MenuItemLink
                        label="Projects"
                        onClick={handleClose}
                        to="/projects"
                      />
                      <MenuItemLink
                        label="Deliverables"
                        onClick={handleClose}
                        to="/deliverables"
                      />
                      <MenuItemLink
                        label="Presentations"
                        onClick={handleClose}
                        to="/presentations"
                      />
                      <MenuItemLink
                        label="Publications"
                        onClick={handleClose}
                        to="/publications"
                      />
                      <MenuItemLink
                        label="Books and Articles"
                        onClick={handleClose}
                        to="/books-and-articles"
                      />
                      <MenuItemLink
                        label="Datasets"
                        onClick={handleClose}
                        to="/datasets"
                      />
                    </TreeItem>

                    <TreeItem nodeId="13" label="Imprint">
                      {/* Contact section   */}
                      <MenuItemLink
                        label="Contact"
                        to="/contact"
                        onClick={handleClose}
                      />
                      {/* Privacy policy section   */}
                      <MenuItemLink
                        label="Privacy Policy"
                        to="/privacy-policy"
                        onClick={handleClose}
                      />
                      {/* Copyright section   */}
                      <MenuItemLink
                        label="Copyright"
                        to="/copyright"
                        onClick={handleClose}
                      />
                    </TreeItem>
                  </TreeView>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
