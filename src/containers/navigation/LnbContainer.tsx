import Lnb, { Menu, MenuIconEnum } from '@/components/navigation/Lnb'

function LnbContainer() {
	const menuList: Menu[] = [
		{
			id: 'm1',
			icon: MenuIconEnum.SelfService,
			name: '셀프서비스',
			url: '/report/self-service'
		}
	]
	return <Lnb menuList={menuList} />
}

export default LnbContainer
