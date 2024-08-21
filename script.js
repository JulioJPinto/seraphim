const data = [
    {
        organization: "CeSIUM",
        positions: [
            "Marketing Director",
            "Marketing Co-Director",
            "Collaborator"
        ],
        link: "https://cesium.di.uminho.pt"
    },
    {
        organization: "CoderDojo Braga",
        positions: [
            "Co-Champion & Mentor",
            "Mentor"
        ],
        link: "https://coderdojobraga.org"
    },
    {
        organization: "Martins & Filhos, SA",
        positions: [
            "Software Engineering Intern"
        ]
    },
    {
        organization: "Rolling Space",
        positions: [
            "Software Engineering Intern"
        ]
    }
];

function createTimeline(id) {
    const timeline = document.getElementById(id);

    data.forEach(item => {

        const organizationDiv = document.createElement('organization-div');
        organizationDiv.className = 'flex flex-col gap-2';

        item.positions.forEach((position, index) => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
    
            const bullet = document.createElement('div');
            bullet.className = index === 0 ? 'bullet-first' : 'bullet';

            bullet.style.marginLeft = index === 0 ? '0' : '2px';

            const content = document.createElement('div');
            content.className = index === 0 ? 'content -m-[2px]' : 'content';
    
            if (index === 0) {
                const title = document.createElement('a');
                title.className = 'title kulim-park-semibold text-md md:text-lg lg:text-xl text-text';
                title.textContent = item.organization;
                title.href = item.link;
                content.appendChild(title);
            }
    
            const positionElem = document.createElement('div');
            positionElem.className = 'position kulim-park-regular text-xs md:text-sm lg:text-md text-text';
            positionElem.textContent = position;
    
            content.appendChild(positionElem);
    
            timelineItem.appendChild(bullet);
            timelineItem.appendChild(content);
    
            organizationDiv.appendChild(timelineItem);
        });

        timeline.className='flex flex-col gap-4';
        timeline.appendChild(organizationDiv);
    });    
}

function createTimelineOnload() {
    createTimeline('timeline');
    createTimeline('timeline-mobile');
}


function controleToggleMenu() {

    const menuIcon = document.getElementById('menu-icon');
    const menuStatus = menuIcon.textContent === 'close';

    if (menuStatus) {
        closeMenu();
    } else {
        toggleMenu();
    }
}

function toggleMenu() {

    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileBody = document.getElementById('mobile-content');

    mobileBody.className = 'hidden';
    menu.className = 'block text-center py-4';
    menuIcon.textContent = 'close';

}

function closeMenu() {

    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menu-icon');
    const mobileBody = document.getElementById('mobile-content');

    mobileBody.className = 'block flex flex-col gap-6 h-full';
    menu.className = 'hidden';
    menuIcon.textContent = 'menu';

}

function toggleExperience() {

    const experience = document.getElementById('experience');

    experience.className = 'block bg-primary rounded-2xl p-4 lg:px-8 flex-grow min-h-0 overflow-auto';

    const about = document.getElementById('aboutme');

    about.className = 'hidden';

    closeMenu();

}

function toggleAboutMe() {
    
    const about = document.getElementById('aboutme');
    about.className = 'block bg-primary rounded-2xl p-4 lg:px-8 flex-grow min-h-0 overflow-auto';


    const experience = document.getElementById('experience');

    experience.className = 'hidden';

    closeMenu();


}


document.addEventListener('menu-icon').addEventListener('click', controleToggleMenu);
document.addEventListener('exp-btn').addEventListener('click', toggleExperience);
document.addEventListener('abtme-btn').addEventListener('click', toggleAboutMe);