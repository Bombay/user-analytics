import Lnb, { Menu, MenuIconEnum } from '@/components/navigation/Lnb'
import ReportConfigModal from '@/containers/report/ReportConfigModal'

const menuList: Menu[] = [
	{
		id: 'm1',
		icon: MenuIconEnum.SelfService,
		name: '셀프서비스',
		url: '/report/self-service',
	},
	{
		id: 'm2',
		icon: MenuIconEnum.SelfService,
		name: '다른메뉴',
		url: '/report/self-service',
	},
]

function LnbContainer() {
	return (
		<>
			<Lnb menuList={menuList} currentMenuId={menuList[0]?.id} />
			<ReportConfigModal />
		</>
	)
}

export default LnbContainer
