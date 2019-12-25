import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
    root: {
        width: 250,
    },
    slider:{
        color: "#F45B69",
    },
});

function valuetext(value) {
    return `$${value}`;
}

export default function RangeSlider(props) {
    const classes = useStyles();
    const {value,handleChange, max, min}=props;
    const [val, setVal] = React.useState(value);
    return (
        <div className={classes.root}>
            <Slider className={classes.slider}
                value={val}
                onChange={(event, newVal) => {
                    handleChange(newVal);
                    setVal(newVal);
                }}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                    max={!max?100:max}
            />
        </div>
    );
}