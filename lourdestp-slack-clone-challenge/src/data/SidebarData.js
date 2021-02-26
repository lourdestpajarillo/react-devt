import MessageOutlinedIcon from '@material-ui/icons/MessageOutlined';
import InboxOutlinedIcon from '@material-ui/icons/InboxOutlined';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import TurnedInNotOutlinedIcon from '@material-ui/icons/TurnedInNotOutlined';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';

export const sidebarMainItems = [
    {
        icon: <MessageOutlinedIcon />,
        text: "Thread"
    },
    {
        icon: <InboxOutlinedIcon />,
        text: "All DMs"
    },
    {
        icon: <DraftsOutlinedIcon />,
        text: "Mentions & Reactions"
    },
    {
        icon: <TurnedInNotOutlinedIcon />,
        text: "Saved Items"
    },
    {
        icon: <PeopleAltOutlinedIcon />,
        text: "People & Groups"
    },
    {
        icon: <MoreHorizOutlinedIcon />,
        text: "More"
    }
];

export const sidebarChannelItems = [
    {
        text: "Channel 1"
    },
    {
        text: "Channel 2"
    }
];