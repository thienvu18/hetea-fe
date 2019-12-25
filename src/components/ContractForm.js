import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Typography, Grid } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import RangeSlider from "./Slider";

const useStyles = makeStyles({
  form: {
    overflow: "hidden",
    width: "100%"
  },
  button: {
    backgroundColor: "#F45B69",
    color: "#fff",
    textAlign: "center",
    fontSize: "18px",
    fontFamily:
      "nunito,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif",
    borderRadius: "4px",
    padding: "14px 20px",
    marginBottom: "35px",
    boxShadow: "0 2px 8px rgba(102, 103, 107, 0.15)",
    transition: "0.3s",
    display: "block",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#F45B69",
      transform: "translateY(-3px)",
      boxShadow: "0 2px 8px rgba(102, 103, 107, 0.35)"
    }
  },
  buttonFullWidth: {
    maxWidth: "100%",
    width: " 100%",
    textAlign: "center",
    display: "block",
    overflow: "hidden",
    position: "relative",
    color: " #fff",
    zIndex: 1,
    paddingLeft: "20px",
    paddingRight: "10px",
    backgroundColor: "#F45B69",
    "&:hover": {
      paddingRight: "20px",
      backgroundColor: "#F45B69"
    }
  },
  icon: {
    paddingRight: "5px",
    opacity: 0,
    transition: "0.25s",
    display: "inline-block",
    transform: "translateX(-20px)",
    color: "#fff",
    "&:hover": {
      maxWidth: "20px",
      opacity: 1,
      transform: " translateX(0)"
    }
  },
  title: {
    textAlign: "center",
    fontFamily:
      "nunito,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif",
    display: "block",
    fontWeight: 700,
    color: "#333",
    fontSize: "24px",
    marginBottom: "33px"
  },
  titleTab: {
    textAlign: "center",
    fontFamily:
      "nunito,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif",
    display: "block",
    fontWeight: 700,
    color: "#F45B69"
    // fontSize: "24px"
  },
  titleForm: {
    fontFamily:
      "nunito,helveticaneue,helvetica neue,Helvetica,Arial,sans-serif",
    display: "block",
    fontWeight: "bold",
    color: "#a0a0a0",
    fontSize: "15px"
  },

  content: {
    padding: "50px 35px",
    position: "relative",
    zIndex: 10,
    display: "inline-block",
    width: "100%",
    backgroundColor: "rgb(242, 242, 242)"
  },
  close: {
    borderRadius: "0 4px 0 0",
    color: "#333"
  },
  input: {
    marginBottom: "17px",
    height: "48px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.05)",
    padding: "0 20px",
    boxSizing: "border-box",
    borderRadius: "4px"
  }
});
const ContractForm = props => {
  const classes = useStyles();
  const { value, name } = props;
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.button}
        onClick={handleOpen}
      >
        Make an offer
        <i className="icon-material-outline-arrow-right-alt" />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={classes.form}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ padding: "10px" }}
        >
          <Typography variant="h6" className={classes.titleTab}>
            Make an Offer
          </Typography>

          <Button
            onClick={handleClose}
            color="primary"
            autoFocus
            className={classes.close}
          >
            <CloseIcon />
          </Button>
        </Grid>

        <DialogContent className={classes.content}>
          <Typography variant="h3" className={classes.title}>
            Discuss your project with {name}
          </Typography>
          <DialogContentText id="alert-dialog-description">
            {/*// <!-- Dashboard Box -->*/}
            <div className="col-xl-12">
              <div className="dashboard-box margin-top-30">
                {/*// <!-- Headline -->*/}
                <div className="headline">
                  <h3>
                    <i className="icon-material-outline-account-circle" />
                    Dealing
                  </h3>
                </div>

                <div className="content with-padding padding-bottom-0">
                  <div className="row ">
                    <div className="col">
                      <div className="row">
                        <div className="col-xl-6">
                          <div className="submit-field">
                            <h5>Hour/ Day</h5>
                            <RangeSlider
                              value={4}
                              max={12}
                              // handleChange={newValue => {
                              //   this.filters.HourRate = newValue;
                              // }}
                            />
                          </div>
                        </div>

                        <div className="col-xl-6">
                          <div className="submit-field">
                            <h5>Month</h5>
                            <RangeSlider
                              value={4}
                              max={12}
                              // handleChange={newValue => {
                              //   this.filters.HourRate = newValue;
                              // }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/*// <!-- Dashboard Box -->*/}
            <div className="col-xl-12">
              <div className="dashboard-box margin-top-30">
                {/*// <!-- Headline -->*/}
                <div className="headline">
                  <h3>
                    <i className="icon-material-outline-account-circle" /> Notes
                  </h3>
                </div>

                <div className="content with-padding padding-bottom-0">
                  <div className="row ">
                    <div className="col">
                      <div className="row">
                        <textarea
                          name="textarea"
                          cols="10"
                          placeholder="Message"
                          className="with-border"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button
            className="button full-width button-sliding-icon ripple-effect"
            form="make-an-offer-form"
          >
            Make an Offer{" "}
            <i className="icon-material-outline-arrow-right-alt" />
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ContractForm;
