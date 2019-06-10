import React from 'react';
import GroupHeader from '../components/GroupHeader/GroupHeaderContainer'
import GroupMembers from '../components/GroupMembers/GroupOrganizer'

export default function Group() {
	return (
		<div>
			<GroupHeader></GroupHeader>
			<GroupMembers></GroupMembers>
		</div>
	)
}
