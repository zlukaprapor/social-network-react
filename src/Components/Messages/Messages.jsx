import React from 'react';
import s from './Messages.module.css';
import ContactList from './ContactList';
import MessagesList from './MessagesList';
import Post from '../Post';

const Messages = ({ contacts, messages }) => {
	return (
		<div className={s.chatroom}>
			<div className={s.contact}>
				<ul className={s.ul}>
					<ContactList contacts={contacts} />
				</ul>
			</div>
			<div>
				<ul className={s.ul}>
					<MessagesList messages={messages} />
				</ul>
			</div>
			<div>
				<ul className={s.ul}>
					<Post />
				</ul>
			</div>
		</div>
	);
};

export default Messages;
