import React, { useState } from 'react';
import './Map.css';
import { GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import locationList from '../../data/nirvana-landmarks.js';
import mapStyles from './mapStyles.js'; import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
	card: {
		maxWidth: 345,
	},
	media: {
		height: 140,
	},
});

export default function Map() {
	const classes = useStyles();
	const [selectedLocation, setSelectedLocation] = useState(null);

	return (
		<GoogleMap
			defaultZoom={12}
			defaultCenter={{ lat: 46.9829827, lng: -123.8062302 }}
			defaultOptions={{ styles: mapStyles }}
		>
			{locationList.map(location => (
				<Marker
					key={location.ID}
					position={{
						lat: location.COORDINATES[0],
						lng: location.COORDINATES[1]
					}}
					onClick={() => {
						setSelectedLocation(location);
					}}
					icon={{
						url: '/logo.png',
						scaledSize: new window.google.maps.Size(25, 25)
					}}
				/>
			))}
			{selectedLocation && (
				<InfoWindow
					position={{
						lat: selectedLocation.COORDINATES[0],
						lng: selectedLocation.COORDINATES[1]
					}}
					onCloseClick={() => {
						setSelectedLocation(null);
					}}
				>
					<div>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image={selectedLocation.IMAGE}
									title={selectedLocation.IMAGEALTTEXT}
								/>
								<CardContent>
									<Typography gutterBottom variant="h5" component="h2">
										{selectedLocation.NAME}
									</Typography>
									<Typography variant="body1" color="textSecondary" component="p">
										{selectedLocation.ADDRESS1}
									</Typography>
									<Typography variant="body1" color="textSecondary" component="p">
										{selectedLocation.ADDRESS2}
									</Typography>
									<Typography variant="body2" color="textPrimary" component="p">
										{selectedLocation.DESCRIPTION}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</div>
				</InfoWindow>
			)}
		</GoogleMap>
	);
}


