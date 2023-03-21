import styled from '@emotion/styled'
import {
	Button,
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuItemProps,
	MenuList,
	SvgIconProps
} from '@mui/material'
import {
	ContentPasteSearch,
	CookieTwoTone,
	DriveFileRenameOutline,
	Settings
} from '@mui/icons-material'
import Link from 'next/link'

export enum MenuIconEnum {
	SelfService = 'SelfService'
}

export interface Menu {
	id: string
	name: string
	url: string
	icon: MenuIconEnum
}

interface LnbProps {
	menuList: Menu[]
	currentMenuId?: Menu['id']
}

const LnbWrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	padding: 15px;
	border-right: 1px solid rgba(193, 193, 193, 0.2);
	box-shadow: 2px 0 10px 10px rgba(193, 193, 193, 0.1);
`

const CookieIcon = styled(CookieTwoTone)`
	margin-right: 8px;
`

const LnbHeader = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

const LnbTitle = styled.div`
	display: flex;
	align-items: center;
	span {
		font-size: 22px;
		font-weight: 900;
	}
`

const CreateReportButton = styled(Button)`
	background-color: whitesmoke;
	color: #646873;
	border: 1px solid #f3ecec;
	justify-content: left;
	margin-top: 10px;
	margin-bottom: 15px;
	padding-left: 16px;

	&:hover {
		background-color: whitesmoke;
		color: #000000;
	}

	& .MuiSvgIcon-root {
		margin-right: 10px;
	}
`

const SettingIcon = styled(Settings)`
	color: rgba(193, 193, 193, 0.7);

	&:hover {
		color: rgb(49, 47, 47);
	}
`

interface StyledMenuItemProps extends MenuItemProps {
	active: boolean
}

const MenuIconWrapper = styled(ListItemIcon)`
	&.MuiListItemIcon-root {
		min-width: 30px;
	}
`

const StyledMenuItem = styled(MenuItem)<StyledMenuItemProps>`
	margin-bottom: 7px;
	font-size: 14px;
	color: ${props => (props.active ? '#000000' : '#646873')};
	background-color: ${props =>
		props.active ? 'rgba(0, 0, 0, 0.04)' : '#FFFFFF'};

	&:hover {
		color: #000000;
	}

	${MenuIconWrapper} {
		color: ${props => (props.active ? '#000000' : '#646873')};
	}
`

const DriveFileRenameOutlineIcon = styled(DriveFileRenameOutline)`
	margin-right: 7px;
`

interface MenuIconProps extends SvgIconProps {
	icon: MenuIconEnum
}

function MenuIcon({ icon, ...props }: MenuIconProps) {
	switch (icon) {
		case MenuIconEnum.SelfService:
			return <ContentPasteSearch {...props} />
		default:
			return <span></span>
	}
}

function Lnb({ menuList, currentMenuId }: LnbProps) {
	return (
		<LnbWrapper>
			<LnbHeader>
				<LnbTitle>
					<CookieIcon fontSize="large" />
					<span>유저 모니터링</span>
				</LnbTitle>
				<CreateReportButton variant="contained" size="small">
					<DriveFileRenameOutlineIcon fontSize="small" />
					리포트 생성
				</CreateReportButton>
			</LnbHeader>

			<MenuList>
				{menuList.map(menu => (
					<StyledMenuItem
						key={menu.id}
						sx={{ borderRadius: '10px' }}
						active={currentMenuId === menu.id}
					>
						<MenuIconWrapper>
							<MenuIcon icon={menu.icon} fontSize="small" />
						</MenuIconWrapper>
						<ListItemText>
							<Link href={menu.url}>{menu.name}</Link>
						</ListItemText>
						<ListItemIcon>
							<SettingIcon fontSize="small" />
						</ListItemIcon>
					</StyledMenuItem>
				))}
			</MenuList>
		</LnbWrapper>
	)
}

export default Lnb
