import styled from '@emotion/styled'
import {
	Button,
	Divider,
	ListItemIcon,
	ListItemText,
	MenuItem,
	MenuList,
	SvgIconProps
} from '@mui/material'
import { CookieTwoTone, Explore, Settings } from '@mui/icons-material'

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
		font-size: 30px;
		font-weight: 900;
	}
`

const LnbDivider = styled(Divider)`
	margin-top: 15px;
	margin-bottom: 15px;
`

const CreateReportButton = styled(Button)`
	text-align: left;
`

const SettingIcon = styled(Settings)`
	color: rgba(193, 193, 193, 0.7);
	&:hover {
		color: rgba(193, 193, 193, 1);
	}
`

interface MenuIconProps extends SvgIconProps {
	icon: MenuIconEnum
}

function MenuIcon({ icon, ...props }: MenuIconProps) {
	switch (icon) {
		case MenuIconEnum.SelfService:
			return <Explore {...props} />
		default:
			return <span></span>
	}
}

function Lnb({ menuList }: LnbProps) {
	return (
		<LnbWrapper>
			<LnbHeader>
				<LnbTitle>
					<CookieIcon fontSize="large" />
					<span>User Analytics</span>
				</LnbTitle>
				<CreateReportButton variant="contained" size="small">
					리포트 생성
				</CreateReportButton>
			</LnbHeader>
			<LnbDivider />

			<MenuList>
				{menuList.map(menu => (
					<MenuItem key={menu.id} sx={{ borderRadius: '10px' }}>
						<ListItemIcon>
							<MenuIcon icon={menu.icon} fontSize="small" />
						</ListItemIcon>
						<ListItemText>{menu.name}</ListItemText>
						<ListItemIcon>
							<SettingIcon fontSize="small" />
						</ListItemIcon>
					</MenuItem>
				))}
			</MenuList>
		</LnbWrapper>
	)
}

export default Lnb
