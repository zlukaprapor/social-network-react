import React from 'react';
import s from './Post.module.css';

const Post = () => {
	let textArea = React.createRef();
	let onAddPost = () => {
		alert(textArea.current.value);
	};
	return (
		<div>
			<h3>My Posts</h3>
			<div>
				<div>
					<textarea ref={textArea}></textarea>
				</div>
				<div>
					<button onClick={onAddPost}>Add post</button>
				</div>
			</div>
		</div>
	);
};
export default Post;
