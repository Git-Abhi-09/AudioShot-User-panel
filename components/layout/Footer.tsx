import {Box, Container, Divider, Grid, Typography} from '@mui/material';
import React from 'react';
import {navItems} from '../../utils/constanr';

const Footer = () => {
	return (
		<footer className="fixed bottom-0 bg-neutral-300 w-full">
			<Container>
				<Grid container>
					<Grid item xs={12} md={4}>
						<Box>
							<Box py={3}>
								<Typography variant="h4" sx={{textAlign:{xs:'center'}}}>Audioshots</Typography>
							</Box>
							<Divider className="mb-7" />
							<Typography>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt corporis nihil blanditiis exercitationem cumque neque
								laboriosam perferendis, doloribus consequatur itaque!
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box p={3} className="flex items-center justify-center">
							<Typography variant="h4">Services</Typography>
						</Box>
						<Box className="flex items-center justify-center flex-col gap-4">
							{navItems.map((item, index) => {
								return <Typography key={index}>{item}</Typography>;
							})}
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box className="mb-7">
							<Box py={3}>
								<Typography variant="h4" sx={{textAlign:{xs:'center'}}}>Contact Us</Typography>
							</Box>
							<Divider className="mb-7" />
							<Typography>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Nesciunt corporis nihil blanditiis exercitationem cumque neque
								laboriosam perferendis, doloribus consequatur itaque!
							</Typography>
							<Divider className="mb-3 mt-7" />
							<Typography className="font-semibold">
								Phone:- +91 8888888888
							</Typography>
							<Typography className="font-semibold">
								Email:- ajink3994@gmail.com
							</Typography>
						</Box>
					</Grid>
				</Grid>
				<Divider />
				<Box p={1} className='flex items-center justify-center'>
					<Typography className='font-semibold'>&copy; Copyright Weoto Technologies Pvt Ltd. All Rights Reserved</Typography>
				</Box>
			</Container>
		</footer>
	);
};

export default Footer;
