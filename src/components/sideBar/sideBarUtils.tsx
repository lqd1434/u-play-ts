import React, { Fragment } from 'react'

const classNames = require('classnames')

export const SideBarMenu = (props: { menuItems: any; collapsed: any; toThisPage: any }) => {
    const Item = (props: any) => {
        const { collapsed, item, toThisPage } = props
        const classNameForI = classNames(
            'icon',
            item.icon,
            { 'sideBar-icon': !collapsed },
            { 'sideBar-icon-collapsed': collapsed },
        )
        const classNameForItem = classNames(
            'sideBar-item-basic',
            'animate__animated animate__fadeInUp',
            { 'sideBar-item': !collapsed },
            { 'sideBar-item-collapsed': collapsed },
        )
        return (
            <div
                className={classNameForItem}
                key={item.id}
                onClick={() => {
                    toThisPage(item)
                }}
            >
                <i className={classNameForI} />
                <span className="sideBar-text">{collapsed ? item.collapsedTitle : item.title}</span>
            </div>
        )
    }

    const { menuItems, collapsed, toThisPage } = props
    return (
        <div>
            {menuItems.map((item: any) => {
                return (
                    <Fragment key={item.id}>
                        <Item toThisPage={toThisPage} collapsed={collapsed} item={item}>
                            {item.title}
                        </Item>
                    </Fragment>
                )
            })}
        </div>
    )
}
