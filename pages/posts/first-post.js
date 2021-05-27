import React from "react";
import Link from "next/link";
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout'

const FirstPost = () => {
	return (
		<Layout>
			<Head>
				{/* Head - Allows metadata or stuff in the head to be modified */}
				<title>First Post</title>
			</Head>

			{/* Image eles resize and optimize images */}
			<Image
				src="/images/profile.jpg"
				height={144}
				width={144}
				alt="Daniel Ahn"
			/>
			<h1>First Post</h1>
			<Link href="/">
				<a>Back to Home</a>
			</Link>

			<style jsx>{`
					{
					/* This style tag affect only the component its inside */
				}
				background: yellow;
			`}</style>
		</Layout>
	);
};

export default FirstPost;
