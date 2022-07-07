import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import React from 'react'

function Post({title,content, image}) {
	return (
		<Card sx={{margin: 5}}>
			<CardHeader
				avatar={
					<Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
						R
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVert />
					</IconButton>
				}
				title={title}
				subheader="07 de julho de 2022"
			/>
			<CardMedia
				component="img"
				height="15%"
				image={image}
				alt={title}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					{content}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{ color: 'red' }} />} />
				</IconButton>
				<IconButton aria-label="share">
					<Share />
				</IconButton>
			</CardActions>
		</Card>
	)
}

export default Post