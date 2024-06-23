import React from "react";
import styles from "./Card.module.css";
import { Tooltip, Chip } from "@mui/material";

const Card = ({ data, type }) => {
	
	if (!data || !data.image || !data.follows || !data.title || !data.songs) {
		return null; 
	}

	const getCard = (type) => {
		switch (type) {
			case "album":
				return (
					<Tooltip title={`${data.songs.length} songs`} placement="top" arrow>
						<div
							className={styles.wrapper}
							>
							<div className={styles.card}>
								<img src={data.image} alt="album" />
								<div className={styles.banner}>
									<Chip
										label={`${data.follows} Follows`}
										className={styles.chip}
										size="small"
									/>
								</div>
							</div>
							<div className={styles.titleWrapper}>
								<p>{data.title}</p>
							</div>
						</div>
					</Tooltip>
				);
			default:
				return null;
		}
	};

	return getCard(type);
}
export default Card;