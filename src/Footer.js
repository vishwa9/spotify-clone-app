import React from 'react';
import './Footer.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon  from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useDataLayerValue } from './DataLayer';

const Footer = () => {
    const [{ discover_weekly }, dispatch] = useDataLayerValue();
    console.log('discover_weekly', discover_weekly);
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer_albumLogo" src={discover_weekly?.tracks?.items[8]?.track?.album?.images[0].url} alt="pic" />
                <div className="footer__songInfo">
                    <h4>{discover_weekly?.tracks?.items[8]?.track?.album?.name}</h4>
                    <p>{discover_weekly?.tracks?.items[8]?.track?.artists[0]?.name}</p>
                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green"></ShuffleIcon>
                <SkipPreviousIcon className="footer__icon"></SkipPreviousIcon>
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"></PlayCircleOutlineIcon>
                <SkipNextIcon className="footer__icon"></SkipNextIcon>
                <RepeatIcon className="footer__green"></RepeatIcon>
            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;
