import Link from "next/link";
import React from "react";

const FirstPost = () => {
	return (
		<>
			<h1>First Post</h1>
			<Link href="/">
				<a>Back to Home</a>
			</Link>
		</>
	);
};

export default FirstPost;
