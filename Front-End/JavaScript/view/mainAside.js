let mainAside = document.getElementById('mainAside');
const asideObj = {
    menuState: true,
    navHead: {
        appLogo: 'iM0-logo',
        appName: 'Reminders'
    },
    navItems: [
        { icon: 'iM0-paryer', title: 'Prayer', route: '#prayer', active: true },
        { icon: 'iM0-dashboard', title: 'Dashboard', route: '#dashboard', active: false },
        { icon: 'iM0-tasks', title: 'Tasks', route: '#tasks', active: false },
        { icon: '', title: 'Reminders', route: '#reminders', active: false },
        { icon: '', title: 'My Pocket', route: '#pocket', active: false },
        { icon: '', title: 'Categories', route: '#categories', active: false },
        { icon: '', title: 'Archive', route: '#archive', active: false }
    ]
}

function toggleActive(activeTitle) {
    // console.log(activeTitle)
    for (let item of asideObj.navItems) {
        if (item.title != activeTitle)
            item.active = false;
        else item.active = true;
    }
    // console.log(asideObj.navItems)
    componentRender();
}

function addHTMLData() {
    let dom = ''
    dom += `
    <section class='fM0-size-a fM0-weight-a overflow-hidden'>
    <ul class='p-0'>
    `
    for (let item of asideObj.navItems) {
        // console.log(item);
        dom += `
        <li onclick="toggleActive('${item.title}')" class='uM0-click M0-aside-items cM0-white d-flex align-items-center'>
        <i class='${item.icon} iM0-size-a d-inline-block uM0-image-contain mx-4'></i>

            ${item.title}
        </li>
        `

    }
    dom += `
    </ul>
</section>
`
    return dom;
}

function componentRender() {
    mainAside.innerHTML = addHTMLData()
}

componentRender();